import React, { useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import SalaryHistoryChart from "../components/SalaryHistoryChart";

const APIPage1 = () => {
//   const [jobData, setJobData] = useState([]);
//   const [jobStatistics, setJobStatistics] = useState(null);

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     const formData = new FormData(event.target);
//     const jobTitle = formData.get("jobtitle");

//     try {
//       const response = await fetch("/api/jobs", {
//         method: "POST",
//         body: JSON.stringify({ jobTitle }),
//         headers: {
//           "Content-Type": "application/json",
//         },
//       });
//       const data = response.data;
//       setJobData(data.jobData);
//       setJobStatistics(data.jobStatistics);
//     } catch (error) {
//       console.error("Error fetching job statistics:", error);
//     }
//   };

  return (
    <>
      <Navbar />

      <section
        class="home-section section-hero overlay bg-image"
        id="home-section"
      >
      
        <APIPage1 />

      </section>
      <Footer />
    </>
  );
};

export default APIPage1;
