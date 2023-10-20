import React, { useState ,useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import Sidenav from '../../Components/Sidenav/Sidenav'
import Dashboard from './Dashboard'
function Department() {
  const [details,setDetails]=useState([])
    const navigate=useNavigate()

    useEffect(()=> {
 axios.get("http://localhost:5000/showDepartment")
 .then(res => setDetails(res.data))
 .catch(err =>console.log(err))
},[])
  return (
    <div className='d-flex bg-primary  justify-content-end align-items-center w-100'>
    <Sidenav/>
    
            <div className=" bg-white p-3 rounded department ms-5 empdash">
                <h3>Department</h3>
                <div className="table-wrapper-scroll-y table-wrapper-scroll-x  my-custom-scrollbar">
                    <table className='table'>
                        <thead>
                            <tr>
                                <th style={{width:"15%"}}>profile</th>
                                <th>Name</th>
                                <th>Year found</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {details.map((values)=>(
                                <tr>
                                <td className='dept-img'><img src={`http://localhost:5000/images/${values.image}`} alt="Department" style={{ width: '80%', left: "0" }} /></td>
                                    <td className='mt-5'>{values.name}</td>
                                    <td className='mt-5'>{values.year}</td>
                                    <button className='btn btn-success mt-4' onClick={()=>navigate(`/dashboard/departmentDetails/${values._id}`)}>View</button>
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

export default Department