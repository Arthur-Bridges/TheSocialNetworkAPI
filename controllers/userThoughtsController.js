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
  async getSingleThought(res, res) {},
  async createThought(res, res) {},
  async updateThought(res, res) {},
  async deleteThought(res, res) {},
  async createReaction(res, res) {},
  async deleteReaction(res, res) {},
};

export default manipulateUserThought;
