import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface State {
    value: number;
    loggedIn: boolean;
}

const initialState = { value: 0, loggedIn: false } as State;

const AuthSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login(state) {
            state.loggedIn = true;
        },
        logout(state) {
            state.loggedIn = false;
        },
        decrement(state) {
            state.value -= 1;
        },
        incrementByAmount(state, action: PayloadAction<number>) {
            state.value += action.payload;
        }
    }
});

export const { login, logout, decrement, incrementByAmount } = AuthSlice.actions;
export default AuthSlice.reducer;
