<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);

header('Content-Type: application/json');

$host = 'localhost';
$user = 'root';
$pass = '';
$dbname = 'octagon_db';

$response = [
    'database_exists' => false,
    'connection_ok' => false,
    'tables' => [],
    'products_count' => 0,
    'users_count' => 0
];

try {
    // Test connection
    $conn = new mysqli($host, $user, $pass);
    $response['connection_ok'] = true;
    
    // Check if database exists
    $result = $conn->query("SHOW DATABASES LIKE '$dbname'");
    if ($result->num_rows > 0) {
        $response['database_exists'] = true;
        
        // Connect to database
        $conn->select_db($dbname);
        
        // Get tables
        $result = $conn->query("SHOW TABLES");
        while ($row = $result->fetch_array()) {
            $response['tables'][] = $row[0];
        }
        
        // Count products
        $result = $conn->query("SELECT COUNT(*) as count FROM products");
        $row = $result->fetch_assoc();
        $response['products_count'] = $row['count'];
        
        // Count users
        $result = $conn->query("SELECT COUNT(*) as count FROM users");
        $row = $result->fetch_assoc();
        $response['users_count'] = $row['count'];
    }
    
    $conn->close();
    
} catch (Exception $e) {
    $response['error'] = $e->getMessage();
}

echo json_encode($response, JSON_PRETTY_PRINT);
?>
