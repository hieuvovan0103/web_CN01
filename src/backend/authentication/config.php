<?php
    $host = "localhost";
    $dbname ='t_shop';
    $username = "t_shop_admin";
    $password ="password";

    global $pdo;
    try {
        $pdo = new PDO("mysql:host=$host;dbname=$dbname", $username, $password);
        $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
//        echo "Kết nối thành công!";
    } catch (PDOException $e){
        echo"Connection failed:". $e->getMessage();
    }
?>