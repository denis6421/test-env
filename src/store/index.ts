import { configureStore } from '@reduxjs/toolkit';
import authReducer from './reducers/auth';
import walletReducer from './reducers/wallet';
import blockReducer from './reducers/block';

const store = configureStore({
    reducer: {
        auth: authReducer,
        wallet: walletReducer,
        block: blockReducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false
        })
});
export type RootState = ReturnType<typeof store.getState>;

export default store;
