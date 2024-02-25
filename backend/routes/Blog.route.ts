const { Router:bRouter } = require("express");
const {getBlog:getBlogs,postBlog:postBlogs,postComment,replyComment,deleteBlog,likeBlog,disLikeBlog,editBlog,getOneBlog,getCategories}= require('../controllers/Blog.controller')
const {blogDataValidMiddlware,uploadImageMiddleware,commentValidMiddleware,replyValidMiddleware}= require("../middlewares/Blog.middleware")
const {authentication:authForBlog}= require('../middlewares/authentication.middleware')

const blogRouter= bRouter();

//  Get request for blog 
blogRouter.get("/",getBlogs)
// Get request for all categories
blogRouter.get("/categories",getCategories)
// Get request for perticular storie
blogRouter.get("/:postId",getOneBlog)
// Post Request for blog
blogRouter.post("/",authForBlog,blogDataValidMiddlware,uploadImageMiddleware,postBlogs)
// Edit blog (patch request) image updation part to be implemented
blogRouter.patch("/:postId/edit",authForBlog,editBlog)
// like blog (patch request) authentication might be removed
blogRouter.patch("/:postId/like",authForBlog,likeBlog)
// dislike blog (patch request)
blogRouter.patch("/:postId/dislike",authForBlog,disLikeBlog)
// delete blog (delete request)
blogRouter.delete("/:postId/delete",authForBlog,deleteBlog)
// add a new comment
blogRouter.post("/:postId/comment",authForBlog,commentValidMiddleware,postComment)
// reply on particular comment
blogRouter.post("/:commentId/reply",authForBlog,replyValidMiddleware,replyComment)



module.exports={
    blogRouter
}