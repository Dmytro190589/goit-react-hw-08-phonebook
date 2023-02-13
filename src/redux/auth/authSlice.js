import { createSlice } from "@reduxjs/toolkit";
import authOperations from "./operations";

const initialState = {
    user: {
        name: '',
        email: '',
    },
    token: null,
    isLoggedIn: false,
    error: null,
    isLoading: false,
    isCurrentUser: false,
}
const handlePending = (state) => {
    state.error = null;
    state.isLoading = true;
}

const handleRejected = (state, { payload }) => {
    state.isLoggedIn = false;
    state.error = payload;
    state.isLoading = false;
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    extraReducers: {
        [authOperations.register.pending]: handlePending,
        [authOperations.logIn.fulfilled](state, { payload }) {
            state.isLoading = false;
            state.user = payload.user;
            state.error = null;
            state.token = payload.token;
            state.isLoggedIn = true;
        },
        [authOperations.register.fulfilled](state, { payload }) {
            state.isLoading = false;
            state.user = payload.user;
            state.error = null;
            state.token = payload.token;
            state.isLoggedIn = true;
        },
        [authOperations.register.rejected]: handleRejected,
    },
    [authOperations.logIn.pending]: handlePending,

    [authOperations.logIn.rejected]: handleRejected,
    [authOperations.logOut.pending]: handlePending,
    [authOperations.logOut.fulfilled](state) {
        state.user = { name: null, email: null };
        state.isLoading = false;
        state.token = null;
        state.isLoggedIn = false;
    },
    [authOperations.logOut.rejected]: handleRejected,
    [authOperations.current.pending](state) {
        state.isLoading = true;
        state.error = null;
        state.isCurrentUser = true;
    },
    [authOperations.current.fulfilled](state, { payload }) {
        state.user = payload;
        state.isLoggedIn = true;
        state.isLoading = false;
        state.isCurrentUser = false;
    },
    [authOperations.current.rejected](state, { payload }) {
        state.isCurrentUser = false;
        state.isLoading = false;
        state.error = payload
    }
})


export default authSlice.reducer;