import React from 'react';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import { Switch, BrowserRouter, Link, Route } from 'react-router-dom';
import Details from './components/Details';

function App() {
    return (
        <div>
            <Header />
            <Switch>
                <Route path='/details'>
                    <Details />
                </Route>
                <Route path='/home'>
                    <Home />
                </Route>
            </Switch>
        </div>
    );
}

export default App;
