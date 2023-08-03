import React from 'react'


const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <div className="bg-[#F4ECC2] w-full text-black flex flex-col items-center justify-center pt-10 pb-4">
      <h1 className='text-xl w-2/3 md:w-full text-center font-medium md:font-normal md:text-3xl'>Want to find out which job is suitable for your skills?</h1>
      <a href="/" className='rounded w-2/5 md:w-1/5 p-2 text-[#F4ECC2] text-center my-6 bg-gray-900'>Get Started</a>
      <hr className="w-2/3 md:w-1/2 mb-6 border-gray-900 mx-auto lg:mb-6"/>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16'>
        <div>
          <h1 className='font-semibold'>Search Trending</h1>
          <p className='text-gray-600'>Web Design</p>
          <p className='text-gray-600'>Graphic Design</p>
        </div>
        <div>
          <h1 className='font-semibold'>Company</h1>
          <p className='text-gray-600'><a href="/about">Our Team</a></p>
          <p className='text-gray-600'><a href="/job-categories">Job Categories</a></p>
          
        </div>
        <div>
          <h1 className='font-semibold'>Support</h1>
          <p className='text-gray-600'><a href="">Tutorials</a></p>
          <p className='text-gray-600'><a href="/contact">Reach Out</a></p>
        </div>
      </div>
      <div>
        <p className="text-xs mt-4">
          © {currentYear}<a href="/" className="hover:underline"> JOB DATA™</a>. All Rights Reserved.
        </p>
      </div>
    </div>
  )
}

export default Footer