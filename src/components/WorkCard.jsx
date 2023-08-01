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
    <div className='shadow-xl shadow-slate-400/50 bg-gray-50 container rounded-2xl flex justify-center items-center mx-auto'>

        <div className='p-4'>
        <div className='h-full rounded-xl items-center justify-center overflow-hidden'>
            <img  
            src={image} 
            alt={name}
            className='object-cover h-full'
            />
        </div>

        <div className='h-full w-full text-center justify-center'>
            <h2>{role}</h2>
            <h1 className='text-2xl font-bold tracking-wider'>
                {name}
            </h1>
            <p>{description}</p>

            <div >
                <a href="/">
                    <button className='text-center rounded-md px-4 py-1 m-2 bg-gray-500 font-bold text-lg'>Demo</button>
                </a>
                <a href="/">
                    <button className='text-center rounded-md px-4 py-1 m-2 bg-gray-500 font-bold text-lg'>Code</button>
                </a>
            </div>
            
        </div>
        </div>

    </div>
  )
}