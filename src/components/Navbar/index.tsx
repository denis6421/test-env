import React from 'react';
import useBlockData from '../../hooks/useBlockData';
import useWallet from '../../hooks/useWallet';
import web3Service from '../../services/web3';

function Navbar() {
    const { balance, address } = useWallet();
    const { latestBlock } = useBlockData();

    return (
        <div>
            <p>Latest block: {latestBlock}</p>
            <p>Balance: {balance}</p>
            <button type="button" onClick={() => web3Service?.sign('some data', address)}>
                Sign
            </button>
        </div>
    );
}

export default Navbar;
