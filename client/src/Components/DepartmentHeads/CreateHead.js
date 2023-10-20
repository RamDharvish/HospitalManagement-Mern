


import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import './deptHead.css'
function CreateHead() {
  const [department, setDepartment] = useState([]);
  const [headName, setHeadName] = useState('');
  const [age, setAge] = useState('');
  const [number, setNumber] = useState('');
  const [description, setDescription] = useState('');
  const [deptName, setDeptName] = useState('');
  const [image, setImage] = useState(null);

  const navigate=useNavigate()

  useEffect(() => {
    axios
      .get('http://localhost:5000/showDepartment')
      .then((res) => setDepartment(res.data))
      .catch((err) => console.log(err));
  }, []);

  const handleCreateHead = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('name', headName);
    formData.append('age', age);
    formData.append('number', number);
    formData.append('description', description);
    formData.append('deptName', deptName);
    formData.append('file', image);

    axios
      .post('http://localhost:5000/createHead', formData)
      .then((res) => {
       navigate('/departmentHeads')
  
      })
      .catch((err) => {
        console.error('Error creating department head:', err);
      });
  };

  return (
    <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
      <div className='bg-white p-3 rounded createBody'>
        <h3>Add Department Heads</h3>
        <form onSubmit={handleCreateHead}>
          <div className='mt-3'>
            <label>Name</label>
            <input
              type='text'
              className='form-control'
              placeholder='Enter Department Head Name'
              value={headName}
              onChange={(e) => setHeadName(e.target.value)}
            />
          </div>
          <div className='mt-3'>
            <label>Age</label>
            <input
              type='number'
              className='form-control'
              placeholder='Enter Age'
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
          </div>
          <div className='mt-3'>
            <label>Number</label>
            <input
              type='number'
              className='form-control'
              placeholder='Enter Mobile Number'
              value={number}
              onChange={(e) => setNumber(e.target.value)}
            />
          </div>

          <div className='mt-3'>
            <label>Description</label>
            <input
              type='text'
              className='form-control'
              placeholder='Enter a description'
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div className='mt-3'>
            <label>Department</label>
            <select
              className='form-control'
              value={deptName}
              onChange={(e) => setDeptName(e.target.value)}
            >
            <option value="">Select Department</option>
              {department.map((data) => (
                <option key={data.id} value={data.name}>
                  {data.name}
                </option>
              ))}
            </select>
          </div>
          <div className='mt-3'>
            <input type='file'  name="file" onChange={(e) => setImage(e.target.files[0])} />
          </div>
          <button type='submit' className='btn btn-success mt-3 d-flex'>
            Create Department Head
          </button>
          <Link className='btn btn-warning mt-2' to={'/departmentHeads'}>
            Back to Department
          </Link>
        </form>
      </div>
    </div>
  );
}

export default CreateHead;
