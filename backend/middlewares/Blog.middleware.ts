import { Next, ReqType, ResType } from "../utills/ReqResType";
const { isValidURL } = require("../utills/validators");
const {uploadImageOnCloudinary}= require("../utills/imageUploader");
const blogDataValidMiddlware = (req: ReqType, res: ResType, next: Next) => {
  const { title, category, author, content, isPublished, tags } = req.body;
  let image = null;

  // console.log(req.body,req.files);
  if (req.files) {
    image = req.files.image;
    req.body.image = image;
  }
  if (
    !title ||
    !author ||
    !content ||
    !image ||
    !category ||
    typeof category !== "string"
  ) {
    return res.status(206).json({ msg: "Partial Content", status: false });
  }
  if (tags && !Array.isArray(tags)) {
    return res.status(206).json({ msg: "Partial Content", status: false });
  }
  // if(!image&&!isValidURL(image)){
  //     return res.status(206).json({msg:"Partial Content",status:false});
  // }
  // if(typeof isPublished!=='boolean'){
  //     return res.status(206).json({msg:"Partial Content",status:false});

  // }
  next();
};
const commentValidMiddleware = (req: ReqType, res: ResType, next: Next) => {
  const { postId } = req.params;
  const { comment } = req.body;
  if (
    !postId ||
    !comment ||
    typeof comment !== "string" ||
    Array.isArray(comment)
  ) {
    return res.status(206).json({ msg: "Partial Content", status: false });
  }
  next();
};
const replyValidMiddleware = (req: ReqType, res: ResType, next: Next) => {
  const { commentId } = req.params;
  const { reply } = req.body;
  if (
    !commentId ||
    !reply ||
    typeof reply !== "string" ||
    Array.isArray(reply)
  ) {
    return res.status(206).json({ msg: "Partial Content", status: false });
  }
  next();
};
const uploadImageMiddleware = async (
  req: ReqType,
  res: ResType,
  next: Next
) => {
  const { image } = req.body;
  const folderName='stories';
  try {
    const isUpload = await uploadImageOnCloudinary(image,folderName);
    if(isUpload){
        req.body.image=isUpload.secure_url||isUpload.url;
        next();
    }else{
    return res.status(400).json({msg:"Invalid Image File",status:false});
    }
  } catch (error) {
    return res.status(400).json({msg:"Invalid Image File",status:false});
  }
};
module.exports = {
  blogDataValidMiddlware,
  commentValidMiddleware,
  replyValidMiddleware,
  uploadImageMiddleware,
};
