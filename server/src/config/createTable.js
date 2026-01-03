// Yeah, this should only be run once. Sets up the db by creating multiple tables!
import pool from "./pool.js";
import "dotenv/config";

const createDevelopersTable = `
    CREATE TABLE IF NOT EXISTS developers (
    id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    name TEXT,
    headquarters TEXT
    );
`;

const createGenresTable = `
 CREATE TABLE IF NOT EXISTS genres(
 id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
 name TEXT,
 description TEXT
 );
`;

const createPlatformsTable = `
CREATE TABLE IF NOT EXISTS platforms(
id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
name TEXT,
manufacturer TEXT
);
`;

const createGamesTable = `
CREATE TABLE IF NOT EXISTS games(
id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
title TEXT,
price MONEY,
stock_quantity INTEGER,
release_date DATE,
developer_id INTEGER REFERENCES developers(id),
genre_id INTEGER REFERENCES genres(id),
platform_id INTEGER REFERENCES platforms(id)
);
`;

console.log("Creating tables for db...");

await pool.query(createDevelopersTable);
await pool.query(createGenresTable);
await pool.query(createPlatformsTable);
await pool.query(createGamesTable);
console.log("Done table creation!");
