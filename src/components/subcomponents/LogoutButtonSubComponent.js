import React from "react";
import {useHistory} from "react-router-dom";

function LogoutButtonSubComponent() {
    let history = useHistory();

    function logoutUser(){
        localStorage.removeItem('token');
        history.push("/");
    }

    return(
        <div className="grid text-sm">
            <a href="/"
               className="font-thin text-l hover:text-gray-200"
                onClick={logoutUser}>
                Logout
            </a>
        </div>
    );
}

export default LogoutButtonSubComponent;