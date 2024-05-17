<?php

// $inputData = '{"table":"contractor","all":"*","select":"SELECT"}';

// блокировка получения данныех, если не переданы параметры:
$inputData = file_get_contents('php://input');
if (!$inputData) {
  die('No data');
}
// echo $inputData;

if ($inputData) {
  $data = json_decode($inputData, true);
  $arrKeys = array_keys($data);
  $arrData = [];

  foreach ($arrKeys as $key) {
    if ($key == 'select') {
      $arrData['operation'] = $data[$key];
      $operation = $data[$key];
    }
    if ($key == 'update') {
      $arrData['operation'] = $data[$key];
      $operation = $data[$key];
    }
    if ($key == 'delete') {
      $arrData['operation'] = $data[$key];
      $operation = $data[$key];
    }
    if ($key == 'insert') {
      $arrData['operation'] = $data[$key];
      $operation = $data[$key];
    }
    if ($key == 'all') {
      $arrData['all'] = $data[$key];
      $all = $data[$key];
    }
    if ($key == 'table') {
      $arrData['table'] = $data[$key];
      $table = $data[$key];
    }
    if ($key == 'id') {
      $arrData['idContractor'] = $data[$key];
      $idContractor = $data[$key];
    }
    if ($key == 'name') {
      $arrData['name'] = $data[$key];
      $name = $data[$key];
    }
    if ($key == 'taxNumber') {
      $arrData['taxNumber'] = $data[$key];
      $taxNumber = $data[$key];
    }
    if ($key == 'address') {
      $arrData['address'] = $data[$key];
      $address = $data[$key];
    }
    if ($key == 'telephone') {
      $arrData['telephone'] = $data[$key];
      $telephone = $data[$key];
    }
    if ($key == 'email') {
      $arrData['email'] = $data[$key];
      $email = $data[$key];
    }
  }

  // if ($operation == 'UPDATE') {
    //   $sql = $arrData['operation'];
    // }
    // if ($operation == 'DELETE') {
      //   $sql = $arrData['operation'];
      // }
      // if ($operation == 'INSERT') {
        //   $sql = $arrData['operation'];
        // }
        
        // print_r($data);
        // print_r($idContractor);
        // print_r($arr);
  // echo '<pre>';
  // print_r($arrData);
  // echo '</pre>';

  
  // if ($idContractor) {
    //   $sql = "UPDATE `contractor` SET `name` = '$name', `taxNumber` = '$taxNumber', `address` = '$address', `telephone` = '$telephone', `email` = '$email' WHERE `idContractor` = $idContractor";
    // } else {
      //   $sql = "INSERT INTO `contractor` (`name`, `taxNumber`, `address`, `telephone`, `email`) VALUES ('$name', '$taxNumber', '$address', '$telephone', '$email')";
      // }
      // $res = json_encode($arrData, true);
      // echo $res;
}

// $dbh = new PDO('mysql:host=localhost;dbname=plant', 'root', '');
// $dbh->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
// $sth = $dbh->prepare($sql);
if ($operation == 'SELECT') {
  $sql = $operation . ' ' . $all . ' FROM ' . $table;
}
// $sth->execute();






//   $data = json_decode($inputData, true);
//   print_r($data);
//   $idContractor = $data['idContractor'] ? $data['idContractor'] : '';
//   $name = $data['name'] ? $data['name'] : '';
//   $taxNumber = $data['taxNumber']  ? $data['taxNumber'] : '';
//   $address = $data['address'] ? $data['address'] : '';
//   $telephone = $data['telephone'] ? $data['telephone'] : '';
//   $email = $data['email'] ? $data['email'] : '';
// }
// print_r($data);

// die('STOP');
function getData($sql)
{

  // конфигурация подключения к БД:
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

  // $sql = $operation . ' ' . $all . ' FROM ' . $table;
  // "SELECT * FROM Contractor"
  // echo $sql;
  $sth = $dbh->prepare($sql); // подготовка запроса
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

getData($sql);
