import React, { useState } from "react";
import * as ReactDOM from "react-dom";
import { useDispatch, useSelector } from "react-redux";
import { addForms, editForms, deleteForms } from "../_redux/actions/formActions";
import AddUserForm from "./addUserForm.component";
import EditUserForm from "./editUserForm.component";
import UserTable from "./userTable.component";
import { IBaseUser, IUser } from "./interface";


interface Props {
   
}


const defaultUsers: Array<IUser> = [
  { profession: "lily", name: "lily hh", id: 1, age: 18 },
  { profession: "bob", name: "bob haha", id: 2, age: 19 }
];
const initCurrentUser: IUser = { profession: "", name: "", age: 10, id: 0 };

export default function MainPage(props: Props) {
    const dispatch = useDispatch();
    const [users, setUsers] = useState(defaultUsers);
  const [editUser, setEditUser] = useState(initCurrentUser);
  const [editing, setEdit] = useState(false);
  const onAddUser = (newUser: IBaseUser) => {
    const id = users.length + 1;
    setUsers([...users, { ...newUser, id }]);
    dispatch({type:addForms,payload:users});
  };
  const onCurrentUser = (user: IUser) => {
    setEditUser(user);
    setEdit(true);
  };
  const onUpdateUser = (id: number, newUser: IUser) => {
    setEdit(false);
    setUsers(users.map((i) => (i.id === id ? newUser : i)));
    dispatch({type:editForms,payload:users});
  };
  const onDeleteUser = (currentUser: IUser) => {
    setUsers(users.filter((i) => i.id !== currentUser.id));
    dispatch({type:deleteForms,payload:currentUser.id});
  };
  return (
    <div className="App">
      <h1>Welcome to Store</h1>
      <div className="user-flex-wrapper">
        {editing ? (
          <EditUserForm
            user={editUser}
            onUpdateUser={onUpdateUser}
            setEdit={setEdit}
          />
        ) : (
          <AddUserForm onAddUser={onAddUser} />
        )}
        <UserTable
          users={users}
          onEdit={onCurrentUser}
          onDelete={onDeleteUser}
        />
      </div>
    </div>
  );
}

