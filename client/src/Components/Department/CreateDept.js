import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
function CreateDept() {

  const [deptName,setDeptName]=useState()
  const [year,setYear]=useState()
  const [description,setDescription]=useState()
  const [file,setFile]=useState()
 const navigate=useNavigate()

  const submit=(e)=> {
        e.preventDefault()
        const formdata= new FormData()
        formdata.append('file', file);
        formdata.append('name', deptName);
        formdata.append('year', year);
        formdata.append('description', description);
       axios.post('http://localhost:5000/createDepartment',formdata)
       .then(res =>{
        console.log(res)
        navigate('/department')
       })
       .catch(err =>console.log(err))
    }
  return (
    <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
    <div className="w-50 bg-white p-3 rounded">
    <h3>Add Department</h3>
        <form onSubmit={submit}>
            <label>Department Name</label>
            <input type="text" className='form-control mt-2' placeholder='Enter the Department Name' onChange={(e)=>setDeptName(e.target.value)} />

            <label>Year Found</label>
            <input type="number" className='form-control mt-2'placeholder='Enter the year' onChange={(e)=>setYear(e.target.value)} />

            <label>Description</label>
            <input type="text" className='form-control mt-2'placeholder='Enter a description' onChange={(e)=>setDescription(e.target.value)} />
            <input type="file" className='mt-2' onChange={(e)=>setFile(e.target.files[0])}/>
            <button type='submit' className='btn btn-success mt-3 d-flex'>Create Department</button>
           <Link className='btn btn-warning mt-2' to={'/department'}> Back to Department</Link>
        </form>
    </div>
</div>
  )
}

export default CreateDept