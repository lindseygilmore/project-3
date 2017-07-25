CREATE DATABASE events;

\c events;

CREATE TABLE event (id SERIAL PRIMARY KEY, name VARCHAR (255), company_hosting VARCHAR(255), price INT, location VARCHAR (255), event_date VARCHAR (255), city_id INT);

CREATE TABLE city (id SERIAL PRIMARY KEY, name VARCHAR(255), state VARCHAR(255));

CREATE TABLE users (id SERIAL PRIMARY KEY, email VARCHAR(255), password_digest VARCHAR(255), token VARCHAR(255));


ALTER TABLE event ADD COLUMN image_url VARCHAR(255);

INSERT INTO event (name, company_hosting, price, location, event_date, city_id, image_url) 
VALUES ('Beach Boys', 'Wrigley', '20.00', 'Chicago, IL', '8/8/17', 3, 'http://img.wennermedia.com/920-width/rs-135002-square.jpg');