import React from "react";

const Contact = () => {
  return (
    <div
      className="bg-gradient-to-t from-gray-800 to-black text-white py-20"
      id="contact"
    >
      <div className="max-w-4xl mx-auto px-6">
        <h2
          className="text-4xl font-bold text-center mb-12"
          data-aos="fade-right"
          data-aos-duration="1000"
        >
          Contáctame
        </h2>
        <form
          className="bg-gray-900 p-8 rounded-lg shadow-lg"
          data-aos="fade-in"
          data-aos-duration="1200"
        >
          <div className="mb-6">
            <label className="block text-gray-300 mb-2">Nombre</label>
            <input
              type="text"
              className="w-full p-3 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-red-500 shadow-md"
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-300 mb-2">Email</label>
            <input
              type="email"
              className="w-full p-3 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-red-500 shadow-md"
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-300 mb-2">Mensaje</label>
            <textarea
              className="w-full p-3 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-red-500 shadow-md"
              rows="4"
            ></textarea>
          </div>
          <button className="bg-red-500 py-3 px-6 rounded-lg hover:bg-red-600 transition duration-300 transform hover:scale-110 shadow-lg hover:shadow-xl">
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
