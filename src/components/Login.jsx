import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

import React from 'react';
import Form from './Form';
import { useDispatch } from 'react-redux';
import {useNavigate} from 'react-router-dom';
import { setUser } from 'store/slices/userSlice';

const Login = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleLogin = (email, password) => {
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
            .then(({user}) => {
                console.log(user);
                dispatch(setUser({
                    email: user.email,
                    id: user.id,
                    token: user.accessToken,
                }));
                navigate('/');
            })
            .catch(console.error);
    };

    return (
        <Form
            title="sign in"
            handleClick={handleLogin}
        />
    )
}

export {Login}