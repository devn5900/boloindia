import { commentType } from '@/helper/types'
import Image from 'next/image'
import React, { useState } from 'react'
import date from 'date-and-time'
import { useAppDispatch, useAppSelector } from '@/redux/store'
import {  postReplyApi } from '@/redux/SingleBlog/SingleBlogAction'
const CommentChild = ({comment,parentId,border}:{border:string,parentId:string,comment:commentType}) => {
    const [toggle,setToggle]= useState<boolean>(false)
    const [reply,setReply]= useState<string>("");
    const dispatch= useAppDispatch();
    const [isEmpty,setIsEmpty]= useState<boolean>(false)
    const postComment=(e:any)=>{
        e.preventDefault();
        if(!comment){
            setIsEmpty(true);
        }else{
            isEmpty&&setIsEmpty(false)
            if(parentId){
                dispatch(postReplyApi(`/blogs/${parentId}/reply`,parentId,{comment:reply}))
                setReply("")
            }
        }
    }
  return (
    <article className={`${border?border+" p-3":"p-6"}  mb-2 text-base bg-white rounded-lg dark:bg-gray-900`}>
    <footer className="flex justify-between items-center mb-2">
        <div className="flex items-center">
            <p className="inline-flex items-center mr-3 text-md text-gray-900 dark:text-white">
                {comment?.comment?.image&&<Image
                    width={8}
                    height={8}
                    className="mr-2 object-center object-cover w-8 h-8 rounded-full"
                    loading='lazy'
                    src={comment.comment.image}
                    alt={comment.comment.name} />}
                    {comment.comment.name}</p>
            <p className="text-sm text-gray-600 dark:text-gray-400"><time 
                    title="February 8th, 2022">
                        {date.format(new Date(comment.commentedAt),"ddd, MMM DD YYYY ")}</time></p>
        </div>

    </footer>
    <p>{comment?.comment?.comment}</p>
    {parentId&& <div className="flex items-center mt-4 space-x-4">
       <button type="button"
            onClick={()=>setToggle(!toggle)}
            className="flex items-center text-sm text-gray-500 hover:underline dark:text-gray-400">
            <svg aria-hidden="true" className="mr-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path></svg>
            {!toggle?`Reply ${comment?.comments.length}`:"Close"}
            
        </button>
    </div>}
    {toggle&&<><div>
        <form className="mb-6 mt-2">
                  <div className={` ${isEmpty?"border-2 border-red-500":""} py-2 px-4 mb-4 bg-white rounded-lg rounded-t-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-700`}>
                      <label htmlFor="comment" className="sr-only">Your comment</label>
                      <textarea id="comment"
                      value={reply}
                        onChange={(e)=>setReply(e.target.value)}
                          className="px-0 w-full text-sm text-gray-900 border-0 focus:ring-0 dark:text-white dark:placeholder-gray-400 dark:bg-gray-800 outline-none"
                          placeholder="Write your reply..." required></textarea>
                  </div>
                  <button type="submit"
                  disabled={!reply}
                  onClick={postComment}
                      className={` disabled:opacity-80 disabled:cursor-not-allowed inline-flex items-center py-2.5 px-4 font-medium text-center  bg-blue-500 text-xs text-white rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800`}>
                      Reply on Comment
                  </button>
              </form>
        </div>
    <div className='ml-2'>
        {
            // comment?.comments.length>0&&<CommentMain cmnt={comment?.comments} />
            comment?.comments.length>0&&comment.comments.map((el:any,i:number)=>{
                if(typeof el == 'string') return ;   
                return <CommentChild key={i*6} border='border-2  border-blue-100 bg-[#E9F1F5]' parentId='' comment={el} />
            })
        }
    </div></>}
</article>
  )
}

export default CommentChild