import * as genreController from "../controllers/genreController.js";
import { Router } from "express";

const genreRouter = Router();

genreRouter.get("/", genreController.getAllGenres);
genreRouter.post("/create", genreController.postNewGenre);

export default genreRouter;
