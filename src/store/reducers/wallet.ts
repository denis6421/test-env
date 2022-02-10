/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice, Dispatch, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';

interface State {
    address: string | undefined;
    provider: any;
    data: any;
    balance: string | undefined;
}

const initialState = {
    address: undefined,
    provider: null,
    balance: undefined
} as State;

const WalletSlice = createSlice({
    name: 'wallet',
    initialState,
    reducers: {
        setAddress(state, action: PayloadAction<string | undefined>) {
            state.address = action.payload;
        },
        setProvider(state, action: PayloadAction<any>) {
            state.provider = action.payload;
        },
        onConnect(state, action: PayloadAction<{ provider: any; address?: string; balance?: string }>) {
            const { provider, address, balance } = action.payload;
            state.provider = provider;
            state.address = address;
            state.balance = balance;
        },
        onDisconnect(state) {
            state.provider = null;
            state.address = undefined;
            state.balance = undefined;
        },
        setData(state, action: PayloadAction<any>) {
            state.data = action.payload;
        },
        setBalance(state, action: PayloadAction<string | undefined>) {
            state.balance = action.payload;
        }
    }
});

export const { setAddress, setProvider, onConnect, onDisconnect, setData, setBalance } = WalletSlice.actions;

const getSomeItems = () => async (dispatch: Dispatch) => {
    const res = await axios.get('https://jsonplaceholder.typicode.com/todos');
    dispatch(setData(res.data));
};

export { getSomeItems };

export default WalletSlice.reducer;
