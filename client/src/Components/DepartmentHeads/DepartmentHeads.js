
import React, { useEffect, useState } from 'react'
import Sidenav from '../Sidenav/Sidenav'
import { Link } from 'react-router-dom'
import './deptHead.css'
import { FaTrash, FaEdit } from 'react-icons/fa'
import axios from 'axios'
function DepartmentHeads() {
  const [department, setDepartment] = useState([])
  useEffect(() => {
    axios.get('http://localhost:5000/showDepartmentHead')
      .then(res => setDepartment(res.data))
      .catch(err => console.log(err))
  }, [])
  const handleDelete = (id) => {
    axios.delete('http://localhost:5000/deleteHead/' + id)
      .then(res => window.location.reload())
      .catch(err => console.log(err))
  }
  return (
    <div>
      <Sidenav />
      <div className='d-flex bg-primary vh-100 justify-content-end align-items-center container-fluid '>
        <div className=" bg-white p-3 rounded department ms-5">
          <Link className='btn btn-success' to={'/departmentHead/create'}>ADD Department Heads</Link>
          <div className="table-wrapper-scroll-y table-wrapper-scroll-x  my-custom-scrollbar">
            <table className="table table-responsible">
              <thead className="fixed-table-header">
                <tr className='t-head'>
                  <th style={{ width: '15%' }} className='dept-img'>Profile</th>
                  <th>Name</th>
                  <th className='year'>Age</th>
                  <th>Number</th>
                  <th className='description'>Description</th>
                  <th>Department</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {
                  department.map((value, index) => {
                    return <tr key={index}>
                      <td className='dept-img'><img src={`http://localhost:5000/images/${value.image}`} alt="Department" style={{ width: '80%', left: "0" }} /></td>
                      <td className='dept-name'>{value.name}</td>
                      <td >{value.age}</td>
                      <td >{value.number}</td>
                      <td>{value.description}</td>
                      <td>{value.department}</td>
                      <td><Link to={`/departmentHead/update/${value._id}`} className='mt-4 d-flex'><FaEdit /></Link></td>
                    
                      <td><FaTrash onClick={() => handleDelete(value._id)} className=' mt-4' /></td>

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