/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice, Dispatch, PayloadAction } from '@reduxjs/toolkit';
import web3Service from '../../services/web3';

interface State {
    latestBlock: number;
    interval: any;
}

const initialState = {
    latestBlock: 0,
    interval: undefined
} as State;

const BlockSlice = createSlice({
    name: 'block',
    initialState,
    reducers: {
        setLatestBlock(state, action: PayloadAction<number>) {
            state.latestBlock = action.payload;
        },
        setDataInterval(state, action: PayloadAction<any>) {
            state.interval = action.payload;
        },
        clearDataInterval(state, action: PayloadAction<any>) {
            clearInterval(state.interval);
            state.interval = action.payload;
        }
    }
});

export const { setLatestBlock, setDataInterval, clearDataInterval } = BlockSlice.actions;

const startBlockReadInterval = () => (dispatch: Dispatch) => {
    const interval = setInterval(async () => {
        console.log('interval');
        const res = await web3Service.getLatestBlock();
        dispatch(setLatestBlock(res || 0));
    }, 1000);
    dispatch(setDataInterval(interval));
};

export { startBlockReadInterval };

export default BlockSlice.reducer;
