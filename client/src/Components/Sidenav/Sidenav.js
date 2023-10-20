import React, { useState } from 'react';
import './sidenav.css'; 
import { Link, useLocation } from 'react-router-dom';
import { CgMenu, CgClose } from 'react-icons/cg';

function Sidenav() {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    const body = document.querySelector('.main-body');
    body.classList.toggle('active'); 
  };

  return (
    <div className='main-body'>
      <div className="sidenav-mobile-menu mt-5">
        {isMobileMenuOpen ? (
          <CgClose onClick={toggleMobileMenu} />
        ) : (
          <CgMenu onClick={toggleMobileMenu} className='me-3 fs-4' />
        )}
      </div>
      <div className={`sidenav-items ${location.pathname === '/dashboard' ? 'active' : ''}`}>
        <h1><Link className='link' to={'/dashboard'}>Dashboard</Link></h1>
      </div>
      <div className={`sidenav-items mb-3 ${location.pathname === '/department' ? 'active' : ''}`}>
        <h1><Link className='link' to={'/department'}>Departments</Link></h1>
      </div>
      <div className={`sidenav-items mb-3 ${location.pathname === '/departmentHeads' ? 'active' : ''}`}>
        <h1><Link className='link' to={'/departmentHeads'}>Department Heads</Link></h1>
      </div>
      <div className={`sidenav-items ${location.pathname === '/employees' ? 'active' : ''}`}>
        <h1><Link className='link' to={'/employees'}>Employees</Link></h1>
      </div>
      <div className={`sidenav-items`} style={{backgroundColor:"red"}}>
        <h1><Link className='link' to={'/login'}>Logout</Link></h1>
      </div>
    </div>
  );
}

export default Sidenav;
