import React from 'react';
import './NewsComponent.css'

const NewsComponent= props => {
    return (
        <div>
            <div class="card cs-card mb-5" style={{width: '100%'}} >
                <div class="row g-0">
                    <div class="col-md-4 overflow">
                        <img src={props.imgsrc} class="n-img" alt="news_image"/>
                    </div>
                    <div class="col-md-8">
                        <div class="card-body ">
                            <h3 class="card-title text-dark ms-4">{props.title}</h3>
                            <p class="card-text">{props.description}</p>
                            <p class="card-text"><small class="text-muted">{props.update}</small></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewsComponent;
