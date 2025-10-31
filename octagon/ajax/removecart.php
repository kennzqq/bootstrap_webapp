<?php
require_once 'config.php';

header('Content-Type: application/json');

// Get POST data
$input = json_decode(file_get_contents('php://input'), true);

if (!$input || !isset($input['cart_id'])) {
    echo json_encode([
        'success' => false,
        'message' => 'Invalid request data'
    ]);
    exit;
}

$cartId = intval($input['cart_id']);

try {
    $conn = getDBConnection();
    
    // Get session ID
    $sessionId = $_SESSION['cart_session_id'];
    
    // Delete item from cart (ensure it belongs to this session)
    $stmt = $conn->prepare("DELETE FROM cart WHERE cart_id = ? AND session_id = ?");
    $stmt->bind_param("is", $cartId, $sessionId);
    $stmt->execute();
    $affectedRows = $stmt->affected_rows;
    $stmt->close();
    
    if ($affectedRows > 0) {
        // Get updated cart count
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
            'message' => 'Item removed from cart',
            'cart_count' => $totalItems
        ]);
    } else {
        $conn->close();
        echo json_encode([
            'success' => false,
            'message' => 'Item not found in cart'
        ]);
    }
    
} catch (Exception $e) {
    echo json_encode([
        'success' => false,
        'message' => 'Error: ' . $e->getMessage()
    ]);
}
?>
