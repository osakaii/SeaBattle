import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Log } from "../../Axios";
import styles from "./Login.module.css";

function Login(props) {
  const [regBody, setRegBody] = useState({
    username: "",
    password: "",
  });
  const navigate = useNavigate()
  useEffect(() => {
    if(localStorage.token){
        navigate('/')
    }
  }, [])
  

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(regBody);
    Log(JSON.stringify(regBody))
    setRegBody({
      username: "",
      password: "",
    });
  };
  return (
    <div className={styles.login}>
      <h1>Login</h1>
      <form onSubmit={(e) => handleSubmit(e)} className={styles.form}>
        <input
          onChange={(e) => setRegBody({ ...regBody, username: e.target.value })}
          value={regBody.username}
          className={styles.input}
          type="text"
          placeholder="name"
        />
        <input
          onChange={(e) => setRegBody({ ...regBody, password: e.target.value })}
          value={regBody.password}
          className={styles.input}
          type="text"
          placeholder="password"
        />
        <div className={styles.form_bottom}>
          <button>Login</button>
          <Link to="/signUp">Register</Link>
        </div>
      </form>
    </div>
  );
}

export default Login;
