import React from "react";

const Home = () => {
  return (
    <div
      className="bg-gradient-to-b from-gray-800 to-black text-white min-h-screen flex items-center justify-center px-50"
      id="home"
    >
      <div className="text-center space-y-6" data-aos="fade-up" data-aos-duration="1000">
        <h1 className="text-5xl font-bold mb-4" data-aos="fade-down" data-aos-delay="200">
          ¡Bienvenido a mi Portafolio!
        </h1>
        <p className="text-xl text-gray-300 mb-6" data-aos="fade-up" data-aos-delay="400">
          Explora mis proyectos y habilidades.
        </p>
        <button
          className="bg-red-500 text-white py-2 px-6 rounded-lg hover:bg-red-600 transition duration-300 transform hover:scale-105"
          onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
          data-aos="zoom-in"
          data-aos-delay="600"
        >
          Conóceme
        </button>
      </div>
    </div>
  );
};

export default Home;
