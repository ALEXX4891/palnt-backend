-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Хост: 127.0.0.1:3306
-- Время создания: Май 18 2024 г., 15:15
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
-- Структура таблицы `Carton`
--

CREATE TABLE `Carton` (
  `idCarton` int NOT NULL,
  `date` date NOT NULL,
  `name` varchar(50) COLLATE utf8mb4_general_ci NOT NULL,
  `width` int NOT NULL,
  `length` int NOT NULL,
  `typeCarton` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `coming` int NOT NULL,
  `expense` int NOT NULL,
  `price` int NOT NULL,
  `nameContractor` varchar(200) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Дамп данных таблицы `Carton`
--

INSERT INTO `Carton` (`idCarton`, `date`, `name`, `width`, `length`, `typeCarton`, `coming`, `expense`, `price`, `nameContractor`) VALUES
(18, '2023-11-09', '	Лист	', 72, 123, '	Тип №1	', 300, 0, 1, '	ООО « Длинное большое название 21»	'),
(19, '2023-11-10', '	Лист	', 72, 123, '	Тип №1	', 0, 100, 1, '	ООО « Длинное большое название 21»	'),
(20, '2023-11-09', '	Полоска	', 15, 72, '	Тип №1	', 0, 100, 1, '	ООО « Длинное большое название 21»	'),
(21, '2023-11-10', '	Полоска	', 15, 72, '	Тип №1	', 1000, 0, 1, '	ООО « Длинное большое название 1»	'),
(22, '2023-11-11', '	Полоска	', 15, 72, '	Тип №1	', 200, 0, 1, '	ООО « Длинное большое название 2»	'),
(23, '2023-11-09', '	Полоска	', 15, 72, '	Тип №1	', 0, 500, 1, '	ООО « Длинное большое название 1»	'),
(24, '2023-11-10', '	Полоска	', 15, 72, '	Тип №1	', 0, 200, 1, '	ООО « Длинное большое название 2»	'),
(25, '2023-11-09', '	Полоска	', 13, 72, '	Тип №1	', 300, 0, 0, '	ООО « Длинное большое название 3»	'),
(26, '2023-11-10', '	Полоска	', 13, 72, '	Тип №1	', 0, 50, 0, '	ООО « Длинное большое название 3»	'),
(27, '2023-11-09', '	Полоска	', 13, 72, '	Тип №1	', 0, 50, 0, '	ООО « Длинное большое название 3»	'),
(28, '2023-11-10', '	Полоска	', 13, 72, '	Тип №1	', 500, 0, 0, '	ООО « Длинное большое название 1»	'),
(29, '2023-11-09', '	Разделитель	', 13, 20, '	Тип №1	', 500, 0, 0, '	ООО « Длинное большое название 5»	'),
(30, '2023-11-10', '	Разделитель	', 13, 20, '	Тип №1	', 0, 150, 0, '	ООО « Длинное большое название 5»	'),
(31, '2023-11-11', '	Разделитель	', 13, 20, '	Тип №1	', 200, 0, 0, '	ООО « Длинное большое название 6»	'),
(32, '2023-11-12', '	Разделитель	', 13, 20, '	Тип №1	', 0, 450, 0, '	ООО « Длинное большое название 6»	'),
(33, '2023-11-13', '	Лист	', 72, 123, '	Тип №2	', 0, 50, 1, '	ООО « Длинное большое название 21»	'),
(34, '2023-11-14', '	Лист	', 72, 123, '	Тип №3	', 0, 50, 1, '	ООО « Длинное большое название 21»	');

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
(1, 'ООО « Длинное большое название песня»11', 978777111, 'г. Тюмень. ул. Фармана Салманова, д. 1,', '+7 987 333 33-33', 'email1@example.com', 1),
(2, 'ООО « Жизнь большое название 6677»', 978777112, 'г. Тюмень. ул. Фармана Салманова, д. 2', '+7 987 333 31-12', 'email2@example.com', 1),
(3, 'ООО « Короткое большое название 333»', 978777223, 'г. Тюмень. ул. Фармана Салманова, д. 3', '+7 987 333 31-13', 'email3@example.com', 1),
(4, 'ООО « Алый большое название 4»', 978777114, 'г. Тюмень. ул. Фармана Салманова, д. 4', '+7 987 333 31-14', 'email4@example.com', 1),
(5, 'ООО « Длинное большое название 5»', 97877725, 'г. Тюмень. ул. Фармана Салманова, д. 5', '+7 987 333 31-15', 'email5@example.com', 0),
(6, 'ООО « Юлок большое название 777»', 978777116, 'г. Тюмень. ул. Фармана Салманова, д. 6', '+7 987 333 31-16', 'email6@example.com', 0),
(7, 'ООО « Длинное большое название 7»', 978777227, 'г. Тюмень. ул. Фармана Салманова, д. 7', '+7 987 333 31-17', 'email7@example.com', 1),
(8, 'ООО « Длинное большое название 8»', 978777228, 'г. Тюмень. ул. Фармана Салманова, д. 8', '+7 987 333 31-18', 'email8@example.com', 1),
(9, 'ООО « Ягода большое название 9»', 978777119, 'г. Тюмень. ул. Фармана Салманова, д. 9', '+7 987 333 31-19', 'email9@example.com', 0),
(10, 'ООО « Блок большое название 10»', 978777210, 'г. Тюмень. ул. Фармана Салманова, д. 10', '+7 987 333 32-10', 'email10@example.com', 0),
(11, 'ООО « Длинное большое название 11»', 978777211, 'г. Тюмень. ул. Фармана Салманова, д. 11', '+7 987 333 32-11', 'email11@example.com', 0),
(12, 'ООО « Длинное большое название 12»', 978777212, 'г. Тюмень. ул. Фармана Салманова, д. 12', '+7 987 333 32-12', 'email12@example.com', 1),
(13, 'ООО « Длинное большое название 13»', 978777213, 'г. Тюмень. ул. Фармана Салманова, д. 13', '+7 987 333 32-13', 'email13@example.com', 1),
(14, 'ООО « Длинное большое название 14»', 978777214, 'г. Тюмень. ул. Фармана Салманова, д. 14', '+7 987 333 32-14', 'email14@example.com', 1),
(15, 'ООО « Сочный большое название 15»', 978777215, 'г. Тюмень. ул. Фармана Салманова, д. 15', '+7 987 333 32-15', 'email15@example.com', 0),
(16, 'арарараарар', 978777216, 'г. Тюмень. ул. Фармана Салманова, д. 16', '+7 987 333 32-16', 'email16@example.com', 0),
(17, 'ООО « Длинное большое название 17»', 978777217, 'г. Тюмень. ул. Фармана Салманова, д. 17', '+7 987 333 32-17', 'email17@example.com', 0),
(18, 'ООО « Длинное большое название 18»', 978777218, 'г. Тюмень. ул. Фармана Салманова, д. 18', '+7 987 333 32-18', 'email18@example.com', 0),
(19, 'ООО « Длинное большое название 19»', 978777219, 'г. Тюмень. ул. Фармана Салманова, д. 19', '+7 987 333 32-19', 'email19@example.com', 0),
(20, 'ООО « Длинное большое название 20»', 978777220, 'г. Тюмень. ул. Фармана Салманова, д. 20', '+7 987 333 32-20', 'email20@example.com', 0),
(21, 'ООО « Длинное большое название 21»', 978777221, 'г. Тюмень. ул. Фармана Салманова, д. 21', '+7 987 333 32-21', 'email21@example.com', 0),
(22, 'ООО « Длинное большое название 22»', 978777222, 'г. Тюмень. ул. Фармана Салманова, д. 22', '+7 987 333 32-22', 'email22@example.com', 0);

-- --------------------------------------------------------

--
-- Структура таблицы `Deal`
--

CREATE TABLE `Deal` (
  `date` date NOT NULL,
  `idContractor` int NOT NULL,
  `idDeal` int NOT NULL,
  `amount` float NOT NULL,
  `VAT` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Дамп данных таблицы `Deal`
--

INSERT INTO `Deal` (`date`, `idContractor`, `idDeal`, `amount`, `VAT`) VALUES
('2023-11-09', 21, 1, 300, 15),
('2023-11-10', 21, 2, 300, 20),
('2023-11-09', 1, 3, 300, 15),
('2023-11-10', 1, 4, 1000, 20),
('2023-11-11', 1, 5, 300, 15),
('2023-11-09', 1, 6, 300, 15),
('2023-11-10', 1, 7, 300, 15),
('2023-11-10', 1, 8, 300, 15),
('2023-11-10', 1, 9, 300, 15),
('2023-11-09', 1, 10, 300, 15),
('2023-11-10', 1, 11, 500, 15),
('2023-11-09', 5, 12, 500, 20),
('2023-11-10', 5, 13, 300, 20),
('2023-11-11', 5, 14, 200, 20),
('2023-11-12', 5, 15, 300, 15),
('2023-11-13', 21, 16, 300, 18),
('2023-11-14', 21, 17, 300, 20);

-- --------------------------------------------------------

--
-- Структура таблицы `Invoice`
--

CREATE TABLE `Invoice` (
  `idInvoice` int NOT NULL,
  `idDeal` int NOT NULL,
  `typeCarton` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `numberLabels` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Дамп данных таблицы `Invoice`
--

INSERT INTO `Invoice` (`idInvoice`, `idDeal`, `typeCarton`, `numberLabels`) VALUES
(1, 1, '	Тип №1	', 5),
(2, 2, '	Тип №1	', 5),
(3, 3, '	Тип №1	', 10),
(4, 4, '	Тип №1	', 10),
(5, 5, '	Тип №1	', 5),
(6, 6, '	Тип №1	', 5),
(7, 7, '	Тип №1	', 5),
(8, 8, '	Тип №1	', 5),
(9, 9, '	Тип №1	', 5),
(10, 10, '	Тип №1	', 5),
(11, 11, '	Тип №1	', 5),
(12, 12, '	Тип №1	', 5),
(13, 13, '	Тип №1	', 5),
(14, 14, '	Тип №1	', 5),
(15, 15, '	Тип №1	', 5),
(16, 16, '	Тип №1	', 5),
(17, 17, '	Тип №1	', 5);

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `Carton`
--
ALTER TABLE `Carton`
  ADD PRIMARY KEY (`idCarton`),
  ADD UNIQUE KEY `idCarton` (`idCarton`);

--
-- Индексы таблицы `Contractor`
--
ALTER TABLE `Contractor`
  ADD PRIMARY KEY (`idContractor`),
  ADD UNIQUE KEY `idContractor` (`idContractor`);

--
-- Индексы таблицы `Deal`
--
ALTER TABLE `Deal`
  ADD PRIMARY KEY (`idDeal`),
  ADD UNIQUE KEY `idDeal` (`idDeal`),
  ADD KEY `Deal_fk1` (`idContractor`);

--
-- Индексы таблицы `Invoice`
--
ALTER TABLE `Invoice`
  ADD PRIMARY KEY (`idInvoice`),
  ADD UNIQUE KEY `idInvoice` (`idInvoice`),
  ADD KEY `Invoice_fk1` (`idDeal`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `Carton`
--
ALTER TABLE `Carton`
  MODIFY `idCarton` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=35;

--
-- AUTO_INCREMENT для таблицы `Contractor`
--
ALTER TABLE `Contractor`
  MODIFY `idContractor` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;

--
-- AUTO_INCREMENT для таблицы `Deal`
--
ALTER TABLE `Deal`
  MODIFY `idDeal` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT для таблицы `Invoice`
--
ALTER TABLE `Invoice`
  MODIFY `idInvoice` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- Ограничения внешнего ключа сохраненных таблиц
--

--
-- Ограничения внешнего ключа таблицы `Deal`
--
ALTER TABLE `Deal`
  ADD CONSTRAINT `Deal_fk1` FOREIGN KEY (`idContractor`) REFERENCES `Contractor` (`idContractor`);

--
-- Ограничения внешнего ключа таблицы `Invoice`
--
ALTER TABLE `Invoice`
  ADD CONSTRAINT `Invoice_fk1` FOREIGN KEY (`idDeal`) REFERENCES `Deal` (`idDeal`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
