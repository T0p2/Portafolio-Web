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

        {/* Wave separator animado */}
        <div className="relative mt-16">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
            className="w-full h-40"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <path
              fill="#1A202C"
              fillOpacity="1"
              d="M0,160L40,165.3C80,171,160,181,240,170.7C320,160,400,128,480,133.3C560,139,640,181,720,192C800,203,880,181,960,160C1040,139,1120,117,1200,117.3C1280,117,1360,139,1400,149.3L1440,160L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
            ></path>
          </svg>
        </div>
      </div>
    </>
  );
};

export default Skills;
