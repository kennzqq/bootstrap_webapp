<?php
require_once 'config.php';

// Read products from JSON file
$jsonFile = '../products.json';
if (!file_exists($jsonFile)) {
    die(json_encode(['success' => false, 'message' => 'products.json not found']));
}

$json = file_get_contents($jsonFile);
$products = json_decode($json, true);

if (!$products) {
    die(json_encode(['success' => false, 'message' => 'Failed to parse JSON']));
}

try {
    $conn = getDBConnection();
    
    $inserted = 0;
    $skipped = 0;
    
    foreach ($products as $product) {
        // Check if product already exists
        $stmt = $conn->prepare("SELECT product_id FROM products WHERE name = ?");
        $stmt->bind_param("s", $product['name']);
        $stmt->execute();
        $result = $stmt->get_result();
        
        if ($result->num_rows > 0) {
            $skipped++;
            $stmt->close();
            continue;
        }
        $stmt->close();
        
        // Insert product
        $stmt = $conn->prepare("INSERT INTO products (name, price, category, stock_quantity) VALUES (?, ?, ?, ?)");
        $stockQty = 100; // Default stock
        $stmt->bind_param("sdsi", $product['name'], $product['price'], $product['category'], $stockQty);
        
        if ($stmt->execute()) {
            $inserted++;
        }
        $stmt->close();
    }
    
    $conn->close();
    
    echo json_encode([
        'success' => true,
        'message' => "Inserted $inserted products, skipped $skipped duplicates",
        'inserted' => $inserted,
        'skipped' => $skipped
    ]);
    
} catch (Exception $e) {
    echo json_encode([
        'success' => false,
        'message' => 'Error: ' . $e->getMessage()
    ]);
}
?>
