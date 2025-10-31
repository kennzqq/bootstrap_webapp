<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);
ini_set('log_errors', 1);
ini_set('error_log', __DIR__ . '/error.log');

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

// Check if user is logged in
if (!isset($_SESSION['logged_in']) || $_SESSION['logged_in'] !== true) {
    echo json_encode([
        'success' => false,
        'message' => 'Please login to add items to cart',
        'require_login' => true
    ]);
    exit;
}

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
    
    if (!$conn) {
        echo json_encode([
            'success' => false,
            'message' => 'Failed to connect to database'
        ]);
        exit;
    }
    
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
        $conn->close();
        echo json_encode([
            'success' => false,
            'message' => 'Product not found in database. Please make sure the database has products.'
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
        
        // Debug: log the values
        error_log("Adding to cart - user_id: $userId, session_id: $sessionId, product_id: $productId, name: $productName, price: $productPrice, category: $productCategory, quantity: $quantity");
        
        $stmt->bind_param("isissdi", $userId, $sessionId, $productId, $productName, $productPrice, $productCategory, $quantity);
        
        if (!$stmt->execute()) {
            throw new Exception("Failed to insert cart item: " . $stmt->error);
        }
        
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
    if (isset($conn)) {
        $conn->close();
    }
    echo json_encode([
        'success' => false,
        'message' => 'Error: ' . $e->getMessage()
    ]);
} catch (mysqli_sql_exception $e) {
    if (isset($conn)) {
        $conn->close();
    }
    echo json_encode([
        'success' => false,
        'message' => 'Database error: ' . $e->getMessage()
    ]);
}
?>
