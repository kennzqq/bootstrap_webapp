<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);

session_start();

header('Content-Type: application/json');

echo json_encode([
    'session_id' => session_id(),
    'cart_session_id' => $_SESSION['cart_session_id'] ?? 'NOT SET',
    'user_id' => $_SESSION['user_id'] ?? 'NOT SET',
    'logged_in' => $_SESSION['logged_in'] ?? false,
    'user_name' => $_SESSION['user_name'] ?? 'NOT SET',
    'user_email' => $_SESSION['user_email'] ?? 'NOT SET',
    'all_session_data' => $_SESSION
], JSON_PRETTY_PRINT);
?>
