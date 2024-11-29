import React from "react";

const Skills = () => {
  const skills = ["HTML", "CSS", "JavaScript", "React", "Node.js", "Tailwind CSS"];

  return (
    <>
      <div className="relative bg-gray-900 text-white py-20" id="skills">
        <div className="max-w-6xl mx-auto px-6">
          <h2
            className="text-4xl font-bold text-center mb-8"
            data-aos="fade-down"
            data-aos-duration="1000"
          >
            Habilidades
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="bg-gray-800 p-4 rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transform transition duration-300 text-center"
                data-aos="zoom-in"
                data-aos-delay={`${index * 100}`}
              >
                <p className="text-xl font-semibold">{skill}</p>
              </div>
            ))}
          </div>
        </div>
        {/* Wave separator */}
        <div className="absolute inset-x-0 bottom-0 transform translate-y-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
            className="w-full h-24 text-gray-800"
          >
            <path
              fill="currentColor"
              d="M0,256L30,229.3C60,203,120,149,180,133.3C240,117,300,139,360,138.7C420,139,480,117,540,122.7C600,128,660,160,720,186.7C780,213,840,235,900,218.7C960,203,1020,149,1080,138.7C1140,128,1200,160,1260,165.3C1320,171,1380,149,1410,138.7L1440,128L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"
            ></path>
          </svg>
        </div>
      </div>
    </>
  );
};

export default Skills;
