import React from 'react';
import logo from './logo.svg';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import '../../App.css';

function Navbar() {
    return (
        <div class="sticky-top">
            <nav className="navbar navbar-expand-lg navbar-light bg-dark">
                <div className="container-fluid">
                    <Link className="navbar-brand ms-5 link" to="/">
                        <img src={logo} alt="logo" style={{ width: '35px'}}></img>
                        &nbsp;<h3 className="logo-text">CityGuide</h3>
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span><i class="fas fa-bars" style={{color: '#fff'}}></i></span>
                    </button>
                    <Nav className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav m-auto">
                            <li className="nav-item active">
                                <Link className="nav-link text-white text-uppercase ms-5 link" aria-current="page" to="/"><i class="fas fa-home"></i>&nbsp;&nbsp;Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-white text-uppercase ms-5 link" to="/news"><i class="fas fa-newspaper"></i>&nbsp;&nbsp;News</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-white text-uppercase ms-5 link" to="/contact"><i class="fas fa-id-card-alt"></i>&nbsp;&nbsp;Contact Us</Link>
                            </li>
                        </ul>

                        <ul className="m-auto me-5">
                            <Link className="text-white link" to="/mail"><i class="far fa-envelope fa-lg"></i></Link>
                            <Link className="text-white ms-5 link" to="/instagram"><i class="fab fa-instagram fa-lg"></i></Link>
                            <Link className="text-white ms-5 link" to="/facebook"><i class="fab fa-facebook-f fa-lg"></i></Link>
                        </ul>

                        
                    </Nav>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;

const Nav = styled.div`
@media(max-width: 768px) {

    display: flex;
    flex-flow: column wrap;
    justify-content: center;
    align-items: center;
    gap: 1rem;

.m-auto {
    margin: 0 !important;
}
}
`;
