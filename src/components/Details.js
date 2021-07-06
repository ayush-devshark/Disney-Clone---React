import React, { useEffect, useState } from 'react';
import './Details.css';
import { useParams } from 'react-router-dom';
import db from '../firebase';

function Details() {
    const { id } = useParams();
    const [movie, setMovie] = useState();

    useEffect(() => {
        db.collection('movies')
            .doc(id)
            .get()
            .then(doc => {
                if (doc.exists) {
                    setMovie(doc.data());
                } else {
                }
            });
    }, [id]);

    return (
        <div className='detailsContainer'>
            {movie && (
                <>
                    <div className='detailsbackimg'>
                        <img src={movie.backgroundImg} alt='' />
                    </div>
                    <div className='imgTitle'>
                        <img src={movie.titleImg} alt='' />
                    </div>
                    <div className='controls'>
                        <button className='playbtn'>
                            <img src='/images/play-icon-black.png' alt='' />
                            <span>PLAY</span>
                        </button>
                        <button className='trailerbtn'>
                            <img src='/images/play-icon-white.png' alt='' />
                            <span>Trailer</span>
                        </button>
                        <button className='addbtn'>
                            <span>+</span>
                        </button>
                        <button className='groupwatchbtn'>
                            <img src='/images/group-icon.png' alt='' />
                        </button>
                    </div>
                    <div className='subtitle'>{movie.subTitle}</div>
                    <div className='description'>{movie.description}</div>
                </>
            )}
        </div>
    );
}

export default Details;
