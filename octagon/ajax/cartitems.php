<?php
require_once 'config.php';

header('Content-Type: application/json');

try {
    $conn = getDBConnection();
    
    // Get session ID
    $sessionId = $_SESSION['cart_session_id'];
    
    // Get all cart items
    $stmt = $conn->prepare("SELECT cart_id, product_id, product_name, product_price, product_category, quantity FROM cart WHERE session_id = ? ORDER BY added_at DESC");
    $stmt->bind_param("s", $sessionId);
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
