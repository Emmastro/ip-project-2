import React from 'react';
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const MapExp = () => {
  return (
    <div>
        <Navbar />
        <div className="w-full h-screen bg-[url('../public/Big-Data-Analyticsq.jpg')] bg-cover bg-no-repeat bg-fixed relative">
        <h1>How to use the Map Page</h1>
          <div className="grid md:grid-cols-1 lg:grid-cols-1 gap-8 mb-12 absolute top-[25%] text-center translate-x-[-50%] left-[50%] w-4/5">
            <div className="bg-[#800080] h-[23em] w-[20em] p-3 hover:shadow-2xl hover:scale-105 cursor-pointer border rounded hover:border-none transition-all ease-in-out">
              <h1 className="text-sm font-semibold py-4 text-3xl">
                World Map
              </h1>
              <p className="font-light">
                This map has plots of where the different job openings are in the world
              </p>
              <p className="font-light">
                You can use it to decide where to live and work
              </p>
            </div>
          </div>
        </div>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <a href="/mapexp" className='rounded w-2/5 md:w-1/5 p-2 text-[#F4ECC2] text-center my-6 bg-gray-900'>Learn More</a>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
      <Footer />
    </div>
  );
};

export default MapExp;
