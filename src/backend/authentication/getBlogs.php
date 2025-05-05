<?php
header('Access-Control-Allow-Origin: *'); // Allow CORS for your React app
header("Access-Control-Allow-Headers: Content-Type");

require 'config.php'; // Include your database connection

try {
    $stmt = $pdo->prepare("SELECT post_id, title, featured_image, published_at, content FROM blog_posts WHERE is_published = TRUE ORDER BY published_at DESC");
    $stmt->execute();
    $blogs = $stmt->fetchAll(PDO::FETCH_ASSOC);

    // Format the response
    $response = [];
    foreach ($blogs as $blog) {
        $response[] = [
            'id' => $blog['post_id'],
            'title' => $blog['title'],
            'image' => $blog['featured_image'],
            'date' => date('d/m/Y', strtotime($blog['published_at'])), // Format date as DD/MM/YYYY
            'excerpt' => substr(strip_tags($blog['content']), 0, 100) . '...' // Short excerpt of content
        ];
    }

    echo json_encode($response);
} catch (PDOException $e) {
    echo json_encode(['error' => 'Failed to fetch blogs: ' . $e->getMessage()]);
}
?>