import React, { useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import SalaryHistoryChart from "../components/SalaryHistoryChart";

const APIPage1 = () => {

  return (
    <>
      <Navbar />

      <section
        class="home-section section-hero overlay bg-image"
        id="home-section"
      >
      
        <SalaryHistoryChart />

      </section>
      <Footer />
    </>
  );
};

export default APIPage1;
