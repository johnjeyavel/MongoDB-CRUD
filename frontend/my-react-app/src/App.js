import React from 'react'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import User from './User'
import CreateUser from './CreateUser'
import UpdateUser from './UpdateUser'


const App = () => {
  

  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<User/>}/>
        <Route path='/create' element={<CreateUser/>}/>
        <Route path='/update/:id' element={<UpdateUser/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App

