import express from "express";
import userRoutes from "./userRoute.js";
import userThoughtsRoute from "./userThoughtsRoute.js";

const router = express.Router();

router.use("/users", userRoutes);
router.use("/thoughts", userThoughtsRoute);

export default router;
