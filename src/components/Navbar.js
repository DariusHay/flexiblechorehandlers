import React from 'react'
// React Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
    const location = useLocation();
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-dark fixed-top">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/flexiblechorehandlers" onClick={() => window.scrollTo(0, 0)}>Flexible Chore Handlers</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    {/* <span className="navbar-toggler-icon" style={{ color: "#fff" }}></span> */}
                    <FontAwesomeIcon icon={faBars} style={{ color: "#fff" }}/>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto">
                        <li className={location.pathname === "/flexiblechorehandlers" ? "nav-item active" : "nav-item"}>
                            <Link to="/flexiblechorehandlers" className="nav-link" onClick={() => window.scrollTo(0, 0)}><span type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent">Home</span></Link>
                        </li>
                        <li className={location.pathname === "/about-owner" ? "nav-item active" : "nav-item"}>
                            <Link to="/about-owner" className="nav-link" onClick={() => window.scrollTo(0, 0)}><span type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent">About Owner</span></Link>
                        </li>
                        <li className={location.pathname === "/services" ? "nav-item active" : "nav-item"}>
                            <Link to="/services" className="nav-link" onClick={() => window.scrollTo(0, 0)}><span type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent">Services</span></Link>
                        </li>
                        <li className={location.pathname === "/contact" ? "nav-item active" : "nav-item"}>
                            <Link to="/contact" className="nav-link" onClick={() => window.scrollTo(0, 0)}><span type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent">Contact</span></Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
