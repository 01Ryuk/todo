import React, { useState } from "react";
import Header from "../common/Header";
import Footer from "../common/Footer";
import axios from "axios";
import { useNavigate } from 'react-router';


const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  async function submit () {
    let loginData = {email,password};

    axios
      .post("http://localhost:8000/api/login", loginData)
     .then((response) => {
        if (response.data.status === 200) {
          localStorage.setItem("token", response.data.authorisation.token);
          navigate("/");
          // alert("Login successfully!");
        } else {
          alert("Login Failed!");
        }
      });
  };

  return (
    <>
      <Header />
      <div className="todocontent">
        <div className="container my-5">
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">
              Email
            </label>
            <input
            type="email"
              class="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">
              Password
            </label>

            <input
              type="password"
              class="form-control"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button class="btn btn-primary" onClick={submit}>
            Log In
          </button>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Login;
