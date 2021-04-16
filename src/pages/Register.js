import React from 'react';
import RegisterComponent from "../components/RegisterComponent";
import {ToastProvider} from "react-toast-notifications";


const Register = ()  => {
    return (
        <ToastProvider>
            <RegisterComponent/>
        </ToastProvider>
    )
}

export default Register;