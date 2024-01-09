//TODO:
import { User, UserThoughts, Reactions } from "../models";

const manipulateUserThought = {
  async getThought(req, res) {
    try {
      const thoughts = await UserThoughts.find({});
      if (thoughts) {
        res.json(thoughts);
      } else {
        res.status(500).json({ message: "Failed to retrieve thoughts!" });
      }
    } catch (err) {
      res.status(500).json({ message: "Oops issue on our end!" });
    }
  },
  async getSingleThought(res, res) {
    try {
      const thoughts = await UserThoughts.findOne({
        _id: req.params.UserThoughtsId,
      }).select("-__v");
      if (thoughts) {
        res.json(thoughts);
      } else {
        res
          .status(404)
          .json({ message: "No THOUGHT found with the specified ID!" });
      }
    } catch (err) {
      res.status(500).json({ message: "Oops issue on our end!" });
      res.json(err);
    }
  },
  async createThought(res, res) {
    try {
      const newThought = await UserThoughts.create(req.body);
      const users = await User.findOneAndUpdate(
        { _id: req.params.userid },
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
      res.status(500).json({ message: "Oops issue on our end!" });
      res.json(err);
    }
  },
  async updateThought(res, res) {
    try {
      const thoughts = await UserThoughts.findOneAndUpdate(
        { _id: req.params.UserThoughtsId },
        { $set: req.body },
        { runValidators: true, new: true }
      );
      if (thoughts) {
        res.status(200).json({ message: "Successfully updated!" });
        res.json(thoughts);
      } else {
        res
          .status(404)
          .json({ message: "No USER found with the specified ID!" });
      }
    } catch (err) {
      res.status(500).json({ message: "Oops issue on our end!" });
      res.json(err);
    }
  },
  async deleteThought(res, res) {
    try {
      const thoughts = await UserThoughts.findOneAndDelete({
        _id: req.params.UserThoughtsId,
      });
      if (thoughts) {
        res.status(200).json({ message: "Successfully retrieved!" });
      } else {
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
      res.status(500).json({ message: "Oops issue on our end!" });
      res.json(err);
    }
  },
  async createReaction(res, res) {
    try {
      const thoughts = await UserThoughts.findOneAndUpdate(
        { _id: req.params.UserThoughtsId },
        { $addToSet: { reactions: req.body } },
        { runValidators: true, new: true }
      );
      if (thoughts) {
        res.status(200).json({ message: "Successfully created reaction!" });
        res.json(thoughts);
      } else {
        res.status(404).json({ message: "THOUGHT not found with this ID" });
      }
    } catch (err) {
      res.status(500).json({ message: "Oops issue on our end!" });
      res.json(err);
    }
  },
  async deleteReaction(res, res) {
    try {
      const thoughts = await UserThoughts.findOneAndUpdate(
        { _id: req.params.UserThoughtsId },
        { $pull: { reactions: { reactionId: req.params.reactionId } } },
        { runValidators: true, new: true }
      );
      if (thoughts) {
        res.status(200).json({ message: "Successfully deleted reaction!" });
        res.json(thoughts);
      } else {
        res.status(404).json({ message: "THOUGHT not found with this ID" });
      }
    } catch (err) {
      res.status(500).json({ message: "Oops issue on our end!" });
      res.json(err);
    }
  },
};

export default manipulateUserThought;
