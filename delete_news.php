<?php
// Подключение к базе данных
$mysqli = new mysqli("localhost", "root", "", "mydb", 3307);

// Проверка соединения
if ($mysqli->connect_errno) {
    echo "Не удалось подключиться к MySQL: (" . $mysqli->connect_errno . ") " . $mysqli->connect_error;
}

// Получаем id новости для удаления
$id_news = $_POST['id_news'];

// Выполняем запрос на удаление новости по её id
$query = $mysqli->prepare("DELETE FROM News WHERE id_news = ?");
$query->bind_param("i", $id_news);
$query->execute();

// Перенаправляем пользователя обратно на страницу новостей
header("Location: news.php");
?>
