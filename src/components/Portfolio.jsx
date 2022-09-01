import React from "react";
import HYFscreen from "../assets/portfolio/HYF-screenshot.png";
import weather from "../assets/portfolio/weather.png";
import dash from "../assets/portfolio/dashboard.png";
import port from "../assets/portfolio/portf.png";
import food from "../assets/portfolio/Recipe.png";
import crypto from "../assets/portfolio/crypto.png";
import Furni from "../assets/portfolio/Furni.png";
import warehouse from "../assets/portfolio/warehouse.png";

const portfolios = [
  {
    id: 1,
    src: HYFscreen,
    web: "https://hyf-connect.herokuapp.com/pages/homepage/homepage.html",
    code: "https://github.com/Moamin-AbuEwaida/hyf-connect",
  },
  {
    id: 2,
    src: port,
    web: "https://moamin-abuewaida.github.io/portfolio-resp/",
    code: "https://github.com/Moamin-AbuEwaida/portfolio-resp",
  },
  {
    id: 3,
    src: dash,
    web: "https://moamin-abuewaida.github.io/admin-dashboard/",
    code: "https://github.com/Moamin-AbuEwaida/admin-dashboard",
  },
  {
    id: 4,
    src: food,
    web: "https://food-rcp.herokuapp.com/",
    code: "https://github.com/Moamin-AbuEwaida/Food-Recipe",
  },
  {
    id: 5,
    src: weather,
    web: "https://moamin-abuewaida.github.io/react-weather-platform/",
    code: "https://github.com/Moamin-AbuEwaida/react-weather-platform",
  },
  {
    id: 6,
    src: crypto,
    web: "https://moamin-abuewaida.github.io/cryptocurrancy-tracker/",
    code: "https://github.com/Moamin-AbuEwaida/cryptocurrancy-tracker",
  },
  {
    id: 7,
    src: warehouse,
    web: "https://moamin-abuewaida.github.io/data-warehouse-platform/",
    code: "https://github.com/Moamin-AbuEwaida/data-warehouse-platform",
  },
  {
    id: 8,
    src: Furni,
    web: "https://moamin-abuewaida.github.io/furnitures-web-platform/",
    code: "https://github.com/Moamin-AbuEwaida/furnitures-web-platform",
  },
];

const Portfolio = () => {
  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-ful h-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full md:pt-60">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work here</p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, web, code }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                className="rounded-md duration-200 hover:scale-105"
                src={src}
                alt=""
              />
              <div className="flex items-center justify-center">
                <button
                  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
                  onClick={() => window.open(web, "_blank")}
                >
                  Demo
                </button>
                <button
                  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
                  onClick={() => window.open(code, "_blank")}
                >
                  Code
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
