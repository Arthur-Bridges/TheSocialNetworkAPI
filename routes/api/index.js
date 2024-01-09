import express from "express";
import userRoutes from "./userRoute";
import userThoughtsRoute from "./userThoughtsRoute";

const router = express.Router();

router.use("/users", userRoutes);
router.use("/thoughts", userThoughtsRoute);

export default router;
