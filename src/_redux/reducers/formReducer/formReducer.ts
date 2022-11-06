import { formTypes } from "../../Actiontypes/formTypes";
import { PostsActions, PostsState } from "../../types/types";

const initialState: PostsState = {
  pending: false,
  posts: [],
  error: null
};

export default (state = initialState, action: PostsActions) => {
  switch (action.type) {
    case formTypes.ADD_FORMS:
      return {
        ...state,
        posts: action.payload.posts,
      };
    case formTypes.EDIT_FORMS:
      return {
        ...state,
        posts: action.payload.posts,
      };
    case formTypes.DELETE_FORMS:
      return {
        ...state,
        posts: action.payload.posts
      };
    default:
      return {
        ...state
      };
  }
};
