import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Home = () => {
  return (<>
  <Navbar/>
  
    <section
      class="home-section section-hero overlay bg-image"
      id="home-section"
    >
      <div class="container">
        <div class="row align-items-center justify-content-center">
          <div class="col-md-12">
            <div class="mb-5 text-center">
              <h1 class="text-white font-weight-bold">
                Job Data Visualization
              </h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Cupiditate est, consequuntur perferendis.
              </p>
            </div>
            <form method="post" class="search-jobs-form">
              <div class="row mb-5">
                <div class="col-12 col-sm-6 col-md-6 col-lg-3 mb-4 mb-lg-0">
                  <input
                    type="text"
                    class="form-control form-control-lg"
                    placeholder="Job title, Company..."
                  />
                </div>
                <div class="col-12 col-sm-6 col-md-6 col-lg-3 mb-4 mb-lg-0">
                  <select
                    class="selectpicker"
                    data-style="btn-white btn-lg"
                    data-width="100%"
                    data-live-search="true"
                    title="Select Region"
                  >
                    <option>Anywhere</option>
                    <option>San Francisco</option>
                    <option>Palo Alto</option>
                    <option>New York</option>
                    <option>Manhattan</option>
                    <option>Ontario</option>
                    <option>Toronto</option>
                    <option>Kansas</option>
                    <option>Mountain View</option>
                  </select>
                </div>
                <div class="col-12 col-sm-6 col-md-6 col-lg-3 mb-4 mb-lg-0">
                  <select
                    class="selectpicker"
                    data-style="btn-white btn-lg"
                    data-width="100%"
                    data-live-search="true"
                    title="Select Job Type"
                  >
                    <option>Part Time</option>
                    <option>Full Time</option>
                  </select>
                </div>
                <div class="col-12 col-sm-6 col-md-6 col-lg-3 mb-4 mb-lg-0">
                  <button
                    type="submit"
                    class="btn btn-primary btn-lg btn-block text-white btn-search"
                  >
                    <span class="icon-search icon mr-2"></span>Search Job
                  </button>
                </div>
              </div>
              <div class="row">
                <div class="col-md-12 popular-keywords">
                  <h3>Trending Keywords:</h3>
                  <ul class="keywords list-unstyled m-0 p-0">
                    <li>
                      <a href="#" class="">
                        UI Designer
                      </a>
                    </li>
                    <li>
                      <a href="#" class="">
                        Python
                      </a>
                    </li>
                    <li>
                      <a href="#" class="">
                        Developer
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
    <Footer/>
    </>
    
  );
};

export default Home;
