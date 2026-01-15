import * as db from "../db/genres.js";

export async function getAllGenres(req, res) {
    const { rows } = db.getAllGenres();
    return rows;
}

export async function postNewGenre(req, res) {
    const formData = req.body;
    await db.addGenre(formData.name, formData.description);
    res.status(201).send({ Message: "Genre added!" });
}
