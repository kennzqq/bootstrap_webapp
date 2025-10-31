<?php
error_reporting(E_ALL);
ini_set('display_errors', 0); // Don't display errors in output, only log them

require_once 'config.php';

header('Content-Type: application/json');

// Get POST data
$input = json_decode(file_get_contents('php://input'), true);

if (!$input) {
    echo json_encode([
        'success' => false,
        'message' => 'Invalid request data'
    ]);
    exit;
}

$productName = isset($input['name']) ? trim($input['name']) : '';
$productPrice = isset($input['price']) ? floatval($input['price']) : 0;
$productCategory = isset($input['category']) ? trim($input['category']) : '';
$quantity = isset($input['quantity']) ? intval($input['quantity']) : 1;

// Validate input
if (empty($productName) || $productPrice <= 0 || $quantity <= 0) {
    echo json_encode([
        'success' => false,
        'message' => 'Invalid product data'
    ]);
    exit;
}

try {
    $conn = getDBConnection();
    
    // Get session ID
    $sessionId = $_SESSION['cart_session_id'];
    $userId = isset($_SESSION['user_id']) ? intval($_SESSION['user_id']) : null;
    
    // Get product_id from products table
    $stmt = $conn->prepare("SELECT product_id FROM products WHERE name = ? LIMIT 1");
    $stmt->bind_param("s", $productName);
    $stmt->execute();
    $result = $stmt->get_result();
    $product = $result->fetch_assoc();
    $stmt->close();
    
    if (!$product) {
        echo json_encode([
            'success' => false,
            'message' => 'Product not found in database'
        ]);
        exit;
    }
    
    $productId = $product['product_id'];
    
    // Check if product already exists in cart for this session
    $stmt = $conn->prepare("SELECT cart_id, quantity FROM cart WHERE session_id = ? AND product_id = ?");
    $stmt->bind_param("si", $sessionId, $productId);
    $stmt->execute();
    $result = $stmt->get_result();
    $existingItem = $result->fetch_assoc();
    $stmt->close();
    
    if ($existingItem) {
        // Update quantity
        $newQuantity = $existingItem['quantity'] + $quantity;
        $stmt = $conn->prepare("UPDATE cart SET quantity = ?, updated_at = CURRENT_TIMESTAMP WHERE cart_id = ?");
        $stmt->bind_param("ii", $newQuantity, $existingItem['cart_id']);
        $stmt->execute();
        $stmt->close();
        
        $message = 'Cart updated successfully';
    } else {
        // Insert new item
        $stmt = $conn->prepare("INSERT INTO cart (user_id, session_id, product_id, product_name, product_price, product_category, quantity) VALUES (?, ?, ?, ?, ?, ?, ?)");
        $stmt->bind_param("isisdi", $userId, $sessionId, $productId, $productName, $productPrice, $productCategory, $quantity);
        $stmt->execute();
        $stmt->close();
        
        $message = 'Product added to cart successfully';
    }
    
    // Get total cart count
    $stmt = $conn->prepare("SELECT SUM(quantity) as total_items FROM cart WHERE session_id = ?");
    $stmt->bind_param("s", $sessionId);
    $stmt->execute();
    $result = $stmt->get_result();
    $cartData = $result->fetch_assoc();
    $stmt->close();
    
    $totalItems = $cartData['total_items'] ? intval($cartData['total_items']) : 0;
    
    $conn->close();
    
    echo json_encode([
        'success' => true,
        'message' => $message,
        'cart_count' => $totalItems
    ]);
    
} catch (Exception $e) {
    echo json_encode([
        'success' => false,
        'message' => 'Error: ' . $e->getMessage()
    ]);
}
?>
