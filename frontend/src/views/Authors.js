import React, { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Authors() {
  const teams = [
    {
      url: "../images/Deb.jpg",
      name: "Deborah Ama Paintsil",
      interest:
        "I love UI/UX desiging of an application before it is developed. I also found a keen interent in Artifical Intelligence and Augmented Reality and would love to explore more into these fields.",
      contribution:
        "I contributed to both low-fidelity and high-fidelity website design. Additionally, I led the development of the team's page for the website application and played a key role in writing and ensuring the overall quality and clarity of the group report.",
      others:
        "I want to become an advocate for bridging the technology gender gap by working with schools and community organizations to provide Computing workshops and educational programs for the girl child.",
    },
    {
      url: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
      name: "Benson Mugure",
      interest:
        "ILorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
      contribution:
        "ILorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
      others:
        "ILorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    },
    {
      url: "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
      name: "Emmanuel Murairi",
      interest:
        "ILorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
      contribution:
        "ILorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
      others:
        "ILorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    },

    {
      url: "./images/jossy.jpg",
      name: "Josephine Nation Ekhator",
      interest:
        "Teaching computing is my passion, as it allows me to share knowledge and empower students with valuable skills. I envision myself as an educator who fosters creativity, problem-solving, and a passion for learning.",
      contribution:
        "Helped in sourcing out the API's for the job search. Additionally, I played a crucial part in crafting the group report, ensuring its clarity, organization, and overall quality.",
      others:
        "Exploring diverse cultures and understanding their significance is a source of great fascination for me. I appreciate how culture shapes societies, influences art, and fosters unique perspectives on life.",
    },
    {
      url: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
      name: "Justus Chemirmir",
      interest:
        "ILorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
      contribution:
        "ILorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
      others:
        "ILorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    },
    {
      url: "https://media.istockphoto.com/id/1420730022/photo/colorful-powder-explode-on-black-background-captured-in-high-speed.webp?b=1&s=170667a&w=0&k=20&c=uHPHMniD2I0DWQfVTrbRMRVQT-JJ4J9ZLxNf7Web9zY=",
      name: "Mussie Teferi",
      interest:
        "ILorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
      contribution:
        "ILorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
      others:
        "ILorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const firstSlide = currentIndex === 0;
    const newIndex = firstSlide ? teams.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const lastSlide = currentIndex === teams.length - 1;
    const newIndex = lastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <>
      <Navbar />
      <div>
        <div className="w-full h-screen bg-[url('../public/teams.jpg')] bg-cover bg-no-repeat bg-fixed relative">
          <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8 mb-12 absolute top-[70%] text-center translate-x-[-50%] left-[50%] w-4/5">
            <div className="bg-[#F4ECC2] h-[23em] w-[20em] p-3 hover:shadow-2xl hover:scale-105 cursor-pointer border rounded hover:border-none transition-all ease-in-out">
              <h1 className="text-sm font-semibold py-4 text-3xl">
                Our Approach
              </h1>
              <p className="font-light">
                We provide a comprehensive platform that empowers users with
                valuable job-related data and visualizations.
              </p>
              <p className="font-light">
                This website will focus on the following key principles:
              </p>
              <ul className="font-light py-1 leading-8">
                <li>Data Diversity</li>
                <li>Data Visualization Emphasis</li>
                <li>Data Accuracy and Timeliness</li>
              </ul>
            </div>
            <div className="bg-[#F4ECC2] h-[23em] w-[20em] p-3 hover:shadow-2xl hover:scale-105 cursor-pointer border rounded hover:border-none transition-all ease-in-out">
              <h1 className="text-sm font-semibold py-4 text-3xl">
                Our Mission
              </h1>
              <p className="font-light">
                This is to democratize job-related data and empower individuals,
                businesses, and policymakers with valuable insights to make
                informed decisions in the global job market. By providing access
                to comprehensive and visually engaging data, the website aims to
                bridge the information gap and promote greater transparency in
                the world of work.
              </p>
            </div>
            <div className="bg-[#F4ECC2] h-[23em] w-[20em]  p-3 hover:shadow-2xl hover:scale-105 cursor-pointer border rounded hover:border-none transition-all ease-in-out">
              <h1 className="text-sm font-semibold py-4 text-3xl">
                Our Service
              </h1>
              <p className="font-light">
                The website will offer a range of services to fulfill its
                mission and deliver a valuable experience to users:
              </p>
              <ul className="font-light py-1 leading-8">
                <li>Data Aggregation</li>
                <li>Data Visualization</li>
                <li>Eductaional Content</li>
                <li>Search and Filtering</li>
                <li>Feedback Mechanism</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center max-w-[800px] h-[800px] w-full mx-auto mt-48 py-10 px-4 relative group">
          <h1 className="mb-5 text-xl w-2/3 md:w-full text-center font-medium md:font-normal md:text-3xl">
            Meet The Team
          </h1>
          <div
            style={{ backgroundImage: `url(${teams[currentIndex].url})` }}
            className="w-[70%] h-[70%] rounded-2xl bg-center bg-cover duration-500"
          ></div>
          <div className="text-center py-4 text-2xl font-bold">
            {teams[currentIndex].name}
          </div>
          {/* Left Arrow */}
          <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-8 text-2xl rounded-full p-1 bg-black/20 text-white cursor-pointer">
            <BsChevronCompactLeft onClick={prevSlide} size={30} />
          </div>
          {/* Right Arrow */}
          <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-8 text-2xl rounded-full p-1 bg-black/20 text-white cursor-pointer">
            <BsChevronCompactRight onClick={nextSlide} size={30} />
          </div>
          <div className="flex top-4 justify-center py-2">
            {teams.map((slide, slideIndex) => (
              <div
                key={slideIndex}
                onClick={() => goToSlide(slideIndex)}
                className="text-2xl cursor-pointer"
              >
                <RxDotFilled />
              </div>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8 mb-12 text-center w-4/5 mx-auto">
          <div>
            <p className="text-black text-2xl">Interest</p>
            <p className="py-4 leading-8">{teams[currentIndex].interest}</p>
          </div>
          <div>
            <p className="text-black text-2xl">Contribution</p>
            <p className="py-4 leading-8">{teams[currentIndex].contribution}</p>
          </div>
          <div>
            <p className="text-black text-2xl">Others</p>
            <p className="py-4 leading-8">{teams[currentIndex].others}</p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Authors;
