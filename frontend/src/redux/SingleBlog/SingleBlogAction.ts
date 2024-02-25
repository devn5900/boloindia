import { getTopBlogs } from "@/helper/api"
import { AppDispatch } from "../store"
import { GET_ONE_BLOG, GET_ONE_ERR_BLOG, GET_ONE_SUCC_BLOG, ONE_BLOG_CLEANUP, ONE_BLOG_COMMENT, ONE_BLOG_REPLY } from "./SingleBlogActionType"
import axios, { AxiosResponse } from "axios"
import { config } from "@/helper/query"

const getOneBlogType=()=>{
    return {type:GET_ONE_BLOG}
}
const getOneSuccBlogType=(payload:any)=>{
    return {type:GET_ONE_SUCC_BLOG,payload}
}
const getOneErrBlogType=()=>{
    return {type:GET_ONE_ERR_BLOG}
}
const postComment=(payload:any)=>{
    return {type:ONE_BLOG_COMMENT,payload}
}
const postReply=(parentId:string,payload:any)=>{
    return {type:ONE_BLOG_REPLY,payload:{parentId,payload}}
}
export const cleanUpBlog=()=>{
    return {type:ONE_BLOG_CLEANUP}
}
export const getOneBlog=(query:string)=>async(dispatch:AppDispatch)=>{
    dispatch(getOneBlogType())
    try {
      const res= await  getTopBlogs(query);
      dispatch(getOneSuccBlogType(res))
    } catch (error) {
        dispatch(getOneErrBlogType())
    }
}

export const postCommentApi=(path:string,data:object)=>async(dispatch:AppDispatch)=>{
    console.log(path,data)
    try {
        const res= await axios.post(`${process.env.REACT_APP_API_URL}${path}`,data,config);
        
            dispatch(postComment(res.data.comment));
    } catch (error) {
        console.log(error)
    }
}
export const postReplyApi=(path:string,parentId:string,data:object)=>async(dispatch:AppDispatch)=>{
    try {
        const res= await axios.post(`${process.env.REACT_APP_API_URL}${path}`,data,config);
        
            dispatch(postReply(parentId,res.data.reply));
    } catch (error) {
        console.log(error)
    }
}