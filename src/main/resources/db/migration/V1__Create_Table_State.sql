CREATE TABLE `state` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `abbreviation` varchar(2) NOT NULL,
  `last_update` datetime NOT NULL,
  `name` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
)