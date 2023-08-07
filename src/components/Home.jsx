import React from "react";
import {motion} from 'framer-motion';

const Home = () => {
    return(
        <div 
        name= "home"
        className="w-full h-screen bg-[#DDDEE7] text-gray-950">
          
            {/* Container */}
            <div className="max-w-[700px] mx-auto px-8 font-semi-text-xl bold flex flex-col justify-center h-full">
                <p>Hi, my name is</p>
                <h1 className="text-7xl lg:text-6xl font-bold">
                    John Corn.
                </h1>
                <h2 className="text-7xl lg:text-6xl font-bold">
                    I'm a Front-End Developer.
                </h2>
                <p className="py-4 max-w-[700px]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                    ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
                    ullamco laboris nisi ut aliquip ex ea commodo consequat. 
          
                </p>

                <div>
                    <motion.button 
                    whileHover={{
                        scale: 1.125,         
                        color: "black",
                        backgroundColor: "white",
                        border: "white"
                      }}
                        transition={{ type: "spring",}}
             
          
                      whileTap={{ scale: 0.9 }}
                    className="text-black border-2 rounded-md border-black px-6 py-3 my-2 flex items-center">
                        View Work
                    </motion.button>
                </div>
               
            </div>
        </div>
    );
}

export default Home;