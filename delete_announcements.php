<?php
// Подключение к базе данных
$mysqli = new mysqli("localhost", "root", "", "mydb", 3307);

// Проверка соединения
if ($mysqli->connect_errno) {
    echo "Не удалось подключиться к MySQL: (" . $mysqli->connect_errno . ") " . $mysqli->connect_error;
}

$id_adv = $_POST['id_announcement'];

// Выполнение запроса DELETE
$query = $mysqli->query("DELETE FROM advertisement WHERE id_adv = '$id_adv'");

// Проверка успешности выполнения запроса
if ($query) {
    // Перенаправляем пользователя обратно на страницу объявлений
    header("Location: Announcement.php");
} else {
    // В случае ошибки выводим сообщение
    echo "Ошибка при удалении объявления: " . $mysqli->error;
}

// Закрываем соединение с базой данных
$mysqli->close();
?>
