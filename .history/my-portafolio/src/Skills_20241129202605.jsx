import React from "react";

const Skills = () => {
  const skills = ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS"];

  return (
    <section className="bg-white text-gray-800 p-8">
      <h3 className="text-3xl font-semibold mb-6">Habilidades</h3>
      <ul className="grid grid-cols-2 gap-4">
        {skills.map((skill, index) => (
          <li
            key={index}
            className="bg-blue-100 text-blue-600 p-3 rounded-lg shadow-md hover:bg-blue-200"
          >
            {skill}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;
