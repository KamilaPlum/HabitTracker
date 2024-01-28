import React from 'react';
import {Button, Input} from "@mui/material";

const Login = () => {
    return (
        <div>
            <Input
                placeholder='Your email'
                sx={{color: 'purple',
                    display: 'flex',
                    alignItems: 'center'}}

            />
            <Input
                placeholder='Your password'
                sx={{color: 'purple'}}
            />

            <div>
                <Button
                    sx={{
                        color: 'purple',
                        margin: '20px 0',

                        '&:hover': {
                                    color: 'white',
                                    backgroundColor: 'purple'
                    }
                }}
                >Submit</Button>
            </div>
        </div>
    );
};

export default Login;