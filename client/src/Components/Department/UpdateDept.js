import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import './department.css'
function UpdateDept() {
  const [deptName,setDeptName]=useState()
  const [year,setYear]=useState()
  const [description,setDescription]=useState()
  const [file,setFile]=useState()
 const navigate=useNavigate()
 const {id}=useParams()

 useEffect(()=>{
    axios.get("http://localhost:5000/getDepartment/"+id)
   .then(result => {
    setDeptName(result.data.name)
    setYear(result.data.year)
    setDescription(result.data.description)
    setFile(result.data.image)
   })
   .catch(err =>console.log(err))
 },[])

 const submit = (e) => {
  e.preventDefault();
  const formData = new FormData();
  formData.append('file', file);
  formData.append('name', deptName);
  formData.append('year', year);
  formData.append('description', description);
  axios.put(`http://localhost:5000/updateDepartment/${id}`, formData)
    .then(res =>{
      console.log(res)
      navigate('/department')
    })
    .catch(err => console.error(err));
};

  return (
    <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
    <div className=" bg-white p-3 rounded updatebody">
    <h3>Update Department</h3>
        <form onSubmit={submit}>
            <label>Department Name</label>
            <input type="text" className='form-control mt-2' placeholder='Enter the Department Name' value={deptName} onChange={(e)=>setDeptName(e.target.value)} />

            <label>Year Found</label>
            <input type="number" className='form-control mt-2'placeholder='Enter the year' value={year}  onChange={(e)=>setYear(e.target.value)}/>

            <label>Description</label>
            <input type="text" className='form-control mt-2'placeholder='Enter a description' value={description} onChange={(e)=>setDescription(e.target.value)}/>
            <input type="file" className='mt-2'  onChange={(e)=>setFile(e.target.files[0])}/>
            <button type='submit' className='btn btn-success mt-3 d-flex'>Update Department</button>
           <Link className='btn btn-warning mt-2' to={'/department'}> Back to Department</Link>
        </form>
    </div>
</div>
  )
}

export default UpdateDept