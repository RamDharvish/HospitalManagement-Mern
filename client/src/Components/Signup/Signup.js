import React, { useState } from 'react'
import './signup.css'
import {Link, useNavigate} from 'react-router-dom'
import axios from 'axios'
function Signup() {
  const [name,setName]=useState()
  const [email,setEmail]=useState()
  const [password,setPassword]=useState()

  const navigate=useNavigate()

  const handleSubmit=(e)=> {
    e.preventDefault()
    axios.post("http://localhost:5000/register",{name,email,password})
    .then(res => {
      // console.log(res.data)
     navigate('/login')
    })
    .catch(err =>console.log(err))
  }
  return (
    
    <div className='container-fluid body d-flex justify-content-center align-items-center'>
      <div className="bg-black text-white p-3 rounded w-25 content">
        <h2>Register</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label>Name</label>
            <input type="text" className='form-control rounded-0' placeholder='Enter Your Name' onChange={(e)=>setName(e.target.value)} />
          </div>
          <div className="mb-3">
            <label>Email</label>
            <input type="email" className='form-control rounded-0' placeholder='Enter Your Email' onChange={(e)=>setEmail(e.target.value)} />
          </div>
          <div className="mb-3">
            <label>Password</label>
            <input type="password" className='form-control rounded-0' placeholder='Enter Your Password' onChange={(e)=>setPassword(e.target.value)} />
          </div>
          <button type='submit'className='btn btn-success w-100 rounded-0'>Register</button>
         
        </form>
        <p className='mt-3' style={{color:"#fff"}}>Already Have An Account</p>
          <Link to={'/login'} className='btn btn-warning w-100 rounded-0'>Login</Link>
      </div>
    </div>
  )
}

export default Signup