import axios from 'axios'

import { createAsyncThunk } from '@reduxjs/toolkit'
axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export const fetchContacts = createAsyncThunk(
    "contacts/fetchContacts",
    async (_, {rejectWithValue}) => {
        try {
            const response = await axios('/contacts');
            return response.data;
        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
)
export const addContacts = createAsyncThunk(
    "contacts/addContact",
    async (contact, {rejectWithValue}) => {
        try {
            const response = await axios.post('/contacts', contact)
            return response.data;
        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
)
export const deleteContact = createAsyncThunk(
    "contacts/deleteContact",
    async (id, {rejectWithValue}) => {
        try {
            const response = await axios.delete(`/contacts/${id}`)
            return response.data
        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
)
export const currentContact = createAsyncThunk(
    'contacts/currentContact',
    async(_, {rejectWithValue})=>{
        try {
           const {data} = await axios.get('/contacts')
             return data;
        } catch (error) {
           return rejectWithValue(error.message);
        }
    }
);