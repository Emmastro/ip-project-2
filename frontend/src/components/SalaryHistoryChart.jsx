import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, registerables } from "chart.js";

ChartJS.register(...registerables);

const SalaryHistoryChart = (salaryHistoryData) => {

  console.log("salaryHistoryData", salaryHistoryData)
  const [chartData, setChartData] = useState({});

  useEffect(() => {
    fetchSalaryHistoryData();
  }, []);

  const fetchSalaryHistoryData = async () => {
    try {
      // Check if the data is valid

      if (!salaryHistoryData || !salaryHistoryData.month) {
        throw new Error("Invalid salary history data format.");
      }
      console.log("exist: ", salaryHistoryData)
      // Process the data from the JSON file into chart-friendly format
      const labels = Object.keys(salaryHistoryData.month);
      const data = Object.values(salaryHistoryData.month);
      const country = Object.values(salaryHistoryData.location.display_name);

      setChartData({
        labels,
        datasets: [
          {
            label: "Average Salary in " + country,
            data,
            fill: true,
            responsive: true,
            borderColor: "rgba(0, 0, 0, 1)",
            tension: 0.1,
          },
        ],
      });
    } catch (error) {
      console.error("Error fetching salary history data:", error);
    }
  };

  return (
    <>
    
    <div>
      {Object.keys(chartData).length > 0 ? ( // Check if chartData has valid data
        <Line data={chartData} />
      ) : (
        <p>Loading chart data...</p>
      )}
    </div>
          
    </>
  );
};

export default SalaryHistoryChart;
