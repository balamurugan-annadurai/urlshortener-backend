import express from "express"
import { openShortUrl } from "../Controllers/user.controller.js";

const router = express.Router();

router.get("/:shortId", openShortUrl);

export default router;