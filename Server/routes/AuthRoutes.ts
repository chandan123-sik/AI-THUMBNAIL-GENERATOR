import express from "express";
import {registerUser, loginUser, logoutUser, VerifyUser } from "../controllers/AuthControllers.js";
import protect from "../middleware/auth.js";

const AuthRouter = express.Router();

AuthRouter.post('/register', registerUser);
AuthRouter.post('/login', loginUser);
AuthRouter.get('/verify', protect, VerifyUser);
AuthRouter.post('/logout', protect, logoutUser);

export default AuthRouter;
