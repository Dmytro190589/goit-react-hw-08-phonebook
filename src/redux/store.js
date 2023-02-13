import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth/authSlice";
// import { contactsReducer } from "./contacts/contactsSlice";
// import filter from "./contacts/filter";
// import storage from 'redux-persist/lib/storage';
// import {
//     persistStore,
//     persistReducer,
//     FLUSH,
//     REHYDRATE,
//     PAUSE,
//     PERSIST,
//     PURGE,
//     REGISTER,
// } from 'redux-persist';
// const persistConfig = {
//     key: 'auth',
//     storage,
//     whitelist: ['token'],
// };
// const persReducer = persistReducer(persistConfig, authReducer);

export const store = configureStore({
    reducer: {
        auth: authReducer,
        // contacts: contactsReducer,
        // filter,
    },
    // middleware: getDefaultMiddleware =>
    //     getDefaultMiddleware({
    //         serializableCheck: {
    //             ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    //         },
    //     }),
})
// export const persistor = persistStore(store);
