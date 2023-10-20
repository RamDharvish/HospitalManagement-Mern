import React, { useState } from 'react'
import {Link, useNavigate} from 'react-router-dom'
import axios from 'axios'
function Login() {
  const navigate=useNavigate()
  const [email,setEmail]=useState()
  const [password,setPassword]=useState()


  axios.defaults.withCredentials=true
  const handleLogin=(e)=> {
    e.preventDefault()
    axios.post("http://localhost:5000/login",{email,password})
    .then(res => {
      if(res.data.status ==="success") {
        if(res.data.role ==="admin") {
          navigate('/dashboard')
        }else {
          navigate('/')
        }
      }
    
    })
    .catch(err =>console.log(err))
  }
  return (
    <div className='container-fluid body d-flex justify-content-center align-items-center'>
      <div className="bg-black text-white p-3 rounded w-25 content">
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <div className="mb-3">
            <label>Email</label>
            <input type="email" className='form-control rounded-0' placeholder='Enter Your Email' onChange={(e)=>setEmail(e.target.value)} />
          </div>
          <div className="mb-3">
            <label>Password</label>
            <input type="password" className='form-control rounded-0' placeholder='Enter Your Password' onChange={(e)=>setPassword(e.target.value)} />
          </div>
          <button type='submit'className='btn btn-success w-100 rounded-0'>Login</button>
          <p className='mt-3' style={{color:"blue",fontSize:"20px"}}> <Link to={'/forgotpassword'}>Forgot Password ?</Link></p>
          <Link to={'/signup'} className='btn btn-warning w-100 rounded-0'>Register</Link>
        </form>
      </div>
    </div>
  )
}

export default Login