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

  const handleLocationChange = async(event) => {
    setLocation(event.target.value);
    // Populate categories supported for this country
    let endpoint = "/cached_responses/job_categories.json";
    if (REACT_APP_LOAD === "live") {
      endpoint = `${BASE_URL}/${location}/categories?${URL_CREDENTIALS}`;
    }

    const categories = await fetch(
      endpoint,
      {
      method: "GET",
      mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
  }).then((response) => response.json())
  .catch((error) => console.error(error));

  console.log("Response:", categories);
  setJobCategories(categories.results);

  };

  const handleCategoryChange = (event) => {
    console.log("category change: ", event.target)
    setSelectedCategory(event.target.value);
    searchJobCategory(event.target.value)
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
    <section
        class="home-section section-hero overlay bg-image"
        id="home-section"
      >
        <div class="container">
          <div class="row align-items-center justify-content-center">
            <div class="col-md-12">
              <div class="mb-5 text-center">
                <h1 class="text-white font-weight-bold">
                  Job Location Visualization
                </h1>
                <p>
                  Have a look at where various jobs are located in the various Countries!
                </p>
              </div>
              <form method="post" class="search-jobs-form">
                <div class="row mb-5">
                  <label for="underline_select" class="sr-only">
                    Underline select
                  </label>
                  <select
                    id="underline_select"
                    name="location"
                    class="text-gray-500 bg border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer"
                    onChange={handleLocationChange}
                  >
                    {Object.entries(countryOptions).map(([key, value]) => (
                      <option key={key} value={key}>
                        {value}
                      </option>
                    ))}
                  </select>
                </div>
                <div class="row">
                  <h1 className="text-2xl font-bold mb-4">Select a job category:</h1>
                  {jobCategories.length > 0 && <RadioGroup
                    options={jobCategories}
                    selectedOption={selectedCategory}
                    onChange={handleCategoryChange}
                  />}
                  
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    <div className="flex items-center justify-center">
        {searchData ? <SalaryCharts jobs={searchData.results} /> : <div>Loading...</div>}
    </div>
    <Footer />
    </>
  );
};

export default JobsMap;
