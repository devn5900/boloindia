const { Router:bRouter } = require("express");
const {getBlog:getBlogs,postBlog:postBlogs,postComment,replyComment,deleteBlog,likeBlog,disLikeBlog,editBlog}= require('../controllers/Blog.controller')
const {blogDataValidMiddlware,commentValidMiddleware,replyValidMiddleware}= require("../middlewares/Blog.middleware")
const {authentication:authForBlog}= require('../middlewares/authentication.middleware')

const blogRouter= bRouter();

//  Get request for blog 
blogRouter.get("/",getBlogs)
// Post Request for blog
blogRouter.post("/",authForBlog,blogDataValidMiddlware,postBlogs)
// Edit blog (patch request)
blogRouter.patch("/:postId/edit",authForBlog,editBlog)
// like blog (patch request)
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