import React, { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Authors() {
  const teams = [
    {
      url: "../images/learning.jpeg",
      interest: "ballow",
    },
    {
      url: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
      interest: "honm",
    },
    {
      url: "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
    },

    {
      url: "https://images.unsplash.com/photo-1488161628813-04466f872be2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=464&q=80",
    },
    {
      url: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
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
              <h1 className="text-sm font-semibold text-zinc-500">
                Our Approach
              </h1>
              <p className="font-light">
                Various ways of learning to achive desired skills
              </p>
            </div>
            <div className="bg-[#F4ECC2] h-[23em] w-[20em] p-3 hover:shadow-2xl hover:scale-105 cursor-pointer border rounded hover:border-none transition-all ease-in-out">
              <h1 className="text-sm font-semibold text-zinc-500">
                Our Mission
              </h1>
              <p className="font-light">How to write an effective blog</p>
            </div>
            <div className="bg-[#F4ECC2] h-[23em] w-[20em]  p-3 hover:shadow-2xl hover:scale-105 cursor-pointer border rounded hover:border-none transition-all ease-in-out">
              <h1 className="text-sm font-semibold text-zinc-500">
                Our Service
              </h1>
              <p className="font-light">
                How to work effectively and survive in the IT sector
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-[800px] h-[700px] w-full mx-auto mt-48 py-16 px-4 relative group">
          <h1 className="text-xl w-2/3 md:w-full text-center font-medium md:font-normal md:text-3xl">
            Meet The Team
          </h1>
          <div
            style={{ backgroundImage: `url(${teams[currentIndex].url})` }}
            className="w-full h-full rounded-2xl bg-center bg-cover duration-500"
          ></div>
          <div>{teams[currentIndex].interest}</div>
          {/* Left Arrow */}
          <div className="hidden group-hover:block absolute top-[55%] -translate-x-0 translate-y-[-50%] left-8 text-2xl rounded-full p-1 bg-black/20 text-black cursor-pointer">
            <BsChevronCompactLeft onClick={prevSlide} size={30} />
          </div>
          {/* Right Arrow */}
          <div className="hidden group-hover:block absolute top-[55%] -translate-x-0 translate-y-[-50%] right-8 text-2xl rounded-full p-1 bg-black/20 text-black cursor-pointer">
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
      </div>
      <Footer />
    </>
  );
}

export default Authors;
