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
        {searchData ? <SalaryCharts jobs={searchData.results} /> : <div>Loading...</div>}
    </div>
    <Footer />
    </>
  );
};

export default JobsMap;
