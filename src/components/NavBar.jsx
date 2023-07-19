import React, {useState} from "react";
import {FaBars, FaTimes} from 'react-icons/fa';

const NavBar = () => {
    const [nav, setNav] = useState(false);

    // TODO: put this in data file and pass in as prop
    const links =[
        {
            id:1,
            link: 'home'
        },
        {
            id:2,
            link: 'portfolio'
        },
        {
            id:3,
            link: 'experience'
        },
        {
            id:4,
            link: 'contact'
        },
    ]
return(
    <div 
    className="flex justify-between items-center 
    w-full h-20 text-white fixed bg-black px-4"
    >
        <div>
            <h1 className="text-5xl">John</h1>
        </div>

        {/* Hides menu when the window is small */}
        <ul className="hidden md:flex">

            {/* TODO: make this it's own object and iterate over it? */}
            {links.map(({id, link}) => 
                <li key={id}
                className="px-4 cursor-pointer font-medium text-gray-300
            hover:scale-105"
            >{link}</li>)
            }

        </ul>

        <div 
        className="cursor-pointer pr-4 z-10 text-gray-300 md:hidden"
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
);
}

export default NavBar;