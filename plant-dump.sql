-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Хост: 127.0.0.1:3306
-- Время создания: Май 15 2024 г., 18:15
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
  `size` varchar(50) COLLATE utf8mb4_general_ci NOT NULL,
  `typeCarton` varchar(20) COLLATE utf8mb4_general_ci NOT NULL,
  `coming` int NOT NULL,
  `expense` int NOT NULL,
  `price` int NOT NULL,
  `nameContractor` varchar(100) COLLATE utf8mb4_general_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Дамп данных таблицы `Carton`
--

INSERT INTO `Carton` (`idCarton`, `date`, `size`, `typeCarton`, `coming`, `expense`, `price`, `nameContractor`) VALUES
(1, '2023-11-09', '	Лист 72x126	', '	Тип №1	', 300, 0, 1, '	ООО « Длинное большое название 21»	'),
(2, '2023-11-10', '	Лист 72x126	', '	Тип №1	', 0, 100, 1, '	ООО « Длинное большое название 21»	'),
(3, '2023-11-09', '	Полоска 15x72	', '	Тип №1	', 0, 100, 1, '	ООО « Длинное большое название 21»	'),
(4, '2023-11-10', '	Полоска 15x72	', '	Тип №1	', 1000, 0, 1, '	ООО « Длинное большое название 1»	'),
(5, '2023-11-11', '	Полоска 15x72	', '	Тип №1	', 200, 0, 1, '	ООО « Длинное большое название 2»	'),
(6, '2023-11-09', '	Полоска 15x72	', '	Тип №1	', 0, 500, 1, '	ООО « Длинное большое название 1»	'),
(7, '2023-11-10', '	Полоска 15x72	', '	Тип №1	', 0, 200, 1, '	ООО « Длинное большое название 2»	'),
(8, '2023-11-09', '	Полоска 13x72	', '	Тип №1	', 300, 0, 0, '	ООО « Длинное большое название 3»	'),
(9, '2023-11-10', '	Полоска 13x72	', '	Тип №1	', 0, 50, 0, '	ООО « Длинное большое название 3»	'),
(10, '2023-11-09', '	Полоска 13x72	', '	Тип №1	', 0, 50, 0, '	ООО « Длинное большое название 3»	'),
(11, '2023-11-10', '	Полоска 13x72	', '	Тип №1	', 500, 0, 0, '	ООО « Длинное большое название 1»	'),
(12, '2023-11-09', '	Разделитель 13x20	', '	Тип №1	', 500, 0, 0, '	ООО « Длинное большое название 5»	'),
(13, '2023-11-10', '	Разделитель 13x20	', '	Тип №1	', 0, 150, 0, '	ООО « Длинное большое название 5»	'),
(14, '2023-11-11', '	Разделитель 13x20	', '	Тип №1	', 200, 0, 0, '	ООО « Длинное большое название 6»	'),
(15, '2023-11-12', '	Разделитель 13x20	', '	Тип №1	', 0, 450, 0, '	ООО « Длинное большое название 6»	'),
(16, '2023-11-13', '	Лист 72x126	', '	Тип №2	', 0, 50, 1, '	ООО « Длинное большое название 21»	'),
(17, '2023-11-14', '	Лист 72x126	', '	Тип №3	', 0, 50, 1, '	ООО « Длинное большое название 21»	');

-- --------------------------------------------------------

--
-- Структура таблицы `Contractor`
--

CREATE TABLE `Contractor` (
  `idContractor` int NOT NULL,
  `name` varchar(200) COLLATE utf8mb4_general_ci NOT NULL,
  `taxNumber` int NOT NULL,
  `address` varchar(500) COLLATE utf8mb4_general_ci NOT NULL,
  `telephone` varchar(20) COLLATE utf8mb4_general_ci NOT NULL,
  `email` varchar(100) COLLATE utf8mb4_general_ci NOT NULL,
  `isActive` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Дамп данных таблицы `Contractor`
--

INSERT INTO `Contractor` (`idContractor`, `name`, `taxNumber`, `address`, `telephone`, `email`, `isActive`) VALUES
(1, 'ООО « Длинное большое название 1»', 978777111, 'г. Тюмень. ул. Фармана Салманова, д. 1', '+7 987 111 111', 'email1@example.com', 1),
(2, 'ООО « Длинное большое название 2»', 978777112, 'г. Тюмень. ул. Фармана Салманова, д. 2', '+7 987 111 112', 'email2@example.com', 1),
(3, 'ООО « Длинное большое название 3»', 978777113, 'г. Тюмень. ул. Фармана Салманова, д. 3', '+7 987 111 113', 'email3@example.com', 0),
(4, 'ООО « Длинное большое название 4»', 978777114, 'г. Тюмень. ул. Фармана Салманова, д. 4', '+7 987 111 114', 'email4@example.com', 1),
(5, 'ООО « Длинное большое название 5»', 978777115, 'г. Тюмень. ул. Фармана Салманова, д. 5', '+7 987 111 115', 'email5@example.com', 1),
(6, 'ООО « Длинное большое название 6»', 978777116, 'г. Тюмень. ул. Фармана Салманова, д. 6', '+7 987 111 116', 'email6@example.com', 1),
(7, 'ООО « Длинное большое название 7»', 978777117, 'г. Тюмень. ул. Фармана Салманова, д. 7', '+7 987 111 117', 'email7@example.com', 0),
(8, 'ООО « Длинное большое название 8»', 978777118, 'г. Тюмень. ул. Фармана Салманова, д. 8', '+7 987 111 118', 'email8@example.com', 0),
(9, 'ООО « Длинное большое название 9»', 978777119, 'г. Тюмень. ул. Фармана Салманова, д. 9', '+7 987 111 119', 'email9@example.com', 1),
(10, 'ООО « Длинное большое название 10»', 978777210, 'г. Тюмень. ул. Фармана Салманова, д. 10', '+7 987 111 210', 'email10@example.com', 1),
(11, 'ООО « Длинное большое название 11»', 978777211, 'г. Тюмень. ул. Фармана Салманова, д. 11', '+7 987 111 211', 'email11@example.com', 1),
(12, 'ООО « Длинное большое название 12»', 978777212, 'г. Тюмень. ул. Фармана Салманова, д. 12', '+7 987 111 212', 'email12@example.com', 1),
(13, 'ООО « Длинное большое название 13»', 978777213, 'г. Тюмень. ул. Фармана Салманова, д. 13', '+7 987 111 213', 'email13@example.com', 1),
(14, 'ООО « Длинное большое название 14»', 978777214, 'г. Тюмень. ул. Фармана Салманова, д. 14', '+7 987 111 214', 'email14@example.com', 1),
(15, 'ООО « Длинное большое название 15»', 978777215, 'г. Тюмень. ул. Фармана Салманова, д. 15', '+7 987 111 215', 'email15@example.com', 0),
(16, 'ООО « Длинное большое название 16»', 978777216, 'г. Тюмень. ул. Фармана Салманова, д. 16', '+7 987 111 216', 'email16@example.com', 1),
(17, 'ООО « Длинное большое название 17»', 978777217, 'г. Тюмень. ул. Фармана Салманова, д. 17', '+7 987 111 217', 'email17@example.com', 1),
(18, 'ООО « Длинное большое название 18»', 978777218, 'г. Тюмень. ул. Фармана Салманова, д. 18', '+7 987 111 218', 'email18@example.com', 1),
(19, 'ООО « Длинное большое название 19»', 978777219, 'г. Тюмень. ул. Фармана Салманова, д. 19', '+7 987 111 219', 'email19@example.com', 1),
(20, 'ООО « Длинное большое название 20»', 978777220, 'г. Тюмень. ул. Фармана Салманова, д. 20', '+7 987 111 220', 'email20@example.com', 1),
(21, 'ООО « Длинное большое название 21»', 978777221, 'г. Тюмень. ул. Фармана Салманова, д. 21', '+7 987 111 221', 'email21@example.com', 1),
(22, 'ООО « Длинное большое название 22»', 978777222, 'г. Тюмень. ул. Фармана Салманова, д. 22', '+7 987 111 222', 'email22@example.com', 1);

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
  `typeCarton` varchar(20) COLLATE utf8mb4_general_ci NOT NULL,
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
  MODIFY `idCarton` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT для таблицы `Contractor`
--
ALTER TABLE `Contractor`
  MODIFY `idContractor` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;

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
