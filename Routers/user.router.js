import express from "express";
import { accountActivation, changePassword, createShorturl, forgotPassword, getShortUrlsCreated, login, openShortUrl, register, verifyString, getDashboardData } from "../Controllers/user.controller.js";

const router = express.Router(); // Create a new router object using Express

// Define routes
router.post("/register", register);
router.post("/login", login);
router.post("/forgotpassword", forgotPassword);
router.post("/verifystring", verifyString);
router.post("/changepassword", changePassword);
router.post("/activateaccount", accountActivation);
router.post("/createshorturl", createShorturl);

router.post("/getshorturlscreated", getShortUrlsCreated);

router.post("/dashboard", getDashboardData); 

export default router;
