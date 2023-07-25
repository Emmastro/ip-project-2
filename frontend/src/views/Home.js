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
                <h1 class="text-white font-weight-bold">
                  Job Data Visualization
                </h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Cupiditate est, consequuntur perferendis.
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
