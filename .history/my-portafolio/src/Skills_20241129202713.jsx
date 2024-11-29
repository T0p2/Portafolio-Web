import React from "react";

const Skills = () => {
  const skills = ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS"];

  return (
    <section id="skills" className="bg-gray-50 text-gray-800 p-12">
      <h3 className="text-3xl font-bold mb-6">Habilidades</h3>
      <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
        {skills.map((skill, index) => (
          <li
            key={index}
            className="bg-blue-100 text-blue-700 p-4 rounded-lg shadow-md text-center font-medium"
          >
            {skill}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;
