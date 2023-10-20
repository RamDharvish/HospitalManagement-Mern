import React, { useState } from 'react';
import { MdLocalHospital } from 'react-icons/md';
import { CgMenu, CgClose } from 'react-icons/cg';

import './navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };
    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
    };


    return (
        <div className={`navbar bg-secondary text-white ${isMobileMenuOpen ? 'mobile-menu-open' : ''}`}>
            <div className="logo ps-3">
                <h2>Hospital <MdLocalHospital /></h2>
            </div>
            <div className="nav-list pe-3">
                {/* <ul className={`list ${isMobileMenuOpen ? 'mobile-menu-list' : ''}`}>
                    <li className='nav-item'><Link className='link' to={'/'}>Home</Link></li>
                    <li className='nav-item'><Link className='link' to={'/about'}>About</Link></li>
                    <li className='nav-item'><Link className='link' to={'/signup'}>Sign up</Link></li>
                    <li className='nav-item'><Link className='link' to={'/login'}>Login</Link></li>
                </ul> */}
                <ul className={`list ${isMobileMenuOpen ? 'mobile-menu-list' : ''}`}>
                    <li className='nav-item'><Link className='link' to={'/'} onClick={closeMobileMenu}>Home</Link></li>
                    <li className='nav-item'><Link className='link' to={'/about'} onClick={closeMobileMenu}>About</Link></li>
                    <li className='nav-item'><Link className='link' to={'/signup'} onClick={closeMobileMenu}>Sign up</Link></li>
                    <li className='nav-item'><Link className='link' to={'/login'} onClick={closeMobileMenu}>Login</Link></li>
                </ul>

            </div>
            <div className="mobile-menu">
                {isMobileMenuOpen ? (
                    <CgClose onClick={toggleMobileMenu} />
                ) : (
                    <CgMenu onClick={toggleMobileMenu} className='me-3 fs-4' />
                )}
            </div>
        </div>
    );
};

export default Navbar;
