import React, { useState,useEffect } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import Sidenav from '../Sidenav/Sidenav'
function HeadDetails() {
  const [details,setDetails]=useState([])
  const navigate=useNavigate()
const {id}=useParams()
  useEffect(()=> {
        axios.get('http://localhost:5000/getHead/'+id)
        .then(res =>{
          setDetails(res.data)
        })
  },[id])
  return (
    <div className='d-flex bg-primary vh-100 justify-content-center align-items-center'>
    <Sidenav/>
        <div className="details bg-white p-3 rounded">
        <div className="table-wrapper-scroll-y table-wrapper-scroll-x  my-custom-scrollbar">
            <form action="">
              <h3>Dept Head Details</h3>
                <div className="empimg">
                <img src={`http://localhost:5000/images/${details.image}`} alt="Department" style={{ width: '30%' }} />
                </div>
                <h1>Name : {details.name}</h1>
                <h3>Number : {details.number}</h3>
                <h3>Age : {details.age}</h3>
                <h3>Department : {details.department}  <Link style={{fontSize:"20px"}} to={'/dashboard/department'}>Visit department details</Link></h3>
               <h3>Profile Description : {details.description}</h3>
            </form>
            <button className='btn-btn-success mt-5'style={{backgroundColor:"green",color:"#fff"}} onClick={()=>navigate('/dashboard/head')}>Back To Dept Head</button>
        </div>
        </div>
    </div>
  )
}

export default HeadDetails