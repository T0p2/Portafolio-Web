import React from "react";

const Skills = () => {
  const skills = ["HTML", "CSS", "JavaScript", "React", "Node.js", "Tailwind CSS"];

  return (
    <div
      className="bg-gradient-to-b from-gray-900 via-gray-800 to-e text-white py-20"
      id="skills"
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <div className="max-w-6xl mx-auto px-6">
        <h2
          className="text-4xl font-bold text-center mb-12"
          data-aos="fade-down"
          data-aos-duration="1200"
        >
          Habilidades
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transform transition duration-300 text-center"
              data-aos="zoom-in"
              data-aos-delay={`${index * 100}`}
            >
              <p className="text-xl font-semibold hover:text-white transition duration-300">
                {skill}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
