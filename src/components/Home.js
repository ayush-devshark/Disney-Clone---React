import React from 'react';
import './Home.css';
import ImageSlider from './ImageSlider';
import Viewers from './Viewers';
import Movies from './Movies';

function Home() {
    return (
        <main className='homeContainer'>
            <ImageSlider />
            <Viewers />
            <Movies />
        </main>
    );
}

export default Home;
