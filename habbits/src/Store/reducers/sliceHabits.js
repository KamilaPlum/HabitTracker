import {createSlice} from "@reduxjs/toolkit";

const initialState = [
        {
            id: 1,
            name: 'Walk',
            startTime: null,
            endTime: null,
            currentTime: null,
            area: ['health', 'happiness'],
            type: 'time',
            targetValue: 60,
            currentValue: 35,
        },
        {
            id: 2,
            name: 'Sport',
            startTime: null,
            endTime: null,
            currentTime: null,
            area: ['health', 'happiness'],
            type: 'time',
            targetValue: 60,
            currentValue: 35,
        }]

export const sliceHabits = createSlice({
    name: 'habits',
    initialState,
    reducers: {
        add(state, action) {
            state.push(action.payload)
        },
        //update
        //remove
    }
})

export const { add } = sliceHabits.actions
export default sliceHabits.reducer