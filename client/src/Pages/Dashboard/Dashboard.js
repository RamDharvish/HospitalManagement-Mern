import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../Components/Navbar/Navbar';
import Sidenav from '../../Components/Sidenav/Sidenav';
import './dashboard.css'
import Employee from './Employee';
import Head from './Head'
import Department from './Department'
function Dashboard() {
    const navigate = useNavigate();
    const [success, setSuccess] = useState();
    const [showEmployee, setShowEmployee] = useState(false)
    const [showDepartmentHead, setShowDepartmentHead] = useState(false)
    const [showDepartment, setShowDepartment] = useState(false)

    axios.defaults.withCredentials = true;
    useEffect(() => {
        axios.get("http://localhost:5000/dashboard")
            .then(res => {
                if (res.data === "success") {
                    setSuccess("success ok");
                } else {
                    navigate('/login');
                }
            })
            .catch(err => console.log(err));
    }, []);

    const handleEmployee = () => {

        navigate('/dashboard/employee')
    }
    const handleDepartmentHead = () => {

        navigate('/dashboard/head')
    }
    const handleDepartment = () => {

        navigate('/dashboard/department')
    }


    return (
        <div className='vh-100 bg-secondary dashboard-body'>
            <Sidenav />

            <div className="dashboard d-flex justify-content-center bg-primary align-items-center">
                <div className='items mr-2' onClick={handleEmployee}>Employee</div>
                <div className='items ml-2' onClick={handleDepartmentHead}>Head</div>
                <div className='items ml-2' onClick={handleDepartment}>Department</div>

            </div>
            {/* {showEmployee && (

                <div className='d-flex justify-content-center bg-primary vh-100 text-white align-items-center'>
                    <Employee />
                </div>
            )} */}


            {/* {showDepartmentHead && (

                <div className='d-flex justify-content-center bg-primary vh-100 text-white align-items-center'>
                    <Head />
                </div>
            )}
            
            {showDepartment && (

<div className='d-flex justify-content-center bg-primary vh-100 text-white align-items-center'>
    <Department />
</div>
)} */}
        </div>

    );
}

export default Dashboard;
