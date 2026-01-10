import * as db from "../db/developers.js";
import Express from "express";

export async function getAllDevelopers(req, res) {
    const { rows } = await db.getAllDevelopers();
    res.json(rows);
}

export async function getDeveloper(req, res) {
    const { rows } = await db.getDeveloper(Number(req.params.id));
    res.json(rows[0]);
}

export async function postNewDeveloper(req, res) {
    console.log("Post for a new developer!");
    res.send({ coolGuy: "Chicken" });
}
