import Web3Modal from 'web3modal';
import WalletConnectProvider from '@walletconnect/web3-provider';


const providerOptions = {
    walletconnect: {
        package: WalletConnectProvider,
        options: {
            infuraId: process.env.REACT_APP_INFURA_ID
        }
    }
};

const web3Modal = new Web3Modal({
    network: 'mainnet', // optional
    cacheProvider: true, // optional
    providerOptions // required
});

export type Connector = Web3Modal;
export { web3Modal };
