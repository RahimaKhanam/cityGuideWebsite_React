import React from 'react';
import './news.css'

const NewsComponent= props => {
    return (
        <div>
            <div class="card mb-3 ms-5" style={{width: '90%'}} >
                <div class="row g-0">
                    <div class="col-md-4 overflow">
                        <img src={props.imgsrc} class="img-fluid rounded-start n-img" alt="news_image"/>
                    </div>
                    <div class="col-md-8">
                        <div class="card-body ">
                            <h4 class="card-title ms-4">News title</h4>
                            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewsComponent;
