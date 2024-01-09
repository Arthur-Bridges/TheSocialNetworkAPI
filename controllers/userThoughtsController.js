import { User } from "../models/User.js";
import { UserThoughts } from "../models/userThoughts.js";

export const manipulateUserThought = {
  //Retrieve thoughts
  async getThought(req, res) {
    try {
      const thoughts = await UserThoughts.find({});
      if (thoughts) {
        res.json(thoughts);
      } else {
        res.status(500).json({ message: "Failed to retrieve thoughts!" });
      }
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: "Oops issue on our end!" });
    }
  },
  //Retrieve single thoughts
  async getSingleThought(req, res) {
    try {
      const thoughts = await UserThoughts.findOne({
        _id: req.params.thoughtId,
      }).select("-__v");
      if (thoughts) {
        res.json(thoughts);
      } else {
        res
          .status(404)
          .json({ message: "No THOUGHT found with the specified ID!" });
      }
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: "Oops issue on our end!" });
    }
  },
  //creating thought
  async createThought(req, res) {
    try {
      const { throughText, username } = req.body;
      const newThought = await UserThoughts.create({
        thoughtText: throughText,
        username,
      });
      const users = await User.findOneAndUpdate(
        { _id: req.body.userId },
        { $push: { userThoughts: newThought._id } },
        { new: true }
      );
      if (users) {
        res.json(newThought);
      } else {
        res
          .status(404)
          .json({ message: "No USER found with the specified ID!" });
      }
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: "Oops issue on our end!" });
    }
  },
  //updating thoughts
  async updateThought(req, res) {
    try {
      const { throughText } = req.body;
      const thoughts = await UserThoughts.findOneAndUpdate(
        { _id: req.params.thoughtId },
        { $set: { thoughtText: throughText } },
        { runValidators: true, new: true }
      );
      if (thoughts) {
        res
          .status(200)
          .json({ message: "Successfully updated!", data: thoughts });
      } else {
        res
          .status(404)
          .json({ message: "No USER found with the specified ID!" });
      }
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: "Oops issue on our end!" });
    }
  },
  //deleting thoughts
  async deleteThought(req, res) {
    try {
      const { throughText } = req.body;
      const thoughts = await UserThoughts.findOneAndDelete({
        _id: req.params.thoughtId,
      });
      if (!thoughts) {
        res.status(404).json({ message: "No THOUGHT with specified ID!" });
      }

      const users = await User.findOneAndUpdate(
        { userThoughts: req.params.userThoughtsId },
        { $pull: { userThoughts: req.params.userThoughtsId } },
        { new: true }
      );
      if (users) {
        res.status(200).json({ message: "Successfully deleted!" });
      } else {
        res.status(404).json({ message: "THOUGHT deleted! USER NOT FOUND !" });
      }
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: "Oops issue on our end!" });
    }
  },
  //Create reaction
  async createReaction(req, res) {
    try {
      const thoughts = await UserThoughts.findOneAndUpdate(
        { _id: req.params.thoughtId },
        { $addToSet: { reactions: req.body } },
        { runValidators: true, new: true }
      );
      if (thoughts) {
        res
          .status(200)
          .json({ message: "Successfully created reaction!", data: thoughts });
      } else {
        res.status(404).json({ message: "THOUGHT not found with this ID" });
      }
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: "Oops issue on our end!" });
    }
  },
  //Delete reaction
  async deleteReaction(req, res) {
    try {
      const thoughts = await UserThoughts.findOneAndUpdate(
        { _id: req.params.thoughtId },
        { $pull: { reactions: { reactionId: req.params.reactionId } } },
        { runValidators: true, new: true }
      );
      if (thoughts) {
        res
          .status(200)
          .json({ message: "Successfully deleted reaction!", data: thoughts });
      } else {
        res.status(404).json({ message: "THOUGHT not found with this ID" });
      }
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: "Oops issue on our end!" });
    }
  },
};
