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
  `question_string` VARCHAR(500) NULL,
  `answer_type` TINYINT(1) NULL,
  `answer_string` VARCHAR(45) NULL,
  `answer_file` VARCHAR(45) NULL,
  PRIMARY KEY (`id`));
````

#### Leaderboard schema

````
CREATE TABLE `irun`.`leader_board` (
  `id` INT NOT NULL,
  `course_id` INT NULL,
  `rank` INT NULL,
  `user_id` INT NULL,
  PRIMARY KEY (`id`));
````