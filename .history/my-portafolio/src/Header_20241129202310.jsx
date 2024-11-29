import React from 'react'
import './Header.css'

export default function Header() {
  const Header = () => {
    return (
      <header className="bg-blue-500 text-white p-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Mi Portafolio</h1>
        <nav className="space-x-4">
          <a href="#about" className="hover:text-gray-300">About</a>
          <a href="#projects" className="hover:text-gray-300">Projects</a>
          <a href="#contact" className="hover:text-gray-300">Contact</a>
        </nav>
      </header>
    );
  };

}
