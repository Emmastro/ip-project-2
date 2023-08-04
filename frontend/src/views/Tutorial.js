import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Tutorial = () => {
  const [showDefault, setShowDefault] = useState(true);
  const [showGoogle, setShowGoogle] = useState(false);

  const toggleContent1 = () => {
    setShowDefault(true);
    setShowGoogle(false);
  };

  const toggleContent2 = () => {
    setShowDefault(false);
    setShowGoogle(true);
  };
  return (
    <div>
      <Navbar />
      <div className="w-full lg:h-screen  bg-[url('../public/Big-Data-Analyticsq.jpg')] bg-cover bg-no-repeat bg-fixed relative">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12 lg:absolute lg:top-[25%] text-center lg:translate-x-[-50%] lg:left-[50%] lg:w-4/5 pt-48 lg:pt-0 pb-16 lg:pb-0">
          <div className="bg-[#F4ECC2] lg:h-[23em] w-4/5 mx-auto lg:w-[20em] p-3 border rounded transition-all ease-in-out">
            <h1 className="text-sm font-semibold py-2">
              How to use the Salary History Page
            </h1>
            <p className="font-bold py-1">
              This shows the average salary in a certain country over the years
            </p>
            <ul className="font-light py-1 list-decimal list-inside">
              <li>Select the country </li>
              <li>Select a job category</li>
              <li>A line chart and bar chart are shown.</li>
              <li>
                The line chart shows the salary trends of that job over the year
              </li>
              <li>
                The bar chart shows comparison of mean salary and maximum
                salaries
              </li>
              <li>Charts can be interacted with by clicking on them.</li>
            </ul>
          </div>
          <div className="bg-[#F4ECC2] lg:h-[23em] w-4/5 mx-auto lg:w-[20em] p-3 border rounded transition-all ease-in-out">
            <h1 className="text-sm font-semibold py-2">
              How to use the Job Categories Page
            </h1>
            <p className="font-bold py-1">
              This shows the number of jobs in each category with it's average
              salary
            </p>
            <ul className="font-light py-1 list-decimal list-inside">
              <li>Select the country </li>
              <li>Click on search job button</li>
              <li>A pie chart and bar chart are shows.</li>
              <li>The pie chart shows the number of jobs in each category</li>
              <li>The bar chart shows the average salary in each category</li>
              <li>Charts can be interacted with by clicking on them.</li>
            </ul>
          </div>
          <div className="bg-[#F4ECC2] lg:h-[23em] w-4/5 mx-auto lg:w-[20em] p-3 border rounded transition-all ease-in-out">
            <h1 className="text-sm font-semibold py-4">
              How to use the Jobs on Map page
            </h1>
            <p className="font-light">
              This page shows the location of various jobs worldwide
            </p>
            <ul className="font-light py-1 list-decimal list-inside">
              <li>Search for a job </li>
              <li>The result of tbe search will be shown on the map</li>
              <li>
                This shows the markers indicating the location of the job
                worldide
              </li>
              <li>Details of the job are shown by clicking on the markers</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-gray-900 py-10 md:mt-auto">
        <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="flex justify-center">
            <button
              className="hover:bg-black cursor-pointer text-white font-semibold py-2 px-4 mr-4 outline outline-offset-2 outline-white-500"
              onClick={toggleContent1}
            >
              Using Adzuna API
            </button>
          </div>
          <div className="flex justify-center">
            <button
              className="hover:bg-black cursor-pointer text-white font-semibold py-2 px-4 mr-4 outline outline-offset-2 outline-white-500"
              onClick={toggleContent2}
            >
              Using Google Maps API
            </button>
          </div>
        </div>

        <div className="mt-8 lg:px-24">
          {showDefault && (
            <div className="bg-white p-10 rounded shadow">
              <h2 className="text-lg font-semibold">About Azuna API</h2>
              <p className="font-light leading-8">
                The Adzuna API is used in this application to enhance the job
                search experience for users. This is achieved by leveraging
                Adzuna's comprehensive job listing database structure, real-time
                information updates, advanced search filtration systems,
                geolocation services, personalised recommendations, and data
                visualisation capabilities. Incorporating the API alongside
                React enables the creation of a robust and a high-performing job
                search platform that effectively addresses the requirements of
                job seekers on a global scale.
              </p>
              <h2 className="text-lg font-semibold mt-10">API Sourcing</h2>
              <p className="font-bold mt-2">Acquiring Adzuna API Key:</p>
              <p className="font-light mb-4 leading-8">
                To empower our website with the latest and most relevant job
                market data, we initiated the process by registering for an
                Adzuna API key. This key granted us access to Adzuna's
                comprehensive job data repositories, enabling us to provide
                users with up-to-date insights into the global job landscape.
              </p>
              <p className="font-bold">Exploring API Endpoints and Formats:</p>
              <p className="font-light leading-8">
                Our integration journey began with a meticulous exploration of
                the available Adzuna API endpoints and data formats. This
                understanding was paramount in crafting a robust and efficient
                mechanism to extract, process, and present the job data to our
                users.
              </p>

              <h2 className="text-lg font-semibold mt-10">API Processing</h2>
              <p className="font-bold mt-2">Direct Frontend Interaction:</p>
              <p className="font-light mb-4 leadeing-8">
                Leveraging the power of React, we seamlessly interacted with the
                Adzuna API directly from the frontend. This approach ensured
                that users experience the most current job market trends as they
                explore our website. The data extracted from the API was
                harnessed to create dynamic and insightful visualizations that
                empower users with a clear understanding of global job trends.
              </p>
              <p className="font-bold">Optimizing API Requests:</p>
              <p className="font-light leading-8">
                Understanding the limitations of API request thresholds,
                especially during development using the free plan, we
                implemented a strategic approach. We cached the API responses as
                JSON files, enabling us to thoroughly test and refine our
                visualizations without concerns about hitting the API request
                quota.
              </p>

              <h2 className="text-lg font-semibold mt-10">API Usage</h2>
              <p className="font-bold mt-2">Real-time Job Insights:</p>
              <p className="font-light mb-4 leadeing-8">
                The Adzuna API data became the foundation for our website's
                real-time job insights. By adeptly integrating the API data, we
                developed interactive visualizations that allow users to explore
                and comprehend the most recent job trends across various
                industries and regions.
              </p>
              <p className="font-bold">Customizable User Experience:</p>
              <p className="font-light leading-8 mb-4">
                Our backend, powered by Django, expertly managed the API data.
                We seamlessly integrated Django views and serializers to ensure
                efficient data processing. This facilitated the creation of
                well-structured API endpoints that became the data source for
                various sections of our frontend application. Users could
                personalize their experience by searching, filtering, and
                visualizing job data in ways that catered to their specific
                preferences.
              </p>
              <p className="font-bold">User-Centric Approach:</p>
              <p className="font-light leading-8 mb-4">
                Through meticulous integration and strategic utilization of the
                Adzuna API, our website transformed into a user-centric
                platform. By providing users with accurate, real-time job
                insights and the ability to interact with and understand the
                data, we empower them to make informed career decisions that
                align with their goals and aspirations.
              </p>

              <p className="font-light py-3">
                In summary, our website harnesses the power of the Adzuna API to
                deliver a dynamic, interactive, and personalized job market
                exploration experience. By combining the latest job data with
                user-friendly features, we enable users to navigate the
                complexities of the global job landscape with confidence.
              </p>
            </div>
          )}{" "}
          {showGoogle && (
            <div className="bg-[#F4ECC2] p-4 rounded shadow">
              <h2 className="text-lg font-semibold">About Google Maps API</h2>
              <p className="text-zinc-500 leading-8">
                TIt is a collection of Google-provided application programming
                interfaces (APIs) that permit developers to incorporate Google
                Maps into websites and applications. It enables developers to
                create interactive web applications with feature-rich maps by
                providing access to abundant geospatial data, mapping features,
                and location-based services.
              </p>

              <h2 className="text-lg font-semibold mt-10">
                API Integration: Google Maps API
              </h2>
              <p className="font-bold mt-2">Acquiring Google Maps API Key:</p>
              <p className="font-light mb-4 leading-8">
                Our journey to incorporate interactive job data visualization on
                maps began by obtaining a Google Maps API Key. This pivotal step
                unlocked the doors to Google Cloud Services (GCP), granting us
                access to a wealth of geospatial capabilities.
              </p>
              <p className="font-bold">Exploring Official Documentation:</p>
              <p className="font-light leading-8">
                To ensure a robust and informed integration process, we delved
                into the comprehensive official API documentation provided by
                Google Cloud Services. This comprehensive understanding of the
                available functionalities and features enabled us to make the
                most of the Google Maps API.
              </p>

              <h2 className="text-lg font-semibold mt-10">
                Implementing React Components:
              </h2>
              <p className="font-bold mt-2">Rendering and Interaction:</p>
              <p className="font-light mb-4 leadeing-8">
                Harnessing the power of React, we meticulously crafted
                purposeful components to seamlessly render and interact with the
                Google Maps API. These components formed the bridge between our
                website's frontend and the dynamic mapping capabilities offered
                by Google Maps.
              </p>

              <h2 className="text-lg font-semibold mt-10">
                API Usage: Visualizing Jobs on Maps
              </h2>
              <p className="font-bold mt-2">Seamless Data Integration:</p>
              <p className="font-light mb-4 leadeing-8">
                Our integration of the Google Maps API transformed the data
                visualization section of our website. By effectively linking the
                API with our job-related data, we seamlessly integrated job
                market insights with geographical information.
              </p>
              <p className="font-bold">Dynamic Mapping Experience:</p>
              <p className="font-light leading-8 mb-4">
                Employing the React components we developed, we were able to
                offer users an engaging and dynamic mapping experience. Job
                data, enriched with geographical coordinates, was presented on
                the map in an intuitive and visually appealing manner.
              </p>
              <p className="font-bold">Empowering Insights:</p>
              <p className="font-light leading-8 mb-4">
                The integration of the Google Maps API infused our
                visualizations with an extra layer of insights. Users could now
                not only explore job trends but also visually comprehend how
                these trends are distributed across various regions. This added
                dimension empowered users with a deeper understanding of the
                global job landscape.
              </p>

              <p className="font-light py-3">
                In summary, the integration of the Google Maps API propelled our
                website to offer more than just data visualization—it enabled us
                to offer data immersion. By merging job-related information with
                geographical context, we provided users with a comprehensive and
                interactive means to explore job opportunities across the world.
                Through the fusion of technology and information, our website
                empowers users to chart their career paths with clarity and
                confidence.
              </p>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Tutorial;
