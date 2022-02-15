import React from "react";
import styles from "./UserList.module.css";
import { useEffect } from "react";
import { getUsers } from "../../Axios";
import { useState } from "react/cjs/react.development";

function UserList() {
  const [users, setUsers] = useState([]);
  useEffect(async () => {
    const response = await getUsers();
    setUsers(response);
    console.log(await users);
  }, []);

  return (
    <div className={styles.userList}>
      <h1 className={styles.UsersText}>USERS</h1>
      <input type="text" className={styles.searchInput}/>
      {users.map((user) => {
        return <div className={styles.user} key={user.id}>{user.username}</div>;
      })}
    </div>
  );
}

export default UserList;
