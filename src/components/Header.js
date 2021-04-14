import React from "react"
import PropTypes from "prop-types"

const Header = ({ siteTitle }) => (
    <header>
        <nav className="flex items-center justify-between flex-wrap bg-white border-b p-4">
            <div className="flex items-center flex-shrink-0 text-black mr-6">
                <a href="/" className="font-sans font-light text-xl tracking-tight">{siteTitle}</a>
            </div>
            <div className="block lg:hidden">
                <button className="flex items-center px-3 py-2 border rounded text-blue-200 border-blue-400 hover:text-white hover:border-white">
                    <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
                </button>
            </div>
            <div className="right-0 block lg:flex">
                <div className="text-sm lg:flex-grow object-bottom mr-8 ">
                    <a href="/register"
                       className="object-none object-bottom font-thin text-l text-black hover:text-gray-700">
                        Register
                    </a>
                </div>
                <div className="text-sm lg:flex-grow object-bottom mr-8 ">
                    <a href="/login" className="object-none object-bottom font-thin text-l text-black hover:text-gray-700">
                        Login
                    </a>
                </div>
            </div>
        </nav>
    </header>
);

Header.propTypes = {
    siteTitle: PropTypes.string,
};

Header.defaultProps = {
    siteTitle: ``,
};

export default Header
