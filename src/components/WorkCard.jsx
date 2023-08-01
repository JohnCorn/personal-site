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
    <div className='text-gray-50 bg-[#18191C] container rounded-[32px] flex justify-center items-center mx-auto'>

        <div className='p-4 mt-2'>
        <div className='h-full aspect-square rounded-3xl items-center justify-center overflow-hidden'>
            <img  
            src={image} 
            alt={name}
            className='object-cover h-full'
            />
        </div>

        <div className='h-full w-full justify-center mt-6 px-5'>
            <h1 className='text-2xl font-semibold tracking-wider'>
                {name}
            </h1>
            <p className='text-gray-400 font-semibold mt-2'>{description}</p>

            <div className='flex justify-around mt-8'>
                <a 
                href="/">
                    <button className='text-center rounded-2xl px-8 py-4 m-2 bg-[#1649FF] text-md'>demo</button>
                </a>
                <a 
                href="/">
                    <button className='text-center rounded-2xl px-8 py-4 m-2 bg-[#1649FF] text-md'>code</button>
                </a>
            </div>
            
        </div>
        </div>

    </div>
  )
}