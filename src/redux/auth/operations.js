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
    async (user, {rejectWithValue}) => {
        try {
            const { data } = await axios.post('/users/signup', user);
            token.set(data.token);
            return data;
        } catch (error) {
           return rejectWithValue(error.message);
        }
    }
);

const logIn = createAsyncThunk(
    'auth/login',
    async (user, {rejectWithValue}) => {
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
    async (_, {rejectWithValue}) => {
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
    async (_, {rejectWithValue}) => {
        const state = thunkAPI.getState();
        const persistedToken = state.auth.token;
        if (!persistedToken) {
            return rejectWithValue();
        }
        token.set(persistedToken);
        try {
            const { data } = await axios.get('/users/current');
            return data;
        } catch (error) {
            return rejectWithValue(error.message);
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