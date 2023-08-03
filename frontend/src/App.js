import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import Login from "./views/Login";
import Home from "./views/Home";
import APIPage1 from "./views/APIPage1";

import APIPageExp from "./views/APIPageExp";
import JobCategories from "./views/Job_Categories";
import JobCategoriesExp from "./views/jobcategoriesExp";
import JobsMap from "./views/map"
import mapExp from "./views/mapExp";

import About from "./views/About.js";
import Register from "./views/Register.js";
import Contact from "./views/Contact";
import Blog from "./views/Blog";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/APIPage1" element={<APIPage1 />} />

        <Route path="/APIPageExp" element={<APIPageExp />} />
        <Route path="/jobcategories" element={<JobCategories />} />
        <Route path="/jobcategoriesexp" element={<JobCategoriesExp />} />
        <Route path="/jobsonmap" element={<JobsMap />} />
        <Route path="/mapexp" element={<mapExp />} />

        <Route path="/about" element={<About />} />
        <Route path="/register" element={<Register />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
