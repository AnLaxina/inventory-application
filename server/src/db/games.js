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
