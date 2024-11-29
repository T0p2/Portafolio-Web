import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="py-16 bg-black text-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">Contáctame</h2>
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Nombre"
            className="w-full bg-gray-800 text-white py-2 px-4 rounded-lg"
          />
          <input
            type="email"
            placeholder="Correo Electrónico"
            className="w-full bg-gray-800 text-white py-2 px-4 rounded-lg"
          />
          <textarea
            placeholder="Mensaje"
            rows="4"
            className="w-full bg-gray-800 text-white py-2 px-4 rounded-lg"
          ></textarea>
          <button
            type="submit"
            className="bg-red-500 py-3 px-6 rounded-lg text-white hover:bg-red-600 transition"
          >
            Enviar
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
