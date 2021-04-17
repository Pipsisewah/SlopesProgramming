import React from "react";

function HelpBarSubComponent() {

    return (
        <div className="py-5">
            <div className="grid grid-cols-2 gap-1">
                <div></div>
                <div className="text-center sm:text-right whitespace-nowrap">
                    <button
                        className="transition duration-200 mx-5 px-5 py-4 cursor-pointer font-normal text-sm rounded-lg text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-200 focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50 ring-inset">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                             stroke="currentColor" className="w-4 h-4 inline-block align-text-bottom	">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                  d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"/>
                        </svg>
                        <span className="inline-block ml-1">Help</span>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default HelpBarSubComponent;