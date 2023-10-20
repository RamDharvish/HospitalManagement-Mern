import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import Sidenav from '../../Components/Sidenav/Sidenav'

function Employee() {
    const [details,setDetails]=useState([])
    const navigate=useNavigate()
    useEffect(()=> {
    axios.get('http://localhost:5000/getEmployee')
    .then(res =>setDetails(res.data))
    .catch(err =>console.log(err))
    },[])
    return (
        <div className='d-flex bg-primary justify-content-end align-items-center vh-100'>
        <Sidenav/>
            <div className=" bg-white p-3 rounded department ms-5 empdash">
                <h3>Employees</h3>
                <div className="table-wrapper-scroll-y table-wrapper-scroll-x  my-custom-scrollbar">
                    <table className='table'>
                        <thead>
                            <tr>
                                <th style={{width:"15%"}}>profile</th>
                                <th>Name</th>
                                <th>Number</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {details.map((values)=>(
                                <tr>
                                <td className='dept-img'><img src={`http://localhost:5000/images/${values.image}`} alt="Department" style={{ width: '80%', left: "0" }} /></td>
                                    <td className='mt-5'>{values.name}</td>
                                    <td className='mt-5'>{values.number}</td>
                                    <button className='btn btn-success mt-4' onClick={()=>navigate(`/dashboard/employeeDetails/${values._id}`)}>View</button>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <button className='btn btn-warning' onClick={()=>navigate('/dashboard')}>Back to Dashboard</button>
                </div>

            </div>

        </div>
    )
}

export default Employee