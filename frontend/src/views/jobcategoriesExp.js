import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const JobCategories_exp = () => {
  return (
    <div>
      <Navbar />
      <div className="w-full lg:h-screen  bg-[url('../public/Big-Data-Analyticsq.jpg')] bg-cover bg-no-repeat bg-fixed relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12 lg:absolute lg:top-[25%] text-center lg:translate-x-[-50%] lg:left-[50%] lg:w-4/5 pt-48 lg:pt-0 pb-16 lg:pb-0">
          <div className="bg-[#F4ECC2] lg:h-[23em] w-4/5 mx-auto lg:w-[20em] p-3 border rounded transition-all ease-in-out">
            <h1 className="text-sm font-semibold py-2">Doughnut Chart</h1>
            <p className="font-light py-1">
              Shows the number of jobs in a certain country per job category
            </p>
            <p className="font-light py-1">
              Each segment within this chart isn't just a representation; it's a
              revelation. These slices embody the number of jobs within each
              category, creating a kaleidoscope of opportunities that awaits
              your exploration.
            </p>
            <p className="font-light">
              This is a good way to decide what to study and the skills to learn
              as they are representative of the job market
            </p>
          </div>
          <div className="bg-[#F4ECC2] lg:h-[23em] w-4/5 mx-auto lg:w-[20em] p-3 border rounded transition-all ease-in-out">
            <h1 className="text-sm font-semibold py-4">Bar Chart</h1>
            <p className="font-light">Average Salary Per Category.</p>
            <p className="font-light py-1">
              Every bar serves as a conduit to the average salary within the
              corresponding job category. This isn't just a chart; it's an echo
              of prosperity, a symphony of what could be.
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
            The Job Categories visualization draws from the robust Adzuna API, a
            virtual goldmine of data-rich job market insights. Through this API,
            the canvas of careers is painted with vivid strokes of industry
            statistics and earning potential.
          </p>
          <p className="font-bold">Data Content and Structure:</p>
          <p className="font-light leading-8">
            Within the depths of the Adzuna API lies a mosaic of job categories,
            each adorned with a multitude of job counts and average salaries.
            This intricate tapestry encapsulates a comprehensive spectrum of
            career options, inviting exploration.
          </p>
          <p className="font-bold mt-2">API Access:</p>
          <p className="font-light mb-4 leadeing-8">
            Your passport to this realm of career exploration is none other than
            your Adzuna API key. With this key, the gates of the API are thrown
            wide open, granting you access to the treasure trove of job category
            information, from job counts to average salaries.
          </p>
          <p className="font-bold">Execution of Visualization Techniques:</p>
          <p className="font-light leading-8">
            Understanding the limitations of API request thresholds, especially
            during development using the free plan, we implemented a strategic
            approach. We cached the API responses as JSON files, enabling us to
            thoroughly test and refine our visualizations without concerns about
            hitting the API request quota.
          </p>
          <ul className="font-light py-1 list-decimal list-inside">
            <li>
              Initiate your journey with the selection of your desired country,
              your springboard to the realm of career data.
            </li>
            <li>
              Set the stage with a click, unshrouding a breathtaking doughnut
              chart that brings forth the essence of job category distribution.
              Each slice tells a story, contributing to the rich symphony of
              career opportunities.
            </li>
            <li>
              Enter the bar chart, a canvas that harmonizes colors with earning
              potential. The heights of each bar mirror average salaries, giving
              voice to the potential prosperity that lies within each category.
            </li>
            <li>
              But the interaction is where the magic truly resides. A click on
              any slice or bar unfurls a world of insights. Engage with data on
              a personal level, see correlations, and carve your path with
              precision.
            </li>
          </ul>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default JobCategories_exp;
