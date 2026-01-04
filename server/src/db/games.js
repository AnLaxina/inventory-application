import pool from "../config/pool.js";

// Get the following info for all games:
// - gameId
// - title
// - price
// - stock_quantity
// - release_date
// Must do a left join to show null values too
// - developer_name
// - genre_name
// - platform_name
export async function getAllGames() {
    const query = `
    SELECT
        games.id AS id,
        games.title as title,
        games.price AS price,
        games.stock_quantity AS stock,
        games.release_date AS release_date,
        developers.name AS developer,
        genres.name AS genre,
        platforms.name AS platform
    FROM
        games
        LEFT JOIN developers ON games.developer_id = developers.id
        LEFT JOIN genres ON games.genre_id = genres.id
        LEFT JOIN platforms on games.platform_id = platforms.id;
    `;

    return await pool.query(query);
}

export async function getGame(id) {
    const query = `
    SELECT
        games.id AS id,
        games.title as title,
        games.price AS price,
        games.stock_quantity AS stock,
        games.release_date AS release_date,
        developers.name AS developer,
        genres.name AS genre,
        platforms.name AS platform
    FROM
        games
        LEFT JOIN developers ON games.developer_id = developers.id
        LEFT JOIN genres ON games.genre_id = genres.id
        LEFT JOIN platforms on games.platform_id = platforms.id
        WHERE game.id = $1;
    `;

    return await pool.query(query, [id]);
}

export async function addGame(
    title,
    price,
    quantity,
    releaseDate = new Date(),
    developerId,
    genreId,
    platformId
) {
    const query = `
    INSERT INTO games 
    (title, price, stock_quantity, release_date, developer_id, genre_id, platform_id)
    VALUES
    ($1, $2, $3, $4, $5, $6, $7);
    `;

    await pool.query(query, [
        title,
        price,
        quantity,
        releaseDate,
        developerId,
        genreId,
        platformId,
    ]);
}

export async function removeGame(id) {
    const query = `
    DELETE FROM games
    WHERE id = $1;
    `;

    await pool.query(query, [id]);
}

export async function updateGame(
    id,
    title,
    price,
    quantity,
    releaseDate = new Date(),
    developerId,
    genreId,
    platformId
) {
    const query = `
    UPDATE games
    SET title = $2,
        price = $3,
        quantity = $4,
        release_date = $5,
        developer_id = $6,
        genre_id = $7,
        platform_id = $8
    WHERE id = $1;
    `;

    await pool.query(query, [
        id,
        title,
        price,
        quantity,
        releaseDate,
        developerId,
        genreId,
        platformId,
    ]);
}

await addGame("Chicken Tenders", 50.99, 5, new Date(), 1, 1, 1);
