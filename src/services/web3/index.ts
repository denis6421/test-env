/* eslint-disable consistent-return */
import Web3 from 'web3';
import { INFURA_ID } from '../../config/web3';

class Web3Service {
    web3: Web3 | undefined;

    provider: any;

    createDefaultWeb3() {
        try {
            if ((window as any).ethereum) {
                this.web3 = new Web3((window as any).ethereum);
                this.provider = (window as any).ethereum;
            } else if (INFURA_ID) {
                const infuraProvider = new Web3.providers.HttpProvider(INFURA_ID);
                this.web3 = new Web3(infuraProvider);
                this.provider = infuraProvider;
            }
        } catch (error) {
            console.log(error);
        }
    }

    setWeb3(provider: any) {
        this.provider = provider;
        this.web3 = new Web3(provider);
    }

    async getBalance(address?: string): Promise<string | undefined> {
        if (!address || !this.web3) {
            return;
        }
        try {
            const res = await this.web3.eth.getBalance(address);
            return this.web3.utils.fromWei(res);
        } catch (error) {
            return undefined;
        }
    }

    async getAddress(): Promise<string | undefined> {
        if (!this.web3) {
            return;
        }
        try {
            const accounts = await this.web3.eth.getAccounts();
            return accounts[0];
        } catch (error) {
            return undefined;
        }
    }

    async sign(signData: string, account?: string) {
        if (!account || !this.web3) {
            return;
        }
        return this.web3.eth.personal
            .sign(signData || 'data', account, '')
            .then((res) => {
                return res;
            })
            .catch(() => {
                console.log('error');
                return null;
            });
    }

    async getLatestBlock() {
        try {
            const result = await this.web3?.eth.getBlock(this.web3.eth.defaultBlock);
            return result?.number;
        } catch (error) {
            return 0;
        }
    }
}
const web3Service = new Web3Service();
export default web3Service;
