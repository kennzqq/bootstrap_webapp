<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);

header('Content-Type: application/json');

$host = 'localhost';
$user = 'root';
$pass = '';
$dbname = 'octagon_db';

$response = [
    'database_ok' => false,
    'tables' => [],
    'products_count' => 0,
    'sample_products' => []
];

try {
    $conn = new mysqli($host, $user, $pass, $dbname);
    
    if ($conn->connect_error) {
        $response['error'] = 'Connection failed: ' . $conn->connect_error;
    } else {
        $response['database_ok'] = true;
        
        // Get tables
        $result = $conn->query("SHOW TABLES");
        while ($row = $result->fetch_array()) {
            $response['tables'][] = $row[0];
        }
        
        // Count products
        $result = $conn->query("SELECT COUNT(*) as count FROM products");
        $row = $result->fetch_assoc();
        $response['products_count'] = $row['count'];
        
        // Get sample products
        $result = $conn->query("SELECT product_id, name, price, category FROM products LIMIT 5");
        while ($row = $result->fetch_assoc()) {
            $response['sample_products'][] = $row;
        }
        
        $conn->close();
    }
    
} catch (Exception $e) {
    $response['error'] = $e->getMessage();
}

echo json_encode($response, JSON_PRETTY_PRINT);
?>
