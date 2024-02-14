import {configure} from "@testing-library/react";
import {configureStore} from "@reduxjs/toolkit";
import authSlice from './reducers/auth';
const store = configureStore({
    reducer: {
        auth: authSlice
    }
});

export default store;