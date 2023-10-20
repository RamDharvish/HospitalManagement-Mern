import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
function UpdateDeptHead() {
  const navigate = useNavigate()
  const { id } = useParams()
  const [name,setName] =useState()
  const [age,setAge] =useState()
  const [number,setNumber]=useState()
  const [description,setDescription]=useState()
  const [department,setDepartment] =useState([])
  const [image,setImage]=useState()
  const [deptName, setDeptName] = useState('');

  useEffect(() => {
  axios
    .get('http://localhost:5000/showDepartment')
    .then((res) => setDepartment(res.data)).catch((err) => console.log(err))
}, []);


  useEffect(()=> {
        axios.get('http://localhost:5000/getHead/'+id)
        .then(res =>{
          setName(res.data.name)
          setAge(res.data.age)
          setNumber(res.data.number)
          setDescription(res.data.description)
          setImage(res.data.filename)
        })
  },[id])

const submit = (e) => {
  e.preventDefault();
  const formData = new FormData();
  formData.append('name', name);
  formData.append('age', age);
  formData.append('number', number);
  formData.append('description', description);
  formData.append('department', deptName);


  if (image) {
    formData.append('file', image);
  }

  axios.put(`http://localhost:5000/updateHead/${id}`, formData)
    .then(response => {
      console.log(response);
      navigate('/departmentHeads');
    })
    .catch(error => {
      console.error(error);
    });
};


  return (
    <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
      <div className=" bg-white p-3 rounded updatebody">
        <h3>Update Department</h3>
        <form onSubmit={submit}>
          <div className="mt-3">
            <label htmlFor="">Name</label>
            <input type="text" className='form-control' onChange={(e)=>setName(e.target.value)} value={name}/>
          </div>
          <div className="mt-3">
            <label htmlFor="">Age</label>
            <input type="number" className='form-control'  onChange={(e)=>setAge(e.target.value)} value={age}/>
          </div>
          <div className="mt-3">
            <label htmlFor="">Number</label>
            <input type="number" className='form-control'  onChange={(e)=>setNumber(e.target.value)} value={number}/>
          </div>
          <div className="mt-3">
            <label htmlFor="">Description</label>
            <input type="text" className='form-control'  onChange={(e)=>setDescription(e.target.value)} value={description}/>
          </div>
          <div className="mt-3">
            <label htmlFor="">Departmennt</label>
            <select className='form-control'  onChange={(e)=>setDeptName(e.target.value)} value={deptName}>
            <option value="">Select Department</option>
            {department.map((data) => (
                <option key={data.id} value={data.name}>
                  {data.name}
                </option>
              ))}
            </select>
          </div>
          <div className="mt-3">
          <input type="file" name="file" className='form-control' onChange={(e) => setImage(e.target.files[0])} />
          </div>
          <button type='submit' className='btn btn-success mt-3 d-flex'>Update Department</button>
          <Link className='btn btn-warning mt-2' to={'/departmentHeads'}> Back to Department Heads</Link>
        </form>
      </div>
    </div>
  )
}

export default UpdateDeptHead