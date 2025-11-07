<?php
require_once 'config.php';

header('Content-Type: application/json');

try {
    $conn = getDBConnection();
    
    // Get session and user context
    $sessionId = isset($_SESSION['cart_session_id']) ? $_SESSION['cart_session_id'] : session_id();
    $userId = isset($_SESSION['user_id']) ? intval($_SESSION['user_id']) : null;
    
    // Get all cart items for this user/session
    if ($userId) {
        $stmt = $conn->prepare("SELECT cart_id, product_id, product_name, product_price, product_category, quantity FROM cart WHERE (user_id = ? OR session_id = ?) ORDER BY added_at DESC");
        $stmt->bind_param("is", $userId, $sessionId);
    } else {
        $stmt = $conn->prepare("SELECT cart_id, product_id, product_name, product_price, product_category, quantity FROM cart WHERE session_id = ? ORDER BY added_at DESC");
        $stmt->bind_param("s", $sessionId);
    }
    $stmt->execute();
    $result = $stmt->get_result();
    
    $cartItems = [];
    while ($row = $result->fetch_assoc()) {
        $cartItems[] = [
            'cart_id' => intval($row['cart_id']),
            'product_id' => intval($row['product_id']),
            'name' => $row['product_name'],
            'price' => floatval($row['product_price']),
            'category' => $row['product_category'],
            'quantity' => intval($row['quantity'])
        ];
    }
    
    $stmt->close();
    $conn->close();
    
    echo json_encode([
        'success' => true,
        'items' => $cartItems
    ]);
    
} catch (Exception $e) {
    echo json_encode([
        'success' => false,
        'message' => 'Error: ' . $e->getMessage(),
        'items' => []
    ]);
}
?>
