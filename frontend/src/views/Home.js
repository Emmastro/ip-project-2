import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <>
      <Navbar />
      <section
        class="home-section section-hero overlay bg-image"
        id="home-section"
      >
        <div class="container">
          <div class="row align-items-center justify-content-center">
            <div class="col-md-12">
              <div class="mb-5 text-center">
                <h1 class="text-white font-weight-bold mb-5">
                  Discover Global Job Trends Through Data Visualization
                </h1>
                <p class="mb-3">
                  Make Informed Decisions and gain valuable insights to shape
                  your career choices and job search strategies.
                </p>
                <p class="mb-3">
                  We source data from reputable government databases,
                  international job portals, and research reports worldwide.
                  Rest assured, our data is regularly updated for accuracy.
                </p>
                <p class="mb-3">
                  We also offer comprehensive documentation and helpful tooltips
                  to assist you in navigating our data and visualizations
                  effectively.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      Add more components here to present the website.
      <Footer />
    </>
  );
};

export default Home;
