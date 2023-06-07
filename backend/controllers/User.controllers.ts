import { ReqType, ResType } from "../utills/ReqResType";
const { UserModel } = require("../models/User.model");
require("dotenv").config();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { uploadImageOnCloudinary } = require("../utills/imageUploader");
const { mailTo } = require("../utills/mailer");
const userGet = async (req: ReqType, res: ResType) => {
  const { userId } = req.body;
  try {
    const status = await UserModel.findOne({ _id: userId });
    if (status) {
      let resObj = { ...status.toObject() };
      delete resObj.password;
      if (resObj.isUser) {
        delete resObj.isAdmin;
      } else {
        delete resObj.isUser;
      }
      return res.status(200).json({ data: resObj, status: true });
    }
  } catch (error) {
    return res.status(500).json({ msg: "Something went wrong !" });
  }
};
const regUser = async (req: ReqType, res: ResType) => {
  const { name, email, password, phone, image } = req.body;

  if (phone && typeof phone !== "number") {
    return res.status(400).json({ msg: "Partial Content", status: false });
  }
  if (image && typeof image !== "string") {
    return res.status(400).json({ msg: "Partial Content", status: false });
  }

  try {
    bcrypt.hash(
      req.body.password,
      process.env.KEY_SALTING,
      async (err: Boolean, code: String) => {
        req.body.password = code;
        const status = new UserModel(req.body);
        const isSave = await status.save();
        if (isSave) {
          return res
            .status(201)
            .json({ msg: "Registered Successfully !", status: true });
        } else {
          return res
            .status(400)
            .json({ msg: "Registered Failed !", status: false });
        }
      }
    );
  } catch (error) {
    return res.status(500).json({ msg: "Something went wrong", status: false });
  }
};
const logUser = async (req: ReqType, res: ResType) => {
  const { email, password } = req.body;

  try {
    const status = await UserModel.findOne({ email });
    if (status) {
      bcrypt.compare(
        password,
        status.password,
        (err: Boolean, code: Boolean) => {
          if (!err && code) {
            return res.status(200).json({
              msg: "Login Successfull",
              status: true,
              token: jwt.sign(
                {
                  isUser: status.isUser,
                  isAdmin: status.isAdmin,
                  _id: status._id,
                  userName: status.name,
                  userImg: status.image,
                },
                process.env.PRIVATE_KEY,
                { expiresIn: "1day" }
              ),
              data: { name: status.name, image: status.image },
            });
          } else {
            return res
              .status(400)
              .json({ msg: "Invaild Credentials", status: false });
          }
        }
      );
    } else {
      return res
        .status(400)
        .json({ msg: "Invaild Credentials", status: false });
    }
  } catch (error) {
    return res.status(500).json({ msg: "Something went wrong", status: false });
  }
};
const updateProfile = async (req: ReqType, res: ResType) => {
  const { upObj, userId } = req.body;
  try {
    const status = await UserModel.findByIdAndUpdate(
      { _id: userId },
      { ...upObj }
    );
    if (status) {
      return res.status(201).json({ msg: "Profile Updated", status: true });
    } else {
      return res
        .status(401)
        .json({ msg: "Profile can't be updated", status: false });
    }
  } catch (error) {
    return res.status(500).json({ msg: "Something went wrong !" });
  }
};
const forgetPassowrd = async (req: ReqType, res: ResType) => {
  const { userId, email } = req.body;
  try {
    const status = await UserModel.findOne({ _id: userId, email });
    if (status) {
      jwt.sign(
        { _id: status._id },
        status.password,
        { expiresIn: "5min" },
        (err: Boolean, code: String) => {
          if (!err && code) {
            let resetLink = `http://localhost:3000/user/resetpassword?t=${code}&i=${status._id}`;
            const mailOptions = {
              from: process.env.EMAIL_USER,
              to: status.email,
              subject: "Reset Your Password",
              text: resetLink,
            };
            console.log(resetLink);
            mailTo(mailOptions, (status: Boolean) => {
              if (status) {
                return res.status(200).json({
                  msg: "Password reset link has been sent to your mail",
                  status: true,
                });
              } else {
                return res
                  .status(400)
                  .json({ msg: "Something went wrong !", status: false });
              }
            });
          } else {
            return res
              .status(400)
              .json({ msg: "Invalid Credentials", status: false });
          }
        }
      );
    } else {
      return res
        .status(400)
        .json({ msg: "User doesn't exists", status: false });
    }
  } catch (error) {
    return res
      .status(500)
      .json({ msg: "Something went wrong !", status: false });
  }
};
const resetPassword = async (req: ReqType, res: ResType) => {
  const { newpassword } = req.body;
  const { t, i } = req.query;
  try {
    const status = await UserModel.findOne({ _id: i });
    bcrypt.hash(newpassword, 10, async (er: Boolean, enc: String) => {
      console.log(er, enc);
      if (!er && enc) {
        const stat = await UserModel.findByIdAndUpdate(
          { _id: i },
          { $set: { password: enc } }
        );
        if (stat) {
          console.log(er);
          return res
            .status(200)
            .json({ msg: "Password has been reset", status: true });
        } else {
          return res
            .status(203)
            .json({ msg: "Something went wrong !", status: false });
        }
      } else {
        return res
          .status(206)
          .json({ msg: "Partial Content !", status: false });
      }
    });
  } catch (error) {
    return res.status(400).json({ msg: "Request timeout", status: false });
  }
};
const uploadProfile = async (req: ReqType, res: ResType) => {
  const { image, userId } = req.body;
  const folderName = "users";
  try {
    const isUpload = await uploadImageOnCloudinary(image, folderName);
    if(isUpload){
      const imgUrl= isUpload.secure_url||isUpload.url;
      await UserModel.findByIdAndUpdate({_id:userId},{image:imgUrl});
      return res.status(201).json({msg:"success",data:imgUrl,status:true});
    }
  } catch (error) {
    return res.status(400).json({ msg: "Invalid Image File", status: false });
  }
};
module.exports = {
  userGet,
  regUser,
  logUser,
  updateProfile,
  uploadProfile,
  forgetPassowrd,
  resetPassword,
};
