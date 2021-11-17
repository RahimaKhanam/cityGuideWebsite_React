import React from 'react';
import './Carousel.css';
import {Link} from 'react-router-dom';
import img1 from '../images/tretyakovka.jpg';
import img2 from '../images/mamm.jpg';
import img3 from '../images/pushkin.jpg';

function Carousel() {
    return (
        <div>
            <div id="carouselExampleCaptions" class="carousel slide carousel-fade" data-bs-ride="carousel">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active" data-interval='1000'>
                        <img src={img1} class="d-block w-100 car-img" alt="..."/>
                        <div class ="carousel-caption d-none d-md-block">
                        <h2 className='text-black'>First slide label</h2>
                        <p className='text-black'>Some representative placeholder content for the first slide.</p>
                        <Link to ="/contact" className="btn btn-lg btn-dark">Contact Us</Link>
                        </div>
                    </div>
                    <div class="carousel-item" data-interval='500'>
                        <img src={img2} class="d-block w-100 car-img" alt="..."/>
                        <div class ="carousel-caption d-none d-md-block">
                        <h2 className='text-black'>Second slide label</h2>
                        <p className='text-black'>Some representative placeholder content for the second slide.</p>
                        <Link to ="/contact" className="btn btn-lg btn-dark">Contact Us</Link>
                        </div>
                    </div>
                    <div class="carousel-item" data-interval='500'>
                        <img src={img3} class="d-block w-100 car-img" alt="..."/>
                        <div class ="carousel-caption d-none d-md-block">
                        <h2 className='text-black'>Third slide label</h2>
                        <p className='text-black'>Some representative placeholder content for the third slide.</p>
                        <Link to ="/contact" className="btn btn-lg btn-dark">Contact Us</Link>
                        </div>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>


        </div>
    )
}

export default Carousel;
