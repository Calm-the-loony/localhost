<?php
// Подключение к базе данных
$mysqli = new mysqli("localhost", "root", "", "mydb", 3307);

// Проверка соединения
if ($mysqli->connect_errno) {
    echo "Не удалось подключиться к MySQL: (" . $mysqli->connect_errno . ") " . $mysqli->connect_error;
}

// Проверка наличия POST-запроса
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Получение данных из формы
    $title = $_POST['title'];
    $content = $_POST['content'];
    $id_user = 3; // Замените на реальный ID пользователя

    // Проверка длины заголовка
    if (mb_strlen($title, 'utf-8') > 255) {
        echo "Ошибка: Длина заголовка превышает максимально допустимое значение.";
        exit();
    }

    // Подготовка запроса
    $query = $mysqli->prepare("INSERT INTO News (id_user, title, content) VALUES (?, ?, ?)");

    // Проверка наличия ошибок при подготовке запроса
    if (!$query) {
        echo "Ошибка подготовки запроса: (" . $mysqli->errno . ") " . $mysqli->error;
    }

    // Привязка параметров и выполнение запроса
    if (!$query->bind_param("iss", $id_user, $title, $content) || !$query->execute()) {
        echo "Ошибка выполнения запроса: (" . $query->errno . ") " . $query->error;
    } else {
        // Перенаправление на страницу с добавленной новостью
        $id_news = $mysqli->insert_id;
        header("Location: news.php?id=$id_news");
        exit();
    }

    // Закрытие запроса
    $query->close();
}

// Закрытие соединения с базой данных
$mysqli->close();
?>
