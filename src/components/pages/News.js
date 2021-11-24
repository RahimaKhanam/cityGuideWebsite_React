import React, { Component } from 'react';
import NewsCompnent from '../layouts/NewsComponent';
import "../../App.css";

// Image import
import img1 from '../images/dom-fotografii.jpg';
import img2 from '../images/garaj.jpg';
import img3 from '../images/garaj2.jpg';
import img4 from '../images/tretyakovka.jpg';
import img5 from '../images/s5.jpg';
import styled from 'styled-components';


class News extends Component {
    render() {
        return (
            <div>
                <h2 className="mt-5 text-center text-uppercase">Top News</h2>
                <div className="underline mx-auto mb-5"></div>

                <NewsWrapper>
                    <NewsCompnent
                        imgsrc={img1}
                        title="News title"
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vulputate a dui a maximus. Integer non eros venenatis, blandit metus quis, aliquet lorem. Suspendisse consequat lacus eget velit sodales, quis dictum massa venenatis. In eget tempus turpis, suscipit aliquam lacus. Nunc eget consequat nisi. In nunc orci, sodales in eros tempus, fermentum suscipit turpis. Fusce ultricies varius lectus, ut commodo purus suscipit in. Pellentesque rutrum nibh nisl, ut luctus ipsum pulvinar sit amet. Suspendisse rhoncus leo in arcu dictum vulputate. Donec in tortor tempor, feugiat justo quis, rutrum velit. Nunc mattis tellus a turpis efficitur ullamcorper. Phasellus dictum, nibh placerat mattis mattis, nibh libero molestie quam, semper ultrices nulla sem vel nunc."
                        update="Last updated 3 mins ago" />
                    <NewsCompnent
                        imgsrc={img2}
                        title="News title"
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vulputate a dui a maximus. Integer non eros venenatis, blandit metus quis, aliquet lorem. Suspendisse consequat lacus eget velit sodales, quis dictum massa venenatis. In eget tempus turpis, suscipit aliquam lacus. Nunc eget consequat nisi. In nunc orci, sodales in eros tempus, fermentum suscipit turpis. Fusce ultricies varius lectus, ut commodo purus suscipit in. Pellentesque rutrum nibh nisl, ut luctus ipsum pulvinar sit amet. Suspendisse rhoncus leo in arcu dictum vulputate. Donec in tortor tempor, feugiat justo quis, rutrum velit. Nunc mattis tellus a turpis efficitur ullamcorper. Phasellus dictum, nibh placerat mattis mattis, nibh libero molestie quam, semper ultrices nulla sem vel nunc."
                        update="Last updated 4 mins ago" />
                    <NewsCompnent
                        imgsrc={img3}
                        title="News title"
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vulputate a dui a maximus. Integer non eros venenatis, blandit metus quis, aliquet lorem. Suspendisse consequat lacus eget velit sodales, quis dictum massa venenatis. In eget tempus turpis, suscipit aliquam lacus. Nunc eget consequat nisi. In nunc orci, sodales in eros tempus, fermentum suscipit turpis. Fusce ultricies varius lectus, ut commodo purus suscipit in. Pellentesque rutrum nibh nisl, ut luctus ipsum pulvinar sit amet. Suspendisse rhoncus leo in arcu dictum vulputate. Donec in tortor tempor, feugiat justo quis, rutrum velit. Nunc mattis tellus a turpis efficitur ullamcorper. Phasellus dictum, nibh placerat mattis mattis, nibh libero molestie quam, semper ultrices nulla sem vel nunc."
                        update="Last updated 5 mins ago" />
                    <NewsCompnent
                        imgsrc={img4}
                        title="News title"
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vulputate a dui a maximus. Integer non eros venenatis, blandit metus quis, aliquet lorem. Suspendisse consequat lacus eget velit sodales, quis dictum massa venenatis. In eget tempus turpis, suscipit aliquam lacus. Nunc eget consequat nisi. In nunc orci, sodales in eros tempus, fermentum suscipit turpis. Fusce ultricies varius lectus, ut commodo purus suscipit in. Pellentesque rutrum nibh nisl, ut luctus ipsum pulvinar sit amet. Suspendisse rhoncus leo in arcu dictum vulputate. Donec in tortor tempor, feugiat justo quis, rutrum velit. Nunc mattis tellus a turpis efficitur ullamcorper. Phasellus dictum, nibh placerat mattis mattis, nibh libero molestie quam, semper ultrices nulla sem vel nunc.."
                        update="Last updated 2 mins ago" />
                    <NewsCompnent
                        imgsrc={img5}
                        title="News title"
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vulputate a dui a maximus. Integer non eros venenatis, blandit metus quis, aliquet lorem. Suspendisse consequat lacus eget velit sodales, quis dictum massa venenatis. In eget tempus turpis, suscipit aliquam lacus. Nunc eget consequat nisi. In nunc orci, sodales in eros tempus, fermentum suscipit turpis. Fusce ultricies varius lectus, ut commodo purus suscipit in. Pellentesque rutrum nibh nisl, ut luctus ipsum pulvinar sit amet. Suspendisse rhoncus leo in arcu dictum vulputate. Donec in tortor tempor, feugiat justo quis, rutrum velit. Nunc mattis tellus a turpis efficitur ullamcorper. Phasellus dictum, nibh placerat mattis mattis, nibh libero molestie quam, semper ultrices nulla sem vel nunc."
                        update="Last updated 1 mins ago" />
                </NewsWrapper>


            </div>
        )
    }
}

export default News;

const NewsWrapper = styled.div`
display: flex;
flex-flow: column wrap;
margin-left: 4rem;
margin-right: 4rem;
`;
