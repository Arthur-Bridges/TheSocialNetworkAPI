import express from "express";
//importing all methods from userController.js
import { manipulateUserData } from "../../controllers/userController.js";
const router = express.Router();
const data = manipulateUserData;

router.route("/").get(data.getUsers).post(data.createUser);

router
  .route("/:userId")
  .get(data.getSingleUser)
  .put(data.updateUser)
  .delete(data.deleteUser);

router
  .route("/:userId/friends/:friendId")
  .post(data.addFriend)
  .delete(data.deleteFriend);

export default router;
