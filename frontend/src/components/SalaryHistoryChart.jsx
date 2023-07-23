// SalaryHistoryChart.js
import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';

const SalaryHistoryChart = () => {
  const [chartData, setChartData] = useState({});

  useEffect(() => {
    // Fetch the JSON data from the file
    fetchSalaryHistoryData();
  }, []);

  const fetchSalaryHistoryData = async () => {
    try {
      const response = await fetch('cached_response/salary_history_uk.json');
      if (!response.ok) {
        throw new Error('Failed to fetch the salary history data.');
      }
      const contentType = response.headers.get('content-type');
      // if (!contentType || !contentType.includes('application/json')) {
      //   throw new Error('Response is not valid JSON.');
      // }
      const salaryHistoryData = await response.json();
      console.log(salaryHistoryData, 'salaryHistoryData')
      console.log(contentType, 'contentType')
  
      // Check if the data is valid
  //     if (!salaryHistoryData || !salaryHistoryData.month) {
  //       throw new Error('Invalid salary history data format.');
  //     }
  
      // Process the data from the JSON file into chart-friendly format
      const labels = Object.keys(salaryHistoryData.month);
      const data = Object.values(salaryHistoryData.month);
  
      setChartData({
        labels,
        datasets: [
          {
            label: 'Average Salary',
            data,
            fill: false,
            borderColor: 'rgba(75,192,192,1)',
            tension: 0.1,
          },
        ],
      });
    } catch (error) {
      console.error('Error fetching salary history data:', error);
    }
  };

  return (
    <div>
      {Object.keys(chartData).length > 0 ? ( // Check if chartData has valid data
        <Line data={chartData} />
      ) : (
        <p>Loading chart data...</p>
      )}
    </div>
  );
};

export default SalaryHistoryChart;
