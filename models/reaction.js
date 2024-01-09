import { model, Types, Schema } from "mongoose";
import moment from "moment";

const reactionSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
    },
    reactionId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
    },
    reactionBody: {
      type: String,
      required: true,
      maxlength: 180,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: (createdAtVal) =>
        moment(createdAtVal).format("MMM DD, YYYY [at] hh:mm a"),
    },
  },
  {
    toJson: {
      virtuals: true,
    },
    id: false,
  }
);

export const Reactions = model("reactions", reactionSchema);
