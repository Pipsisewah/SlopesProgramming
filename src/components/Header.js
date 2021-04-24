import {useEffect, useState} from "react";
import RegisterButtonSubComponent from "./subcomponents/RegisterButtonSubComponent";
import LogoutButtonSubComponent from "./subcomponents/LogoutButtonSubComponent";
import LoginButtonSubComponent from "./subcomponents/LoginButtonSubComponent";

const Header = () => {
    const [showMenu, setShowMenu] = useState(false);
    const [token, setToken] = useState(localStorage.getItem('token'));

    const setAuthToken = () => {
        setToken(localStorage.getItem('token'));
        console.log(token);
    }

    useEffect(() => {
        window.addEventListener('token', setAuthToken);
        // eslint-disable-next-line
    }, []);

    function toggleMenu() {
        setShowMenu(!showMenu);
    }

    function Menu(){
        if(showMenu){
            return (
                <div className="w-full md:flex md:items-center md:justify-between">
                    <MenuOptions/>
                    <MenuSearch/>
                </div>
            )
        }else{
            return (
                <div className="hidden w-full md:flex md:items-center md:justify-between">
                    <MenuOptions/>
                    <MenuSearch/>
                </div>
            )
        }

    }

    function MenuOptions(){
        return (
            <div className="flex flex-col px-2 py-3 -mx-4 md:flex-row md:mx-0 md:py-0">
                <a href="/companies"
                   className="px-2 py-1 text-sm font-medium text-gray-700 transition-colors duration-200 transform rounded dark:text-gray-200 hover:bg-gray-900 hover:text-gray-100 md:mx-2">Companies</a>
                <a href="/projects"
                   className="px-2 py-1 text-sm font-medium text-gray-700 transition-colors duration-200 transform rounded dark:text-gray-200 hover:bg-gray-900 hover:text-gray-100 md:mx-2">Projects</a>
                <a href="/features"
                   className="px-2 py-1 text-sm font-medium text-gray-700 transition-colors duration-200 transform rounded dark:text-gray-200 hover:bg-gray-900 hover:text-gray-100 md:mx-2">Features</a>
                <RegisterButtonSubComponent/>
                <LoginButtonSubComponent/>
                <LogoutButtonSubComponent/>
            </div>
        )
    }

    function MenuSearch(){
        return (
            <div className="relative">
                    <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                        <svg className="w-5 h-5 text-gray-400" viewBox="0 0 24 24" fill="none">
                            <path
                                d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
                                stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round"></path>
                        </svg>
                    </span>

                <input type="text"
                       className="w-full py-3 pl-10 pr-4 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                       placeholder="Search"/>
            </div>
        )
    }



    return (
        <nav className="bg-white shadow dark:bg-gray-800">
            <div className="container px-6 py-3 mx-auto md:flex">
                <div className="flex items-center justify-between">

                    <div>
                        <a className="text-xl font-bold text-gray-800 dark:text-white md:text-2xl hover:text-gray-700 dark:hover:text-gray-300"
                           href="/">Slopes Programming</a>
                    </div>



                    <div class="flex md:hidden">
                        <button onClick={toggleMenu} type="button" class="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400" aria-label="toggle menu">
                            <svg viewBox="0 0 24 24" class="w-6 h-6 fill-current">
                                <path fill-rule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"></path>
                            </svg>
                        </button>
                    </div>

                </div>
                <Menu/>
            </div>
        </nav>
    )
}

    export default Header;