<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "plant";
$contractor = [];
$limit = '';
$offset = '';


try {
  $dbh = new PDO('mysql:host=' . $servername . ';dbname=' . $dbname, $username, $password); // подключение к базе данных
  $dbh->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION); // установка атрибута ошибок
} catch (PDOException $e) { // обработка исключения
  echo "Connection failed: " . $e->getMessage(); // вывод сообщения об ошибке
}

$sth = $dbh->prepare("SELECT * FROM Contractor"); // подготовка запроса
$sth->execute(); // выполнение запроса
$array = $sth->fetchAll(PDO::FETCH_ASSOC); // получение всех данных

// $sth = $dbh->prepare("SELECT * FROM `Contractor` WHERE `idContractor` = ?"); // подготовка запроса, скрытие id
// $sth->execute(array('21')); // выполнение запроса, подстановка значения id 
// $array = $sth->fetch(PDO::FETCH_ASSOC); // получение данных

// echo '<pre>';
$json = json_encode($array, JSON_UNESCAPED_UNICODE);
echo $json;
// print_r($array);
// echo '</pre>';



// echo 'mysql:host=' . $servername . ';dbname=' . $dbname;


// // Create connection
// $conn = mysqli_connect($servername, $username, $password, $dbname);
// // Check connection
// if (!$conn) {
//   die("Connection failed: " . mysqli_connect_error());
// }

// $sql = "SELECT id, name, description, price, img, category FROM goods LIMIT $limit OFFSET $offset";
// $result = mysqli_query($conn, $sql);

// // output data from db
// if (mysqli_num_rows($result) > 0) {
//   while ($row = mysqli_fetch_assoc($result)) {
//     $row['price'] = number_format($row['price'], 0, '.', ' '); // форматирование цены
//     $arGoods[] = $row;
//   }
// } else {
//   echo "0 results";
// }

// // Close connection
// mysqli_close($conn);
