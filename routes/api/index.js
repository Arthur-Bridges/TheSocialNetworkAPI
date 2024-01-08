import router from "express";
import userRoutes from "./userRoute";
import userThoughtsRoute from "./userThoughtsRoute";

router.use("/users", userRoutes);
router.use("/thoughts", userThoughtsRoute);

export default router;
