import * as db from "../db/genres.js";

export async function getAllGenres(req, res) {
    const { rows } = db.getAllGenres();
    return rows;
}
