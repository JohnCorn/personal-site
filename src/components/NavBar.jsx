import React, {useState} from "react";
import {FaBars, FaTimes} from 'react-icons/fa';
import {motion} from 'framer-motion';
import {Link} from 'react-scroll'

const NavBar = () => {
    const [nav, setNav] = useState(false);

    // TODO: put this in data file and pass in as prop
    const links =['home', 'about', 'work', 'contact']

return(
    <div
    className="fixed w-full h-[80px] flex justify-between">

    <div 
    className="relative items-center flex justify-between w-full h-20 z-20"
    >
        {/* Hides menu when the window is small */}
        <ul className="hidden sm:flex absolute right-0">
            {/* TODO: make this it's own object and iterate over it? */}
            {links.map((link) => 
                <Link to={link} smooth={true} offset={50} duration={500}
                    key={link}> 

                    <motion.li         
                    onClick={() => console.log("here")}
                    whileHover={{ scale: 1.25 }}
                    whileTap={{ scale: 0.75 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    className='px-4 cursor-pointer font-medium text-gray-900 right-0 top-0 bottom-0'
                    >
                        {link}
                    </motion.li>
                </Link>)
            }

        </ul>

        <div 
        className="cursor-pointer pr-4 text-gray-900 sm:hidden z-20"
        onClick={()=> setNav(!nav)}
        >
            {nav ? <FaTimes size={30}/> : <FaBars size={30}/>}
        </div>

        {/* Only show this menu when the nav is true */}
        {nav && (
        <ul className="flex flex-col justify-center items-center 
        absolute top-0 left-0 w-full h-screen bg-gradient-to-b 
        from-black to-gray-800 text-gray-300">
            {links.map(({id, link}) => 
                <li key={id}
                className="px-4 cursor-pointer py-6 text-4xl"
            >{link}</li>)
            }
        </ul>
        )}
    </div>
    <div className="fixed w-full h-[80px] flex justify-between z-10"/>
    </div>

);
}

export default NavBar;