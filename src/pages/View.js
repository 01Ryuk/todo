import React, { useEffect, useState } from 'react'
import Header from '../common/Header'
import Footer from '../common/Footer'
import axios from 'axios'
import { useLocation } from 'react-router'

const View = () => {
const location=useLocation()
  const [title, setTitle] = useState()
  const [description, setDescription] = useState()
  const todoid=location.pathname.split('/')[2]
    useEffect(() => {
    axios
        .post("http://localhost:8000/api/view/", {todoid})
        .then((response) => {
          if (response.data.status === 200) {
            setTitle(response.data.data.title);
            setDescription(response.data.data.description);
          } else {
            alert("Failed to create todo!");
          }
        })
        .catch((error) => {
          console.error("Error:", error);
        })
  }, []);
  

  return (
    <>
    <Header />
    <div className='todocontent'>
      <h1>Todo Title</h1>
      <h6>Todo Description</h6>
  </div>
 
    
    <Footer />
    </>
  )
}

export default View