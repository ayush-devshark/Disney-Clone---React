import React from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import './ImageSlider.css';

function ImageSlider() {
    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShoe: 1,
        slidesToScroll: 1,
        autoplay: true,
    };

    return (
        <Slider className='carasol' {...settings}>
            <div className='wrapper'>
                <img src='/images/slider-badging.jpg' alt='' />
            </div>
            <div className='wrapper'>
                <img src='/images/slider-badag.jpg' alt='' />
            </div>
        </Slider>
    );
}

export default ImageSlider;
