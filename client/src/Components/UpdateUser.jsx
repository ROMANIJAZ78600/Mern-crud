import React, {useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'

function UpdateUser() {
    const {id} = useParams()
        const [name, setName] = useState()
        const [age, setage] = useState()
        const [email, setemail] = useState()
        const navigate = useNavigate()

           useEffect(()=>{
       axios.get("http://localhost:3001/getUser/"+id)
       .then(result => {console.log(result)
        setName(result.data.name)
        setemail(result.data.email)
        setage(result.data.age)
       })
    
},[]);

const Update = (e)=>{
        e.preventDefault();
        axios.put('http://localhost:3001/UpdateUser/'+id, {name, email, age})
        .then(result => {console.log(result)
          navigate('/')
    })
    }
  return (
        <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
      <div className="w-90 bg-white rounded p-3">
        <form onSubmit={Update}>
            <h1 className='text-center'>Update User</h1>
            <div className="mb-2">
                <label htmlFor="">Name</label>
                <input type="text" placeholder='Enter Your Name' className='form-control'
                value={name}
                onChange={(e)=> setName(e.target.value)} />
            </div>
            <div className="mb-2">
                <label htmlFor="">Email</label>
                <input type="emaii" placeholder='Enter Your Email' className='form-control'
                value={email}
                onChange={(e)=> setemail(e.target.value)} />
            </div>
            <div className="mb-2">
                <label htmlFor="">Age</label>
                <input type="text" placeholder='Enter Your Age' className='form-control'
                value={age}
                onChange={(e)=> setage(e.target.value)} />
            </div>
            <button className='btn btn-success'>Update</button>
        </form>
      </div>
    </div>
  )
}

export default UpdateUser
