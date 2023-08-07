import express from "express";
import { showTrending } from "../controllers/videoController";
import { join } from "../controllers/userController";

const globalRouter = express.Router();

globalRouter.get("/", showTrending);
globalRouter.get("/join", join);

export default globalRouter;
