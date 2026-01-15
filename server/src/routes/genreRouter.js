import * as genreController from "../controllers/genreController.js";
import { Router } from "express";

const genreRouter = Router();

genreRouter.get("/", genreController.getAllGenres);

export default genreRouter;
