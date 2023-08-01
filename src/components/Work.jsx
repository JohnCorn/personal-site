import React from 'react'
import WorkCard from './WorkCard'
export default function Work({apps}) {
    return (
        <div 
            name='work'
            className='w-full bg-[#43454D] text-neutral-50'>

            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-neutral-50'>Work</p>
                    <p className='py-6'>Check out some of my recent work</p>
                </div>

            {/* Container */}
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-12 mx-4'>
                
                {/* Card */}
                {apps.map((app) => (
                        <WorkCard
                        key ={app.name}
                        app={app}
                        />
                    )
                    )}
            </div>

            </div>
        </div>  
    )
}