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
                  Empowering Careers Worldwide
                </h1>
                <p class="mb-3">
                  Discover Global Job Trends Through Data Visualization.
                </p>
                <p class="mb-3">
                  We source data from reputable government databases,
                  international job portals, and research reports worldwide.
                </p>
                <p>Rest assured, our data is regularly updated for accuracy.</p>
                <p class="mt-5">"Our Data, Your Confidence."</p>
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
