import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import{Link,Outlet} from "react-router-dom" 
import "./user.css"
import axios from 'axios';

const User = () => {

const[users,setUsers] = useState([])

useEffect(()=>{
  axios.get("http://localhost:3001")
  .then(result => setUsers(result.data))
  .catch(err => console.log(err))
},[])

const handleDelete =(id)=>{
axios.delete("http://localhost:3001/deleteUser/"+id)
.then(res=>{console.log(res)
window.location.reload()
})
.catch(err => console.log(err))
}


  return (
    <div>
      <div class="table-responsive mx-3 ">
        <Link to="/create" className="btn btn-primary add my-3">Add +</Link>
        <Outlet/>
        <table class="table table-primary">
            <thead>
                <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Age</th>
                    <th scope="col">Action</th>
                </tr>
            </thead>
            <tbody>
          {
            users.map((user)=>{
               return <tr>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.age}</td>
                    <td>
                    <Link to={`/update/${user._id}`} className="btn btn-primary">Update</Link>
        <Outlet/>
                    <button className="btn btn-danger" onClick={(e)=>handleDelete(user._id)}>Delete</button></td>
                </tr>
            })
          }
            </tbody>
        </table>
      </div>
      
    </div>
  )
}

export default User
