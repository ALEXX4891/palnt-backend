-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Хост: 127.0.0.1:3306
-- Время создания: Май 17 2024 г., 16:13
-- Версия сервера: 8.0.30
-- Версия PHP: 8.1.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База данных: `plant`
--

-- --------------------------------------------------------

--
-- Структура таблицы `Contractor`
--

CREATE TABLE `Contractor` (
  `idContractor` int NOT NULL,
  `name` varchar(200) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `taxNumber` int NOT NULL,
  `address` varchar(500) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `telephone` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `email` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `isActive` int NOT NULL DEFAULT '1'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Дамп данных таблицы `Contractor`
--

INSERT INTO `Contractor` (`idContractor`, `name`, `taxNumber`, `address`, `telephone`, `email`, `isActive`) VALUES
(1, 'ООО « Длинное большое название песня2»', 978777111, 'г. Тюмень. ул. Фармана Салманова, д. 1', '+7 987 111 888', 'email1@example.com', 1),
(2, 'ООО « Длинное большое название песня2»', 978777111, 'г. Тюмень. ул. Фармана Салманова, д. 1', '+7 987 111 888', 'email1@example.com', 1),
(3, 'ООО « Длинное большое название песня2»', 978777111, 'г. Тюмень. ул. Фармана Салманова, д. 1', '+7 987 111 888', 'email1@example.com', 0),
(4, 'ООО « Алый большое название 4»', 978777114, 'г. Тюмень. ул. Фармана Салманова, д. 4', '+7 987 111 114', 'email4@example.com', 0),
(5, 'ООО « Длинное большое название 5»', 978777115, 'г. Тюмень. ул. Фармана Салманова, д. 5', '+7 987 111 115', 'email5@example.com', 0),
(6, 'ООО « Юлок большое название 6»', 978777116, 'г. Тюмень. ул. Фармана Салманова, д. 6', '+7 987 111 116', 'email6@example.com', 0),
(7, 'ООО « Длинное большое название 7»', 978777117, 'г. Тюмень. ул. Фармана Салманова, д. 7', '+7 987 111 117', 'email7@example.com', 1),
(8, 'ООО « Длинное большое название 8»', 978777118, 'г. Тюмень. ул. Фармана Салманова, д. 8', '+7 987 111 118', 'email8@example.com', 1),
(9, 'ООО « Ягода большое название 9»', 978777119, 'г. Тюмень. ул. Фармана Салманова, д. 9', '+7 987 111 119', 'email9@example.com', 1),
(10, 'ООО « Блок большое название 10»', 978777210, 'г. Тюмень. ул. Фармана Салманова, д. 10', '+7 987 111 210', 'email10@example.com', 1),
(11, 'ООО « Длинное большое название 11»', 978777211, 'г. Тюмень. ул. Фармана Салманова, д. 11', '+7 987 111 211', 'email11@example.com', 1),
(12, 'ООО « Длинное большое название 12»', 978777212, 'г. Тюмень. ул. Фармана Салманова, д. 12', '+7 987 111 212', 'email12@example.com', 1),
(13, 'ООО « Длинное большое название 13»', 978777213, 'г. Тюмень. ул. Фармана Салманова, д. 13', '+7 987 111 213', 'email13@example.com', 1),
(14, 'ООО « Длинное большое название 14»', 978777214, 'г. Тюмень. ул. Фармана Салманова, д. 14', '+7 987 111 214', 'email14@example.com', 1),
(15, 'ООО « Сочный большое название 15»', 978777215, 'г. Тюмень. ул. Фармана Салманова, д. 15', '+7 987 111 215', 'email15@example.com', 1),
(16, 'ООО « Длинное большое название 16»', 978777216, 'г. Тюмень. ул. Фармана Салманова, д. 16', '+7 987 111 216', 'email16@example.com', 1),
(17, 'ООО « Длинное большое название 17»', 978777217, 'г. Тюмень. ул. Фармана Салманова, д. 17', '+7 987 111 217', 'email17@example.com', 1),
(18, 'ООО « Длинное большое название 18»', 978777218, 'г. Тюмень. ул. Фармана Салманова, д. 18', '+7 987 111 218', 'email18@example.com', 1),
(19, 'ООО « Длинное большое название 19»', 978777219, 'г. Тюмень. ул. Фармана Салманова, д. 19', '+7 987 111 219', 'email19@example.com', 1),
(20, 'ООО « Длинное большое название 20»', 978777220, 'г. Тюмень. ул. Фармана Салманова, д. 20', '+7 987 111 220', 'email20@example.com', 1),
(21, 'ООО « Длинное большое название 21»', 978777221, 'г. Тюмень. ул. Фармана Салманова, д. 21', '+7 987 111 221', 'email21@example.com', 1),
(22, 'ООО « Длинное большое название 22»', 978777222, 'г. Тюмень. ул. Фармана Салманова, д. 22', '+7 987 111 222', 'email22@example.com', 1),
(23, 'ООО « Длинное большое название песня2»', 978777111, 'г. Тюмень. ул. Фармана Салманова, д. 1', '+7 987 111 888', 'email1@example.com', 1),
(24, 'ООО « Длинное большое название песня2»', 978777111, 'г. Тюмень. ул. Фармана Салманова, д. 1', '+7 987 111 888', 'email1@example.com', 1),
(25, 'ООО « Длинное большое название песня2»', 978777111, 'г. Тюмень. ул. Фармана Салманова, д. 1', '+7 987 111 888', 'email1@example.com', 1),
(26, 'ООО « Длинное большое название песня2»', 978777111, 'г. Тюмень. ул. Фармана Салманова, д. 1', '+7 987 111 888', 'email1@example.com', 1);

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `Contractor`
--
ALTER TABLE `Contractor`
  ADD PRIMARY KEY (`idContractor`),
  ADD UNIQUE KEY `idContractor` (`idContractor`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `Contractor`
--
ALTER TABLE `Contractor`
  MODIFY `idContractor` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=27;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
