import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const MapExp = () => {
  return (
    <div>
      <Navbar />
      <div className="w-full lg:h-screen  bg-[url('../public/Big-Data-Analyticsq.jpg')] bg-cover bg-no-repeat bg-fixed relative">
        <div className="grid grid-cols-1 lg:grid-cols-1 mb-12 lg:absolute lg:top-[25%] text-center lg:translate-x-[-50%] lg:left-[50%] lg:w-4/5 pt-48 lg:pt-0 pb-16 lg:pb-0">
          <div className="bg-[#F4ECC2] lg:h-[23em] w-4/5 mx-auto lg:w-[20em] p-3 border rounded transition-all ease-in-out">
            <h1 className="text-sm font-semibold py-4">World Map</h1>
            <p className="font-light">
              This map has plots of where the different job openings are in the
              world.
            </p>
            <p className="font-light py-1">
              You can use it to decide where to live and work
            </p>
            <p>
              In a world where data isn't just numbers but stories waiting to be
              heard, your career journey transforms into a symphony of insights.
              Each visualization page is a portal, an exploration that empowers
              you to make informed decisions and craft your path to success.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-gray-900 lg:px-24 py-10">
        <div className="bg-white p-10 rounded shadow">
          <h1 className="text-lg font-semibold pb-3">
            Navigating Data and Unleashing Insights: A Guide to Data Sourcing,
            Visualization, and API Mastery
          </h1>
          <p className="font-bold mt-2">Data Sourcing:</p>
          <p className="font-light mb-4 leading-8">
            The Jobs on Maps visualization taps into the pulse of the Adzuna
            API, sourcing a dynamic array of job opportunities spanning the
            globe. This API breathes life into geographical coordinates,
            creating a map that's alive with possibilities.
          </p>
          <p className="font-bold">Data Content and Structure:</p>
          <p className="font-light leading-8">
            The Adzuna API opens the door to a world of opportunities. The
            dataset encompasses diverse job titles, the companies offering them,
            and their precise geographical coordinates. This amalgamation of
            information paints a vivid picture of global job prospects.
          </p>
          <p className="font-bold mt-2">API Access:</p>
          <p className="font-light mb-4 leadeing-8">
            Your exclusive key to this world of opportunities is the Adzuna API
            key. Armed with this, you unlock the gateway to comprehensive job
            data, complete with coordinates, to infuse your map with dynamic
            markers.
          </p>
          <p className="font-bold">Execution of Visualization Techniques:</p>
          <ul className="font-light py-1 list-decimal list-inside">
            <li>
              Embark on your journey by typing in your dream job, the ignition
              to your global exploration.
            </li>
            <li>
              Leverage the prowess of React components, carefully crafted to
              converse with the Adzuna API. As you query the API, you conjure
              job opportunities and their geographical coordinates from around
              the world.
            </li>
            <li>
              The stage is set for Google Maps to shine. A canvas of boundless
              opportunities unfurls, each marker representing a door to a unique
              career possibility. A map that's more than a map—it's a treasure
              map of your dreams.
            </li>
            <li>
              But the real wonder lies in a click. Engage with the markers, and
              a world of data emerges. The markers aren't just pins; they're
              portals to job details, offering glimpses into your potential
              future.
            </li>
          </ul>
        </div>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <a
        href="/mapexp"
        className="rounded w-2/5 md:w-1/5 p-2 text-[#F4ECC2] text-center my-6 bg-gray-900"
      >
        Learn More
      </a>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <Footer />
    </div>
  );
};

export default MapExp;
