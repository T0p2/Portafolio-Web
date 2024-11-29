import React from "react";

const Home = () => {
  return (
    <div className="bg-gradient-to-b from-gray-800 to-black text-white py-16" id="home">
  <div className="text-center">
    <h1 className="text-5xl font-bold mb-4" data-aos="fade-up">¡Bienvenido a mi Portafolio!</h1>
    <p className="text-lg text-gray-300 mb-8" data-aos="fade-up" data-aos-delay="200">
      Explora mis proyectos y habilidades.
    </p>
    <button
      className="bg-red-500 text-white px-6 py-3 rounded-full hover:bg-red-600 transition duration-300"
      onClick={() => document.getElementById("contact").scrollIntoView({ behavior: "smooth" })}
    >
      Conóceme
    </button>
  </div>
</div>

  );
};

export default Home;
