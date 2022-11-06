import React from "react";
import { IUser } from "./interface";

interface IProps {
  users: Array<IUser>;
  onEdit: (user: IUser) => void;
  onDelete: (user: IUser) => void;
}

const UserTable: React.FunctionComponent<IProps> = props => {
  return (
    <div className="user-table">
      <h1>View Customer</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Profession</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {props.users.length > 0 ? (
            props.users.map(i => (
              <tr key={i.id}>
                <td>{i["name"]}</td>
                <td>{i["age"]}</td>
                <td>{i["profession"]}</td>
                <td>
                  <button onClick={() => props.onEdit(i)}>Edit</button>
                  <button onClick={() => props.onDelete(i)}>Delete</button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={3}>no users</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};
export default UserTable;
