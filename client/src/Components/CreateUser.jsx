import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function CreateUser() {
    const [name, setName] = useState()
    const [age, setage] = useState()
    const [email, setemail] = useState()
    const navigate = useNavigate()

    const Submit = (e)=>{
        e.preventDefault();
        axios.post('http://localhost:3001/CreateUser', {name, email, age})
        .then(result => {console.log(result)
          navigate('/')
    })
    .catch(err => console.log(err)
    )
    }

  return (
    <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
      <div className="w-90 bg-white rounded p-3">
        <form onSubmit={Submit}>
            <h1 className='text-center'>Add User</h1>
            <div className="mb-2">
                <label htmlFor="">Name</label>
                <input type="text" placeholder='Enter Your Name' className='form-control'
                onChange={(e)=> setName(e.target.value)} />
            </div>
            <div className="mb-2">
                <label htmlFor="">Email</label>
                <input type="emaii" placeholder='Enter Your Email' className='form-control'
                onChange={(e)=> setemail(e.target.value)} />
            </div>
            <div className="mb-2">
                <label htmlFor="">Age</label>
                <input type="text" placeholder='Enter Your Age' className='form-control'
                onChange={(e)=> setage(e.target.value)} />
            </div>
            <button className='btn btn-success'>Submit</button>
        </form>
      </div>
    </div>
  )
}

export default CreateUser
