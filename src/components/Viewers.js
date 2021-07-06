import React from 'react';
import './Viewers.css';

function Viewers() {
    return (
        <div className='viewContainer'>
            <div className='viewWrap'>
                <img src='/images/viewers-disney.png' alt='' />
            </div>
            <div className='viewWrap'>
                <img src='/images/viewers-pixar.png' alt='' />
            </div>
            <div className='viewWrap'>
                <img src='/images/viewers-marvel.png' alt='' />
            </div>
            <div className='viewWrap'>
                <img src='/images/viewers-starwars.png' alt='' />
            </div>
            <div className='viewWrap'>
                <img src='/images/viewers-national.png' alt='' />
            </div>
        </div>
    );
}

export default Viewers;
