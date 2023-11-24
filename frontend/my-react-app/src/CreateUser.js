import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const CreateUser = () => {

const[name,setName] = useState()
const[age,setAge] = useState()
const[email,setEmail] = useState()
const navigate = useNavigate()

const Submit =(e)=>{
e.preventDefault();
axios.post("http://localhost:3001/CreateUser",{name,email,age})
.then(result => {
    navigate("/")
    console.log(result);
})
.catch(err => console.log(err))
}

  return (
    <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
     <div className='w-50 bg-white rounded p-3'>
        <form onSubmit={Submit}>
            <h2>Add User</h2>
<div className='mb-2'>
    <label for="name">Name</label>
<input type='text' placeholder='Enter Your Name' className='form-control' onChange={(e)=>setName(e.target.value)}/>
</div>
<div className='mb-2'>
    <label for="email">Email</label>
<input type='email' placeholder='Enter Your Email' className='form-control' onChange={(e)=>setEmail(e.target.value)}/>
</div>
<div className='mb-2'>
    <label for="age">Age</label>
<input type='number' placeholder='Enter Your Age' className='form-control' onChange={(e)=>setAge(e.target.value)}/>
</div>
<div>
    <button className='btn btn-success'>Submit</button>
</div>
        </form>

     </div>
    </div>
  )
}

export default CreateUser
