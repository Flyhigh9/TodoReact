import { Router } from "express";
import { postRegistration, postLogin } from "../controllers/UserController.js";

const userRouter = Router();

userRouter.post("/register", postRegistration);
userRouter.post("/login", postLogin);

export default userRouter;