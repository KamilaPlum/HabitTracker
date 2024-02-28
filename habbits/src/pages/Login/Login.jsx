import React, { useState, useEffect } from 'react';
import {useNavigate} from "react-router-dom";
import { useDispatch } from "react-redux";
import {Button, Input, TextField, Box } from "@mui/material";
import { login } from '../../Store/reducers/auth';
import { authFirebase, googleProvider } from '../../index';
import { createUserWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
//Box  - div
//TextField - input
// how send data  to form -  react hook form
const Login = () => {
    const dispatch = useDispatch();
    const [loginData, setLogin] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState(null);

    const navigate = useNavigate();

    const handleSignInWithGoogle  = async () => {
        await signInWithPopup(authFirebase, googleProvider);
    }


    useEffect(() => {
        if (authFirebase) {
            console.log('authFirebase', authFirebase);
            if (authFirebase.currentUser) {
                dispatch(login(true));
                navigate('/habits');
            }
        }
    }, [authFirebase])

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

    const handleSubmit = async () => {
        await createUserWithEmailAndPassword(authFirebase, loginData, password)
       /* if (loginData === 'test' && password === 'test') {
            dispatch(login(true));
            navigate('/habits')
        }
        setError('Error login')*/
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
                type={"password"}
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
            <Box>
                <Button
                    onClick={handleSignInWithGoogle}
                    sx={{
                        color: 'purple',
                        margin: '20px 0',

                        '&:hover': {
                            color: 'white',
                            backgroundColor: 'purple'
                        }
                    }}
                >Login to gmail</Button>
            </Box>

        </form>
    );
};

export default Login;