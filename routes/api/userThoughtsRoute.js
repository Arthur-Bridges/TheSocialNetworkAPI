import express from "express";
//importing all methods from userThooughtsController.js
import { manipulateUserThought } from "../../controllers/userThoughtsController.js";

const router = express.Router();

router.route("/").get(getThought).post(createThought);

router
  .route("/:thoughtId")
  .get(getSingleThought)
  .put(updateThought)
  .delete(deleteThought);

router.route("/:thoughtId/reactions").post(createReaction);

router.route("/:thoughtId/reactions/:reactionId").delete(deleteReaction);

export default router;
