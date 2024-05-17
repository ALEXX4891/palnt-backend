<?php

// блокировка получения данныех, если не переданы требуемые параметры:
$inputData = file_get_contents('php://input');
$inputData = json_decode($inputData, true);
if ($inputData['name'] == 'contractor' && $inputData['id'] == 1) {
  // echo json_encode($inputData);
  //конфигурация подключения к БД:
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
  
  //преобразование полученного массива в JSON:
  $json = json_encode($array, JSON_UNESCAPED_UNICODE);
  //вывод JSON:
  echo $json;
  
  //закрытие подключения:
  $sth = null;
  $dbh = null;
}