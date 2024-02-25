import { SingleBlogType } from "@/helper/types";
import {
  GET_ONE_BLOG,
  GET_ONE_ERR_BLOG,
  GET_ONE_SUCC_BLOG,
  ONE_BLOG_CLEANUP,
  ONE_BLOG_COMMENT,
  ONE_BLOG_REPLY,
} from "./SingleBlogActionType";

const init: SingleBlogType = {
  isLoad: false,
  data: {
    author: "",
    category: "",
    content: "",
    createdAt: "",
    createdBy: { name: "", image: "", userId: "" },
    dislike: 0,
    image: "",
    isPublished: true,
    likes: 0,
    title: "",
    updatedAt: "",
    comments: [],
    _id: "",
  },
  isErr: false,
};

export const SingleBlogReducer = (state = init, { type, payload }: any) => {
  switch (type) {
    case GET_ONE_BLOG:
      return { ...state, isLoad: true, isErr: false };
    case GET_ONE_SUCC_BLOG:
      return { ...state, data: payload, isLoad: false, isErr: false };
    case GET_ONE_ERR_BLOG:
      return { ...state, isLoad: false, isErr: true };
    case ONE_BLOG_COMMENT:
      console.log("reducer", payload);
      return {
        ...state,
        data: { ...state.data, comments: [payload, ...state.data.comments] },
      };
    // return state
    case ONE_BLOG_REPLY:
      return { ...state, data: { ...state.data,comments:state.data.comments?.map((el)=>{
        if(el._id==payload.parentId){
            el.comments=[payload.payload,...el.comments]
        }
        return el;
      }) } };
    case ONE_BLOG_CLEANUP:return init
    default:
      return state;
  }
};
