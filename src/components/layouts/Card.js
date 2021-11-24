import React from 'react';
import './Card.css';
import {Link} from 'react-router-dom';

const Card = props => {
    return (
        <div>
            <div className="card c-card text-center shadow">
                <div className="overflow">
                    <img src={props.imgsrc} alt="" className="card-img-top c-img"/>
                </div>
                <div className="card-body text-dark">
                    <h4 className="card-title">{props.title}</h4>
                    <p className="card-text text-secondary">{props.description}</p>
                    <Link to="/details" className="btn btn-dark btn-c">Details</Link>
                </div>
            </div>
        </div>
    )
}

export default Card;
