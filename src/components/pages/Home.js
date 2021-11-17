import React, { Component } from 'react';
import Cards from '../layouts/Cards';
import Carousel from '../layouts/Carousel';

class Home extends Component {
    render() {
        return (
            <div>
                <Carousel/>
                <h2 className="m-4 text-center">Top Places</h2>
                <Cards/>
            </div>
        )
    }
}

export default Home;
