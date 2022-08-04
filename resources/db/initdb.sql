-- to create a new database
CREATE IF NOT EXISTS DATABASE salusdb;

-- to use database
use salusdb;

-- creating a new tabl
CREATE IF NOT EXISTS TABLE users (
  id INT NOT NULL AUTO_INCREMENT,
  username VARCHAR(128) NOT NULL,
  password VARCHAR(128) NOT NULL,
  PRIMARY KEY(ID)
);

-- to show all tables
show tables;

-- to describe table
desc users;


