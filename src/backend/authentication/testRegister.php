<?php
global $pdo;
require 'config.php';

$username = 'admin03';
$email = 'test4@example.com';
$password = password_hash('123456', PASSWORD_DEFAULT); // băm mật khẩu
$name = 'Admin 03';
$role = 'admin';

$stmt = $pdo->prepare("INSERT INTO users (username, email, password, full_name, role) VALUES (:username, :email, :password, :name, :role)");
$stmt->execute(['username' => $username,'email' => $email, 'password' => $password, 'name' => $name, 'role' => $role]);

echo "Thêm người dùng thành công";
?>
