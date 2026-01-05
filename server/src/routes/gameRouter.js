import * as gameController from "../controllers/gameController.js";
import { Router } from "express";

const gameRouter = Router();

gameRouter.get("/", gameController.getAllGames);
gameRouter.get("/:id", gameController.getGameDetails);

export default gameRouter;
