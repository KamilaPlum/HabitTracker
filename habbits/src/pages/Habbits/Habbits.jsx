import React from 'react';
//layout Grid
import {Box} from "@mui/material"

const mockHabbits = [
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
        name: 'No coffeina',
        startTime: null,
        endTime: null,
        currentTime: null,
        area: ['health', 'happiness'],
        type: 'done',
        targetValue: true,
        currentValue: false,
    },
]

const Habbits = () => {
    return (
        <Box>
            {
                mockHabbits.map((item, index) => {
                    const { name, targetValue, currentValue } = item;

                    return (
                        <Box sx={{
                            padding: '15px',
                            border: '1px solid black',
                            display: 'flex',
                            marginBottom: '20px',
                            width: '400px',
                            background: 'pink'
                        }}>
                            {item.name}
                        </Box>
                    )
                })
            }
        </Box>
    );
};

export default Habbits;