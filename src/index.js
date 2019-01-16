import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app/App';
import {
    BrowserRouter as Router,
    Route,
    Switch
} from "react-router-dom";
import FullscreenVR from './vr/FullscreenVR'

ReactDOM.render(
    <Router>
        <Switch>
            <Route path="/moonshot" component={FullscreenVR}/>
            <Route path="/" component={App}/>
        </Switch>
    </Router>,
    document.getElementById('root'));
