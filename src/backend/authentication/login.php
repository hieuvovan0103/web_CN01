<?php
require 'config.php';

header("Access-Control-Allow-Origin: http://localhost:5173");
header("Access-Control-Allow-Credentials: true");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");


// Trả về OK nếu là preflight (OPTIONS)
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

$data = json_decode(file_get_contents("php://input"), true);
if (!is_array($data)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Dữ liệu không hợp lệ']);
    exit;
}


$username = $data['username'] ?? '';
$password = $data['password'] ?? '';

if (!$username || !$password) {
    echo json_encode(['success' => false, 'message' => 'Thiếu tên đăng nhập hoặc mật khẩu']);
    exit;
}
global $pdo;
$stmt = $pdo->prepare("SELECT * FROM users WHERE username = :username LIMIT 1");
$stmt->execute(['username' => $username]);
$user = $stmt->fetch(PDO::FETCH_ASSOC);

//if ($user && password_verify($password, $user['password'])) {
//    echo json_encode([
//        'success' => true,
//        'message' => "Đăng nhập thành công",
//        'role' => $user['role'],
//    ]);
//} else {
//    echo json_encode(['success' => false, 'message' => 'Tên đăng nhập hoặc mật khẩu không đúng']);
//}

if ($user && password_verify($password, $user['password'])) {
    // Khởi tạo session
    if (session_status() === PHP_SESSION_NONE) {
        session_start();
    }
    session_regenerate_id(true); // Ngăn session fixation
    $_SESSION['user'] = [
        'username' => $user['username'],
        'role' => $user['role'] ?? 'user', // Mặc định là 'user' nếu role NULL
    ];

    // Xác định URL điều hướng dựa trên vai trò
    $redirectUrl = $user['role'] === 'admin' ? '/admin' : '/';

    http_response_code(200);
    echo json_encode([
        'success' => true,
        'username' => $user['username'],
        'name' => $user['full_name'] ?? '',
        'message' => 'Đăng nhập thành công',
        'role' => $user['role'] ?? 'user',
        'redirect' => $redirectUrl
    ]);
} else {
    http_response_code(401);
    echo json_encode(['success' => false, 'message' => 'Tên đăng nhập hoặc mật khẩu không đúng']);
}

session_write_close(); // Đóng session để tránh khóa


