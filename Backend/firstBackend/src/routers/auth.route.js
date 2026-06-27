import express from 'express';
import { LoginUser, LogoutUser,RegisterUser } from '../controllers/auth.controller.js';
import { sampleMiddleWare,sampleMiddleWare2 } from '../middlewares/auth.middleware.js';

const router = express.Router();

router.post("/login",sampleMiddleWare,sampleMiddleWare2,LoginUser);
router.post("/register",sampleMiddleWare,sampleMiddleWare2, RegisterUser)
router.get("/logout",LogoutUser);

export default router;