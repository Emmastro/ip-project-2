import React from 'react';
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const APIPageExp = () => {
  return (
    <div>
        <Navbar />
        <div className="w-full h-screen bg-[url('../public/Big-Data-Analyticsq.jpg')] bg-cover bg-no-repeat bg-fixed relative">
        <h1>How to use the Salary History Page</h1>
          <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8 mb-12 absolute top-[25%] text-center translate-x-[-50%] left-[50%] w-4/5">
            <div className="bg-[#800080] h-[23em] w-[20em] p-3 hover:shadow-2xl hover:scale-105 cursor-pointer border rounded hover:border-none transition-all ease-in-out">
              <h1 className="text-sm font-semibold py-4 text-3xl">
                Line Chart
              </h1>
              <p className="font-light">
                Average salary in a certain country over the years
              </p>
              <p className="font-light">
                You will need to select the country for which you want to see the average salary over the years
              </p>
            </div>
            <div className="bg-[#800080] h-[23em] w-[20em] p-3 hover:shadow-2xl hover:scale-105 cursor-pointer border rounded hover:border-none transition-all ease-in-out">
              <h1 className="text-sm font-semibold py-4 text-3xl">
                Bar Chart
              </h1>
              <p className="font-light">
                Comparison of minimum and maximum salary in a certain country.
                This can show the wealth gap in a country.
              </p>
            </div>
          </div>
        </div>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
      <Footer />
    </div>
  );
};

export default APIPageExp;
