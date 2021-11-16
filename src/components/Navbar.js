import React from 'react';
import logo from '../logo.svg';

function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-dark">
                <div className="container-fluid">
                    <a className="navbar-brand ms-5" href="#">
                        <img src={logo} alt="logo" style={{ width: '35px'}}></img>
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav m-auto">
                            <li className="nav-item active">
                                <a className="nav-link text-white text-uppercase ms-5" aria-current="page" href="#"><i class="fas fa-home"></i>&nbsp;&nbsp;Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white text-uppercase ms-5" href="#"><i class="fas fa-newspaper"></i>&nbsp;&nbsp;News</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white text-uppercase ms-5" href="#"><i class="fas fa-id-card-alt"></i>&nbsp;&nbsp;Contact Us</a>
                            </li>
                        </ul>
                        <form className="d-flex me-5">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-primary" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;
