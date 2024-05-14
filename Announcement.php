<?php
// Подключение к базе данных
$mysqli = new mysqli("localhost", "root", "", "mydb", 3307);

// Проверка соединения
if ($mysqli->connect_errno) {
    echo "Не удалось подключиться к MySQL: (" . $mysqli->connect_errno . ") " . $mysqli->connect_error;
}

// Обработка добавления объявления
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $content = $_POST['content'];
    $title = $_POST['title'];
    $userId = isset($_POST['id_user']) ? intval($_POST['id_user']) : null; // Преобразуем значение в целое число, если оно передано

    // Выполнение запроса INSERT
    $query = $mysqli->query("INSERT INTO advertisement (ad_title, ad_content, id_user) VALUES ('$title', '$content', '$userId')");

    if ($query) {
        // Перенаправляем пользователя обратно на страницу с объявлениями
        header("Location: Announcement.php");
    } else {
        // В случае ошибки выводим сообщение
        echo "Ошибка при добавлении объявления: " . $mysqli->error;
    }
}

// Получение объявлений из базы данных
$query = $mysqli->query("SELECT advertisement.*, Users.username FROM advertisement LEFT JOIN Users ON advertisement.id_user = Users.id");

echo "<div class='container'>";
echo "<h1>Объявления</h1>";
echo "<div id='announcementsList' class='news-list'>";

while ($announcement = $query->fetch_assoc()) {
    echo "<div class='announcement-item'>";
    echo "<h2>{$announcement['ad_title']}</h2>";
    echo "<p>{$announcement['ad_content']}</p>";
    if ($announcement['username']) {
        echo "<p>Автор: {$announcement['username']}</p>";
    } else {
        echo "<p>Автор неизвестен</p>";
    }
    echo "<form action='Announcement.php' method='post'>";
    echo "<input type='hidden' name='id_announcement' value='{$announcement['id_adv']}'>";
    echo "<button type='submit'>Удалить объявление</button>";
    echo "</form>";
    echo "</div>";
}

echo "</div>";
echo "</div>";

// Обработка удаления объявления
if (isset($_POST['id_announcement'])) {
    $id_adv = $_POST['id_announcement'];

    $query = $mysqli->query("DELETE FROM advertisement WHERE id_adv = '$id_adv'");

    if (!$query) {
        // В случае ошибки выводим сообщение
        echo "Ошибка при удалении объявления: " . $mysqli->error;
    }
}

// Закрываем соединение с базой данных
$mysqli->close();
echo "<link rel='stylesheet' type='text/css' href='styles.css'>";

?>
