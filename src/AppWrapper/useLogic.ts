import { useEffect } from 'react';
import { web3Modal } from '../config/web3';
import useWallet from '../hooks/useWallet';
import web3Service from '../services/web3';

function useLogic() {
    const { connect, disconnect, provider } = useWallet();
    useEffect(() => {
        const func = async () => {
            if (web3Modal.cachedProvider) {
                await connect();
            } else {
                web3Service.createDefaultWeb3();
            }
            //dispatch(startBlockReadInterval());
            // eslint-disable-next-line react-hooks/exhaustive-deps
        };
        func();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        if (provider?.on) {
            const handleAccountsChanged = () => {
                window.location.reload();
            };

            // https://docs.ethers.io/v5/concepts/best-practices/#best-practices--network-changes
            const handleChainChanged = (_hexChainId: string) => {
                window.location.reload();
            };

            const handleDisconnect = (error: { code: number; message: string }) => {
                disconnect();
            };

            provider.on('accountsChanged', handleAccountsChanged);
            provider.on('chainChanged', handleChainChanged);
            provider.on('disconnect', handleDisconnect);
            return () => {
                if (provider.removeListener) {
                    provider.removeListener('accountsChanged', handleAccountsChanged);
                    provider.removeListener('chainChanged', handleChainChanged);
                    provider.removeListener('disconnect', handleDisconnect);
                }
            };
        }
    }, [provider, disconnect]);
}

export default useLogic;
