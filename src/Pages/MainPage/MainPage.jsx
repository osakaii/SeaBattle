import React from "react";
import styles from "./MainPage.module.css";
import { Logout } from "../../Axios";
import UserList from "../UsersList/UserList";
import Game from "./game/Game";

function MainPage() {
  return (
    <div className={styles.MainPage}>
      <UserList />
      <div className={styles.gameZone}>
        <h1>SeaBattle!</h1>
        <Game/>
        <button onClick={() => Logout()}>LogOut</button>
      </div>
    </div>
  );
}

export default MainPage;
