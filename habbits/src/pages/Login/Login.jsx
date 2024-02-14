import React, { useState } from 'react';
import {useNavigate} from "react-router-dom";
import { useDispatch } from "react-redux";
import {Button, Input, TextField, Box } from "@mui/material";
import { login } from '../../Store/reducers/auth'
//Box  - div
//TextField - input
// how send data  to form -  react hook form
const Login = () => {
    const dispatch = useDispatch();
    const [loginData, setLogin] = useState('')
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
        //get data from server
        // ? answer true / false  data

        if (loginData === 'test' && password === 'test') {
            dispatch(login(true));
            navigate('/habits')
        }
        setError('Error login')
    }

    return (
        <form>

            <TextField
                id="outlined-basic"
                label="Outlined"
                variant="outlined"
                placeholder='Your email'
                sx={{
                    color: 'purple',
                    display: 'flex',
                    alignItems: 'center'
                }}
                onChange={handleChangeLogin}
            />
            <TextField
                error
                id="standard-error-helper-text"
                label="Error"
                defaultValue="Hello World"
                helperText="Incorrect entry."
                variant="standard"
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
            <Box>
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
            </Box>
        </form>
    );
};

export default Login;