<?php
header('Access-Control-Allow-Origin: *'); // Allow CORS for your React app
header("Access-Control-Allow-Headers: Content-Type");

require 'config.php'; // Include your database connection

try {
    $id = isset($_GET['id']) ? (int)$_GET['id'] : 0;

    // Fetch the blog post
    $stmt = $pdo->prepare("SELECT post_id, title, featured_image, published_at, content FROM blog_posts WHERE post_id = ? AND is_published = TRUE");
    $stmt->execute([$id]);
    $blog = $stmt->fetch(PDO::FETCH_ASSOC);

    if (!$blog) {
        echo json_encode(['error' => 'Blog not found']);
        exit;
    }

    // Fetch related posts randomly
    $relatedStmt = $pdo->prepare("SELECT post_id, title, featured_image FROM blog_posts WHERE post_id != ? AND is_published = TRUE ORDER BY RAND() LIMIT 2");
    $relatedStmt->execute([$id]);
    $relatedPosts = $relatedStmt->fetchAll(PDO::FETCH_ASSOC);

    // Format the response
    $response = [
        'id' => $blog['post_id'],
        'title' => $blog['title'],
        'featured_image' => $blog['featured_image'],
        'date' => date('d/m/Y', strtotime($blog['published_at'])),
        'content' => $blog['content'],
        'related_posts' => array_map(function ($post) {
            return [
                'id' => $post['post_id'],
                'title' => $post['title'],
                'image' => $post['featured_image']
            ];
        }, $relatedPosts)
    ];

    echo json_encode($response);
} catch (PDOException $e) {
    echo json_encode(['error' => 'Failed to fetch blog: ' . $e->getMessage()]);
}
?>