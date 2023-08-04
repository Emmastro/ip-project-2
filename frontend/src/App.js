import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import Login from "./views/Login";
import Home from "./views/Home";
import SalaryHistory from "./views/SalaryHistory";
import JobCategories from "./views/JobCategories";
import JobCategoriesExp from "./views/jobcategoriesExp";
import JobsMap from "./views/map"
import mapExp from "./views/mapExp"
import About from "./views/About.js";
import Register from "./views/Register.js";
import Contact from "./views/Contact";
import Blog from "./views/Blog";
import Read from "./views/Read";
import Tutorial from "./views/Tutorial";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/salary-history" element={<SalaryHistory />} />
        <Route path="/tutorial" element={<Tutorial />} />
        <Route path="/job-categories" element={<JobCategories />} />
        <Route path="/job-categories-exp" element={<JobCategoriesExp />} />
        <Route path="/jobs-on-map" element={<JobsMap />} />
        <Route path="/map-exp" element={<mapExp />} />
        <Route path="/about" element={<About />} />
        <Route path="/register" element={<Register />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<Read />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
