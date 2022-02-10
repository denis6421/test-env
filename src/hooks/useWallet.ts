import { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { web3Modal } from '../config/web3';
import web3Service from '../services/web3';
import { RootState } from '../store';
import { onConnect, onDisconnect } from '../store/reducers/wallet';

function useWallet() {
    const { address, provider, balance } = useSelector((state: RootState) => state.wallet);
    const dispatch = useDispatch();

    const disconnect = useCallback(async () => {
        try {
            await web3Modal.clearCachedProvider();
            if (web3Service.provider?.disconnect && typeof web3Service.provider.disconnect === 'function') {
                await web3Service.provider.disconnect();
            }
            dispatch(onDisconnect());
            web3Service.createDefaultWeb3();
        } catch (error) {
            console.log(error);
        }
    }, [dispatch]);

    const connect = useCallback(async () => {
        try {
            const providerInstance = await web3Modal.connect();
            if (!providerInstance) {
                return;
            }

            web3Service.setWeb3(providerInstance);
            const addr = await web3Service.getAddress();
            const accountBalance = await web3Service.getBalance(addr);
            dispatch(
                onConnect({
                    provider: providerInstance,
                    address: addr,
                    balance: accountBalance
                })
            );
        } catch (error) {
            console.log(error);
        }
    }, [dispatch]);

    return { address, connect, disconnect, provider, balance };
}

export default useWallet;
