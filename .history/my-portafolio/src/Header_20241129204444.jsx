import React from "react";

const Header = () => {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="bg-black text-white py-4 fixed w-full z-10 shadow-lg">
      <div className="container mx-auto flex justify-between items-center px-6">
        <h1 className="text-2xl font-bold">Mi Portafolio</h1>
        <nav className="space-x-4">
          <button
            onClick={() => scrollToSection("home")}
            className="hover:text-red-500 transition duration-300"
          >
            Inicio
          </button>
          <button
            onClick={() => scrollToSection("projects")}
            className="hover:text-red-500 transition duration-300"
          >
            Proyectos
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="hover:text-red-500 transition duration-300"
          >
            Contacto
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
