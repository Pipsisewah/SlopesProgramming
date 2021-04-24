import React from "react";
import {useHistory} from "react-router-dom";

function LogoutButtonSubComponent() {
    let history = useHistory();

    function logoutUser(){
        localStorage.removeItem('token');
        //history.push("/");
    }
    if(localStorage.getItem('token') !== null) {
        return (
            <div className="grid text-sm">
                <a href="/"
                   className="px-2 py-1 text-sm font-medium text-gray-700 transition-colors duration-200 transform rounded dark:text-gray-200 hover:bg-gray-900 hover:text-gray-100 md:mx-2"
                   onClick={logoutUser}>Logout</a>
            </div>
        );
    }else{
        return (
            <div/>
        )
    }
}

export default LogoutButtonSubComponent;