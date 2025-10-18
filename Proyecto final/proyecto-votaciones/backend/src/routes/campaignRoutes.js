import express from "express";
import { getCampaigns, createCampaign, updateCampaignStatus, updateCampaign, toggleCampaignActive, closeCampaignManually, getAllCampaigns, getCampaignById } from "../controllers/campaignController.js";
import { authMiddleware } from "../middleware/authMiddleware.js";
import { isAdmin } from "../middleware/roleMiddleware.js";

const router = express.Router();


router.post("/", authMiddleware, isAdmin, createCampaign);
router.put("/:id", authMiddleware, isAdmin, updateCampaignStatus);

router.put("/:id", authMiddleware, isAdmin, updateCampaign); // editar detalles
router.patch("/:id/enable", authMiddleware, isAdmin, toggleCampaignActive); //activar / desactivar (active flag)
router.post("/:id/close", authMiddleware, isAdmin, closeCampaignManually); //Manual close

router.get("/", authMiddleware, getCampaigns);
router.get("/", getAllCampaigns);
router.get("/:id", getCampaignById);

export default router;
