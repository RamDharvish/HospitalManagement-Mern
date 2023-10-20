import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './Pages/Home/Home'
import Navbar from './Components/Navbar/Navbar'
import About from './Pages/About/About'
import Signup from './Components/Signup/Signup'
import Login from './Components/Login/Login'
import Dashboard from './Pages/Dashboard/Dashboard'
import ForgotPassword from './Components/ForgotPassword/ForgotPassword'
import Departments from './Components/Department/Departments'
import DepartmentHeads from './Components/DepartmentHeads/DepartmentHeads'
import Employees from './Components/Employees/Employees'
import CreateDept from './Components/Department/CreateDept'
import UpdateDept from './Components/Department/UpdateDept'
import CreateHead from './Components/DepartmentHeads/CreateHead'
import CreateEmp from './Components/Employees/CreateEmp'
import UpdateDeptHead from './Components/DepartmentHeads/UpdateDeptHead'
import EditEmp from './Components/Employees/EditEmp'
import EmployeeDetails from './Components/Employees/EmployeeDetails'
import HeadDetails from './Components/DepartmentHeads/HeadDetails'
import DepartmentDetails from './Components/Department/DepartmentDetails'
import Department from './Pages/Dashboard/Department'
import Head from './Pages/Dashboard/Head'
import Employee from './Pages/Dashboard/Employee'
function App() {


  return (
    <div>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/forgotpassword' element={<ForgotPassword/>}/>
          <Route path='/dashboard' element={<Dashboard/>}/>
          <Route path='/department' element={<Departments/>}/>
          <Route path='/departmentHeads' element={<DepartmentHeads/>}/>
          <Route path='/employees' element={<Employees/>}/>
          <Route path='/department/create' element={<CreateDept/>}/>
          <Route path='/department/update/:id' element={<UpdateDept/>}/>
          <Route path='/departmentHead/create' element={<CreateHead/>}/>
          <Route path='/departmentHead/update/:id' element={<UpdateDeptHead/>}/>
          <Route path='/employees/create' element={<CreateEmp/>}/>
          <Route path='/employees/update/:id' element={<EditEmp/>}/>
          <Route path='/dashboard/employeeDetails/:id' element={<EmployeeDetails/>}/>
          <Route path='/dashboard/headDetails/:id' element={<HeadDetails/>}/>
          <Route path='/dashboard/departmentDetails/:id' element={<DepartmentDetails/>}/>
          <Route path='/dashboard/department' element={<Department/>}/>
          <Route path='/dashboard/head' element={<Head/>}/>
          <Route path='/dashboard/employee' element={<Employee/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App