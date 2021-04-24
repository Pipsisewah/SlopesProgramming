import React from 'react';

function NavResumeOptionsSubComponent(){
    return (
        <div className={"grid col-span-6 grid-cols-4 gap-4 w-full h-full"}>
            <div className="text-sm">
                <a href="/#"
                   className="align-bottom object-none object-bottom font-thin text-l hover:text-gray-200">
                    Resume
                </a>
            </div>
            <div className="text-sm">
                <a href="/companies"
                   className="object-bottom font-thin text-l hover:text-gray-200">
                    Companies
                </a>
            </div>
            <div className="text-sm">
                <a href="/projects"
                   className="object-none object-bottom font-thin text-l hover:text-gray-200">
                    Projects
                </a>
            </div>
            <div className="text-sm">
                <a href="/features"
                   className="object-none object-bottom font-thin text-l hover:text-gray-200">
                    Features
                </a>
            </div>
        </div>
    );
}

export default NavResumeOptionsSubComponent;