import express from "express";
import { getCampaigns, createCampaign, updateCampaignStatus, updateCampaign, toggleCampaignActive, closeCampaignManually } from "../controllers/campaignController.js";
import { authMiddleware } from "../middleware/authMiddleware.js";
import { isAdmin } from "../middleware/roleMiddleware.js";

const router = express.Router();

router.get("/", authMiddleware, getCampaigns);
router.post("/", authMiddleware, isAdmin, createCampaign);
router.put("/:id", authMiddleware, isAdmin, updateCampaignStatus);

router.put("/:id", authMiddleware, isAdmin, updateCampaign); // editar detalles
router.patch("/:id/enable", authMiddleware, isAdmin, toggleCampaignActive); //activar / desactivar (active flag)
router.post("/:id/close", authMiddleware, isAdmin, closeCampaignManually); //Manual close

export default router;
