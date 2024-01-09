import { model, Types, Schema } from "mongoose";
import moment from "moment";

const thoughtSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
    },
    reactions: [reactionSchema],
    thoughtText: {
      type: String,
      required: true,
      minlength: 1,
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
      getter: true,
    },
    id: false,
  }
);

thoughtSchema.virtual("reactionCount").get(function () {
  return this.reactions.length;
});

export const UserThoughts = model("UserThoughts", thoughtSchema);
