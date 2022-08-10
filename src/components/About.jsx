import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <p className="text-xl mt-20">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos magni
          blanditiis libero dolorem quo voluptatem eum beatae dolores error et
          placeat impedit, hic molestias sed aspernatur rem laudantium,
          explicabo quam. Magnam tempore qui odio odit fugiat similique, debitis
          facilis architecto id? Molestiae quos cum impedit eaque pariatur nulla
          ad iste?
        </p>
        <br />
        <p className="text-xl">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos magni
          blanditiis libero dolorem quo voluptatem eum beatae dolores error et
          placeat impedit, hic molestias sed aspernatur rem laudantium,
          explicabo quam. Magnam tempore qui odio odit fugiat similique, debitis
          facilis architecto id? Molestiae quos cum impedit eaque pariatur nulla
          ad iste?
        </p>
      </div>
    </div>
  );
};

export default About;
