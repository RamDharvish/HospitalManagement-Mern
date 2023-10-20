import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
function CreateEmp() {
  const [department, setDepartment] = useState([])
  const [head, setHead] = useState([])

  useEffect(() => {
    axios
      .get('http://localhost:5000/showDepartment')
      .then((res) => setDepartment(res.data))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    axios.get('http://localhost:5000/showDepartmentHead')
      .then(res => setHead(res.data))
      .catch(err => console.log(err))
  }, [])

  const [name, setName] = useState()
  const [age, setAge] = useState()
  const [number, setNumber] = useState()
  const [descripton, setDescription] = useState()
  const [deptName, setDeptName] = useState()
  const [deptHead, setDeptHead] = useState()
  const [image,setImage]=useState()
 const navigate=useNavigate()

  const createEmployee=(e)=> {
    e.preventDefault()
    const formData=new FormData()
    formData.append("name",name)
    formData.append("age",age)
    formData.append("number",number)
    formData.append("description",descripton)
    formData.append("department",deptName)
    formData.append("departmentHead",deptHead)
    formData.append("file",image)
    axios.post('http://localhost:5000/createEmployee',formData)
    .then(res => {
      console.log("employee created successfully")
      navigate('/employees')
    })
    .catch(err =>console.log(err))
  }
  return (
    <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
      <div className='bg-white p-3 rounded createEmp'>
        <h3>Add Employee</h3>
        <form onSubmit={createEmployee}>
          <div className="mt-3">
            <label>Name</label>
            <input
              type="text"
              placeholder='Enter Name'
              className='form-control'
              onChange={(e)=>setName(e.target.value)}
            />
          </div>

          <div className="mt-3">
            <label>Age</label>
            <input
              type="number"
              placeholder='Enter Age'
              className='form-control'
              onChange={(e)=>setAge(e.target.value)}
            />
          </div>

          <div className="mt-3">
            <label>Number</label>
            <input
              type="number"
              placeholder='Enter Number'
              className='form-control'
              onChange={(e)=>setNumber(e.target.value)}
            />
          </div>

          <div className="mt-3">
            <label>Description</label>
            <input
              type="text"
              placeholder='Enter Description'
              className='form-control'
              onChange={(e)=>setDescription(e.target.value)}
            />
          </div>

          <div className="mt-3">
            <label htmlFor="">Department</label>
            <select
              className='form-control'
              onChange={(e)=>setDeptName(e.target.value)}
              >
              <option value="">Select Department</option>
              {department.map((data) => (
                <option key={data.id} value={data.name}>
                  {data.name}
                </option>
              ))}
            </select>
          </div>
          <div className="mt-3">
            <label htmlFor="">Department Head</label>
            <select
              className='form-control'
              onChange={(e)=>setDeptHead(e.target.value)}>
              <option value="">Select Department Head</option>
              {
                head.map((value) => {

                  return <option key={value.id}>{value.name}</option>
                })
              }
            </select>
          </div>
          <div className="mt-3">
            <input
              type="file"
              name="file"
              placeholder='Enter Name'
              className='form-control'
              onChange={(e)=>setImage(e.target.files[0])}
            />
          </div>
          <button type='submit' className='btn btn-success mt-3 d-flex'>
            Create Employee
          </button>
          <Link className='btn btn-warning mt-2' to={'/employees'}>
            Back to Employee
          </Link>
        </form>
      </div>
    </div>
  )
}

export default CreateEmp