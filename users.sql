-- Tạo database (nếu chưa có)
CREATE DATABASE IF NOT EXISTS user_database;

-- Sử dụng database vừa tạo
USE user_database;

-- Tạo bảng lưu tên người dùng
CREATE TABLE IF NOT EXISTS users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL
);

-- Chèn một số dữ liệu mẫu
INSERT INTO users (name) VALUES ('Lý Thanh Gia Hưng');
