import React, { Component } from 'react';
import img from '../images/garaj.jpg';
import styled from 'styled-components';
import Reviews from '../layouts/Reviews';


class Details extends Component {
    render() {
        return (
            <div>


                <HeaderDetails className="container-fluid align-items-center">
                    <h1 className="display-1 font-weight-bold">Lorem ipsum</h1>
                    <h4 className="display-5">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</h4>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                        Fuga odio sequi, nemo molestias, doloribus reiciendis dignissimos
                        voluptatem quas id dolorum placeat, laudantium autem minus optio. Earum nam necessitatibus amet placeat.
                    </p>

                    {/* Social Icons */}
                    <div className="container mt-5">
                        <div className="row justify-content-center">
                            <div className="col-2">
                                <i class="fab fa-facebook-f"></i>
                            </div>
                            <div className="col-2">
                                <i class="fab fa-twitter"></i>
                            </div>
                            <div className="col-2">
                                <i class="fab fa-google-plus-g"></i>
                            </div>
                            <div className="col-2">
                                <i class="fab fa-reddit"></i>
                            </div>
                            <div className="col-2">
                                <i class="fab fa-whatsapp"></i>
                            </div>
                            <div className="col-2">
                                <i class="fab fa-instagram"></i>
                            </div>
                        </div>
                    </div>
                </HeaderDetails>

                {/* Nav Link */}
                <div className="container">

                    <ul class="nav nav-tabs" id="myTab" role="tablist">
                        {/* About Place Link */}
                        <li class="nav-item" role="presentation">
                            <button
                                class="nav-link active"
                                id="aboutplace-tab"
                                data-bs-toggle="tab"
                                data-bs-target="#aboutPlace"
                                type="button"
                                role="tab"
                                aria-controls="aboutPlace"
                                aria-selected="true">
                                About Place</button>
                        </li>
                        {/* Reveiws Link */}
                        <li class="nav-item" role="presentation">
                            <button
                                class="nav-link"
                                id="reviews-tab"
                                data-bs-toggle="tab"
                                data-bs-target="#reviews"
                                type="button" role="tab"
                                aria-controls="reviews"
                                aria-selected="false">
                                Reviews</button>
                        </li>
                        {/* Map Link */}
                        <li class="nav-item" role="presentation">
                            <button
                                class="nav-link"
                                id="map-tab"
                                data-bs-toggle="tab"
                                data-bs-target="#map"
                                type="button" role="tab"
                                aria-controls="map"
                                aria-selected="false">
                                Map</button>
                        </li>
                    </ul>


                    {/* Tab Pane */}
                    <div class="tab-content" id="myTabContent">

                        {/* About Place tab */}
                        <div
                            id="aboutPlace"
                            class="tab-pane fade show active text-center mt-4"
                            role="tabpanel"
                            aria-labelledby="aboutplace-tab">
                            <h2 className="mb-3">Lorem ipsum</h2>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                            <img
                                src={img}
                                alt='dnahedn efbnhebfs'
                                className="img-thumbnail img-fluid"
                            />

                        </div>

                        {/* Reviews */}
                        <div
                            id="reviews"
                            class="tab-pane fade"
                            role="tabpanel"
                            aria-labelledby="reviews-tab">
                            <Reviews/>
                        </div>

                        {/* Map */}
                        <div
                            id="map"
                            class="tab-pane fade"
                            role="tabpanel"
                            aria-labelledby="map-tab">
                            <iframe
                                title="nfn"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56041.96588940903!2d77.19949947910156!3d28.61108859999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce3191d600853%3A0x32ed681b6863968c!2sDelhi%20Tourism!5e0!3m2!1sen!2sin!4v1637349626044!5m2!1sen!2sin"
                                style={{
                                    border: '0',
                                    width: '100%',
                                    height: '28.125rem',
                                    frameborder: '0'
                                }}></iframe>

                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default Details;

const HeaderDetails = styled.header`
background: linear-gradient(rgba(109, 109,109), rgba(255, 255, 255));
height: 100vh;
text-transform: uppercase;
color: var(--mainWhite);
text-align: center;

h1 {
    padding-top: 10%;
    color: var(--mainDark);
}

h4 {
    color: var(--mainDark);
}

p {
    padding-left: 10%;
    padding-right: 10%;
    margin-bottom: 10%;
    color: var(--mainDark);
}

i {
    font-size: 1.85rem;
    color: var(--mainDark);
}

i:hover {
    color: var(--mainGrey);
    cursor: pointer;
}

.nav-item {
    height: 18.75rem;
}

@media (max-width: 760px) {
    h1, h4 {
        color: var(--mainWhite);
    }
}

`;
