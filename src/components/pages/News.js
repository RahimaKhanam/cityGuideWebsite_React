import React, { Component } from 'react';
import NewsCompnent from '../layouts/NewsComponent';

// Image import
import img1 from '../images/dom-fotografii.jpg';
import img2 from '../images/garaj.jpg';
import img3 from '../images/garaj2.jpg';
import img4 from '../images/tretyakovka.jpg';


class News extends Component {
    render() {
        return (
            <div>
                <h2 className="m-4 text-center">News Page</h2>
                <NewsCompnent imgsrc={img1}/>
                <NewsCompnent imgsrc={img2}/>
                <NewsCompnent imgsrc={img3}/>
                <NewsCompnent imgsrc={img4}/>
            </div>
        )
    }
}

export default News;
