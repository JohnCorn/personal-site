import React from "react";
import {motion} from 'framer-motion';
import {Link} from 'react-scroll'
import { BsLinkedin, BsGithub } from "react-icons/bs";

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
                    I'm a Software Developer.
                </h2>
                <p className="py-4 max-w-[700px]">
                I'm a software designer/developer base in new york city.
                I have over a decade of experence prototyping and building 
                interactive experiences for dozens of clients.
                I love minimal and brutalist design. My passion are pizza and art.

                </p>

                <div>
                    <ul className="flex grid-flow-col items-center justify-around">

                        <motion.a
                        href="https://github.com/JohnCorn"
                        target="_blank" 
                        rel="noreferrer"
                        initial={{ color: "#030712"}}

                        whileHover={{
                            scale: 1.25,         
                            color: "#9E46AB"
                            }}
    
                        whileTap={{ scale: 0.9 }}
                        >
                            <BsGithub  size={45}/>
                        </motion.a>

                        <motion.a
                        href="https://www.linkedin.com/in/johncornacchioli/"
                        target="_blank" 
                        rel="noreferrer"
                        initial={{ color: "#030712"}}

                        whileHover={{
                            scale: 1.125,         
                            color: "#0A66C2"
                        }}
            
                        whileTap={{ scale: 0.9 }}
                        >
                            <BsLinkedin size={45}/>
                         </motion.a>

                        <Link to='work' smooth={true} offset={50} duration={500}> 
                            <motion.li 
                                initial={{ 
                        
                                }}

                                whileHover={{
                                    scale: 1.125,      
    
                                }}

                                whileTap={{ scale: 0.9 }}
                                className="font-bold border-2 border-black text-center text-xl rounded-lg py-2 px-2 flex items-center"
                                >
                               MY WORK
                            </motion.li>
                        </Link>   
                    </ul>
                </div>
               
            </div>
        </div>
    );
}

export default Home;