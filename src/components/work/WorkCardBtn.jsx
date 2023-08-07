import React from 'react'
import { motion } from "framer-motion";

function WorkCardBtn( {button:{title, link}} ) 
{
  return (
    <a 
    href={link}
    target="_blank" 
    rel="noreferrer"
    >
        <motion.button 
            whileHover={{
              scale: 1.125,         
              color: "black",
              backgroundColor: "white"
            }}
              transition={{ type: "spring",}}
   

            whileTap={{ scale: 0.9 }}

        className='text-center text-xl lg:text-sm text-gray-100/60 border-gray-100/60 rounded-md border-2 px-6 py-3 mr-2'>
           {title}
        </motion.button>
    </a>
  )
}

export default WorkCardBtn