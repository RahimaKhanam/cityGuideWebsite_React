import React, { Component } from 'react';
import Cards from '../layouts/Cards';
import Carousel from '../layouts/Carousel';
import { Link } from 'react-router-dom';
import '../../App.css';
import g1 from '../images/g1.jpg';
import { CarouselData } from '../layouts/CarouselData';
// import g2 from '../images/g2.jpg';

class Home extends Component {
    render() {
        return (
            <div>
                <Carousel slides={CarouselData}/>

                {/* About Section */}
                <div className="col-md-12 text-center m-auto">
                    <h2 className="mt-5 text-center text-uppercase">About</h2>
                    <div className="underline mx-auto"></div>
                    <p className="mx-5 mt-3">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and scrambled it to make a type
                        specimen book.orem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer
                        took a galley of type and scrambled it to make a type specimen book.
                    </p>

                    <Link to="/" className="btn btn-dark btn-c shadow">Read More...</Link>
                </div>

                {/* Out Goal Section */}
                <div class="card mt-5 card-white" style={{
                    width: '100%',
                    background: "#fff",
                    border: "none"
                }} >
                    <div class="row g-0">
                        {/* Left section */}
                        <div class="col-md-6 text-center">
                            <div className="mb-3 mt-3">
                                <img src={g1} class="ms-5 g-cont shadow" alt="goal_image" />
                            </div>


                        </div>
                        {/* Right section */}
                        <div class="col-md-6 text-center">
                            <div class="card-body">
                                <h3 class="card-title text-dark">OUR GOAL</h3>
                                <div className="underline mx-auto"></div>
                                <p class="card-text mt-5">
                                    This is a wider card with supporting text below as a natural lead-in to additional content.
                                    This content is a little bit longer. Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                    when an unknown printer took a galley of type and scrambled it to make a type
                                    specimen book.orem Ipsum is simply dummy text of the printing and typesetting industry.
                                </p>
                                <Link to="/" className="btn btn-dark btn-c">More info</Link>
                            </div>
                        </div>
                    </div>
                </div>


                {/* Card section */}
                <h2 className="mt-5 text-center text-uppercase">Top Places</h2>
                <div className="underline mx-auto"></div>


                <Cards />


            </div>
        )
    }
}

export default Home;
