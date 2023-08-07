import React from 'react'
import WorkCardBtn from './WorkCardBtn'

function WorkCard({app:{image, name, description, button}}) 
{

  return (
    <div className='relative bg-gradient-to-b from-gray-100  to-gray-900 shadow-lg shadow-gray-600 mt-3 mx-4 h-full items-center justify-center overflow-hidden rounded-xl'>
        <img  
        src={image} 
        alt={name}
        className='object-cover h-full w-full  mix-blend-multiply'
        /> 

        <div className='absolute bottom-0 w-full px-5 py-4'>
            <div className='text-white text-5xl lg:text-2xl font-semibold'>
                <p>{name}</p>
            </div>

            <div className='mt-3'>
                {button.map((a) => (

                    <WorkCardBtn
                    key={a.title}
                    button={a}/>
                ))}
            </div>
        </div>
    </div>
  )
}

export default WorkCard