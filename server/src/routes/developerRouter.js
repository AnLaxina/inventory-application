import * as developerController from "../controllers/developerController.js";
import { Router } from "express";

const developerRouter = Router();

developerRouter.get("/", developerController.getAllDevelopers);
developerRouter.get("/:id", developerController.getDeveloper);

export default developerRouter;
