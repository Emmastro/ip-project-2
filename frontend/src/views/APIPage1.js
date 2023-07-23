import React, { useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import SalaryHistoryChart from "../components/SalaryHistoryChart";

const APIPage1 = () => {

  return (
    <>
    {/* We need a different Navbar for the API Pages */}
      <section className="map">
      
        <SalaryHistoryChart />

      </section>
      <Footer />
    </>
  );
};

export default APIPage1;
