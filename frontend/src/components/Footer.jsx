import React from 'react'


const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <div className="bg-[url('../public/footer_pic.avif')] bg-cover bg-center h-[30em] w-full text-black flex flex-col items-center justify-center pt-10 pb-4">
      <h1 className='text-xl w-2/3 md:w-full text-center font-medium md:font-normal md:text-3xl'>Want to find out which job is suitable for your skills?</h1>
      <a href="/" className='rounded w-2/5 md:w-1/5 p-2 text-[#F4ECC2] text-center my-6 bg-gray-900'>Get Started</a>
      <hr className="w-2/3 md:w-1/2 mb-6 border-gray-900 mx-auto lg:mb-6"/>
      <div className='grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-16'>
        <div>
          <h1 className='font-semibold'>Search Trending</h1>
          <p className='text-[#F4ECC2]'>Web Design</p>
          <p className='text-[#F4ECC2]'>Graphic Design</p>
          <p className='text-[#F4ECC2]'>Python</p>
        </div>
        <div>
          <h1 className='font-semibold'>Company</h1>
          <p className='text-[#F4ECC2]'>Our Team</p>
          <p className='text-[#F4ECC2]'>Careers</p>
          <p className='text-[#F4ECC2]'>Reach Out</p>
        </div>
        <div>
          <h1 className='font-semibold'>Support</h1>
          <p className='text-[#F4ECC2]'>Tutorials</p>
          <p className='text-[#F4ECC2]'>Privacy</p>
          <p className='text-[#F4ECC2]'>Terms of Service</p>
        </div>
        <div>
          <h1 className='font-semibold'>Socials</h1>
          <div className='flex justify-between'>
            <img
              src='/facebook.png'
              width={20}
              height={20}
              className='hover:scale-125 cursor-pointer '
            />
            <img
              src='/twitter.png'
              width={20}
              height={20}
              className='hover:scale-125 cursor-pointer'
            />
            <img
              src='/instagram.png'
              width={20}
              height={20}
              className='hover:scale-125 cursor-pointer'
            />
            <img
              src='/linkedin.png'
              width={20}
              height={20}
              className='hover:scale-125 cursor-pointer'
            />
          </div>
        </div>
      </div>
      <div>
        <p className="text-xs mt-4 text-[#F4ECC2]">
          © {currentYear}<a href="/" className="hover:underline"> JOB DATA™</a>. All Rights Reserved.
        </p>
      </div>
    </div>
  )
}

export default Footer