-- Setting up database

-- sudo -u posrgres
CREATE USER my_user WITH PASSWORD '12356';
CREATE DATABASE db WITH OWNER='my_user';

-- sudo -u my_user psql db
CREATE TABLE my_table(
  id int,
  name text,
  age int
); 
INSERT INTO my_table(id, name, age) VALUES 
  (1, 'foo', 25),
  (2, 'bar', 30),
  (3, 'john', 45);
