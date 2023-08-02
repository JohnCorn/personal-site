import React from 'react'

export default function WorkCard(
    {
        app: {
    name,  
    appLink,
    codeLink, 
    image, 
    description, 
    role,
    }
}) 
{
  return (
    <div className='text-gray-950 bg-white shadow-lg shadow-gray-400 container rounded-[42px] flex justify-center items-center mx-auto'>

        <div>
        <div className='mt-3 m-2 h-full aspect-square items-center justify-center overflow-hidden rounded-[32px]'>
            <img  
            src={image} 
            alt={name}
            className='object-cover h-full'
            />
        </div>

        <div className='h-full w-full justify-center mt-6 px-5'>
            <h1 className='text-3xl font-bold tracking-wider'>
                {name}
            </h1>
            <p className='text-gray-600 mt-2'>{description}</p>

            <div className='flex justify-around mt-8 mb-4'>
                <a 
                href="/">
                    <button className='text-center text-lg font-semibold border-gray-950 border-2 px-6 py-3 m-2'>demo</button>
                </a>
                <a 
                href="/">
                    <button className='text-center text-lg font-semibold border-gray-950 border-2 px-6 py-3 m-2'>code</button>
                </a>
            </div>
            
        </div>
        </div>

    </div>
  )
}