import React from 'react';

const Home = () => {
    return (
        <div>
            <div className="w-full h-full gap-4">

                <figcaption className="absolute text-lg mt-32 text-white px-4 w-full z-10">
                    <div className="w-1/2 bg-white bg-opacity-50 shadow-md">
                        <p className="lg:text-6xl md:text-4xl sm:text-2xl text-black text-center w-full z-10">Your Resume,<br/>Your Story,<br/>Your Future</p>
                    </div>
                    </figcaption>
                <img src="scrum.jpg" className="w-full filter grayscale blur-sm"/>
            </div>
        </div>
    );
}

export default Home;