import React, { useState } from 'react'
import Header from '../common/Header'
import Footer from '../common/Footer'
import axios from 'axios';

const Signup = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const submit = () => {
    let signupData = {name,email,password};

    axios
      .post("http://localhost:8000/api/signup", signupData)
      .then((response) => {
        if (response.data.status === 200) {
          alert("Signup successfully!");
        } else {
          alert("Failed to Signup!");
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
             Name
            </label>
            <input
              class="form-control"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">
              Email
            </label>
            <input
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
            Submit
          </button>
        </div>
      </div>



  <Footer />
  
  </>
  )
}

export default Signup