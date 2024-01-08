import { User, UserThoughts, Reactions } from "../models";
//404 user input error
//500 something went wrong on MY/SERVER end
const manipulateUserData = {
  async getUsers(req, res) {
    try {
      const users = await User.find({});
      res.json(users);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  async getSingleUser(req, res) {
    try {
      const users = await User.findOne({ _id: req.params.userId })
        .populate("thoughts")
        .populate("friends")
        .select("-__v");
      if (users) {
        res.json(users);
      } else {
        res
          .status(404)
          .json({ message: "No User found with the specified ID" });
      }
    } catch (err) {
      res.status(500).json(err);
    }
  },

  async createUser(req, res) {
    try {
      const users = await User.create(req.body);
      res.json(users);
    } catch (err) {
      res.status(500), json(err);
      console.log(err);
    }
  },

  async updateUser(req, res) {
    try {
      const users = await User.findOneAndUpdate(
        { _id: req.params.userId },
        { $set: req.body },
        { runValidators: true, new: true }
      );

      if (users) {
        res.json(users);
      } else {
        res.status(404).json({
          message: "No User found with the specified ID cannot update!",
        });
      }
    } catch (err) {
      res.status(500).json(err);
    }
  },

  async deleteUser(req, res) {
    try {
      const users = await User.findOneAndDelete({ _id: req.params.userId });
      if (users) {
        await userThoughts.deleteMany({ _id: { $in: users.thoughts } });
        res
          .status(200)
          .json({ message: "Sucessful deletion of user and user Thoughts!!" });
      } else {
        res.status(404).json({
          message: "No User found with the specified ID cannot delete!",
        });
      }
    } catch (err) {
      res.status(500).json(err);
    }
  },

  async addFriend(req, res) {
    try {
      const users = await User.findOneAndUpdate(
        { _id: req.params.userId },
        { $addToSet: { friends: req.params.userId } },
        { runValidators: true, new: true }
      );
      if (users) {
        res.status(200).json({ message: "Successfully Added!" });
        res.json(users);
      } else {
        res
          .status(404)
          .json({ message: "No User found with the specified ID cannot add!" });
      }
    } catch (err) {
      res.status(500).json({
        message: "Oops an issue occured on our end.",
      });
    }
  },

  async deleteFriend(req, res) {
    try {
      const users = await User.findOneAndUpdate(
        { _id: req.params.userId },
        { $pull: { friends: req.params.userId } },
        { new: true }
      );
      if (users) {
        res.status(200).json({ message: "Successfully deleted!" });
        res.json(users);
      } else {
        res.status(404).json({
          message: "No User found with the specified ID cannot delete!",
        });
      }
    } catch (err) {
      res.status(500).json({
        message: "Oops an issue occured on our end.",
      });
    }
  },
};

export default manipulateUserData;
