import pool from "../config/pool.js";

export async function getAllPlatforms() {
    const query = `
    SELECT * FROM platforms;
    `;
    return await pool.query(query);
}

export async function getPlatform(id) {
    const query = `
    SELECT * FROM platforms
    WHERE id = $1;
    `;
    return await pool.query(query, [id]);
}

export async function addPlatform(name, manufacturer = undefined) {
    const query = `
    INSERT INTO platforms (name, manufacturer) VALUES ($1, $2);
    `;
    await pool.query(query, [name, manufacturer]);
}

export async function removePlatform(id) {
    const query = `
    DELETE FROM platforms
    WHERE id = $1;
    `;
    await pool.query(query, [id]);
}

export async function updatePlatform(id, name, manufacturer = undefined) {
    const query = `
    UPDATE platforms
    SET name = $2,
        manufacturer = $3
    WHERE id = $1;
    `;

    await pool.query(query, [id, name, manufacturer]);
}
