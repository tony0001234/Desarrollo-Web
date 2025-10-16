import express from "express";
import { castVote, getResults } from "../controllers/voteController.js";
import { authMiddleware } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/", authMiddleware, castVote);
router.get("/results/:campaign_id", authMiddleware, getResults);

export default router;