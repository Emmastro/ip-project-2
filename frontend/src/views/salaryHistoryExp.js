import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const salaryHistoryExp = () => {
  return (
    <div>
      <Navbar />
      <div className="w-full lg:h-screen  bg-[url('../public/Big-Data-Analyticsq.jpg')] bg-cover bg-no-repeat bg-fixed relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12 lg:absolute lg:top-[25%] text-center lg:translate-x-[-50%] lg:left-[50%] lg:w-4/5 pt-48 lg:pt-0 pb-16 lg:pb-0">
          <div className="bg-[#F4ECC2] lg:h-[23em] w-4/5 mx-auto lg:w-[20em] p-3 border rounded transition-all ease-in-out">
            <h1 className="text-sm font-semibold py-2">Line Chart</h1>
            <p className="font-light py-1">
              This chart shows the salary trend of a job category over the
              years.
            </p>
            <p className="font-light py-1">
              Trace the salary trajectory over the years, immersing yourself in
              the ebb and flow of income dynamics.
            </p>
          </div>
          <div className="bg-[#F4ECC2] lg:h-[23em] w-4/5 mx-auto lg:w-[20em] p-3 border rounded transition-all ease-in-out">
            <h1 className="text-sm font-semibold py-4">Bar Chart</h1>
            <p className="font-light">
              Average Salary and Maximum Salary of the Job Category.
            </p>
            <p className="font-light py-1">
              Beyond the mean salary, it showcases the crescendo of earnings
              with the maximum salary. Feel the excitement of juxtaposition as
              you absorb the spectrum of potential rewards.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-gray-900 lg:px-24 py-10">
        <div className="bg-white p-10 rounded shadow">
          <h1 className="text-lg font-semibold pb-3">
            Navigating Data and Unleashing Insights: A Guide to Data Sourcing,
            Visualization, and API Mastery
          </h1>
          <p className="font-bold mt-2">Data Sourcing:</p>
          <p className="font-light mb-4 leading-8">
            The data powering our Salary History visualization is sourced from
            the Adzuna API, a trusted repository of job market information. This
            API offers a wealth of job-related data, including salaries, across
            various industries and countries.
          </p>
          <p className="font-bold">Data Content and Structure:</p>
          <p className="font-light leading-8">
            The data retrieved from the Adzuna API encompasses historical salary
            information for diverse job categories. It includes details such as
            job titles, average and maximum salaries, and corresponding years.
          </p>
          <p className="font-bold mt-2">API Access:</p>
          <p className="font-light mb-4 leadeing-8">
            To access the Adzuna API and retrieve salary history data, you need
            an Adzuna API key. This key empowers your queries and ensures you
            receive real-time and accurate data for your chosen job categories
            and countries.
          </p>
          <p className="font-bold">Execution of Visualization Techniques:</p>
          <ul className="font-light py-1 list-decimal list-inside">
            <li>
              Choose your desired country and job category from the available
              options.
            </li>
            <li>
              Leverage React components to interact with the Adzuna API directly
              from the frontend.
            </li>
            <li>
              Create a line chart to visualize salary trends over the years.
            </li>
            <li>Craft a bar chart to compare mean and maximum salaries.</li>
            <li>
              Click on the charts for deeper insights, driven by interactions
              with the API.
            </li>
          </ul>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default salaryHistoryExp;
