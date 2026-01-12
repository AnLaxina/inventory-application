import * as db from "../db/developers.js";

export async function getAllDevelopers(req, res) {
    const { rows } = await db.getAllDevelopers();
    res.json(rows);
}

export async function getDeveloper(req, res) {
    const { rows } = await db.getDeveloper(Number(req.params.id));
    res.json(rows[0]);
}

export async function postNewDeveloper(req, res) {
    const formData = req.body;

    db.addDeveloper(
        formData.developerName,
        formData.headquarters === "" ? undefined : formData.headquarters
    );
    res.status(201).send({ Message: "Developer added!" });
}
