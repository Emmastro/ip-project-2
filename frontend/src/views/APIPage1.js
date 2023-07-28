import React, { useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import SalaryHistoryChart from "../components/SalaryHistoryChart";
import { Bar, Pie, Scatter, HorizontalBar, Doughnut } from 'react-chartjs-2';


const createScatterChartData = (data) => {
  /*Visualize salary */

  const scatterData = data.results.map((job) => ({
    x: job.salary_min + (job.salary_max - job.salary_min) / 2, // Using the middle point of the salary range as x-value
    y: job.latitude,
    title: job.title,
  }));

  return {
    datasets: [
      {
        label: "Job Locations",
        data: scatterData,
        backgroundColor: '#FF6384'
      },
    ],
  };
};

// Function to generate an array of random colors
const getRandomColors = (count) => {
  const colors = [];
  for (let i = 0; i < count; i++) {
    colors.push(getRandomColor());
  }
  return colors;
};

// Function to generate a random color
const getRandomColor = () => {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

const createPieChartData = (data) => {
  
  const jobCategories = data.results.map((job) => job.category.label);
  const categoryCounts = jobCategories.reduce((acc, category) => {
    acc[category] = (acc[category] || 0) + 1;
    return acc;
  }, {});

  const uniqueColors = getRandomColors(Object.keys(categoryCounts).length);

  return {
    labels: Object.keys(categoryCounts),
    datasets: [
      {
        data: Object.values(categoryCounts),
        backgroundColor: uniqueColors,
      },
    ],
  };
};

const createDoughnutChartData = (data) => {

  return {
    labels: ["Permanent"],
    datasets: [
      {
        data: [2],
        backgroundColor: ["#FF6384"],
      },
    ],
  };
};

const createHorizontalBarChartData = (data) => {
  // Your logic to extract data for Horizontal Bar Chart
  // Example:
  return {
    labels: [data.results[0].title, data.results[1].title],
    datasets: [
      {
        label: "Salary Range",
        backgroundColor: ["#FF6384", "#36A2EB"],
        data: [
          {
            x: data.results[0].salary_min,
            y: data.results[0].salary_max - data.results[0].salary_min,
          },
          {
            x: data.results[1].salary_min,
            y: data.results[1].salary_max - data.results[1].salary_min,
          },
        ],
      },
    ],
  };
};

const createBarChartData = (data) => {
  // Your logic to extract data for Bar Chart
  // Example:
  return {
    labels: ['Mean Salary', 'Maximum Salary'],
    datasets: [
      {
        label: 'Salary',
        backgroundColor: ['#FF6384', '#36A2EB'],
        data: [data.mean, data.results[0].salary_max],
      },
    ],
  };
};


const APIPage1 = () => {
  const [salaryHistoryData, setJobData] = useState(null);
  const [searchData, setSearchData] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const jobTitle = formData.get("jobtitle");

    // Salary history
    // API endpoint: http://api.adzuna.com/v1/api/jobs/gb/history?app_id={APP_ID}&app_key={API_KEY}&location0=UK&location1=London&category=it-jobs&content-type=application/json
    const responseHistory = await fetch("/cached_responses/salary_history_uk.json", {
      method: "GET",
    })
      .then((response) => response.json())
      .catch((error) => console.error(error));

    console.log("Response:", responseHistory);
    setJobData(responseHistory);

    // Search results
    const responseSearch = await fetch("/cached_responses/search_results.json", {
      method: "GET",
  }).then((response) => response.json())
  .catch((error) => console.error(error));

    console.log("Response:", responseSearch);
    setSearchData(responseSearch);
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
                  Job Data Visualization
                </h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Cupiditate est, consequuntur perferendis.
                </p>
              </div>
              <form
                method="post"
                class="search-jobs-form"
                onSubmit={handleSubmit}
              >
                <div class="row mb-5">
                  <div class="col-12 col-sm-6 col-md-6 col-lg-3 mb-4 mb-lg-0">
                    <input
                      type="text"
                      class="form-control form-control-lg"
                      name="jobtitle"
                      placeholder="Job title, Company..."
                    />
                  </div>

                  <label for="underline_select" class="sr-only">
                    Underline select
                  </label>
                  <select
                    id="underline_select"
                    class="text-gray-500 bg border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer"
                  >
                    <option selected>Choose a country</option>
                    <option value="us">United States</option>
                    <option value="ca">Canada</option>
                    <option value="fr">France</option>
                    <option value="de">Germany</option>
                    <option value="at">Austria</option>
                    <option value="au">Australia</option>
                    <option value="be">Belgium</option>
                    <option value="br">Brazil</option>
                    <option value="ch">Switzerland</option>
                    <option value="es">Spain</option>
                    <option value="in">India</option>
                    <option value="it">Italy</option>
                    <option value="mx">Mexico</option>
                    <option value="nl">Netherlands</option>
                    <option value="nz">New Zealand</option>
                    <option value="pl">Poland</option>
                    <option value="ru">Russia</option>
                    <option value="sg">Singapore</option>
                    <option value="za">South Africa</option>
                  </select>

                  <div class="col-12 col-sm-6 col-md-6 col-lg-3 mb-4 mb-lg-0">
                    <button
                      type="submit"
                      class="btn btn-primary btn-lg btn-block text-white btn-search"
                    >
                      <span class="icon-search icon mr-2"></span>Search Job
                    </button>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-12 popular-keywords">
                    <h3>Trending Keywords:</h3>
                    <ul class="keywords list-unstyled m-0 p-0">
                      <li>
                        <a href="#" class="">
                          UI Designer
                        </a>
                      </li>
                      <li>
                        <a href="#" class="">
                          Python
                        </a>
                      </li>
                      <li>
                        <a href="#" class="">
                          Developer
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="map">
        <div className="grid grid-cols-2 grid-rows-2 gap-10">
          <div>
            {salaryHistoryData && <SalaryHistoryChart {...salaryHistoryData} />}
          </div>
          <div>
            <h2>Job Categories Distribution</h2>
            {searchData && <Scatter data={createScatterChartData(searchData)} />}
          </div>
           <div>
            <h2>Job Categories Distribution</h2>
            {searchData && <Pie data={createPieChartData(searchData)} />}
          </div>
          <div>
            <h2>Comparison of Mean Salary and Maximum Salaries</h2>
            {searchData && <Bar data={createBarChartData(searchData)} />}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default APIPage1;
