import React from "react";

const Projects = () => {
  const projects = [
    { title: "Proyecto 1", description: "Descripción del proyecto 1." },
    { title: "Proyecto 2", description: "Descripción del proyecto 2." },
    { title: "Proyecto 3", description: "Descripción del proyecto 3." },
  ];

  return (
    <div
      className="relative bg-gradient-to-b from-gray-800 to-black text-white py-20"
      id="projects"
    >
      <div className="max-w-6xl mx-auto px-6">
        <h2
          className="text-4xl font-bold text-center mb-8"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          Proyectos
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300"
              data-aos="flip-left"
              data-aos-delay={`${index * 200}`}
            >
              <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
              <p className="text-gray-300">{project.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Wave separator invertido */}
      <div className="relative mt-16">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          className="w-full h-40"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <path
            fill="#1A202C"
            fillOpacity="1"
            d="M0,160L40,149.3C80,139,160,117,240,133.3C320
