import React, { useState } from "react";
import UserTable from "../component/userTable.component";
import { IBaseUser, IUser } from "./interface";

interface Props {
    // person: Person;
    // onChange: (fieldName: string, value: string) => void;
    // onSave: () => void;
}

const defaultUsers: Array<IUser> = [
    { profession: "lily", name: "lily hh", id: 1, age: 18 },
    { profession: "bob", name: "bob haha", id: 2, age: 19 }
  ];
  const initCurrentUser: IUser = { profession: "", name: "", age: 10, id: 0 };

export const AllPosts: React.FunctionComponent<Props> = (props) => { 

    const [users, setUsers] = useState(defaultUsers);
  const [editUser, setEditUser] = useState(initCurrentUser);
  const [editing, setEdit] = useState(false);
  
  const onCurrentUser = (user: IUser) => {
    setEditUser(user);
    setEdit(true);
  };
 
  const onDeleteUser = (currentUser: IUser) => {
    setUsers(users.filter((i) => i.id !== currentUser.id));
  };
    return (
   <div>
        <h1>List of all posts</h1>
        <UserTable
          users={users}
          onEdit={onCurrentUser}
          onDelete={onDeleteUser}
        />
   </div>
    );
};
