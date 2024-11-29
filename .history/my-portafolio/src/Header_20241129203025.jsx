import React from "react";

const Header = () => {
  return (
    <header className="bg-black bg-opacity-90 fixed w-full top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-white">Mi Portafolio</h1>
        <nav className="flex space-x-6">
          <a href="#home" className="hover:text-red-400">Home</a>
          <a href="#skills" className="hover:text-red-400">Skills</a>
          <a href="#projects" className="hover:text-red-400">Proyectos</a>
          <a href="#contact" className="hover:text-red-400">Contacto</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
