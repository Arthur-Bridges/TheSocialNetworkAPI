import { model, Types, Schema } from "mongoose";

const userSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },

    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    userThoughts: [
      {
        type: Schema.Types.ObjectId,
        ref: "userThoughts",
      },
    ],
    friends: [
      {
        types: Schema.Types.ObjectId,
        ref: "User",
      },
    ],
  },
  {
    toJson: {
      virtuals: true,
    },
    id: false,
  }
);

userSchema.virtual("friendCount").get(function () {
  return this.friends.length;
});

export const User = model("User", userSchema);
