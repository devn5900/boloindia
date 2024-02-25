import {
  GET_BLOGS,
  GET_BLOGS_ERR,
  GET_BLOGS_SUCC,
  GET_BLOG_ADD_QUERY,
  GET_BLOG_PAGE,
} from "./blogActionType";

const init = {
  isLoad: false,
  blogs: [],
  isErr: false,
  page: 0,
  totalItems:0,
  queries:{}
};

export const blogReducer = (state = init, { type, payload }: any) => {
  switch (type) {
    case GET_BLOGS:
      return { ...state, isLoad: true, isErr: false };
    case GET_BLOGS_SUCC:
      return { ...state, blogs: payload.blog,totalItems:payload.totalItems, isLoad: false, isErr: false };
    case GET_BLOGS_ERR:
      return { ...state, isErr: true, isLoad: false };
    case GET_BLOG_PAGE:
      return { ...state, page: payload };
    case GET_BLOG_ADD_QUERY:
      return {...state,queries:{...state.queries,...payload}}
    default:
      return state;
  }
};
