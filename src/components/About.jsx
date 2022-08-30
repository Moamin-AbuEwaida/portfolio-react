import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-full bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <p className="text-xl mt-10">
          Born and raised in Palestine-Gaza in 1983, moved to Egypt to study
          Telecommunication Engineering between 2001-2007, then started to build
          my professional career in UAE-Dubai as electrical and
          telecommunication engineering between 2007 and 2013. I moved back to
          Palestine to work in an INGO in operating and managing a tech hub and
          coworking space as a Community Development and Engagement Manager
          between 2014 and 2018.
        </p>
        <br />
        <p className="text-xl">
          Living in Belgium-Brussels since 2019. In 2021, I joined Hack Your
          Future coding bootcamp starting my new challenge in learning coding
          and web development. Graduated in January 2022 as a javascript
          fullstack developer who can work with a tech team on building web
          application using agile methodologies and different technologies
        </p>
        <br />
        <p className="text-xl">
          I have more than 10 years experience in engineering and management
          helped me to become an active and productive team member who is always
          looking to collaborate and brainstorm to solve challenges as well as
          build innovative projects.
        </p>
      </div>
    </div>
  );
};

export default About;
