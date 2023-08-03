import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <>
      <Navbar />
      <div>
        <div className="w-full h-screen bg-[url('../public/hero_1.jpg')] bg-cover bg-no-repeat bg-fixed">
          <div className="bg-black bg-opacity-50 w-full h-screen flex flex-col items-center justify-center text-white">
            <h1 className="font-semibold text-2xl md:text-5xl w-3/4 md:w-1/2 text-center md:tracking-tighter text-white">
              Empowering Careers Worldwide
            </h1>
            <p className="w-3/4 md:w-1/2 text-center mt-8">
              Discover Global Job Trends Through Data Visualization.
            </p>
            <p className="w-3/4 md:w-1/2 text-center">
              We source data from reputable government databases, international
              job portals, and research reports worldwide.
            </p>
            <p className="w-3/4 md:w-1/2 text-center">
              Rest assured, our data is regularly updated for accuracy.
            </p>
            <h1 className=" mt-3 font-thin text-sm w-3/4 md:w-1/2 text-center md:tracking-tighter text-[#F4ECC2]">
              <span className="font-serif">" </span>
              Our Data, Your Confidence.
              <span className="font-serif"> "</span>
            </h1>
          </div>
        </div>

        <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-6 mb-12 lg:px-24 mt-10">
          <div className="p-3">
            <img src="../images/call.png" width={300} height={300} />
          </div>
          <div className="p-3">
            <h2 className="text-2xl py-3">Find Your Job</h2>
            <p className="text-zinc-500 mb-3">
              Search for job data based on keywords, location, industry, or
              salary range. Filter the results to match your preferences.
            </p>
            <p className="text-zinc-500 mb-4">
              We offer comprehensive documentation and helpful tooltips to
              assist you in navigating our data and visualizations effectively.
            </p>
            <a
              href="/job-categories"
              className="rounded w-2/5 md:w-1/5 p-2 text-[#F4ECC2] text-center my-6 bg-gray-900"
            >
              Explore Data
            </a>
          </div>
        </div>

        <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-6 mb-12 lg:px-24">
          <div className="p-3">
            <img src="../images/chooseus.jpg" width={500} height={500} />
          </div>
          <div className="p-3">
            <h2 className="text-2xl pb-3">Why Choose Us</h2>
            <div className="p-3 mb-3 bg-[#F4ECC2] border rounded transition-all ease-in-out">
              <p>
                1. Make Informed Decisions: Gain valuable insights to shape your
                career choices and job search strategies.
              </p>
            </div>
            <div className="p-3 mb-3 bg-[#F4ECC2] border rounded transition-all ease-in-out">
              <p>
                2. Stay Ahead of the Curve: Understand global job trends and
                stay competitive in the evolving job market.
              </p>
            </div>
            <div className="p-3 bg-[#F4ECC2] border rounded transition-all ease-in-out">
              <p>
                3. Business Advantage: Leverage data to make informed hiring
                decisions and enhance workforce planning.
              </p>
            </div>
          </div>
        </div>

        <div className="lg:px-24">
          <p className="py-3 text-black text-2xl">
            Read Exciting Blogs From The Team
          </p>

          <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
            <div className="p-3 border rounded transition-all ease-in-out">
              <img src="../images/learning.jpeg" width={500} height={500} />
              <h1 className="text-sm font-semibold text-zinc-500 mt-3 mb-1">
                Benson Mugure, 20 July 2023
              </h1>
              <h2 className="text-sm font-semibold">Learning</h2>
              <p className="font-light">
                Various ways of learning to achive desired skills
              </p>
            </div>
            <div className="p-3 border rounded transition-all ease-in-out">
              <img src="../images/writing.jpeg" width={500} height={500} />
              <h1 className="text-sm font-semibold text-zinc-500 mt-3 mb-1">
                Emmanuel Murairi, 24 July 2023
              </h1>
              <h2 className="text-sm font-semibold">Writing</h2>
              <p className="font-light">How to write an effective blog</p>
            </div>
            <div className="p-3 border rounded transition-all ease-in-out">
              <img src="../images/working.jpeg" width={500} height={500} />
              <h1 className="text-sm font-semibold text-zinc-500 mt-3 mb-1">
                Josephine Ekhator, 27 July 2023
              </h1>
              <h2 className="text-sm font-semibold">Working in IT industry</h2>
              <p className="font-light">
                How to work effectively and survive in the IT sector
              </p>
            </div>
            <a
              href="/blog"
              className="flex justify-between items-center relative rounded h-15 w-32 p-2 text-[#F4ECC2] text-center bg-gray-900"
            >
              <div>Go To Blogs</div>
              <svg
                className="text-[#F4ECC2] w-5"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-2 h-2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5"
                />
              </svg>
            </a>
          </div>
        </div>

        <div className="bg-gray-900 text-center py-5">
          <h1 className="font-semibold text-2xl md:tracking-tighter text-[#F4ECC2] mb-4">
            Specification for Project
          </h1>
          <a
            target="_blank"
            href="https://docs.google.com/document/d/1mH4bEU1CJ1g4PLbdHQJjLOzVyRpWS9GGTYvfDQJSNq4/edit"
            className="rounded h-10 w-48 p-2 bg-[#F4ECC2] text-center my-6 text-black"
          >
            Link to PDF
          </a>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
