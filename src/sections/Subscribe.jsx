import React from 'react'

const Subscribe = () => {
  return (
 <section  id='contact-us' className='flex justify-between  max-container items-center max-lg:flex-col gap-10'> 
  <div className='flex-1 '>
  <h3 className='text-4xl leading-[68px] lg:max-w-md max-lg:w-full font-palanquin font-bold'>
        Sign Up for
        <span className='text-coral-red'> Updates </span>& Newsletter
      </h3>
  </div>
  <div className='border-2 border-slate-400 lg:mr-12 rounded-full flex-1 py-2 lg:max-w-[40%] flex justify-between px-3 ' >
  <input type='text' placeholder='subscribe@nike.com' className='bg-transparent input' />
  <button className='bg-coral-red text-white px-7 py-2 rounded-full'>Sing Up</button>
  </div>
 </section>
  )
}

export default Subscribe
