import express from "express";
import { authMiddleware } from "../middleware/authMiddleware.js";
import { isAdmin } from "../middleware/roleMiddleware.js";
import { getGeneralReport, getCampaignReport } from "../controllers/reportController.js";

const router = express.Router();

router.get("/summary", authMiddleware, isAdmin, getGeneralReport);
router.get("/campaign/:id", authMiddleware, isAdmin, getCampaignReport);

export default router;