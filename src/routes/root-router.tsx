import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import React, { FunctionComponent as Component } from 'react';
import {  HomeScreen } from '../screens';
import { PrivateRoute } from './private-route';

export const RootRouter: Component = () => {
    return (
        <Switch>
            
            <PrivateRoute path="/">
                <HomeScreen />
            </PrivateRoute>
        </Switch>
    );
};
