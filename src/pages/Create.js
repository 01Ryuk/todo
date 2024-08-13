import React, { useState } from "react";
import Header from "../common/Header";
import Footer from "../common/Footer";
import axios from "axios";

const Create = () => {
  const [title, setTodoTitle] = useState();
  const [description, setTodoDescription] = useState();
  const [expiry, setExpiry] = useState();

  const submitTodo = () => {
    let submissionData = {title, description, expiry};

    axios
      .post("http://localhost:8000/api/create", submissionData)
      .then((response) => {
        if (response.data.status === 200) {
          alert("Todo created successfully!");
        } else {
          alert("Failed to create todo!");
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
              Todo Title
            </label>
            <input
              class="form-control"
              value={title}
              onChange={(e) => setTodoTitle(e.target.value)}
            />
          </div>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">
              Todo Description
            </label>
            <input
              class="form-control"
              value={description}
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
          <button class="btn btn-primary" onClick={submitTodo}>
            Submit
          </button>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Create;
