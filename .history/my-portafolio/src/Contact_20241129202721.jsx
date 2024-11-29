import React from "react";

const Contact = () => {
  return (
    <section
      id="contact"
      className="bg-gradient-to-r from-purple-500 to-blue-500 text-white p-12 flex flex-col items-center"
    >
      <h3 className="text-3xl font-bold mb-6">Contáctame</h3>
      <form className="bg-white text-gray-800 p-6 rounded-lg shadow-lg max-w-md w-full">
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-600"
          >
            Nombre
          </label>
          <input
            id="name"
            type="text"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
            placeholder="Tu nombre"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-600"
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
            placeholder="Tu email"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="message"
            className="block text-sm font-medium text-gray-600"
          >
            Mensaje
          </label>
          <textarea
            id="message"
            rows="4"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
            placeholder="Escribe tu mensaje"
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-lg shadow-md hover:bg-blue-600 transition"
        >
          Enviar
        </button>
      </form>
    </section>
  );
};

export default Contact;
