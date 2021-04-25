import React from 'react';
import ResumeImage from "../svg/ResumeImage";

const Home = () => {
    return (
        <div>
            <div className="w-full h-full gap-4">
                <figcaption className="absolute text-lg text-white px-4 md:pl-16 md:pt-16 w-full z-10">
                        <p className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-black text-center w-full z-10">Your Resume,<br/>Your Story,<br/>Your Future</p>
                    </figcaption>
                <ResumeImage/>
            </div>
        </div>
    );
}

export default Home;