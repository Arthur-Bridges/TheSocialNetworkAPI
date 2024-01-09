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
    } catch (err) {
      res.status(500).json({ message: "Oops issue on our end!" });
    }
  },
  async createThought(res, res) {
    try {
    } catch (err) {
      res.status(500).json({ message: "Oops issue on our end!" });
    }
  },
  async updateThought(res, res) {
    try {
    } catch (err) {
      res.status(500).json({ message: "Oops issue on our end!" });
    }
  },
  async deleteThought(res, res) {
    try {
    } catch (err) {
      res.status(500).json({ message: "Oops issue on our end!" });
    }
  },
  async createReaction(res, res) {
    try {
    } catch (err) {
      res.status(500).json({ message: "Oops issue on our end!" });
    }
  },
  async deleteReaction(res, res) {
    try {
    } catch (err) {
      res.status(500).json({ message: "Oops issue on our end!" });
    }
  },
};

export default manipulateUserThought;
