import React, { useState } from 'react'


function Navbar() {
  const [navbar, setNavbar] = useState(false)
  return (
    <header class="site-navbar mt-3">
      <div class="container-fluid">
        <div class="row align-items-center">
          <div class="site-logo col-6"><a href="/">JobData</a></div>

          <nav class="mx-auto site-navigation">
            <ul class="site-menu js-clone-nav d-none d-xl-block ml-0 pl-0">
              <li><a href="/" class="nav-link active">Home</a></li>
              <li><a href="/salary-history">Salary History</a></li>
              <li><a href="/job-categories">Job categories</a></li>
              <li><a href="/about">About Us</a></li>             
              <li><a href="/jobs-on-map">Jobs on Map</a></li>          
              <li><a href="/contact">Contact Us</a></li>
              <li><a href="/blog">Blog</a></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Navbar