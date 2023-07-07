import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <div className='bg-[#F4ECC2] w-full text-black flex flex-col items-center justify-center pt-10 pb-4'>
      <h1 className='text-xl w-2/3 md:w-full text-center font-medium md:font-normal md:text-3xl'>Want to find out which job is suitable for your skills?</h1>
      <Link href="/" className='rounded w-2/5 md:w-1/5 p-2 text-white text-center my-6 bg-gray-900'>Get Started</Link>
      <hr className="w-2/3 md:w-1/2 mb-6 border-gray-900 mx-auto lg:mb-6"/>
      <div className='grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-16'>
        <div>
          <h1 className='font-semibold'>Search Trending</h1>
          <p className='text-gray-600'>Web Design</p>
          <p className='text-gray-600'>Graphic Design</p>
          <p className='text-gray-600'>Python</p>
        </div>
        <div>
          <h1 className='font-semibold'>Company</h1>
          <p className='text-gray-600'>Our Team</p>
          <p className='text-gray-600'>Careers</p>
          <p className='text-gray-600'>Reach Out</p>
        </div>
        <div>
          <h1 className='font-semibold'>Support</h1>
          <p className='text-gray-600'>Tutorials</p>
          <p className='text-gray-600'>Privacy</p>
          <p className='text-gray-600'>Terms of Service</p>
        </div>
        <div>
          <h1 className='font-semibold'>Socials</h1>
          <div className='flex justify-between'>
            <Image
              src='/facebook.png'
              width={20}
              height={20}
              className='hover:scale-125 cursor-pointer'
            />
            <Image
              src='/twitter.png'
              width={20}
              height={20}
              className='hover:scale-125 cursor-pointer'
            />
            <Image
              src='/instagram.png'
              width={20}
              height={20}
              className='hover:scale-125 cursor-pointer'
            />
            <Image
              src='/linkedin.png'
              width={20}
              height={20}
              className='hover:scale-125 cursor-pointer'
            />
          </div>
        </div>
      </div>
      <div>
        <p className="text-xs mt-4">
          © {currentYear}<Link href="/" className="hover:underline"> JOB DATA™</Link>. All Rights Reserved.
        </p>
      </div>
    </div>
  )
}

export default Footer