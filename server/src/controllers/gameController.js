import * as db from "../db/games.js";

export async function getAllGames(req, res) {
    const { rows } = await db.getAllGames();
    res.json(rows);
}
export async function getGameDetails(req, res) {
    const { rows } = await db.getGame(req.params.id);
    res.json(rows[0]);
}
