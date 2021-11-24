import React, { useState } from 'react';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';
import { CarouselData } from './CarouselData';
import './Carousel.css'

const Carousel = ({ slides }) => {
    const [current, setCurrent] = useState(0);
    const length = slides.length;

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    };

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    };

    if (!Array.isArray(slides) || slides.length <= 0) {
        return null;
    }

    return (
        <section className="slider container-fluid">
            <div className="a-left">
                <FaArrowAltCircleLeft className='left-arrow' onClick={prevSlide} />
            </div>

            <div className="a-right">
                <FaArrowAltCircleRight className='right-arrow' onClick={nextSlide} />
            </div>

            {CarouselData.map((slide, index) => {
                return (
                        <div className={index === current ? 'slide-s active' : 'slide-s'} key={index}>
                            {index === current && (<img src={slide.image} key={index} alt="famous_place" className="image-car" />)}

                        </div>
                )

            })}
        </section>
    );
};

export default Carousel;



