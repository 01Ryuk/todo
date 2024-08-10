import React, { useState } from "react";
import Header from "../common/Header";
import Footer from "../common/Footer";
import axios from "axios";

const Update = () => {
  const [todotitle, setTodoTitle] = useState();
  const [tododescription, setTodoDescription] = useState();
  const [expiry, setExpiry] = useState();

  const UpdateTodo = () => {
    let todoupdate = [todotitle, tododescription, expiry];

    axios
      .post("http://localhost:8080/api/update", todoupdate)
      .then((response) => {
        if (response.data.status === 200) {
          alert("Todo updated successfully");
        } else {
          alert("Failed to update Todo");
        }
      });
  };

  return (
    <>
      <Header />
      <div className="todocontent">
        <div className="todocontent">
          <div className="container my-5">
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">
                Todo Title
              </label>
              <input
                class="form-control"
                value={todotitle}
                onChange={(e) => setTodoTitle(e.target.value)}
              />
            </div>
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">
                Todo Description
              </label>
              <input
                class="form-control"
                value={tododescription}
                onChange={(e) => setTodoDescription(e.target.value)}
              />
            </div>
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">
                Expiry Date
              </label>

              <input
                type="date"
                class="form-control"
                value={expiry}
                onChange={(e) => setExpiry(e.target.value)}
              />
            </div>
            <button class="btn btn-primary" onClick={UpdateTodo}>
              Submit
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Update;
