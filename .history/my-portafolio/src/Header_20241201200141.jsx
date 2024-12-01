import React from "react";
import { Link } from "react-scroll";

const Header = () => {
  return (
    <nav className="fixed top-0 w-full bg-gray-900 text-white py-9 shadow-md z-20">
      <ul className="flex justify-center space-x-8">
        <li>
          <Link
            to="home"
            smooth={true}
            duration={500}
            className="cursor-pointer hover:text-red-500 transition"
          >
            Inicio
          </Link>
        </li>
        <li>
          <Link
            to="about-me"
            smooth={true}
            duration={500}
            className="cursor-pointer hover:text-red-500 transition"
          >
            AboutMe
          </Link>
        </li>
        <li>
          <Link
            to="skills"
            smooth={true}
            duration={500}
            className="cursor-pointer hover:text-red-500 transition"
          >
            Habilidades
          </Link>
        </li>
        <li>
          <Link
            to="projects"
            smooth={true}
            duration={500}
            className="cursor-pointer hover:text-red-500 transition"
          >
            Proyectos
          </Link>
        </li>
        <li>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            className="cursor-pointer hover:text-red-500 transition"
          >
            Contacto
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
