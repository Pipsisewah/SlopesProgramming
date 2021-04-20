import React from 'react';

function NavResumeOptionsSubComponent(){
    return (
        <div className={"grid grid-cols-4 gap-4 w-full"}>
            <div className="text-sm">
                <a href="/#"
                   className="object-none object-bottom font-thin text-l text-black hover:text-gray-700">
                    Resume
                </a>
            </div>
            <div className="text-sm">
                <a href="/companies"
                   className="object-none object-bottom font-thin text-l text-black hover:text-gray-700">
                    Companies
                </a>
            </div>
            <div className="text-sm">
                <a href="/#"
                   className="object-none object-bottom font-thin text-l text-black hover:text-gray-700">
                    Projects
                </a>
            </div>
            <div className="text-sm">
                <a href="/#"
                   className="object-none object-bottom font-thin text-l text-black hover:text-gray-700">
                    Features
                </a>
            </div>
        </div>
    );
}

export default NavResumeOptionsSubComponent;