import express from "express";
//importing all methods from userController.js
import {
  getUser,
  getSingleUser,
  createUser,
  updateUser,
  deleteUser,
  addFriend,
  deleteFriend,
} from "../../controllers/userController";

const router = express.Router();

router.route("/").get(getUser).post(createUser);

router.route("/:userId").get(getSingleUser).put(updateUser).delete(deleteUser);

router.route("/:userId/friends/:friendId").post(addFriend).delete(deleteFriend);

export default router;
