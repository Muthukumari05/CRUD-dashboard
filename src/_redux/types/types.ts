import { IPost } from "../../models/Ipost";
import { formTypes } from "../Actiontypes/formTypes";

export interface PostsState {
  pending: boolean;
  posts: IPost[];
  error: string | null;
}

export interface FetchPostsSuccessPayload {
  posts: IPost[];
}

export interface FetchPostsFailurePayload {
  error: string;
}

export type AddFormsRequest = {
  type: typeof formTypes.ADD_FORMS;
  payload: FetchPostsSuccessPayload;
}

export type EditFormsRequest = {
  type: typeof formTypes.EDIT_FORMS;
  payload: FetchPostsSuccessPayload;
};

export type DeleteFormsRequest = {
  type: typeof formTypes.DELETE_FORMS;
  payload: FetchPostsSuccessPayload;
};

export type PostsActions =
  | AddFormsRequest
  | EditFormsRequest
  | DeleteFormsRequest;
