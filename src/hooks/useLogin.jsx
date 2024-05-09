import { useState } from 'react';
import axios from 'axios';
import { useAuthContext } from './useAuthContext';

export const useLogin = () => {
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(null);
    const { dispatch } = useAuthContext();

    const login = async (email, password) => {
        setIsLoading(true);
        setError(null);

        try {
            const response = await axios.post('https://forumuserservice.onrender.com/user/login', {
                email,
                password
            });

            if (response.status === 200) {
                const json = response.data;
                localStorage.setItem('user', JSON.stringify(json));
                dispatch({ type: 'LOGIN', payload: json });
                window.location.href = "/forum";

            } else {
                setError(error.response.data.message);

            }
        } catch (error) {
            setError(error.response.data.message);

        }

        setIsLoading(false);
    };

    return { login, isLoading, error };
};
