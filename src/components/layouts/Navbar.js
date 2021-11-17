import React from 'react';
import logo from './logo.svg';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-dark">
                <div className="container-fluid">
                    <Link className="navbar-brand ms-5" to="#">
                        <img src={logo} alt="logo" style={{ width: '35px'}}></img>
                        &nbsp;<h3 className="logo-text">CityGuide</h3>
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span><i class="fas fa-bars" style={{color: '#fff'}}></i></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav m-auto">
                            <li className="nav-item active">
                                <Link className="nav-link text-white text-uppercase ms-5" aria-current="page" to="/"><i class="fas fa-home"></i>&nbsp;&nbsp;Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-white text-uppercase ms-5" to="/news"><i class="fas fa-newspaper"></i>&nbsp;&nbsp;News</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-white text-uppercase ms-5" to="/contact"><i class="fas fa-id-card-alt"></i>&nbsp;&nbsp;Contact Us</Link>
                            </li>
                        </ul>

                        <ul className="m-auto me-5">
                            <Link className="text-white" to="/mail"><i class="far fa-envelope fa-lg"></i></Link>
                            <Link className="text-white ms-5" to="/instagram"><i class="fab fa-instagram fa-lg"></i></Link>
                            <Link className="text-white ms-5" to="/facebook"><i class="fab fa-facebook-f fa-lg"></i></Link>
                        </ul>

                        
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;
