import { useState } from "react";
import { useAuthContext } from "./useAuthContext";
import { useNavigate } from "react-router-dom";


// alerts
import Swal from 'sweetalert2';

export const useLogin = () => {
    const [loading, setLoading] = useState('');
    const [error, setError] = useState('');
    const { dispatch } = useAuthContext();
    const Navigate = useNavigate();



    const login = async (email, password) => {
        setLoading(true);

        try {
            const res = await fetch("http://localhost:3000/login", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ email, password }),
            });

            if (res.ok) {                
                const response = await res.json();
                console.log(response);
                
                // save the token in local storage
                localStorage.setItem('user', JSON.stringify(response));

                //update authContext
                dispatch({ type: 'LOGIN', payload: response });
                setLoading(false);
                Swal.fire({
                    title: 'Success!',
                    text: 'You are now logged in!',
                    icon: 'success',
                    confirmButtonText: 'Cool',
                    theme: 'bulma'
                })
                Navigate('/students');

            }

        } catch (err) {
            console.log(err);
            setError(err);
            setLoading(false);
        }
    }

    return { loading, login, error };
}


