import React, { useState, useEffect } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import SalaryCharts from "../components/map";

const JobsMap = () => {
  const [searchData, setSearchData] = useState(null);

  useEffect(() => {
    // Use an async function to fetch data and handle errors
    const fetchData = async () => {
      try {
        const response = await fetch("/cached_responses/search_results.json");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setSearchData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  // Check if searchData is available before rendering SalaryCharts
  return (
    <>
      <Navbar />
      <br></br>
      <br></br>
      <div className="flex items-center justify-center">
        {searchData ? (
          <SalaryCharts jobs={searchData.results} />
        ) : (
          <div>Loading...</div>
        )}
      </div>

      <div className="bg-gray-900 py-10">
        <div className="mt-8 px-24">
          <div className="bg-white p-10 rounded shadow">
            <p className="text-lg font-semibold">
              Step into a world of endless possibilities on the Jobs on Maps
              Page, where careers know no boundaries!
            </p>
            <p className="font-light leading-8 mt-2">
              The Jobs on Maps page is a geographical expedition that allows you
              to explore job opportunities across the globe visually. Here's
              what unfolds:
            </p>
            <p className="font-light mt-2 leading-8">
              Type in your dream job and initiate the expedition. The map
              transforms into a tapestry of global opportunities, each marker a
              beacon to your aspirations.
            </p>
            <p className="font-light leading-8">
              Markers are seen on the continents, each one representing an
              uncharted realm of possibility. These aren't just pins; they're
              portals to diverse regions and vibrant cultures, each holding
              unique prospects.
            </p>

            <p className="font-light mb-4 leading-8">
              Click any marker to uncover treasures. Your screen blossoms with
              the specifics of a job: the company's name, the essence of the
              role, and a hint of its promise. Feel the exhilaration of being at
              the crossroads of possibilities, just a click away from your
              future.
            </p>
            <p className="font-light leading-8">
              These pages aren't just visualizations; they're portals into your
              dreams. So, step in, explore fearlessly, and let the data paint
              your path to success!
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default JobsMap;
