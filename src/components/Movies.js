import React from 'react';
import './Movies.css';
import { Link } from 'react-router-dom';
import { selectMovies } from '../features/movie/movieSlice';
import { useSelector } from 'react-redux';

function Movies() {
    const movies = useSelector(selectMovies);

    return (
        <div className='moviesContainer'>
            <h4>Recommended For You</h4>
            <div className='content'>
                {movies &&
                    movies.map(movie => (
                        <div className='movieWrap' key={movie.id}>
                            <Link to={`/details/${movie.id}`}>
                                <img src={movie.cardImg} alt='' />
                            </Link>
                        </div>
                    ))}
            </div>
        </div>
    );
}

export default Movies;
