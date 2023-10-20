

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

function EditEmp() {
  const [department, setDepartment] = useState([]);
  const [head, setHead] = useState([]);
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [number, setNumber] = useState('');
  const [description, setDescription] = useState('');
  const [deptName, setDeptName] = useState('');
  const [deptHead, setDeptHead] = useState('');
  const [image, setImage] = useState(null);
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    axios.get('http://localhost:5000/showDepartment').then((res) => setDepartment(res.data)).catch((err) => console.log(err));
    axios.get('http://localhost:5000/showDepartmentHead').then((res) => setHead(res.data)).catch((err) => console.log(err));
    axios.get('http://localhost:5000/getEmployee/' + id).then((res) => {
      setName(res.data.name);
      setAge(res.data.age);
      setNumber(res.data.number);
      setDescription(res.data.description);
      setDeptName(res.data.department);
      setDeptHead(res.data.departmentHead);
    }).catch((err) => console.log(err));
  }, [id]);

  const updateEmployee = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('name', name);
    formData.append('age', age);
    formData.append('number', number);
    formData.append('description', description);
    formData.append('department', deptName);
    formData.append('departmentHead', deptHead);
    if (image) {
      formData.append('file', image);
    }

    axios.put(`http://localhost:5000/updateEmployee/${id}`, formData)
      .then(response => {
        console.log(response);
        navigate('/employees');
      })
      .catch(error => {
        console.error(error);
      });
  };

  return (
    <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
      <div className=" bg-white p-3 rounded emp">
        <h3>Edit Employee</h3>
        <form onSubmit={updateEmployee}>
          <div className="mt-3">
             <label>Name</label>
             <input
              type="text"
              placeholder='Enter Name'
              className='form-control'
              value={name}
              onChange={(e)=>setName(e.target.value)}
            />
          </div>

          <div className="mt-3">
            <label>Age</label>
            <input
              type="number"
              placeholder='Enter Age'
              className='form-control'
              value={age}
              onChange={(e)=>setAge(e.target.value)}
            />
          </div>

          <div className="mt-3">
            <label>Number</label>
            <input
              type="number"
              placeholder='Enter Number'
              className='form-control'
              value={number}
              onChange={(e)=>setNumber(e.target.value)}
            />
          </div>

          <div className="mt-3">
            <label>Description</label>
            <input
              type="text"
              placeholder='Enter Description'
              className='form-control'
              value={description}
              onChange={(e)=>setDescription(e.target.value)}
            />
          </div>

          <div className="mt-3">
            <label htmlFor="">Department</label>
            <select
              className='form-control'
              value={deptName}
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
              value={deptHead}
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
              className='form-control'
              onChange={(e) => setImage(e.target.files[0])}
            />
          </div>
          <button type='submit' className='btn btn-success mt-3 d-flex'>
            Edit Employee
          </button>
          <Link className='btn btn-warning mt-2' to={'/employees'}>
            Back to Employee
          </Link>
        </form>
      </div>
    </div>
  );
}

export default EditEmp;
