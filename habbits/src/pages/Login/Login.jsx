import React, { useState } from 'react';
import {useNavigate} from "react-router-dom";
import {Button, Input, TextField, Box } from "@mui/material";
//Box  - div
//TextField - input
// how send data  to form -  react hook form
const Login = () => {
    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState(null);

    const navigate = useNavigate();

    const handleResetError = () =>{
        if (error) {
            setError(null);
        }
    }

    const handleChangeLogin = (e) => {
        const value = e.target.value;
        setLogin(value);
        handleResetError();
    };

    const handleChangePassword = (e) => {
        const value = e.target.value;
        setPassword(value);
        handleResetError();
    };

    const handleSubmit = () => {
        if (login === 'test' && password === 'test') {
            navigate('/habbits')
        }
        setError('Error login')
    }

    return (
        <form>
            <Input
                placeholder='Your email'
                sx={{
                    color: 'purple',
                    display: 'flex',
                    alignItems: 'center'
                }}
                onChange={handleChangeLogin}
            />
            <Input
                placeholder='Your password'
                sx={{color: 'purple'}}
                onChange={handleChangePassword}
            />
            {/*condition rendering*/}
            {
                error && (
                    <Box
                        sx={{
                            color: "red",
                            padding: '10px'

                        }}
                    > Error</Box>
                )
            }
            <div>
                <Button
                    onClick={handleSubmit}
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
        </form>
    );
};

export default Login;