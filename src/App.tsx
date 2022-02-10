import React, { FunctionComponent as Component } from 'react';
import './App.scss';
import { useDispatch } from 'react-redux';
import useWallet from './hooks/useWallet';
import Navbar from './components/Navbar';
import { clearDataInterval, startBlockReadInterval } from './store/reducers/block';
const App: Component = () => {
    const { address, connect, disconnect } = useWallet();
    const dispatch = useDispatch();

    const stopInterval = () => {
        dispatch(clearDataInterval(undefined));
    };
    const statInterval = () => {
        dispatch(startBlockReadInterval());
    };
    return (
        <div className="App">
            <Navbar />
            <div>
                <button type="button" onClick={stopInterval}>
                    Stop interval
                </button>
                <button type="button" onClick={statInterval}>
                    Start interval
                </button>
                <p>{address}</p>
                {!address && (
                    <button type="button" onClick={connect}>
                        Connect
                    </button>
                )}
                <button type="button" onClick={disconnect}>
                    Disconnect
                </button>
            </div>
        </div>
    );
};

export default App;
