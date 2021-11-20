import React, { Component } from 'react';
import Cards from '../layouts/Cards';
import Carousel from '../layouts/Carousel';
import { Link } from 'react-router-dom';
import '../../App.css';

class Home extends Component {
    render() {
        return (
            <div>
                <Carousel />

                {/* About Section */}
                <div className="col-md-12 text-center m-auto">
                    <h2 className="mt-5 text-center text-uppercase">About</h2>
                    <div className="underline mx-auto"></div>
                    <p className="ms-5 me-5 mt-3">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and scrambled it to make a type
                        specimen book.orem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer
                        took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,
                        but also the leap into electronic typesetting, remaining essentially unchanged.
                        It was popularised in the 1960s with the release of Letraset sheets containing
                        Lorem Ipsum passages, and more recently with desktop publishing software like
                        Aldus PageMaker including versions of Lorem Ipsum.
                    </p>

                    <Link to="/" className="btn btn-dark btn-c shadow">Read More...</Link>
                </div>


                <h2 className="mt-5 text-center text-uppercase">Top Places</h2>
                <div className="underline mx-auto"></div>
                <Cards />
            </div>
        )
    }
}

export default Home;
