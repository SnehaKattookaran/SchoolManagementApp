import "./Login.css";
import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getLogin } from "../redux/actions/loginAction";
import axios from "axios";

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [userList, setUserList] = useState([]);
  useEffect(() => {
    axios.get("https://f5ac0bfb-1286-499c-9867-58e9a6a432d7.mock.pstmn.io/smUsers").then((res) => {
      console.log(res.data);
      setUserList(res.data);
    });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && password) {
      if (userList.some((u) => u.email === email)) {
        let userDetails = userList.filter((u) => u.email === email);
        console.log(...userDetails);
        dispatch(getLogin(...userDetails));
        navigate("/Dashboard");
      } else {
        alert("Credentials did not match");
      }
    } else {
      alert("Wrong Credentials");
    }
  };

  return (
    <body>
      <header className="login-header">
        <div className="logosection">
          <div className="appname">
            SM
            <div>
              <img
                src="https://t0.gstatic.com/images?q=tbn:ANd9GcQYgpZeGtrzWEqq79niSzzzfcglN5LeH4f3bz3VKMkojVS6-Zzm"
                className="logo"
                alt="logo"
              ></img>
            </div>
          </div>
        </div>
      </header>
      <div className="Login-section" >
      <div className="Login">
        <header className="Login-title">
          <h1>Login</h1>
        </header>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            className="input"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            className="input"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <button className="login-button" type="submit">
            Login
          </button>
        </form>
      </div>
      </div>
    </body>
  );
}

export default Login;
  