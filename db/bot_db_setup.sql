DROP DATABASE IF EXISTS maidrea_bot_db;
CREATE DATABASE maidrea_bot_db;

CREATE USER IF NOT EXISTS 'maidrea_bot'@'localhost' IDENTIFIED BY 'Your_Password';
GRANT ALL PRIVILEGES ON maidrea_bot_db.* TO 'maidrea_bot'@'localhost';

USE maidrea_bot_db;

CREATE TABLE guilds (
	id int NOT NULL,
	has_mute boolean NOT NULL,
	mute_role int,
	has_xp boolean NOT NULL,
	staff_application boolean NOT NULL,
	PRIMARY KEY (id)
);

CREATE TABLE users (
	id int NOT NULL,
	guild_id int NOT NULL,
	is_muted boolean NOT NULL,
	level int NOT NULL,
	xp int NOT NULL,
	previous_role int NOT NULL,
	PRIMARY KEY (id, guild_id),
	FOREIGN KEY (guild_id) REFERENCES guilds(id)
);
