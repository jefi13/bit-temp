import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app/App';
import registerServiceWorker from './registerServiceWorker';
import { Switch, HashRouter, Route } from 'react-router-dom';
import { HomePage } from './app/home/HomePage';
import { AboutShow } from './app/shows/AboutShow';

ReactDOM.render(
<HashRouter>
        <Switch>
            <Route exact path="/" component={App} />
            <Route exact path="/about" component={AboutShow} />
        </Switch>
    </HashRouter>, 
document.getElementById('root'));
registerServiceWorker();
