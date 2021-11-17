import React, { Component } from 'react';
import Card from './Card';

// Image import
import img1 from '../images/dom-fotografii.jpg';
import img2 from '../images/garaj.jpg';
import img3 from '../images/garaj2.jpg';
import img4 from '../images/tretyakovka.jpg';
import img5 from '../images/pushkin.jpg';
import img6 from '../images/mars.jpg';
import img7 from '../images/mamm.jpg';


class Cards extends Component {
    render() {
        return (
            <div>
                <div className="container-fluid d-flex justify-content-center mt-5">
                    <div className="row">
                        <div className="col-md-4">
                            <Card imgsrc={img1} title='EARUM FUGIAT'/>
                        </div>
                        <div className="col-md-4">
                            <Card imgsrc={img2} title='LOREM IPSUM'/>
                        </div>
                        <div className="col-md-4">
                            <Card imgsrc={img3} title='ADIPISICING ELIT'/>
                        </div>
                    </div>
                </div>


                <div className="container-fluid d-flex justify-content-center mt-5">
                    <div className="row">
                        <div className="col-md-4">
                            <Card imgsrc={img4} title='PERSPICITIS ILLUM'/>
                        </div>
                        <div className="col-md-4">
                            <Card imgsrc={img5} title='HORUND IRUTE'/>
                        </div>
                        <div className="col-md-4">
                            <Card imgsrc={img6} title='DESERUNT CONSEQUATUR'/>
                        </div>
                    </div>
                </div>

                <div className="container-fluid d-flex justify-content-center mt-5 mb-5">
                    <div className="row">
                        <div className="col-md-4">
                            <Card imgsrc={img7} title='ARCHITECTO COMMODI'/>
                        </div>
                        <div className="col-md-4">
                            <Card imgsrc={img3} title='ADIPISICING ELIT'/>
                        </div>
                        <div className="col-md-4">
                            <Card imgsrc={img2} title='LOREM IPSUM'/>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

export default Cards;
