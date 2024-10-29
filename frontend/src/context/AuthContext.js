import React, { createContext, useReducer, useEffect } from 'react';

export const AuthContext = createContext();

export const authReducer = (state, action) => {
    switch (action.type) {
        case 'LOGIN':
            return {
                ...state,
                isAuthenticated: true,
                user: action.payload,
            };
        case 'LOGOUT':
            return {
                ...state,
                isAuthenticated: false,
                user: null,
            };
        default:
            return state;
    }
};

export const AuthProvider = ({ children }) => {
    
    const [state, dispatch] = useReducer(authReducer, {
        user: null, 
        isAuthenticated: false,
    })

    useEffect(() => {
        const user = localStorage.getItem('user');
        if (user) {
            dispatch({
                type: 'LOGIN',
                payload: JSON.parse(user),
            });
        }
    }, []);

    console.log('Auth context state:', state);
    return (
        <AuthContext.Provider value={{ ...state, dispatch }}>
            {children}
        </AuthContext.Provider>
    );

}

