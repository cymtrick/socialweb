### Creating the database


#### Mac installation

Install mysql from https://dev.mysql.com/doc/mysql-osx-excerpt/5.7/en/osx-installation.html

or

Follow these steps

````
$ brew install mysql
$ mysqld --initialize --explicit_defaults_for_timestamp
$ mysql.server start # no sudo!
````

##### Start MySQL
`sudo /usr/local/mysql/support-files/mysql.server start`

##### Stop MySQL
`sudo /usr/local/mysql/support-files/mysql.server stop`

##### Restart MySQL
`sudo /usr/local/mysql/support-files/mysql.server restart`

#### Ubuntu or Debain
To install it, update the package index on your server with apt:

`sudo apt update`

Then install the default package:

`sudo apt install mysql-server`

Run the security script:

`sudo mysql_secure_installation`

Start the MySQL Server:

`sudo /etc/init.d/mysql start`


#### Schema code

##### User schema

````

CREATE TABLE `irun`.`auth_user` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NULL,
  `username` VARCHAR(45) NULL,
  `date_creation` VARCHAR(45) NULL,
  `backupcode` VARCHAR(45) NULL,
  `is_active` TINYINT(1) NULL,
  `password` VARCHAR(45) NULL,
  `dob` DATETIME NULL,
  `login_uid` VARCHAR(45) NULL,
  `study_level` VARCHAR(45) NULL AFTER `login_uid`,
  `year` TINYINT(1) NULL AFTER `study_level`,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `name_UNIQUE` (`name` ASC));

````

##### Kill token schema
````
CREATE TABLE `irun`.`kill_token` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `jti` VARCHAR(100) NULL,
  PRIMARY KEY (`id`));

````

##### Topic Schema
````
CREATE TABLE `irun`.`topic` (
  `id` INT NOT NULL,
  `topic_name` VARCHAR(100) DEFAULT NULL,
  `topic_img_url` VARCHAR(100) DEFAULT NULL,
  PRIMARY KEY (`id`));

````



#### Exam table schema

````
CREATE TABLE `irun`.`exam_table` (
  `id` INT NOT NULL,
  `course_name` VARCHAR(45) NULL,
  `questions_uuid` VARCHAR(45) NULL,
  `date_creation` DATETIME NULL,
  PRIMARY KEY (`id`));
````

#### Question and answer schema

````
CREATE TABLE `irun`.`new_table` (
  `id` INT NOT NULL,
  `topic_id` INT NOT NULL,
  `question_string` VARCHAR(500) NULL,
  `points` INT DEFAULT 0,
  `answer_type` TINYINT(1) NULL,
  `answer_string` VARCHAR(45) NULL,
  `answer_file` VARCHAR(500) NULL,
  PRIMARY KEY (`id`),
  FOREIGN KEY (`topic_id`) REFERENCES `irun`.`topic`(`id`));
````

#### Leaderboard schema

````
CREATE TABLE `irun`.`leader_board` (
  `id` INT NOT NULL,
  `topic_id` INT NOT NULL,
  `user_id` INT NOT NULL,
  `rank` INT NULL,
  `points` INT DEFAULT 0,
  `progress` INT DEFAULT 0,
  PRIMARY KEY (`id`),
  FOREIGN KEY (`topic_id`) REFERENCES `irun`.`topic`(`id`),
  FOREIGN KEY (`user_id`) REFERENCES `irun`.`auth_user`(`id`));
````

##### Discussion Forum Thread Schema
````
CREATE TABLE `irun`.`thread` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `user_id` INT NOT NULL,
  `topic_id` INT NOT NULL,
  `title` VARCHAR(45) DEFAULT NULL,
  `time` TIMESTAMP,
  `post` VARCHAR(1000) DEFAULT NULL,
  PRIMARY KEY (`id`)
  FOREIGN KEY (`user_id`) REFERENCES `irun`.`auth_user`(`id`),
  FOREIGN KEY (`topic_id`) REFERENCES `irun`.`topic`(`id`));

````

##### Discussion Forum Replies per thread Schema
````
CREATE TABLE `irun`.`posts` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `thread_id` INT NOT NULL,
  `user_id` INT NOT NULL,
  `topic_id` INT NOT NULL,
  `reply` VARCHAR(1000) DEFAULT NULL,
  `time` TIMESTAMP,
  PRIMARY KEY (`id`),
  FOREIGN KEY (`thread_id`) REFERENCES `irun`.`thread`(`id`),
  FOREIGN KEY (`user_id`) REFERENCES `irun`.`auth_user`(`id`),
  FOREIGN KEY (`topic_id`) REFERENCES `irun`.`topic`(`id`));

````