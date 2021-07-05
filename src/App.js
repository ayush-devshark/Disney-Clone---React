import React from 'react';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import { Switch, Route } from 'react-router-dom';
import Details from './components/Details';
import Login from './components/Login';

function App() {
    return (
        <div>
            <Header />
            <Switch>
                <Route path='/details/:id' exact>
                    <Details />
                </Route>
                <Route path='/home'>
                    <Home />
                </Route>
                <Route path='/login'>
                    <Login />
                </Route>
            </Switch>
        </div>
    );
}

export default App;
