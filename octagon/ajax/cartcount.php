<?php
require_once 'config.php';

header('Content-Type: application/json');

try {
    $conn = getDBConnection();
    
    // Get session and user context
    $sessionId = isset($_SESSION['cart_session_id']) ? $_SESSION['cart_session_id'] : session_id();
    $userId = isset($_SESSION['user_id']) ? intval($_SESSION['user_id']) : null;
    
    // Get total cart count for this user/session
    if ($userId) {
        $stmt = $conn->prepare("SELECT SUM(quantity) as total_items FROM cart WHERE (user_id = ? OR session_id = ?)");
        $stmt->bind_param("is", $userId, $sessionId);
    } else {
        $stmt = $conn->prepare("SELECT SUM(quantity) as total_items FROM cart WHERE session_id = ?");
        $stmt->bind_param("s", $sessionId);
    }
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
