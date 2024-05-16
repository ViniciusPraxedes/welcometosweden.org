import { useState } from 'react';
import axios from 'axios';
import { useAuthContext } from './useAuthContext';

export const useUpdate = () => {
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const { dispatch } = useAuthContext();

    const update = async (userId) => {
        setIsLoading(true);
        setError(null);

        try {
            const response = await axios.get(`https://forumuserservice.onrender.com/user/${userId}`);

            if (response.status === 200) {
                const json = response.data;
                localStorage.setItem('user', JSON.stringify(json));
                dispatch({ type: 'UPDATE', payload: json });
            } else {
                setError("An error occurred while updating the user.");
            }
        } catch (error) {
            setError(error.response?.data?.message || "An unexpected error occurred.");
        }

        setIsLoading(false);
    };

    return { update, isLoading, error };
};
