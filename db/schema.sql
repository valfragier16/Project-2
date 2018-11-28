DROP DATABASE fitTasktic_db;
CREATE DATABASE fitTasktic_db;
USE fitTasktic_db;

CREATE TABLE users
(
	id int NOT NULL AUTO_INCREMENT,
	username varchar(255) NOT NULL,
    password varchar(255) NOT NULL,
	badges int DEFAULT 0,
	PRIMARY KEY (id)
);

CREATE TABLE activities
(
	id int NOT NULL AUTO_INCREMENT,
	activity varchar(255) NOT NULL,
	duration varchar(255),
    completed BOOLEAN DEFAULT false,
	userID int,
	FOREIGN KEY (userID) REFERENCES users(id),
	PRIMARY KEY (id)
);

