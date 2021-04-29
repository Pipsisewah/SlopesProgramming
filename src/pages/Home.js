import React from 'react';
import ResumeImage from "../svg/ResumeImage";
import FeatureSection from "../components/FeatureSection";

const Home = () => {
    return (
        <div>
            <div className="w-full h-screen grid grid-cols-1 sm:grid-cols-2 bg-gray-light">
                <div className="w-full pt-16 ml-auto mr-auto">
                    <div className="font-roboto text-blue-base font-bold text-lg">design. build. present.</div>
                    <div className="font-bold text-black text-5xl pt-4">Build Your Portfolio</div>
                    <div className="text-gray-500 pt-8 text-sm mx-24">
                        <p>Invest in your future by organizing and adding to your portfolio</p>
                        <p>so you can present a highly tailored resume when an opportunity appears.</p>
                        <p>Add more text here to fill this area out</p>
                        <p>Add more text here to fill this area out</p>
                        <p>Add more text here to fill this area out</p>
                        <p>Add more text here to fill this area out</p>
                        <p>Add more text here to fill this area out</p>
                    </div>
                    <button
                        type="button"
                        onClick="location.href='/login"
                        className="mt-8 px-6 py-2 leading-5 text-black transition-colors duration-200 transform bg-blue-base rounded-md hover:bg-gray-300 focus:outline-none focus:bg-gray-400"
                        >Get Started
                    </button>
                </div>
                <ResumeImage/>
            </div>
            <div className="w-full h-screen">
                <FeatureSection/>
            </div>
        </div>
    );
}

export default Home;