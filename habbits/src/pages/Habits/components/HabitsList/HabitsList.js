import React from 'react';
//layout Grid
import {Box} from "@mui/material"

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
                width: "632px"
            }}
        >
            {
                mockHabits.map((item, index) => {
                    const { name, targetValue, currentValue } = item;

                    return (
                        <Box sx={{
                            height: "30px",
                            border: '1px solid #b0b0ff',
                            display: 'flex',
                            marginBottom: '20px',
                            width: '400px',
                            background: '#b0b0ff',
                            borderRadius: '20px',
                            position: "relative"
                        }}>
                            <Box sx={{ height: "100%", width: "30%", background: "pink"}}></Box>
                            <Box sx={{ position: "absolute", left: "60px"}}> {item.name} 50%</Box>

                        </Box>
                    )
                })
            }
        </Box>
    );
};

export default HabitsList;