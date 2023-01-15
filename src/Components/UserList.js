import React from "react";

const UserList = ({ users }) => {
  return (
    <ul className="list-group">
      {users.map((user) => (
        <li
        className="list-group-item d-flex justify-content-between align-items-center"
        >
        {users.name}
           
        </li>
      ))}
    </ul>
  );
};

export default UserList;