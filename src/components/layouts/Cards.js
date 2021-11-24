import React, { Component } from 'react';
import Card from './Card';
import styled from 'styled-components';

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
            <CardWrapper>
                <Card imgsrc={img1} title='EARUM FUGIAT' description="Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Culpa, cupiditate eius! Minima sapiente maiores, nesciunt cupiditate corporis sequi amet hic ex? "/>
                <Card imgsrc={img2} title='EARUM FUGIAT' description="Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Culpa, cupiditate eius! Minima sapiente maiores, nesciunt cupiditate corporis sequi amet hic ex? "/>
                <Card imgsrc={img3} title='EARUM FUGIAT' description="Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Culpa, cupiditate eius! Minima sapiente maiores, nesciunt cupiditate corporis sequi amet hic ex? "/>
                <Card imgsrc={img4} title='EARUM FUGIAT' description="Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Culpa, cupiditate eius! Minima sapiente maiores, nesciunt cupiditate corporis sequi amet hic ex? "/>
                <Card imgsrc={img5} title='EARUM FUGIAT' description="Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Culpa, cupiditate eius! Minima sapiente maiores, nesciunt cupiditate corporis sequi amet hic ex? "/>
                <Card imgsrc={img6} title='EARUM FUGIAT' description="Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Culpa, cupiditate eius! Minima sapiente maiores, nesciunt cupiditate corporis sequi amet hic ex? "/>
                <Card imgsrc={img7} title='EARUM FUGIAT' description="Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Culpa, cupiditate eius! Minima sapiente maiores, nesciunt cupiditate corporis sequi amet hic ex? "/>
            </CardWrapper>
        )
    }
}

export default Cards;

const CardWrapper = styled.div`     
overflow: hidden;
display: grid;
grid-template-columns: repeat(3, 1fr);
grid-template-rows: repeat(3, 1fr);
column-gap: 3rem;
row-gap: 2rem;
justify-items: center;
justify-content: center;
align-items: center;
align-content: center;
margin-left: 8rem !important;
margin-right: 8rem !important;
margin-bottom: 3rem;

@media(max-width: 768px) {
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: repeat(4, 1fr);
        margin-left: 4rem !important;
        margin-right: 4rem !important;
        column-gap: 2rem;
}

@media(max-width: 500px) {
        grid-template-columns: 1fr;
        grid-template-rows: repeat(7, 1fr);
        margin-left: 2rem !important;
        margin-right: 2rem !important;
        row-gap: 2rem;
}
`;
