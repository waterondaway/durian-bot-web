-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Jan 31, 2025 at 08:47 AM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `durian_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `farmer`
--

CREATE TABLE `farmer` (
  `id` int(11) NOT NULL,
  `farmer_name` varchar(255) DEFAULT NULL,
  `farmer_id` varchar(255) DEFAULT NULL,
  `user_id` varchar(255) NOT NULL,
  `status` int(1) NOT NULL DEFAULT 0,
  `organization` varchar(255) DEFAULT NULL,
  `telephone` varchar(255) DEFAULT NULL,
  `last_update` date NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `farmer`
--

INSERT INTO `farmer` (`id`, `farmer_name`, `farmer_id`, `user_id`, `status`, `organization`, `telephone`, `last_update`) VALUES
(5, 'นนท์ปวิธ ศิลาบำรุงราษฎร์', '653-020-066-551', 'Ub1f8ca097e7cd894a1ab5df5c8d37895', 1, 'กรุงเทพมหานคร', '0661126441', '2025-01-31'),
(6, 'ณกรณ์ ตั้งประภาพร', '173-817-418-585', 'U04fbad71bf7b0426da0d4d15ea34d911', 1, 'นครสวรรค์', '0623541549', '2025-01-31'),
(7, 'กฤติมา เชาว์ดี', '123-235-946-266', 'U9564461024b6efa2f49f894398d618ab', 1, 'กรุงเทพมหานคร', '0863663746', '2025-01-31');

-- --------------------------------------------------------

--
-- Table structure for table `images_farmer`
--

CREATE TABLE `images_farmer` (
  `id` int(11) NOT NULL,
  `farmer_id` varchar(255) NOT NULL,
  `filename` varchar(255) NOT NULL,
  `latitude` varchar(255) NOT NULL,
  `longitude` varchar(255) NOT NULL,
  `upload_on` date NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `images_farmer`
--

INSERT INTO `images_farmer` (`id`, `farmer_id`, `filename`, `latitude`, `longitude`, `upload_on`) VALUES
(5, '653-020-066-551', '653-020-066-551_1738307762981.jpg', '13.118811076004768', '100.92170255762187', '2025-01-31'),
(6, '123-235-946-266', '123-235-946-266_1738308080298.jpg', '13.118798946132191', '100.92164564666982', '2025-01-31'),
(7, '173-817-418-585', '173-817-418-585_1738308138772.jpg', '13.118769991266726', '100.92161529746568', '2025-01-31'),
(8, '653-020-066-551', '653-020-066-551_1738307762982.jpg', '13.118811076004768', '100.92170255762187', '2025-01-31');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `token` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `username`, `password`, `token`) VALUES
(1, 'admin', '$2a$10$owFuy49xfdQseDx1sfQd/uG0Vlbu5XyTgmUrseMjevsJyFnUFyLlq', NULL);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `farmer`
--
ALTER TABLE `farmer`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `images_farmer`
--
ALTER TABLE `images_farmer`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `farmer`
--
ALTER TABLE `farmer`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `images_farmer`
--
ALTER TABLE `images_farmer`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
