import {configure} from "@testing-library/react";
import {configureStore} from "@reduxjs/toolkit";
import authSlice from './reducers/auth';
import sliceHabits from "./reducers/sliceHabits";
const store = configureStore({
    reducer: {
        auth: authSlice,
        habits: sliceHabits
    }
});

export default store;