import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./views/Login";
import Home from "./views/Home";
import Authors from "./views/Authors.js";
import Register from "./views/Register.js";
import Contact from "./views/Contact";
import Blog from "./views/Blog";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/authors" element={<Authors/>} />
        <Route path="/register" element={<Register />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/blog" element={<Blog />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
