import React from 'react';
import './Home.css';
import ImageSlider from './ImageSlider';
import Viewers from './Viewers';

function Home() {
    return (
        <main className='homeContainer'>
            <ImageSlider />
            <Viewers />
        </main>
    );
}

export default Home;
