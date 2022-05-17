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
                <a className="navbar-brand" href="/">Flexible Chore Hanlders</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    {/* <span className="navbar-toggler-icon" style={{ color: "#fff" }}></span> */}
                    <FontAwesomeIcon icon={faBars} style={{ color: "#fff" }}/>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto">
                        <li className={location.pathname === "/flexiblefloorhandlers/" ? "nav-item active" : "nav-item"}>
                            <a className="nav-link" href="/flexiblefloorhandlers/">Home </a>
                        </li>
                        <li className={location.pathname === "/about-owner" ? "nav-item active" : "nav-item"}>
                            <Link className="nav-link" href="/about-owner">About Owner</Link>
                        </li>
                        <li className={location.pathname === "/flexiblefloorhandlers/services" ? "nav-item active" : "nav-item"}>
                            <a className="nav-link" href="/flexiblefloorhandlers/services">Services</a>
                        </li>
                        <li className={location.pathname === "/flexiblefloorhandlers/contact" ? "nav-item active" : "nav-item"}>
                            <a className="nav-link" href="/flexiblefloorhandlers/contact">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
