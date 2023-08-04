import React, { useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { Bar, Doughnut } from 'react-chartjs-2';
import {
  REACT_APP_LOAD, BASE_URL, URL_CREDENTIALS
} from "../constants";


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

const createDoughnutChartData = (data) => {
  
  const jobCategories = data.results.map((job) => job?.label);
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

const groupDataByCategory = (data) => {
  const groupedData = {};
  data.results.forEach((result) => {
    console.log("result: ", result);
    const categoryLabel = result?.label;
    if (!groupedData[categoryLabel]) {
      groupedData[categoryLabel] = {
        salarySum: 0,
        count: 0,
      };
    }
    groupedData[categoryLabel].salarySum += (result.salary_min + result.salary_max) / 2;
    groupedData[categoryLabel].count++;
  });

  const labels = Object.keys(groupedData);
  const averageSalaries = labels.map((label) => groupedData[label].salarySum / groupedData[label].count);

  return { labels, averageSalaries };
};

const createHorizontalBarChartData = (job) => {
  // Your logic to extract data for Horizontal Bar Chart
  // Example:
  const { labels, averageSalaries } = groupDataByCategory(job)

 // Sort the data from highest to lowest average salary
 const sortedData = labels.map((label) => {
  return {
    label,
    averageSalary: averageSalaries[labels.indexOf(label)],
  };
});
sortedData.sort((a, b) => b.averageSalary - a.averageSalary);

  return {
    labels: sortedData.map((item) => item.label),
    datasets: [
      {
        label: "Average   Salary",
        backgroundColor: ["#FF6384", "#000000", "#FF0000", "#00FF00"],
        data: sortedData.map((item) => item.averageSalary),
      },
    ],
  };
};

const JobCategories = () => {
  const [searchData, setSearchData] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const location = formData.get("location");

    let endpoint = "/cached_responses/search_results.json";

    if (REACT_APP_LOAD === "live") {
      endpoint = `${BASE_URL}/${location}/categories?${URL_CREDENTIALS}`;
    }

    const responseSearch = await fetch(
      endpoint,
      {
      method: "GET",
      mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
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
                  Job Category Data Visualization
                </h1>
                <p>
                  Check out the number of Jobs and Average salary per job category
                </p>
              </div>
              <form
                method="post"
                class="search-jobs-form"
                onSubmit={handleSubmit}
              >
                <div class="row mb-5">
                  <label for="underline_select" class="sr-only">
                    Underline select
                  </label>
                  <select
                    id="underline_select"
                    name="location"
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
          
              </form>
            </div>
          </div>
        </div>
      </section>

      <section>
          <div className="grid grid-cols-2 gap-4">
           <div>
            
            {searchData && <>
              <h2>Number of Jobs in each Category</h2>
              <Doughnut data={createDoughnutChartData(searchData)} />
              <a href="/job-categories-exp">View explanation</a>
              </>}
              
          </div>
          <div>
            
            {searchData && 
            <><h2>Average Salary in each Category</h2><Bar data={createHorizontalBarChartData(searchData)}
            options={{
              indexAxis: 'y', // Set the chart to be horizontal
              scales: {
                x: {
                  beginAtZero: true, // Set this to false if you don't want the x-axis to start at zero
                },
              },
            }}/><a href="/job-categories-exp">View explanation</a></>}
          </div>
          </div>
          
  
      </section>
      <Footer />
    </>
  );
};

export default JobCategories;
