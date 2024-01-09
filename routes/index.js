import express from 'express';
import apiRoutes from "./api";

const router = express.Router();
router.use("/api", apiRoutes);

router.use((req, res) => res.status(404).json({ message: "Incorred Route!"}))l

export default router;