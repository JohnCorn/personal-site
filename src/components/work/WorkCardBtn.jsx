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

            whileTap={{ scale: 0.9 }}

          className='text-center font-bold text-xl lg:text-sm text-gray-100/60 border-gray-100/60 rounded-3xl border-4 px-6 py-2'>
          {title}
        </motion.button>
    </a>
  )
}

export default WorkCardBtn