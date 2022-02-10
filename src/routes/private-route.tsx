import { Route, Redirect, RouteProps } from 'react-router-dom';
import React, { FunctionComponent as Component } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type Props = { children: any } & RouteProps;

interface StateProps {
    token?: string;
}

export const PrivateRoute: Component<Props> = ({ children, ...rest }) => {
    const { loggedIn } = useSelector((state: RootState) => state.auth);

    return (
        <Route
            /* eslint-disable react/jsx-props-no-spreading */
            {...rest}
            render={({ location }) =>
                loggedIn ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: '/login',
                            state: { from: location }
                        }}
                    />
                )
            }
        />
    );
};
