import pool from "../config/pool.js";

export async function getAllDevelopers() {
    const query = `
    SELECT * FROM developers;
    `;
    return await pool.query(query);
}

export async function getDeveloper(id) {
    const query = `
    SELECT * FROM developers
    WHERE id = $1;
    `;
    return await pool.query(query, [id]);
}

export async function addDeveloper(name, headquarters = undefined) {
    const query = `
    INSERT INTO developers (name, headquarters) VALUES ($1, $2);
    `;
    await pool.query(query, [name, headquarters]);
}

export async function removeDeveloper(id) {
    const query = `
    DELETE FROM developers
    WHERE id = $1;
    `;
    await pool.query(query, [id]);
}

export async function updateDeveloper(id, name, headquarters = undefined) {
    const query = `
    UPDATE developers
    SET name = $2,
        headquarters = $3
    WHERE id = $1;
    `;

    await pool.query(query, [id, name, headquarters]);
}

// addDeveloper("Chicken Company", "Cheese Land");
removeDeveloper(1);
updateDeveloper(2, "New Chicken");
