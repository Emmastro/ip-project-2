import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function Authors(){
    return (
        <>
          <Navbar />
          <div>
          <div className="w-full h-screen bg-[url('../public/teams.jpg')] bg-cover bg-no-repeat bg-fixed">
          <div className="bg-black bg-opacity-50 w-full h-screen flex flex-col items-center justify-center text-white">
            <h1 className="font-semibold text-2xl md:text-5xl w-3/4 md:w-1/2 text-center md:tracking-tighter text-white">
            </h1>
          </div>
        </div>
            
          </div>
          <Footer />
        </>
      )
}

export default Authors