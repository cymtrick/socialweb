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