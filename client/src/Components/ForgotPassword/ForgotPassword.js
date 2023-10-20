import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './forgotPassword.css';

function ForgotPassword() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleSendEmail = (e) => {
    e.preventDefault();
    axios
      .post('http://localhost:5000/sendEmail', { email })
      .then((res) => {
        console.log(res.data);
       alert("success now enter your new password")
      })
      .catch((err) => console.log(err));
  };

  const handlePasswordUpdate = (e) => {
    e.preventDefault();


    if (newPassword !== confirmPassword) {
      setError("Passwords don't match");
      return;
    }

  
    axios
      .put('http://localhost:5000/updatePassword', { email, password: newPassword })
      .then((res) => {
        console.log(res.data);
        alert("password changed successfully")
        navigate('/login')
    
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className='container-fluid body d-flex justify-content-center align-items-center'>
      <div className='bg-black text-white p-3 rounded w-25 content'>
        <h2>Forgot Password</h2>
        <form onSubmit={handleSendEmail}>
          <div className='mb-3'>
          <h5>step 1</h5>
            <label>Email</label>
            <input
              type='email'
              className='form-control rounded-0'
              placeholder='Enter Your Email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <button type='submit' className='btn btn-success w-100 rounded-0'>
            Submit
          </button>
        </form>
        <h5 className='mt-2'>Step 2: Set New Password</h5>
        <form onSubmit={handlePasswordUpdate}>
          <input
            type='password'
            className='form-control mt-3'
            placeholder='Enter New Password'
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />
          <input
            type='password'
            className='form-control mt-3'
            placeholder='Confirm New Password'
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <button type='submit' className='btn btn-success w-100 mt-3'>
            Update Password
          </button>
        </form>
        {error && <div className='mt-3 text-danger'>{error}</div>}
      </div>
    </div>
  );
}

export default ForgotPassword;
