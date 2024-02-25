import {combineReducers, legacy_createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { useDispatch } from "react-redux";
import { TypedUseSelectorHook } from "react-redux/es/types";
import { useSelector } from "react-redux/es/exports";
import { blogReducer } from "./blogs/blogReducer";
import { SingleBlogReducer } from "./SingleBlog/SingleBlogReducer";
const combineReducer = combineReducers({
    // add reducer here
    blogReducer,
    SingleBlogReducer
});
// declare global {
//     interface Window {
//       __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
//     }
//   }
//   const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = legacy_createStore(combineReducer, applyMiddleware(thunk));

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export type DispatchFunc = () => AppDispatch;
export const useAppDispatch: DispatchFunc = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
