import React from 'react';
import './card-style.css';
import {Link} from 'react-router-dom';

const Card = props => {
    return (
        <div>
            <div className="card text-center shadow">
                <div className="overflow">
                    <img src={props.imgsrc} alt="" className="card-img-top c-img"/>
                </div>
                <div className="card-body text-dark">
                    <h4 className="card-title">{props.title}</h4>
                    <p className="card-text text-secondary">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Culpa, cupiditate eius! Minima sapiente maiores, nesciunt cupiditate corporis sequi amet hic ex? 
                    </p>
                    <Link to="/details" className="btn btn-dark btn-c">Details</Link>
                </div>
            </div>
        </div>
    )
}

export default Card;
