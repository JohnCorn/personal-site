import React from 'react'

function Contact() {
  return (
    <div 
    name='contact'
    className='w-full h-screen bg-[#DDDEE7] text-gray-950 flex justify-center items-center p-4'
    >
        <form method='Post' action='https://getform.io/f/390e2e7c-9b82-4568-a3e3-8e70b473bfc7' className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-lime-600'>Contact</p>
                <p className='mt-4'>Let's Connect</p>
            </div>
            <input className='p-2'type='text' placeholder='Name' name='name'/>
            <input className='p-2 my-4' type='text' placeholder='Email' name='email'/>
            <textarea className='p-2' name='message' rows="10" placeholder='message'/>
            <button className='my-4   px-4 border-2 border-black'>Send</button>
        </form>
        
    </div>
  )
}

export default Contact