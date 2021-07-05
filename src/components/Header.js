import React, { useEffect } from 'react';
import './Header.css';
import { useHistory } from 'react-router-dom';
import { auth, provider } from '../firebase';
import {
    selectUserName,
    selectUserPhoto,
    setUserLogin,
    setSignOut,
} from '../features/user/userSlice';
import { useDispatch, useSelector } from 'react-redux';

function Header() {
    const dispatch = useDispatch();
    const history = useHistory();
    const username = useSelector(selectUserName);
    const userphoto = useSelector(selectUserPhoto);

    useEffect(() => {
        auth.onAuthStateChanged(async user => {
            if (user) {
                dispatch(
                    setUserLogin({
                        name: user.displayName,
                        email: user.email,
                        photo: user.photoURL,
                    })
                );
                history.push('/home');
            }
        });
    }, []);

    const signIn = () => {
        auth.signInWithPopup(provider).then(result => {
            let user = result.user;

            dispatch(
                setUserLogin({
                    name: user.displayName,
                    email: user.email,
                    photo: user.photoURL,
                })
            );
            history.push('/home');
        });
    };

    const signOut = () => {
        auth.signOut().then(() => {
            dispatch(setSignOut());
            history.push('/login');
        });
    };

    return (
        <nav className='navbar'>
            <img src='/images/logo.svg' alt='' className='logo' />
            {!username ? (
                <div class='login' onClick={signIn}>
                    Login
                </div>
            ) : (
                <>
                    {' '}
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
                        src={userphoto}
                        alt=''
                        onClick={signOut}
                    />
                </>
            )}
        </nav>
    );
}

export default Header;
