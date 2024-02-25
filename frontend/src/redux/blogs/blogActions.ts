import axios, { AxiosResponse } from "axios";
import { GET_BLOGS, GET_BLOGS_SUCC, GET_BLOG_ADD_QUERY, GET_BLOG_PAGE } from "./blogActionType";
import { Blog, queryType, responseBlogType } from "@/helper/types";
import { AppDispatch } from "../store";

export const loadBlog=()=>{
    return {type:GET_BLOGS}
}
export const loadSucBlog=(payload:Blog,totalItems:number)=>{
    return {type:GET_BLOGS_SUCC,payload:{blog:payload,totalItems}}
}
export const errBlog=()=>{
    return {type:GET_BLOGS}
}
export const checkoutPage=(payload:number)=>{
    return {type:GET_BLOG_PAGE,payload}
}
export const addQueries=(payload:queryType)=>{
    return {type: GET_BLOG_ADD_QUERY,payload}
}
export const getBlogs=(query:queryType)=>async(dispatch:AppDispatch)=>{
    dispatch(loadBlog());
    console.log("query1",query)
    try {
        const res:AxiosResponse<responseBlogType>= await axios.get(`${process.env.REACT_APP_API_URL}/blogs`,{
            params:query
        });
        dispatch(loadSucBlog(res.data.data,res.data.totalData))
        // return res;
    } catch (error) {
        console.log(error);
        dispatch(errBlog());
    }
}

export const filterOptions=(query:queryType)=>async(dispatch:AppDispatch)=>{
    dispatch(addQueries(query));
}