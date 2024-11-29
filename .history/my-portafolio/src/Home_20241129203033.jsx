import React from "react";

const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen bg-dark-blue text-center flex flex-col justify-center items-center px-6"
    >
      <h1 className="text-5xl font-bold mb-4">
        ¡Hola! Soy <span className="text-red-500">Ignacio</span>
      </h1>
      <p className="text-gray-300 text-lg max-w-3xl">
        Desarrollador Full Stack especializado en crear aplicaciones modernas y funcionales.
      </p>
      <a
        href="#projects"
        className="mt-8 bg-red-500 text-white py-3 px-6 rounded-lg shadow hover:bg-red-600 transition"
      >
        Ver Mis Proyectos
      </a>
    </section>
  );
};

export default Home;
