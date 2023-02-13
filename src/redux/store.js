import { configureStore } from "@reduxjs/toolkit";
import { contactsReducer } from "./contacts/contacts";
import filter from "./contacts/filter";

export const store = configureStore({
    reducer: {
        contacts: contactsReducer,
        filter,
    }
})
