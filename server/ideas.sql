/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

CREATE TABLE `ideas` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) DEFAULT NULL,
  `description` text DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=26 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin;

INSERT INTO `ideas` (`id`, `title`, `description`, `created_at`) VALUES
(1, 'toDO1', 'test', '2023-02-28 13:15:42');
INSERT INTO `ideas` (`id`, `title`, `description`, `created_at`) VALUES
(2, 'toDO2', 'test2', '2023-02-28 13:15:42');
INSERT INTO `ideas` (`id`, `title`, `description`, `created_at`) VALUES
(3, 'toDO3', 'test3', '2023-02-28 13:15:42');
INSERT INTO `ideas` (`id`, `title`, `description`, `created_at`) VALUES
(4, 'Niels', 'DC', '2023-02-28 15:38:58'),
(5, 'fgdgfd', 'dfgdgf', '2023-02-28 15:45:41'),
(25, 'Lorem Ipsum Day', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Risus sed vulputate odio ut enim blandit volutpat maecenas. Sed augue lacus viverra vitae congue eu consequat. Vitae elementum curabitur vitae nunc sed velit dignissim sodales ut. Egestas diam in arcu cursus. Odio eu feugiat pretium nibh ipsum. Ultrices gravida dictum fusce ut placerat orci. Nullam non nisi est sit amet facilisis magna etiam tempor. Commodo viverra maecenas accumsan lacus vel facilisis volutpat est velit. Dictum fusce ut placerat orci nulla pellentesque dignissim. Facilisi etiam dignissim diam quis enim lobortis scelerisque fermentum. Gravida dictum fusce ut placerat orci. Sit amet mattis vulputate enim. Placerat orci nulla pellentesque dignissim enim sit amet. Pellentesque pulvinar pellentesque habitant morbi tristique senectus et.', '2023-02-28 19:34:02');

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;