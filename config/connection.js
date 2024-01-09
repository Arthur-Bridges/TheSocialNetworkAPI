// import mongoose from "mongoose";
import mongoose from "mongoose";

mongoose.connect("mongodb://127.0.0.1:27017/TheSocialNetworkAPI");
export const db = mongoose.connection;
