CREATE TABLE IF NOT EXISTS state (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  abbreviation varchar(2) NOT NULL,
  last_update timestamp NOT NULL,
  name varchar(100) NOT NULL,
  CONSTRAINT state_pkey PRIMARY KEY (`id`)
);