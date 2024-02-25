import { commentType } from '@/helper/types'
import React, { useState } from 'react'
import CommentChild from './CommentChild'
import CommentMain from './CommentMain'
import { useAppDispatch, useAppSelector } from '@/redux/store'
import { postCommentApi } from '@/redux/SingleBlog/SingleBlogAction'

const Comments = () => {
    const [comment,setComment]= useState<string>("");
    const {data}= useAppSelector(store=>store.SingleBlogReducer)
    const cmnt= data?.comments
    const dispatch= useAppDispatch();
    const [isEmpty,setIsEmpty]= useState<boolean>(false)
    const postComment=(e:any)=>{
        e.preventDefault();
        if(!comment){
            setIsEmpty(true);
        }else{
            isEmpty&&setIsEmpty(false)
            dispatch(postCommentApi(`/blogs/${data._id}/comment`,{comment}))
            setComment("");
        }
    }
  return (
    <section className="not-format">
              <div className="flex justify-between items-center mb-6">
                  <h2 className="text-lg lg:text-2xl font-bold text-gray-900 dark:text-white">Discussion ({cmnt?.length})</h2>
              </div>
              <form className="mb-6">
                  <div className={` ${isEmpty?"border-2 border-red-500":""} py-2 px-4 mb-4 bg-white rounded-lg rounded-t-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-700`}>
                      <label htmlFor="comment" className="sr-only">Your comment</label>
                      <textarea id="comment"
                        onChange={(e)=>setComment(e.target.value)}
                        value={comment}
                          className="px-0 w-full text-sm text-gray-900 border-0 focus:ring-0 dark:text-white dark:placeholder-gray-400 dark:bg-gray-800 outline-none"
                          placeholder={cmnt.length>0?"Write a comment...":"Be the first to comment on this post. Your insights matter ...."} required></textarea>
                  </div>
                  <button type="submit"
                  disabled={!comment}
                  onClick={postComment}
                      className={` disabled:opacity-80 disabled:cursor-not-allowed inline-flex items-center py-2.5 px-4 font-medium text-center  bg-blue-500 text-xs text-white rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800`}>
                      Post comment
                  </button>
              </form>
           {cmnt.length>0&&<CommentMain cmnt={cmnt} />} 
          </section>
  )
}

export default Comments