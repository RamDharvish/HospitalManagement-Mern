

import React, { useEffect, useState } from 'react'
import Sidenav from '../Sidenav/Sidenav'
import { Link } from 'react-router-dom'
import './department.css'
import hospitalDept from '../../Assets/hospital dept.jpg'
import {FaTrash , FaEdit} from 'react-icons/fa'
import axios from 'axios'
function Departments() {
  const [department,setDepartment] = useState([])

useEffect(()=> {
 axios.get("http://localhost:5000/showDepartment")
 .then(res => setDepartment(res.data))
 .catch(err =>console.log(err))
},[])

const handleDelete=(id)=> {
  axios.delete('http://localhost:5000/deleteDepartment/'+id)
  .then(res => window.location.reload())
  .catch(err =>console.log(err))
}
  return (
    <div>
     <Sidenav/>
     <div className='d-flex bg-primary vh-100 justify-content-end align-items-center container-fluid '>
     <div className=" bg-white p-3 rounded department ms-5">
     <Link className='btn btn-success' to={'/department/create'}>ADD Department</Link>
     <div className="table-wrapper-scroll-y table-wrapper-scroll-x  my-custom-scrollbar">
       <table className="table table-responsible ">
        <thead className="fixed-table-header">
           <tr>
           <th style={{ width: '15%' }} className='dept-img'>Dept.Image</th>
            <th>Dept. Name</th>
            <th>year Found</th>
            <th>Description</th>
            <th>Action</th>
           </tr>
        </thead>
        <tbody>
          {
            department.map((value,index)=>{
            return  <tr key={index}>
              
                <td className='dept-img'><img src={`http://localhost:5000/images/${value.image}`} alt="Department" style={{ width: '80%', left: "0" }} /></td>

                <td className='dept-name'>{value.name}</td>
                <td className='year'>{value.year}</td>
                <td className='description'>{value.description}</td>
                <td><Link to={`/department/update/${value._id}`} className='mt-4 d-flex'><FaEdit/></Link></td>
             
                 <td><FaTrash onClick={()=>handleDelete(value._id)}  className=' mt-4'/></td>
                 
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
export default Departments