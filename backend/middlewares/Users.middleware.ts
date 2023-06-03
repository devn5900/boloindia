import { Next, ReqType, ResType } from "../utills/ReqResType";
import { resetPass, updateType } from "../utills/customTypes";
const { UserModel } = require("../models/User.model");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
require("dotenv").config();
const registerMiddleware = (req: ReqType, res: ResType, next: Next) => {
  const { name, email, phone, password } = req.body;
  if (
    !name ||
    typeof name !== "string" ||
    !email ||
    typeof email !== "string" ||
    !password ||
    typeof password !== "string"
  ) {
    return res.status(400).json({ msg: "Partial Content", status: false });
  }
  next();
};

const loginMiddleware = (req: ReqType, res: ResType, next: Next) => {
  const { email, password } = req.body;
  if (
    !email ||
    typeof email !== "string" ||
    !password ||
    typeof password !== "string"
  ) {
    return res.status(400).json({ msg: "Invalid Credentials", status: false });
  }
  next();
};
const updateProfileMiddleware = (req: ReqType, res: ResType, next: Next) => {
  const { name, email, phone } = req.body;
  let upObj: updateType = {};
  if (name) {
    upObj.name = name;
    delete req.body.name;
  }
  if (email) {
    upObj.email = email;
    delete req.body.email;
  }
  if (phone) {
    upObj.phone = phone;
    delete req.body.phone;
  }
  req.body.upObj = upObj;
  next();
};
const resetPasswordMiddleware = async (
  req: ReqType,
  res: ResType,
  next: Next
) => {
  const { t, i } = req.query;
  if (!t || !i) {
    return res.status(400).json({ msg: "Unauthorized Request", status: false });
  }

  try {
    const status = await UserModel.findOne({ _id: i });
    if (status) {
      jwt.verify(t, status.password, (err: Boolean, code: resetPass) => {
        if (!err && code && code._id == i) {
          next();
        } else {
          return res
            .status(400)
            .json({ msg: "Request timeout", status: false });
        }
      });
    } else {
      return res
        .status(400)
        .json({ msg: "Unauthorized Request", status: false });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({ msg: "Something went wrong !" });
  }
};
module.exports = {
  registerMiddleware,
  loginMiddleware,
  updateProfileMiddleware,
  resetPasswordMiddleware,
};
