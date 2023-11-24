import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'


const UpdateUser = () => {

const {id} = useParams()
const[name,setName] = useState()
const[age,setAge] = useState()
const[email,setEmail] = useState()
const navigate = useNavigate()

useEffect(()=>{
   axios.get('http://localhost:3001/getUser/'+id)
   .then(result =>{
      console.log(result);
      setName(result.data.name)
      setEmail(result.data.email)
      setAge(result.data.age)
   })
   .catch(err => console.log(err))
 },[])

const update =(e)=>{
e.preventDefault();
axios.put("http://localhost:3001/updateUser/"+id,{name,email,age})
.then(result => {
    navigate("/")
    console.log(result);
})
.catch(err => console.log(err))
}

  return (
    <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
    <div className='w-50 bg-white rounded p-3'>
       <form onSubmit={update}>
           <h2>Update User</h2>
<div className='mb-2'>
   <label for="name">Name</label>
<input type='text' placeholder='Enter Your Name' className='form-control' value={name}  onChange={(e)=>setName(e.target.value)}/>
</div>
<div className='mb-2'>
   <label for="email">Email</label>
<input type='email' placeholder='Enter Your Email' className='form-control' value={email} onChange={(e)=>setEmail(e.target.value)}/>
</div>
<div className='mb-2'>
   <label for="age">Age</label>
<input type='number' placeholder='Enter Your Age' className='form-control' value={age} onChange={(e)=>setAge(e.target.value)}/>
</div>
<div>
   <button className='btn btn-success'>Update</button>
</div>
       </form>

    </div>
   </div>
  )
}

export default UpdateUser
