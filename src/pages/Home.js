import React, {useEffect, useState} from 'react'
import Header from '../common/Header'
import Footer from '../common/Footer'
import axios from 'axios';
import { Link } from 'react-router-dom';
import { FaTrash } from "react-icons/fa6";

const Home = () => {
   const [todos, setTodos] = useState([])
useEffect(() => {
  axios
      .post("http://localhost:8000/api/home")
      .then((response) => {
        if (response.data.status === 200) {
          setTodos(response.data.data);
        } else {
          alert("Failed to create todo!");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      })
}, []);



const deleteTodo = (id) => {
  axios
      .post("http://localhost:8000/api/delete", {id})
      .then((response) => {
        if (response.data.status === 200) {
          alert("Success");
        } else {
          alert("Failed to create todo!");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      })
  
};

// const deleteTodo = (id) =>{
//   alert(id)
// }
  return (
   <>
  <Header />
  <div className='todocontent container' >
    <table className='table table-striped  table-hover' >
      <thead>
        <th>Title</th>
        <th>Expiry Date</th>
      </thead>
      <tbody>
    {todos.length > 0 &&
    todos.map((todo) =>(
      <tr>
        <td>{todo.title}</td>
        <td>{todo.expiry}</td>
        <td><Link to={"view/"+todo.id} className='btn btn-primary btn-sm shadow-lg'>View</Link></td>
        <td><Link to={"update/"+todo.id} className='btn btn-secondary btn-sm shadow-lg' >Edit</Link></td>
        <td>
  <button
    className='btn btn-danger btn-sm shadow-lg'
    onClick={() => deleteTodo(todo.id)} 
  >
    Delete <FaTrash />
  </button>
</td>
      </tr>
    ))}
</tbody>
    </table>
  </div>
  <Footer />
   </>
  )
}

export default Home