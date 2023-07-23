// SalaryHistoryChart.js
import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import jsonFile from  '../cached_response/salary_history_uk.json';

const SalaryHistoryChart = () => {
  const [chartData, setChartData] = useState({});

  useEffect(() => {
    // Process the data from the JSON file into chart-friendly format
    const labels = Object.keys(jsonFile.month);
    const data = Object.values(jsonFile.month);

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
  }, []);

  return (
    <div>
      <Line data={chartData} />
    </div>
  );
};

export default SalaryHistoryChart;
