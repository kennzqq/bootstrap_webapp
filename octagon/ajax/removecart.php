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
    
    // Get session and user context
    $sessionId = isset($_SESSION['cart_session_id']) ? $_SESSION['cart_session_id'] : session_id();
    $userId = isset($_SESSION['user_id']) ? intval($_SESSION['user_id']) : null;
    
    // Delete item from cart (ensure it belongs to this session/user)
    if ($userId) {
        $stmt = $conn->prepare("DELETE FROM cart WHERE cart_id = ? AND (session_id = ? OR user_id = ?)");
        $stmt->bind_param("isi", $cartId, $sessionId, $userId);
    } else {
        $stmt = $conn->prepare("DELETE FROM cart WHERE cart_id = ? AND session_id = ?");
        $stmt->bind_param("is", $cartId, $sessionId);
    }
    $stmt->execute();
    $affectedRows = $stmt->affected_rows;
    $stmt->close();
    
    if ($affectedRows > 0) {
        // Get updated cart count
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
