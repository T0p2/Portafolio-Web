import React from "react";

const Skills = () => {
  const skills = ["React", "Node.js", "Tailwind CSS", "JavaScript", "SQL", "Git"];

  return (
    <section id="skills" className="py-16 bg-gray-900 text-white">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">Habilidades</h2>
        <p className="text-gray-400 mb-6">
          Estas son algunas de las tecnologías con las que trabajo:
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-gray-800 py-4 px-6 rounded-lg shadow-md hover:shadow-lg transition"
            >
              <p className="text-lg font-medium">{skill}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
