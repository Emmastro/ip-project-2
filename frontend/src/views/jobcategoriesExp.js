import React from 'react';
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const Job_Categories_exp = () => {
  return (
    <div>
        <Navbar />
        <div className="w-full h-screen bg-[url('../public/Big-Data-Analyticsq.jpg')] bg-cover bg-no-repeat bg-fixed relative">
        <h1>How to use the Job job Categories Page</h1>
          <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8 mb-12 absolute top-[25%] text-center translate-x-[-50%] left-[50%] w-4/5">
            <div className="bg-[#800080] h-[23em] w-[20em] p-3 hover:shadow-2xl hover:scale-105 cursor-pointer border rounded hover:border-none transition-all ease-in-out">
              <h1 className="text-sm font-semibold py-4 text-3xl">
                Doughnut Chart
              </h1>
              <p className="font-light">
                Shows the number of jobs in a certain country per job category
              </p>
              <p className="font-light">
                This is a good way to decide what to study and the skills to learn as they are representative of the job market
              </p>
            </div>
            <div className="bg-[#800080] h-[23em] w-[20em] p-3 hover:shadow-2xl hover:scale-105 cursor-pointer border rounded hover:border-none transition-all ease-in-out">
              <h1 className="text-sm font-semibold py-4 text-3xl">
                Horizontal Bar Chart
              </h1>
              <p className="font-light">
                Average Salary Per Category.
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

export default Job_Categories_exp;
