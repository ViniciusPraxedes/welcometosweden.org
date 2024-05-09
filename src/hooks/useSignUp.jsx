import {useState} from 'react'
import {useAuthContext} from "./useAuthContext";
import axios from "axios";
export const useSignUp = () => {
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const signUp = async (formData) => {
        setIsLoading(true);
        setError(null);

        const requestBody = {
            email: formData.email,
            profilePic: formData.profilePic,
            username: formData.username,
            password: formData.password,

        };

        try {

            const response = await axios.post("https://forumuserservice.onrender.com/user/register", requestBody);
            window.location.href = "/success";


            if (response.status !== 200) {
                throw new Error('Sign up failed.');
            }

            setIsLoading(false);
        } catch (error) {
            setError(error.response.data.message);
            setIsLoading(false);
        }
    };

    return { signUp, isLoading, error };
};
