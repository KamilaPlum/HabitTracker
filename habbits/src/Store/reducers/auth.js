import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    userInfo: {},
    isLogged: true
}
export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login(state, action) {
            state.isLogged = action.payload
        }
    }
});

export const { login } = authSlice.actions;
export default authSlice.reducer;
