import { connect, connection } from "mongoose";
//TODO: set the connection => database
connect("mongodb://127.0.0.1:27017/developersApplications");

export default connection;
