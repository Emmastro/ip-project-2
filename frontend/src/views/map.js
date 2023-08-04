import React, { useState, useEffect } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import SalaryCharts from "../components/map";
import {
  REACT_APP_LOAD,
  BASE_URL,
  URL_CREDENTIALS,
  countryOptions,
} from "../constants";

const JobsMap = () => {
  const [searchData, setSearchData] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [location, setLocation] = useState("us");
  const [jobCategories, setJobCategories] = useState([]);

  const searchJobCategory = async (jobCategory) => {
    let endpoint = "/cached_responses/search_results.json";

    if (REACT_APP_LOAD === "live") {
      endpoint = `${BASE_URL}/${location}/search?${URL_CREDENTIALS}&results_per_page=30`;
    }

    const responseSearch = await fetch(endpoint, {
      method: "GET",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .catch((error) => console.error(error));

    console.log("Response:", responseSearch);
    setSearchData(responseSearch);
  };

  const handleLocationChange = async (event) => {
    setLocation(event.target.value);
    // Populate categories supported for this country
    let endpoint = "/cached_responses/job_categories.json";
    if (REACT_APP_LOAD === "live") {
      endpoint = `${BASE_URL}/${location}/categories?${URL_CREDENTIALS}`;
    }

    const categories = await fetch(endpoint, {
      method: "GET",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .catch((error) => console.error(error));

    console.log("Response:", categories);
    setJobCategories(categories.results);
  };

  const handleCategoryChange = (event) => {
    console.log("category change: ", event.target);
    setSelectedCategory(event.target.value);
    searchJobCategory(event.target.value);
  };

  const RadioGroup = ({ options, selectedOption, onChange }) => {
    if (options.length === 0) {
      // Return null if the options are not available yet
      return null;
    }
    return (
      <div className="flex items-center space-x-4">
        <div className="max-h-64 overflow-y-auto">
          {options.map((option) => (
            <label
              key={option.tag}
              className="flex items-center cursor-pointer"
            >
              <input
                name="jobCategory"
                type="radio"
                value={option.tag}
                checked={selectedOption === option.tag}
                onChange={(event) => onChange(event)}
                className="form-radio h-4 w-4 text-indigo-600"
              />
              <span className="ml-2 text-gray-700">{option.label}</span>
            </label>
          ))}
        </div>
      </div>
    );
  };

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
        <div className="mt-8 lg:px-24 md:px-0">
          <div className="bg-white p-10 rounded shadow">
            <p className="text-lg font-semibold">
              Step into a world of endless possibilities on the Jobs on Maps
              Page, where careers know no boundaries!
            </p>
            <p className="font-light leading-8 mt-2">
              The page is a geographical expedition that allows you to explore
              job opportunities across the globe visually. Here's what unfolds:
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
