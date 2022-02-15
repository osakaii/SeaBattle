import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./SignUp.module.css";
import { Reg } from "../../Axios";

function SignUp() {
  const [regBody, setRegBody] = useState({
    username: "",
    password: "",
  });

  const [modalCheck, setModalCheck] = useState(false);

  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.token) {
      navigate("/");
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(JSON.stringify(regBody));

    let answer = await Reg(JSON.stringify(regBody));
    console.log(answer);

    setRegBody({
      username: "",
      password: "",
    });
    if (answer) {
      navigate("/login");
    } else if (!answer) {
      setModalCheck(true)
      setTimeout(()=>{
        setModalCheck(false)
      },4000)
    }
  };

  return (
    <div className={styles.signUp}>
      <h1>SignUp</h1>
      <form onSubmit={(e) => handleSubmit(e)} className={styles.form}>
      {
        modalCheck === true?
          <div className={styles.modal}>Это имя уже занято!</div>
          : null
        }
        <input
          onChange={(e) => setRegBody({ ...regBody, username: e.target.value })}
          value={regBody.username}
          className={styles.input}
          type="text"
          placeholder="name"
          required
        />
        <input
          onChange={(e) => setRegBody({ ...regBody, password: e.target.value })}
          value={regBody.password}
          className={styles.input}
          type="text"
          placeholder="password"
          required
        />
        <div className={styles.form_bottom}>
          <button>Register</button>
          <Link to="/login">Login</Link>
        </div>
      </form>
    </div>
  );
}

export default SignUp;
