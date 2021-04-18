import React from "react";

function LoginButtonSubComponent() {
    return(
        <div className="text-sm lg:flex-grow object-bottom mr-8 ">
            <a href="/login"
               className="object-none object-bottom font-thin text-l text-black hover:text-gray-700">
                Login
            </a>
        </div>
    );
}

export default LoginButtonSubComponent;