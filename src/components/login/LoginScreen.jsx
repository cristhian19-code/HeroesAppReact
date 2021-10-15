import React, { useContext } from 'react'
import { AuthContext } from '../../auth/AuthContext';
import { types } from '../../types/types';

export const LoginScreen = ({history}) => {
    const {dispatch} = useContext(AuthContext)

    const handleLogin = ()=>{
        dispatch({
            type: types.login,
            payload: {
                name: 'Christian Ricardo',
                email: 'cristhianprozqwerty@gmail.com'
            }
        })
        history.replace('/')
    }

    return (
        <div className="d-flex justify-content-center">
            <div className="card w-50 p-4 mt-3">
                <h1 className="text-center">LoginScreen</h1>
                <button onClick={handleLogin} className="btn btn-outline-primary mt-3">Login</button>
            </div>
        </div>
    )
}
