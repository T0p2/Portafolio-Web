import React from "react";

const Projects = () => {
  const projects = [
    {
      title: "Proyecto 1",
      description: "Descripción del proyecto 1.",
      link: "#",
    },
    {
      title: "Proyecto 2",
      description: "Descripción del proyecto 2.",
      link: "#",
    },
    {
      title: "Proyecto 3",
      description: "Descripción del proyecto 3.",
      link: "#",
    },
  ];

  return (
    <section
      id="projects"
      className="bg-white text-gray-800 p-12 grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
    >
      <h3 className="col-span-full text-3xl font-bold mb-6">Mis Proyectos</h3>
      {projects.map((project, index) => (
        <div
          key={index}
          className="bg-gray-100 p-6 rounded-lg shadow-md hover:shadow-lg transition"
        >
          <h4 className="text-xl font-semibold mb-4">{project.title}</h4>
          <p className="text-gray-600 mb-4">{project.description}</p>
          <a
            href={project.link}
            className="text-blue-500 hover:underline font-medium"
          >
            Ver más
          </a>
        </div>
      ))}
    </section>
  );
};

export default Projects;
