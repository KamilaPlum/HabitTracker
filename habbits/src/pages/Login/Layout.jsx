import React from 'react';
import {Box} from "@mui/material";
import {Outlet} from "react-router-dom";
import { Grid } from '@mui/material';
const Layout = () => {
    return (
        <Box
            sx={{
                display: 'flex',
                height: '100vh',
                width: '100%'
            }}
        >
            <Grid
                container
                direction="row"
                justifyContent="center"
                spacing={0}
                alignItems="center"
            >
                <Grid item md={6} justifyContent="center">
                    <Box
                        sx={{
                            width: '480px',
                            padding: '57px 80px 40px',
                            borderRadius: '12px',
                            boxSizing: 'border-box',
                            border: '1px solid black',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            position: 'relative',
                            overflow: 'hidden'
                        }}
                    >
                        <Outlet />
                    </Box>
                </Grid>

            </Grid>
        </Box>
    );
};

export default Layout;

