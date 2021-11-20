import React, { Component } from 'react';
import NewsCompnent from '../layouts/NewsComponent';
import "../../App.css";

// Image import
import img1 from '../images/dom-fotografii.jpg';
import img2 from '../images/garaj.jpg';
import img3 from '../images/garaj2.jpg';
import img4 from '../images/tretyakovka.jpg';


class News extends Component {
    render() {
        return (
            <div>
                <h2 className="mt-5 text-center text-uppercase">Top News</h2>
                <div className="underline mx-auto mb-5"></div>
                <NewsCompnent imgsrc={img1} />
                <NewsCompnent imgsrc={img2} />
                <NewsCompnent imgsrc={img3} />
                <NewsCompnent imgsrc={img4} />
            </div>
        )
    }
}

export default News;
