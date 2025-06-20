'use client';

import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { label: "Inicio", href: "/" },
    { label: "Nosotros", href: "#nosotros" },
    { label: "Servicios", href: "#servicios" },
    { label: "Contacto", href: "/contacto" },
  ];

  return (
    <header className="w-full bg-[#05A4C0] text-white z-50 relative ">
      <div className="max-w-7xl mx-auto flex justify-between items-center py-4 px-4 relative">
        <h1 className="text-2xl font-light animate-pulse">
          Soluciones Tecnológicas
        </h1>

        {/* Botón hamburguesa */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden flex flex-col justify-between w-6 h-6 focus:outline-none"
          aria-label="Toggle menu"
        >
          <span className={`block h-0.5 w-full bg-white transform transition duration-300 ease-in-out ${isOpen ? "rotate-45 translate-y-1.5" : ""}`} />
          <span className={`block h-0.5 w-full bg-white transition duration-300 ease-in-out ${isOpen ? "opacity-0" : "opacity-100"}`} />
          <span className={`block h-0.5 w-full bg-white transform transition duration-300 ease-in-out ${isOpen ? "-rotate-45 -translate-y-4" : ""}`} />
        </button>

        {/* Navegación desktop */}
        <nav className="hidden md:flex space-x-8 text-base font-semibold">
          {menuItems.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className="relative inline-block transition duration-300 ease-in-out hover:text-[#4572a5]"
            >
              {item.label}
              <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-[#1c608d] scale-x-0 hover:scale-x-100 origin-center transition-transform duration-300"></span>
            </a>
          ))}
        </nav>

        {/* Menú móvil */}
        {isOpen && (
          <nav className="absolute top-full left-0 w-full bg-[#05A4C0] flex flex-col space-y-4 py-4 px-6 md:hidden ">
            {menuItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="text-white font-semibold text-lg"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}
