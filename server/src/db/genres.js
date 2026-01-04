import pool from "../config/pool.js";

export async function getAllGenres() {
    const query = `
    SELECT * FROM genres;
    `;
    return await pool.query(query);
}

export async function getGenre(id) {
    const query = `
    SELECT * FROM genres
    WHERE id = $1;
    `;
    return await pool.query(query, [id]);
}

export async function addGenre(name, description = undefined) {
    const query = `
    INSERT INTO genres (name, description) VALUES ($1, $2);
    `;
    await pool.query(query, [name, description]);
}

export async function removeGenre(id) {
    const query = `
    DELETE FROM genres
    WHERE id = $1;
    `;
    await pool.query(query, [id]);
}

export async function updateGenre(id, name, description = undefined) {
    const query = `
    UPDATE genres
    SET name = $2,
        description = $3
    WHERE id = $1;
    `;

    await pool.query(query, [id, name, description]);
}
