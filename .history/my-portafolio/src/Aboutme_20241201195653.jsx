import React from 'react'


const Aboutme = () => {
  return (
    <div className="bg-gray-900 text-white py-20" id="about-me">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Imagen */}
        <div
          className="flex justify-center"
          data-aos="fade-right"
          data-aos-duration="1000"
        >
          <img
            src="https://via.placeholder.com/300"
            alt="Your Name"
            className="rounded-lg shadow-lg"
          />
        </div>

        {/* Texto */}
        <div data-aos="fade-left" data-aos-duration="1000">
          <h2 className="text-4xl font-bold mb-6 text-red-500">Discover</h2>
          <h3 className="text-3xl font-bold mb-4">About Me</h3>
          <p className="text-gray-300 mb-6">
            My name is [Your Name]. I'm a passionate and dedicated [Your Role]
            based in [Your Location]. With [X years] of experience in [Your
            Field], I specialize in creating [Your Specialty].
          </p>
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div>
              <p><span className="font-bold">Name:</span> [Your Name]</p>
              <p><span className="font-bold">Phone:</span> +123 456 789</p>
              <p><span className="font-bold">Experience:</span> X Years</p>
              <p><span className="font-bold">Skype:</span> your.skype</p>
            </div>
            <div>
              <p><span className="font-bold">Age:</span> X</p>
              <p><span className="font-bold">Address:</span> Your Address</p>
              <p><span className="font-bold">Freelance:</span> Available</p>
              <p><span className="font-bold">Dribbble:</span> your.dribbble</p>
            </div>
          </div>
          <button className="bg-red-500 py-2 px-6 rounded-lg hover:bg-red-600 transition duration-300 transform hover:scale-105">
            Download CV
          </button>
        </div>
      </div>
    </div>
  );
};

export default Aboutme;
