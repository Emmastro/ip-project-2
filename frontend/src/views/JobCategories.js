import React, { useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { Bar, Doughnut } from "react-chartjs-2";
import { REACT_APP_LOAD, BASE_URL, URL_CREDENTIALS } from "../constants";

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
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

const createDoughnutChartData = (data) => {
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

const groupDataByCategory = (data) => {
  const groupedData = {};
  data.results.forEach((result) => {
    const categoryLabel = result.category.label;
    if (!groupedData[categoryLabel]) {
      groupedData[categoryLabel] = {
        salarySum: 0,
        count: 0,
      };
    }
    groupedData[categoryLabel].salarySum +=
      (result.salary_min + result.salary_max) / 2;
    groupedData[categoryLabel].count++;
  });

  const labels = Object.keys(groupedData);
  console.log("groupedData", groupedData);
  const averageSalaries = labels.map(
    (label) => groupedData[label].salarySum / groupedData[label].count
  );

  return { labels, averageSalaries };
};

const createHorizontalBarChartData = (job) => {
  const { labels, averageSalaries } = groupDataByCategory(job);
  console.log("labels, averageSalaries : ", labels, averageSalaries);
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
                  Check out the number of Jobs and Average salary per job
                  category
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
            {searchData && (
              <>
                <h2>Number of Jobs in each Category</h2>
                <Doughnut data={createDoughnutChartData(searchData)} />
                <a href="/job-categories-exp">View explanation</a>
              </>
            )}
          </div>
          <div>
            {searchData && (
              <>
                <h2>Average Salary in each Category</h2>
                <Bar
                  data={createHorizontalBarChartData(searchData)}
                  options={{
                    indexAxis: "y", // Set the chart to be horizontal
                    scales: {
                      x: {
                        beginAtZero: true, // Set this to false if you don't want the x-axis to start at zero
                      },
                    },
                  }}
                />
                <a href="/job-categories-exp">View explanation</a>
              </>
            )}
          </div>
        </div>
      </section>

      <div className="bg-gray-900 py-10">
        <div className="mt-8 lg:px-24 md:px-0">
          <div className="bg-white p-10 rounded shadow">
            <p className="text-lg font-semibold">
              Step into the kaleidoscope of careers with the Job Categories
              Page, where numbers paint a vivid tapestry of opportunities!
            </p>
            <p className="font-light leading-8 mt-2">
              The page unveils a panoramic view of job distribution across
              various categories, coupled with their associated average
              salaries. Here's what you can expect:
            </p>
            <p className="font-light mt-2 leading-8">
              Begin by selecting your desired country. To get a holistic
              perspective, click on the "Search Jobs" button, igniting a journey
              of exploration.
            </p>
            <p className="font-light leading-8">
              A pie chart materializes on the page, artfully showcasing the
              distribution of jobs across different categories. The varying
              segments represent various job sectors, allowing you to grasp the
              breadth of opportunities available.
            </p>

            <p className="font-light mb-4 leading-8">
              Adjacent to the pie chart, a bar chart emerges, painted with
              shades of average salaries. This bar chart provides a visual
              benchmark, revealing the average earnings associated with each job
              category. A glance reveals the categories that hold the promise of
              higher incomes.
            </p>
            <p className="font-light leading-8">
              The charts are not mere images; they are gateways to deeper
              understanding. Clicking on any slice of the pie or any bar opens a
              treasure trove of insights. Explore how job categories correlate
              with salary levels, empowering you to make informed career
              choices.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default JobCategories;
