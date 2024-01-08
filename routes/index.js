import router from 'express';
import apiRoutes from "./api";

router.use("/api", apiRoutes);

router.use((req, res) => res.status(404).json({ message: "Incorred Route!"}))l

export default router;