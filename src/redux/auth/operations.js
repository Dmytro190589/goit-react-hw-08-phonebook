import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = 'https://connections-api.herokuapp.com'

const token = {
    set(token) {
        axios.defaults.headers.common.Authorization = `Bearer ${token}`;
    },
    unset() {
        axios.defaults.headers.common.Authorization = "";
    },
};

const register = createAsyncThunk(
    'auth/signup',
    async (user, { rejectWithValue }) => {
        try {
            const { data } = await axios.post('/users/signup', user);
            token.set(data.token);
            return data;
        } catch (error) {
            alert('Something went wrong! Try again please.')
            return rejectWithValue(error.message);
        }
    }
);

const logIn = createAsyncThunk(
    'auth/login',
    async (user, { rejectWithValue }) => {
        try {
            const { data } = await axios.post('/users/login', user);
            token.set(data.token);
            return data;
        } catch (error) {
            alert("Please check your email or password.");
            return rejectWithValue(error.message);
        }
    }
);

const logOut = createAsyncThunk(
    'auth/logout',
    async (_, { rejectWithValue }) => {
        try {
            await axios.post('/users/logout');
            token.unset();
        } catch (error) {
            alert("Please check is your email correct");
            return rejectWithValue(error.message);
        }
    }
);
const current = createAsyncThunk(
    'auth/current',
    async (_, thunkAPI) => {
        const state = thunkAPI.getState();
        const persistedToken = state.auth.token;
        if (!persistedToken) {
            return thunkAPI.rejectWithValue();
        }
        token.set(persistedToken);
        try {
            const { data } = await axios.get('/users/current');
            return data;
        } catch (error) {
            alert('Time is out, please log in again.');
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);
const authOperations = {
    register,
    logIn,
    logOut,
    current
}
export default authOperations;