import express from "express";
import { getCampaigns, createCampaign, updateCampaignStatus } from "../controllers/campaignController.js";
import { authMiddleware } from "../middleware/authMiddleware.js";
import { isAdmin } from "../middleware/roleMiddleware.js";

const router = express.Router();

router.get("/", authMiddleware, getCampaigns);
router.post("/", authMiddleware, isAdmin, createCampaign);
router.put("/:id", authMiddleware, isAdmin, updateCampaignStatus);

export default router;
