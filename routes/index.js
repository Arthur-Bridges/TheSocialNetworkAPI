import express from "express";
import apiRoutes from "./api/index.js";

const router = express.Router();

router.use("/api", apiRoutes);

router.use((req, res) => res.status(404).json({ message: "Incorred Route!" }));

export default router;
