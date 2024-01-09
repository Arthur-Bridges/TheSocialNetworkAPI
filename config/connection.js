import { connect, connection } from "mongoose";
//TODO: set the connection => database
const connectDB = await connect("mongodb://127.0.0.1:27017/TheSocialNetworkAPI");

export default connectDB;
