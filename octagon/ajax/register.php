<?php
require_once 'config.php';

header('Content-Type: application/json');

// Get POST data
$input = json_decode(file_get_contents('php://input'), true);

if (!$input) {
    echo json_encode([
        'success' => false,
        'message' => 'Invalid request data'
    ]);
    exit;
}

$firstName = isset($input['firstName']) ? trim($input['firstName']) : '';
$lastName = isset($input['lastName']) ? trim($input['lastName']) : '';
$email = isset($input['email']) ? trim($input['email']) : '';
$contactNumber = isset($input['contactNumber']) ? trim($input['contactNumber']) : '';
$address = isset($input['address']) ? trim($input['address']) : '';
$password = isset($input['password']) ? $input['password'] : '';

// Validate input
if (empty($firstName) || empty($lastName) || empty($email) || empty($contactNumber) || empty($address) || empty($password)) {
    echo json_encode([
        'success' => false,
        'message' => 'All fields are required'
    ]);
    exit;
}

// Validate email format
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    echo json_encode([
        'success' => false,
        'message' => 'Invalid email format'
    ]);
    exit;
}

// Format contact number with +63 prefix
$fullContactNumber = '+63' . $contactNumber;

try {
    $conn = getDBConnection();
    
    // Check if email already exists
    $stmt = $conn->prepare("SELECT user_id FROM users WHERE email = ?");
    $stmt->bind_param("s", $email);
    $stmt->execute();
    $result = $stmt->get_result();
    
    if ($result->num_rows > 0) {
        $stmt->close();
        $conn->close();
        echo json_encode([
            'success' => false,
            'message' => 'Email already registered'
        ]);
        exit;
    }
    $stmt->close();
    
    // Hash password
    $hashedPassword = password_hash($password, PASSWORD_DEFAULT);
    
    // Insert new user
    $stmt = $conn->prepare("INSERT INTO users (first_name, last_name, email, contact_number, address, password) VALUES (?, ?, ?, ?, ?, ?)");
    $stmt->bind_param("ssssss", $firstName, $lastName, $email, $fullContactNumber, $address, $hashedPassword);
    
    if ($stmt->execute()) {
        $userId = $stmt->insert_id;
        $stmt->close();
        $conn->close();
        
        echo json_encode([
            'success' => true,
            'message' => 'Account created successfully',
            'user_id' => $userId
        ]);
    } else {
        $stmt->close();
        $conn->close();
        echo json_encode([
            'success' => false,
            'message' => 'Failed to create account'
        ]);
    }
    
} catch (Exception $e) {
    echo json_encode([
        'success' => false,
        'message' => 'Error: ' . $e->getMessage()
    ]);
}
?>
