<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Новости</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="container">
        <h1>Новости</h1>
        <div class="news-list">
            <?php
            $mysqli = new mysqli("localhost", "root", "", "mydb", 3307);

            if ($mysqli->connect_errno) {
                echo "Не удалось подключиться к MySQL: (" . $mysqli->connect_errno . ") " . $mysqli->connect_error;
            }

            $query = $mysqli->query("SELECT * FROM News");

            while ($news = $query->fetch_assoc()) {
                echo "<div class='news-item'>";
                echo "<h2>{$news['title']}</h2>";
                echo "<p>{$news['content']}</p>";
                echo "<form action='delete_news.php' method='post'>";
                echo "<input type='hidden' name='id_news' value='{$news['id_news']}'>";
                echo "<button type='submit'>Удалить новость</button>";
                echo "</form>";
                echo "</div>";
            }
            ?>
        </div>
    </div>
</body>
</html>
