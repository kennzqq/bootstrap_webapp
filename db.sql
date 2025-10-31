-- Create Database
CREATE DATABASE IF NOT EXISTS octagon_db;
USE octagon_db;

-- Users Table (based on createaccount.js form fields)
CREATE TABLE IF NOT EXISTS users (
    user_id INT AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(100) NOT NULL,
    last_name VARCHAR(100) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    contact_number VARCHAR(13) NOT NULL, -- +63 prefix + 10 digits
    address TEXT NOT NULL,
    password VARCHAR(255) NOT NULL, -- Will store hashed passwords
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    INDEX idx_email (email)
);

-- Products Table (based on products.json structure)
CREATE TABLE IF NOT EXISTS products (
    product_id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    price DECIMAL(10, 2) NOT NULL,
    category VARCHAR(100) NOT NULL,
    description TEXT,
    image_url VARCHAR(500),
    stock_quantity INT DEFAULT 0,
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    INDEX idx_category (category),
    INDEX idx_name (name)
);

-- Cart Table (for persistent cart storage)
CREATE TABLE IF NOT EXISTS cart (
    cart_id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT DEFAULT NULL,
    session_id VARCHAR(255) NOT NULL,
    product_id INT NOT NULL,
    product_name VARCHAR(255) NOT NULL,
    product_price DECIMAL(10, 2) NOT NULL,
    product_category VARCHAR(100) NOT NULL,
    quantity INT NOT NULL DEFAULT 1,
    added_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    INDEX idx_session (session_id),
    INDEX idx_user (user_id),
    INDEX idx_product (product_id)
);

-- Orders Table
CREATE TABLE IF NOT EXISTS orders (
    order_id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT DEFAULT NULL,
    session_id VARCHAR(255),
    total_amount DECIMAL(10, 2) NOT NULL,
    order_status ENUM('pending', 'processing', 'completed', 'cancelled') DEFAULT 'pending',
    shipping_address TEXT NOT NULL,
    contact_number VARCHAR(13) NOT NULL,
    order_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    INDEX idx_user (user_id),
    INDEX idx_status (order_status)
);

-- Order Items Table
CREATE TABLE IF NOT EXISTS order_items (
    order_item_id INT AUTO_INCREMENT PRIMARY KEY,
    order_id INT NOT NULL,
    product_id INT DEFAULT NULL,
    product_name VARCHAR(255) NOT NULL,
    product_price DECIMAL(10, 2) NOT NULL,
    quantity INT NOT NULL,
    subtotal DECIMAL(10, 2) NOT NULL,
    INDEX idx_order (order_id),
    INDEX idx_product (product_id)
);

-- Insert sample products from products.json
INSERT INTO products (name, price, category, stock_quantity) VALUES
('iPhone 15', 999.00, 'Phones', 50),
('Samsung Galaxy S23', 899.00, 'Phones', 45),
('Google Pixel 8', 799.00, 'Phones', 40),
('OnePlus 11', 699.00, 'Phones', 35),
('Xiaomi 13 Pro', 749.00, 'Phones', 30),

('MacBook Pro 14', 1999.00, 'Laptops', 25),
('Dell XPS 13', 1299.00, 'Laptops', 30),
('Lenovo ThinkPad X1', 1499.00, 'Laptops', 20),
('HP Spectre x360', 1399.00, 'Laptops', 22),
('ASUS ROG Zephyrus G14', 1599.00, 'Laptops', 18),

('iPad Pro 11', 899.00, 'Tablets', 35),
('Samsung Galaxy Tab S9', 799.00, 'Tablets', 30),
('Microsoft Surface Pro 9', 999.00, 'Tablets', 25),
('Lenovo Tab P12 Pro', 649.00, 'Tablets', 28),
('Amazon Fire HD 10', 149.00, 'Tablets', 60),

('LG UltraFine 5K', 1299.00, 'Monitors', 20),
('Dell UltraSharp U2723QE', 679.00, 'Monitors', 25),
('ASUS ProArt Display PA278CV', 449.00, 'Monitors', 30),
('Samsung Smart Monitor M8', 699.00, 'Monitors', 22),
('Acer Predator XB273K', 999.00, 'Monitors', 18),

('Canon EOS R6', 2499.00, 'Cameras', 15),
('Nikon Z6 II', 1999.00, 'Cameras', 18),
('Sony Alpha A7 IV', 2499.00, 'Cameras', 12),
('Fujifilm X-T5', 1699.00, 'Cameras', 20),
('Panasonic Lumix GH6', 2199.00, 'Cameras', 14),

('Sony WH-1000XM5', 399.00, 'Headphones', 50),
('Bose QuietComfort 45', 329.00, 'Headphones', 45),
('Apple AirPods Max', 549.00, 'Headphones', 40),
('Sennheiser Momentum 4', 379.00, 'Headphones', 35),
('JBL Tour One M2', 299.00, 'Headphones', 42),

('Apple Watch Series 9', 399.00, 'Watches', 45),
('Samsung Galaxy Watch 6', 349.00, 'Watches', 40),
('Garmin Fenix 7', 699.00, 'Watches', 25),
('Fitbit Sense 2', 299.00, 'Watches', 50),
('Huawei Watch GT 4', 249.00, 'Watches', 48),

('Sonos One (Gen 2)', 219.00, 'Speakers', 35),
('JBL Charge 5', 179.00, 'Speakers', 40),
('Bose SoundLink Revolve II', 199.00, 'Speakers', 38),
('Amazon Echo (5th Gen)', 99.00, 'Speakers', 60),
('UE BOOM 3', 149.00, 'Speakers', 45);
