
import React from "react";

export default function Navbar() {
  const [navbar, setNavbar] = React.useState(false);
  return (
    <>
      <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-gray-900">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <a
              className="text-xl font-medium leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white"
              style={{textDecoration: 'none'}}
              href="/"
            >
              JOB DATA
            </a>
            <button
              className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbar(!navbar)}
            >
              <i className="fas fa-bars"></i>
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center" +
              (navbar ? " flex" : " hidden")
            }
            id="navbar"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li><a href="/" className="nav-link hover:text-white">Home</a></li>
              <li><a href="/salary-history" className="nav-link hover:text-white">Salary History</a></li>
              <li><a href="/job-categories" className="nav-link hover:text-white">Job categories</a></li>
              <li><a href="/jobs-on-map" className="nav-link hover:text-white">Jobs on Map</a></li>
              <li><a href="/about" className="nav-link hover:text-white">About Us</a></li>         
              <li><a href="/contact" className="nav-link hover:text-white">Contact Us</a></li>
              <li><a href="/blog" className="nav-link hover:text-white">Blog</a></li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}