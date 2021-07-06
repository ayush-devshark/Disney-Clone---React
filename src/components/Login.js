import React from 'react';
import './Login.css';

function Login() {
    return (
        <div className='loginContainer'>
            <div className='ctabox'>
                <img
                    src='/images/cta-logo-one.svg'
                    alt=''
                    className='ctaoneimg'
                />
                <a href='#'>Get all here</a>
                <p className='ctadescription'>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Fugit cum asperiores esse ipsa accusantium saepe quasi sed
                    aut nemo similique, optio ipsam vel mollitia, dignissimos
                    impedit.
                </p>
                <img
                    src='/images/cta-logo-two.png'
                    alt=''
                    className='ctatwoimg'
                />
            </div>
        </div>
    );
}

export default Login;
