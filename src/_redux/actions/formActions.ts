import { formTypes } from "../Actiontypes/formTypes";
import {
    AddFormsRequest,
    EditFormsRequest,
    DeleteFormsRequest,
    FetchPostsSuccessPayload
  
} from "../types/types";

export const addForms = (
    payload: FetchPostsSuccessPayload
  ): AddFormsRequest => ({
    type: formTypes.ADD_FORMS,
    payload
  });
  

export const editForms = (payload:FetchPostsSuccessPayload): EditFormsRequest =>({
type: formTypes.EDIT_FORMS,
payload  
    
});

export const deleteForms = (payload:FetchPostsSuccessPayload): DeleteFormsRequest =>({
type: formTypes.DELETE_FORMS,
payload
});