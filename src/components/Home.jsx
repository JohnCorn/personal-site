import React from "react";
import {motion} from 'framer-motion';

const Home = () => {
    return(
        <div 
        name= "home"
        className="w-full h-screen bg-gray-100 text-gray-900">
          
            {/* Container */}
            <div className="max-w-[700px] mx-auto px-8 flex flex-col justify-center h-full">
                <p>Hi, my name is</p>
                <h1 className="text-4xl sm:text-7xl font-bold">
                    John Corn
                </h1>
                <h2 className="text-4xl sm:text-7xl font-bold">
                    I'm a Developer
                </h2>
                <p className="py-4 max-w-[700px]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                    ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
                    ullamco laboris nisi ut aliquip ex ea commodo consequat. 
          
                </p>

                <div>
                    <button className="text-black border-2 border-black px-6 py-3 my-2 flex items-center">View Work</button>
                </div>
               
            </div>
        </div>
    );
}

export default Home;