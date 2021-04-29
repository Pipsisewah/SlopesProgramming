import React from "react";

function RegisterButtonSubComponent() {
    if(localStorage.getItem('token') === null) {
        return (
            <div className="grid text-sm">
                <a href="/register"
                   className="px-2 py-1 text-sm text-gray-700 transition-colors duration-200 transform rounded dark:text-gray-200 hover:bg-blue-base hover:text-gray-100 md:mx-2">Register</a>
            </div>
        );
    }else{
        return (
            <div/>
        )
    }
}

export default RegisterButtonSubComponent;