import express from "express";
import { getCandidatesByCampaign, createCandidate } from "../controllers/candidateController.js";
import { authMiddleware } from "../middleware/authMiddleware.js";
import { isAdmin } from "../middleware/roleMiddleware.js";

const router = express.Router();

router.get("/:campaign_id", authMiddleware, getCandidatesByCampaign);
router.post("/", authMiddleware, isAdmin, createCandidate);

export default router;