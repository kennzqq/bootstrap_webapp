<?php
require_once 'config.php';

header('Content-Type: application/json');

try {
    $conn = getDBConnection();
    
    // Get session ID
    $sessionId = $_SESSION['cart_session_id'];
    
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
        'cart_count' => $totalItems
    ]);
    
} catch (Exception $e) {
    echo json_encode([
        'success' => false,
        'message' => 'Error: ' . $e->getMessage(),
        'cart_count' => 0
    ]);
}
?>
