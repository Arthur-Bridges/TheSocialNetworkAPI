import express from "express";
//importing all methods from userThooughtsController.js
import { manipulateUserThought } from "../../controllers/userThoughtsController.js";
const data = manipulateUserThought;
const router = express.Router();

router.route("/").get(data.getThought).post(data.createThought);

router
  .route("/:thoughtId")
  .get(data.getSingleThought)
  .put(data.updateThought)
  .delete(data.deleteThought);

router.route("/:thoughtId/reactions").post(data.createReaction);

router.route("/:thoughtId/reactions/:reactionId").delete(data.deleteReaction);

export default router;
