import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import App from '../App';
import useLogic from './useLogic';

function AppWrapper() {
    useLogic();
    return (
        <Router>
            <App />
        </Router>
    );
}

export default AppWrapper;
