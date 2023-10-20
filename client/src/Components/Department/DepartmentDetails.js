import React, { useState,useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Sidenav from '../Sidenav/Sidenav'
function DepartmentDetails() {
  const [details,setDetails]=useState([])
  const navigate=useNavigate()
  const {id}=useParams()
  const [Head,setHead]=useState([])
  const [emp,setEmp]=useState([])

useEffect(()=>{
    axios.get("http://localhost:5000/getDepartment/"+id)
   .then(result => {
    setDetails(result.data)
   })
   .catch(err =>console.log(err))
 },[id])
 useEffect(() => {
    axios.get('http://localhost:5000/showDepartmentHead')
      .then(res => setHead(res.data))
      .catch(err => console.log(err))
  }, [])


  useEffect(()=> {
    axios.get('http://localhost:5000/getEmployee')
    .then(res =>setEmp(res.data))
    .catch(err =>console.log(err))
    },[])

  return (
    <div className='d-flex bg-primary vh-100 justify-content-center align-items-center'>
    <Sidenav/>
        <div className="details bg-white p-3 rounded">
        <div className="table-wrapper-scroll-y table-wrapper-scroll-x  my-custom-scrollbar">
            <form action="">
              <h3>Department Details</h3>
                <div className="empimg">
                <img src={`http://localhost:5000/images/${details.image}`} alt="Department" style={{ width: '30%' }} />
                </div>
                <h1>Name : {details.name}</h1>
                <h3>Year Found : {details.year}</h3>
               <h3> Description : {details.description}</h3>
               <hr/>
               <h3>Department Head</h3>
              <table className="table">
              
                <thead>
                  <tr>
                    <th style={{width:"30%"}}>Image</th>
                    <th>Name</th>
                    <th>view</th>
                  </tr>
                </thead>
                <tbody>
                  {Head.map((value)=>(
                    <tr>
                   <td> <img src={`http://localhost:5000/images/${value.image}`} alt="Department" style={{ width: '100%' }} /></td>
                   <td>{value.name}</td>
                   <td><button onClick={()=>navigate(`/dashboard/headDetails/${value._id}`)}>Click here</button></td>
                    </tr>
                  ))}
                  <hr />
                  <h3>employees</h3>
                  <hr />
                 {emp.map((value)=>(
                  <tr>
                  <td> <img src={`http://localhost:5000/images/${value.image}`} alt="Department" style={{ width: '100%' }} /></td>
                    <td>{value.name}</td>
                    <td><button onClick={()=>navigate(`/dashboard/employeeDetails/${value._id}`)}>Click here</button></td>
                  </tr>
                 ))}
                </tbody>
              </table>
            </form>
            <button className='btn-btn-success mt-5'style={{backgroundColor:"green",color:"#fff"}} onClick={()=>navigate('/dashboard/department')}>Back To Department</button>
        </div>
        </div>
    </div>
  )
}

export default DepartmentDetails