import React from "react";

const Proyects = () => {
  const projects = [
    {
      name: "Proyecto 1",
      description: "Landing page responsiva.",
      link: "#",
    },
    {
      name: "Proyecto 2",
      description: "Dashboard interactivo.",
      link: "#",
    },
  ];

  return (
    <section id="projects" className="py-16 bg-dark-blue text-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-8">Proyectos</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition"
            >
              <h3 className="text-xl font-bold mb-2">{project.name}</h3>
              <p className="text-gray-400 mb-4">{project.description}</p>
              <a
                href={project.link}
                className="text-red-500 hover:underline"
              >
                Ver más
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Proyects;
