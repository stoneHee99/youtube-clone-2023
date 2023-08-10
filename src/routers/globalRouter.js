import express from "express";
import { showTrending } from "../controllers/videoController";
import { join, login } from "../controllers/userController";

const globalRouter = express.Router();

globalRouter.get("/", showTrending);
globalRouter.get("/join", join);
globalRouter.get("/login", login);

export default globalRouter;
