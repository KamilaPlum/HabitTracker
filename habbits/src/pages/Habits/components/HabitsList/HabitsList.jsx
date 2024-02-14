import React from 'react';
//layout Grid
import {Box} from "@mui/material"
import HabitItem from './HabitItem'
//TODO redux-toolkit
const mockHabits = [
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
        name: 'No caffeine',
        startTime: null,
        endTime: null,
        currentTime: null,
        area: ['health', 'happiness'],
        type: 'done',
        targetValue: true,
        currentValue: false,
    },
]

const HabitsList = () => {
    return (
        <Box
            sx={{
                background: "grey",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: "15px",
                maxHeight: "300px",
                height: "300px",
                overflow: "auto",
                width: "100%"
            }}
        >
            {
                mockHabits.map((item, index) => {
                    const { name, targetValue, currentValue } = item;

                    return (
                        <HabitItem name={item.name} value={64}/>
                    )
                })
            }
        </Box>
    );
};

export default HabitsList;