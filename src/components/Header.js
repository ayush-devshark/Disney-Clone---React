import React from 'react';
import './Header.css';

function Header() {
    return (
        <nav className='navbar'>
            <img src='/images/logo.svg' alt='' className='logo' />
            <div className='navmenu'>
                <a href='#'>
                    <img src='/images/home-icon.svg' alt='' />
                    <span className='navlabel'>HOME</span>
                </a>
                <a href='#'>
                    <img src='/images/search-icon.svg' alt='' />
                    <span className='navlabel'>SEARCH</span>
                </a>
                <a href='#'>
                    <img src='/images/watchlist-icon.svg' alt='' />
                    <span className='navlabel'>WATCHLIST</span>
                </a>
                <a href='#'>
                    <img src='/images/original-icon.svg' alt='' />
                    <span className='navlabel'>ORIGINALS</span>
                </a>
                <a href='#'>
                    <img src='/images/movie-icon.svg' alt='' />
                    <span className='navlabel'>MOVIES</span>
                </a>
                <a href='#'>
                    <img src='/images/series-icon.svg' alt='' />
                    <span className='navlabel'>SERIES</span>
                </a>
            </div>
            <img
                className='userImg'
                src='https://images.unsplash.com/photo-1584999734482-0361aecad844?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHByb2ZpbGUlMjBwaWN0dXJlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
                alt=''
            />
        </nav>
    );
}

export default Header;
