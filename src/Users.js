import React, { useState, useEffect } from "react";
import useResources from "./useResources";

const Users = ({ resourceName }) => {
  const users = useResources(users);

  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
};

export default Users;
