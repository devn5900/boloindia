import { ReqType, ResType } from "../utills/ReqResType";

const express = require("express");
const { connection: dbConnection } = require("../connection/db.connection");
require("dotenv").config();
const { userRouter } = require("../routes/Users.route");
const {blogRouter}= require("../routes/Blog.route")
const {SubRouter}= require("../routes/Subscriber.route");
const fileUpload= require("express-fileupload");
const cors= require("cors");
const app = express();
const port = process.env.PORT || 8080;
app.use(cors());
app.use(express.json());

/////////////////////////////**Routes**/////////////////////////////////////////
app.use("/user", fileUpload({useTempFiles:true}),userRouter);
app.use("/blogs",fileUpload({useTempFiles:true}),blogRouter);
app.use("/subscriber",SubRouter);
///////////////////////////////////////////////////////////////////////
app.get("/", (req: ReqType, res: ResType) => {
  res.send("get");
});
app.get("*", (req: ReqType, res: ResType) => {
  res.send("Not Found");
});
app.listen(port, () => {
  console.log(`server is running on localhost:${port}`);
  dbConnection();
});
