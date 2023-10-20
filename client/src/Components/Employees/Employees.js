
import React, { useState } from 'react'
import Sidenav from '../Sidenav/Sidenav'
import { Link } from 'react-router-dom'
import './employee.css'
import {FaTrash , FaEdit} from 'react-icons/fa'
import axios from 'axios'
function DepartmentHeads() {
  const [employees,setEmployees] = useState([])

  useState(()=> {
    axios.get('http://localhost:5000/getEmployee')
    .then(res =>setEmployees(res.data))
    .catch(err =>console.log(err))
  },[])
  const deleteEmp=(id)=> {
    axios.delete('http://localhost:5000/deleteEmployee/'+id)
    .then(res => window.location.reload())
    .catch(err =>console.log(err))
  }
  return (
    <div>
     <Sidenav/>
     <div className='d-flex bg-primary vh-100 justify-content-end align-items-center container-fluid '>
     <div className=" bg-white p-3 rounded department ms-5 emp">
     <Link className='btn btn-success' to={'/employees/create'}>ADD Employee</Link>
     <div className="table-wrapper-scroll-y table-wrapper-scroll-x  my-custom-scrollbar">
       <table className="table table-responsible">
        <thead className="fixed-table-header">
           <tr className='t-head'>
           <th style={{ width: '15%' }}>Profile</th>
            <th>Name</th>
            <th >Age</th>
            <th>Number</th>
            <th>Description</th>
            <th>Department</th>
            <th>Department Head</th>
            <th>Action</th>
           </tr>
        </thead>
        <tbody>
          {
            employees.map((value,index)=>{
            return  <tr key={index}>
            <td className='dept-img'><img src={`http://localhost:5000/images/${value.image}`} alt="Department" style={{ width: '80%', left: "0" }} /></td>
                <td >{value.name}</td>
                <td >{value.age}</td>
                <td>{value.number}</td>
                <td>{value.description}</td>
                <td>{value.department}</td>
                <td>{value.departmentHead}</td>
                <td><Link to={`/employees/update/${value._id}`} className='mt-4 d-flex'><FaEdit/></Link></td>
              
                 <td><FaTrash  className=' mt-4'onClick={()=>deleteEmp(value._id)}/></td>
                 
              </tr>
          })
          }
        </tbody>
       </table>
       </div>
     </div>
     </div>
    </div>
  )
}

export default DepartmentHeads