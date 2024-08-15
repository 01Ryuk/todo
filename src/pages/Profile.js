import React, { useEffect, useState } from 'react'
import Header from '../common/Header'
import Footer from '../common/Footer'
import axios from 'axios';
import { useNavigate } from 'react-router';

function Profile() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const usertoken = localStorage.getItem("token")

  const navigate = useNavigate;
  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/login");
    }
  }, [navigate]);

  useEffect(() => {
    axios
      .post("http://localhost:8000/api/profile/", {},
        {
          headers: {
            Authorization: "Bearer " + usertoken,
          },
        })
      .then((response) => {
        if (response.data.status === 200) {
          setName(response.data.data.title);
          setEmail(response.data.data.description);
        } else {
          alert("cannot load user!");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, [usertoken ]);

  return (
    <>
    <Header />

    <div className="todocontent">
        <h1>Hello:{name}</h1>
        <h6>{email}</h6>
      </div>


    <Footer />
    
    </>
  )
}

export default Profile