CREATE DATABASE events;

\c events;

CREATE TABLE event (id SERIAL PRIMARY KEY, name VARCHAR (255), company_hosting VARCHAR(255), price VARCHAR(255), location VARCHAR (255), event_date VARCHAR (255), city_id INT);

CREATE TABLE city (id SERIAL PRIMARY KEY, name VARCHAR(255), state VARCHAR(255));

CREATE TABLE users (id SERIAL PRIMARY KEY, email VARCHAR(255), password_digest VARCHAR(255), token VARCHAR(255));
#to add something to a table:
-- INSERT INTO <tblname> (name, size, color, price, hooded, image_url)
-- VALUES ();

#to add a column to a table
-- ALTER TABLE <tblname> ADD COLUMN token VARCHAR(255);
