import React from "react";
import HeroImage from "../assets/mogImage.jpg";
import { MdKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 pt-12 md:flex-row md:justify-between">
        <div className="flex flex-col justify-center h-full mt-24">
          <h1 className="text-4xl sm:text-7xl font-bold text-white">
            I'm a full stack developer
          </h1>
          <p className="text-gray-500 py-4 max-w-md">
            I'm a passionate software developer who always looks to develop his
            soft and technical skills through solving challenges and learning
            new tricks to build up his knowledge and experiences.
            <br />
            I'm starting my new career in coding as a JavaScript fullstack
            developer after graduating from Hack Your Future 9 months bootcamp
            on January 2022.
          </p>
          <div>
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>
        <div>
          <img
            className="rounded-2xl mx-auto w-3/5 md:w-2/3"
            src={HeroImage}
            alt="hero"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
