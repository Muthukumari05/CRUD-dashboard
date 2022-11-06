import { combineReducers } from "redux";
import postReducer from "./formReducer/formReducer";

const rootReducer = combineReducers({
  posts: postReducer
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
