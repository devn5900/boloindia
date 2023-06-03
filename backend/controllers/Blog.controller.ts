import { ReqType, ResType } from "../utills/ReqResType";
import { blogData, catType, queryType, toBeUpdatedType } from "../utills/customTypes";
const { blogModel } = require("../models/Blog.model");
const { commentsModel } = require("../models/Comments.model");
const mong = require("mongoose");
const getBlog = async (req: ReqType, res: ResType) => {
  const { type, q, sort, order, page, limit,category,title,author,content } = req.query;
  const exclude = type == "view" ? "-comments" : "";
  const popu = type !== "view" ? "comments" : "";
  let query:queryType = {isPublished:true};
  let perPage = 10;
  let pagination = 1;
  let sortBy:any = "";
  if (q) {
    query.$or = [
      { title: { $regex: `.*${q}.*`, $options: "i" } },
      { author: { $regex: `.*${q}.*`, $options: "i" } },
      { content: { $regex: `.*${q}.*`, $options: "i" } },
      { tags: { $regex: `.*${q}.*`, $options: "i" } },
    ];
  }
  if (page) {
    pagination = +page;
  }
  if (limit) {
    perPage = +limit;
  }
  if (sort) {
    sortBy = { [sort]: order ? order : "asc" };
  }
  if (category) {
    if (Array.isArray(category)) {
      if (!query.$or) {
        query.$or = [];
      }
      let catQuery:Array<catType>=[];
      category.forEach((el) => {

        catQuery.push({ category: { $regex: `.*${el}.*`, $options: "i" } });
      });
      query.$or=[...query.$or,...catQuery]
    } else {
      query.category = { $regex: `.*${category}.*`, $options: "i" };
    }
  }
  if (title) {
    query.title = { $regex: `.*${title}.*`, $options: "i" };
  }
  if (author) {
    query.author = { $regex: `.*${author}.*`, $options: "i" };
  }
  if (content) {
    query.content = { $regex: `.*${content}.*`, $options: "i" };
  }
  try {
    const status = await blogModel
      .find(query)
      .sort(sortBy)
      .skip((pagination - 1) * perPage)
      .limit(perPage)
      .select(exclude)
      .populate({ path: popu })
      .exec();
    res.status(200).json({msg:"success",data:status,status:true});
  } catch (error) {
    return res.status(500).json({ msg: "Something went wrong", status: false });

  }
};

const postBlog = async (req: ReqType, res: ResType) => {
  const {
    title,
    image,
    author,
    content,
    isPublished,
    tags,category,
    userName,
    userId,
    userImg,
  } = req.body;
  let data: blogData = {
    title,
    author,
    content,
    category,
    createdBy: { name: userName, image: userImg, userId },
  };
  if (isPublished === true || isPublished === false) {
    data.isPublished = isPublished;
  }
  if (tags) {
    data.tags = tags;
  }
  if (image) {
    data.image = image;
  }

  try {
    const status = new blogModel(data);
    const isSave = await status.save();
    return res
      .status(201)
      .json({ msg: "Blog Uploaded", data: isSave, status: true });
  } catch (error) {
    return res.status(500).json({ msg: "Something went wrong", status: false });
  }
};
const postComment = async (req: ReqType, res: ResType) => {
  const { postId } = req.params;
  const { comment, userName, userImg } = req.body;
  const data = { name: userName, image: userImg, comment };
  try {
    const blogStat = await blogModel.findOne({ _id: postId });
    if (blogStat) {
      const cmntStat = new commentsModel({ blogId: postId, comments: data });
      const saveComment = await cmntStat.save();
      if (saveComment) {
        await blogModel.findOneAndUpdate(
          { _id: postId },
          { $push: { comments: cmntStat._id } }
        );
      }
      return res
        .status(201)
        .json({
          msg: "comment added successfully",
          comment: saveComment,
          status: true,
        });
    } else {
      return res.status(206).json({ msg: "No Content", status: false });
    }
  } catch (error) {
    return res.status(500).json({ msg: "Something went wrong", status: false });
  }
};
const replyComment = async (req: ReqType, res: ResType) => {
  const { reply, userName, userImg } = req.body;
  const { commentId } = req.params;
  const data = {
    name: userName,
    image: userImg,
    reply,
    commentId,
    repliedAt: new Date().toLocaleString(),
  };

  try {
    const isExists = await commentsModel.findOne({ _id: commentId });
    if (isExists) {
      const isCmnt = await commentsModel.findByIdAndUpdate(
        { _id: commentId },
        { $push: { reply: data } }
      );
      return res
        .status(201)
        .json({ msg: "Replied !", status: true, reply: data });
    } else {
      return res.status(400).json({ msg: "Bad Request", status: false });
    }
  } catch (error) {
    return res.status(500).json({ msg: "Something went wrong", status: false });
  }
};
const editBlog=async(req: ReqType, res: ResType)=>{
  const {postId}= req.params;
    const {title,image,author, content, tags,userId}= req.body;
    const toBeUpdated:toBeUpdatedType={};
    if(title){
      toBeUpdated.title=title;
    }
    if(image){
      toBeUpdated.image=image;
    }
    if(author){
      toBeUpdated.author=author;
    }
    if(content){
      toBeUpdated.content= content;
    }
    if(tags&&Array.isArray(tags)){
     toBeUpdated.tags= tags; 
    }
    console.log(userId);
    try {
      const isExists= await blogModel.findOne({_id:postId,"createdBy.userId":userId});
      if(isExists){
        const status= await blogModel.findByIdAndUpdate({_id:postId},{$set:{...toBeUpdated,updatedAt:new Date().toLocaleString()}},{new:true});
        return res.status(201).json({msg:"Updated Successfully",status:true});
      }else{
        return res.status(204).json({msg:"Invalid Request",status:false});
      }
    } catch (error) {
    return res.status(500).json({ msg: "Something went wrong", status: false });
      
    }
}
const likeBlog=async(req: ReqType, res: ResType)=>{
    const {postId}= req.params;
    try {
      const status= await blogModel.findByIdAndUpdate({_id:postId},{$inc:{likes:1}},{new:true});
     return res.status(200).json({msg:"Liked",status:true});
    } catch (error) {
    return res.status(500).json({ msg: "Something went wrong", status: false });
      
    }
}
const disLikeBlog=async(req: ReqType, res: ResType)=>{
  const {postId}= req.params;
    try {
      const status= await blogModel.findByIdAndUpdate({_id:postId},{$inc:{dislikes:1}},{new:true});
     return res.status(200).json({msg:"Disliked",status:true});
    } catch (error) {
    return res.status(500).json({ msg: "Something went wrong", status: false });
      
    }
}
const deleteBlog=async(req: ReqType, res: ResType)=>{
    const {userId}= req.body;
    const {postId}= req.params;
    try {
      const isExists= await blogModel.findOneAndDelete({_id:postId,"createdBy.userId":userId});
      return res.status(200).json({msg:"Blog Deleted",status:true});
    } catch (error) {
      return res.status(500).json({ msg: "Something went wrong", status: false });

    }
}
module.exports = {
  getBlog,
  postBlog,
  editBlog,
  postComment,
  replyComment,
  likeBlog,
  disLikeBlog,
  deleteBlog
};