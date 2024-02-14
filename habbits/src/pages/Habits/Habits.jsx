import React from 'react';
//layout Grid
import {Box} from "@mui/material"

import HabitsList from "./components/HabitsList";
const Habits = () => {
    return (
        <Box
            sx={{
                width: "100%",
                height: "100%",
                background: "green",
                position: "relative",
                display: "flex",
                justifyContent: "center",
                padding: "80px 0px"
            }}
        >
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    padding: "15px",
                    gap: "30px",
                    height: "800px",
                    width: "60%",
                    border: "1px solid yellow",
                }}
            >
                {/*components diagram*/}
                <Box
                    sx={{
                        width: "100%",
                        height: "300px",
                        border: "1px solid grey",
                    }}
                > Diagram </Box>
                {/*components diagram*/}
                <Box
                    sx={{
                        width: "100%",
                        height: "300px",
                        border: "1px solid red",
                    }}
                > Control panel ??</Box>
                <HabitsList />
            </Box>

            <Box
                sx={{
                    border: "1px solid blue",
                    position: "absolute",
                    padding: "15px",
                    top: "0",
                    right: "0"
                }}
            >
                Calendar
            </Box>
        </Box>
    );
};

export default Habits;