<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>User Info</title>
    <link rel="stylesheet" href="styles.css"> 
</head>
<body>
    <div class="container">
        <h1>User Info</h1>
        <div class="user-info">
            <?php
            // Подключение к базе данных
            $mysqli = new mysqli("localhost", "root", "", "mydb", 3307);

            // Проверка соединения
            if ($mysqli->connect_errno) {
                echo "Не удалось подключиться к MySQL: (" . $mysqli->connect_errno . ") " . $mysqli->connect_error;
            }

            // Получение значения ID из запроса
            $id = $_GET['id'];
            $result = $mysqli->query("SELECT * FROM `Users` WHERE `id` = $id");

            // Проверка наличия данных
            if ($result->num_rows > 0) {
                $row = $result->fetch_assoc();
            ?>
                <p><strong>ID:</strong> <?php echo $row['id']; ?></p>
                <p><strong>Username:</strong> <?php echo $row['username']; ?></p>
                <p><strong>Email:</strong> <?php echo $row['email']; ?></p>
                <p><strong>Password:</strong> <?php echo $row['password']; ?></p>
            <?php
            } else {
                echo "Данных нет, иди туда"; // Если данных нет, выводим сообщение
            }
            ?>
        </div>
    </div>
</body>
</html>
