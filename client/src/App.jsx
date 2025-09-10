import { useState } from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import CreateUser from './Components/CreateUser'
import UpdateUser from './Components/UpdateUser'
import User from './Components/User'

function App() {
  

  return (
  <div>
    <BrowserRouter>
  
      <Routes>
        <Route path='/' element={<User />}></Route>
        <Route path='/create' element={<CreateUser />}></Route>
        <Route path='/update/:id' element={<UpdateUser />}></Route>
      </Routes>

      </BrowserRouter> 
  </div>
  )
}

export default App
