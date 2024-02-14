import React from 'react';
import {Box} from "@mui/material";


const HabitItem = (props) => {
    const { name, value } = props;
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
            <Box sx={{ position: "absolute", left: "60px"}}> {name} `${value}%`</Box>

        </Box>
    );
};

export default HabitItem;