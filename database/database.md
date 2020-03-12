###Creating the database


####Mac installation

Install mysql from https://dev.mysql.com/doc/mysql-osx-excerpt/5.7/en/osx-installation.html

or

Follow these steps

````
$ brew install mysql
$ mysqld --initialize --explicit_defaults_for_timestamp
$ mysql.server start # no sudo!
````

#####Start MySQL
`sudo /usr/local/mysql/support-files/mysql.server start`

#####Stop MySQL
`sudo /usr/local/mysql/support-files/mysql.server stop`

#####Restart MySQL
`sudo /usr/local/mysql/support-files/mysql.server restart`

####Ubuntu or Debain
To install it, update the package index on your server with apt:

`sudo apt update`

Then install the default package:

`sudo apt install mysql-server`

Run the security script:

`sudo mysql_secure_installation`

Start the MySQL Server:

`sudo /etc/init.d/mysql start`