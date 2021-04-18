import React from "react";
import {useHistory} from "react-router-dom";

function LogoutButtonSubComponent() {
    let history = useHistory();

    function logoutUser(){
        localStorage.removeItem('token');
        history.push("/");
    }

    return(
        <div className="text-sm lg:flex-grow object-bottom mr-8 ">
            <a href="/"
               className="object-none object-bottom font-thin text-l text-black hover:text-gray-700"
                onClick={logoutUser}>
                Logout
            </a>
        </div>
    );
}

export default LogoutButtonSubComponent;