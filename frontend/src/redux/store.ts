import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { applyMiddleware, combineReducers, compose, legacy_createStore } from "redux";
import thunk from "redux-thunk";
declare global {
    interface Window {
      __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
  }
  
const rootReducer=combineReducers({});
const composer= window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||compose;
export const store= legacy_createStore(rootReducer,composer(applyMiddleware(thunk)));

export type AppDispatch= typeof store.dispatch;
export type RootState= ReturnType<typeof store.getState>;

type DispatchFun= ()=> AppDispatch
export const useAppDispatch:DispatchFun= useDispatch;
export const useAppSelector:TypedUseSelectorHook<RootState>= useSelector;