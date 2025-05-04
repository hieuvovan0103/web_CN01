<?php
session_start();

header('Content-Type: application/json');
header("Access-Control-Allow-Origin: http://localhost:5173"); // Đổi thành domain của React app
header("Access-Control-Allow-Credentials: true");

if (isset($_SESSION['user'])) {
    echo json_encode($_SESSION['user']);
} else {
    http_response_code(401);
    echo json_encode(["message" => "Chưa đăng nhập"]);
}
