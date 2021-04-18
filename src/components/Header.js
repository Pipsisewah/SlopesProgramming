import React, {useEffect, useState} from "react"
import PropTypes from "prop-types"
import LogoutButtonSubComponent from "./subcomponents/LogoutButtonSubComponent";
import LoginButtonSubComponent from "./subcomponents/LoginButtonSubComponent";

const Header = () => {

    const [token, setToken] = useState(localStorage.getItem('token'));
    Header.propTypes = {
        siteTitle: PropTypes.string,
    };

    Header.defaultProps = {
        siteTitle: ``,
    };

    const setAuthToken = () => {
        setToken(localStorage.getItem('token'));
        console.log(token);
    }



    useEffect(() => {
        window.addEventListener('token', setAuthToken);
        // eslint-disable-next-line
    }, [])

    function Greeting(props) {
        const isLoggedIn = (props.token !== null);
        console.log(props.token);
        console.log("Is logged in? " + isLoggedIn);
        if(isLoggedIn){
            return <LogoutButtonSubComponent/>
        }
        return <LoginButtonSubComponent/>
    }

        return(
        <header>
            <nav className="flex items-center justify-between flex-wrap bg-white border-b p-4">
                <div className="flex items-center flex-shrink-0 text-black mr-6">
                    <a href="/" className="font-sans font-light text-xl tracking-tight">Slopes Programming</a>
                </div>
                <div className="block lg:hidden">
                    <button
                        className="flex items-center px-3 py-2 border rounded text-blue-200 border-blue-400 hover:text-white hover:border-white">
                        <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <title>Menu</title>
                            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/>
                        </svg>
                    </button>
                </div>
                <div className="right-0 block lg:flex">
                    <div className="text-sm lg:flex-grow object-bottom mr-8 ">
                        <a href="/register"
                           className="object-none object-bottom font-thin text-l text-black hover:text-gray-700">
                            Register
                        </a>
                    </div>
                    <Greeting token={token}/>
                </div>
            </nav>
        </header>
    );


}

export default Header;