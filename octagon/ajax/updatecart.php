<?php
require_once 'config.php';

header('Content-Type: application/json');

// Get POST data
$input = json_decode(file_get_contents('php://input'), true);

if (!$input || !isset($input['cart_id']) || !isset($input['quantity'])) {
    echo json_encode([
        'success' => false,
        'message' => 'Invalid request data'
    ]);
    exit;
}

$cartId = intval($input['cart_id']);
$quantity = intval($input['quantity']);

if ($quantity <= 0) {
    echo json_encode([
        'success' => false,
        'message' => 'Invalid quantity'
    ]);
    exit;
}

try {
    $conn = getDBConnection();
    
    // Get session ID
    $sessionId = $_SESSION['cart_session_id'];
    
    // Update quantity (ensure it belongs to this session)
    $stmt = $conn->prepare("UPDATE cart SET quantity = ?, updated_at = CURRENT_TIMESTAMP WHERE cart_id = ? AND session_id = ?");
    $stmt->bind_param("iis", $quantity, $cartId, $sessionId);
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
            'message' => 'Cart updated',
            'cart_count' => $totalItems
        ]);
    } else {
        $conn->close();
        echo json_encode([
            'success' => false,
            'message' => 'Failed to update cart'
        ]);
    }
    
} catch (Exception $e) {
    echo json_encode([
        'success' => false,
        'message' => 'Error: ' . $e->getMessage()
    ]);
}
?>
