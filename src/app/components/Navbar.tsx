'use client';
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const handleScrollTo = (id: string) => {
    if (pathname !== "/") {
      router.push(`/#${id}`);
    } else {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
    setIsOpen(false);
  };

  const menuItems = [
    { label: "Inicio", href: "/" },
    { label: "Nosotros", id: "nosotros" },
    { label: "Servicios", id: "servicios" },
    { label: "Contacto", href: "/contacto" },
  ];

  return (
    <header className="w-full bg-[#05A4C0] text-white z-50 relative">
      <div className="max-w-7xl mx-auto flex justify-between items-center py-4 px-4 relative">
        <h1 className="text-2xl font-light animate-pulse">
          Soluciones Tecnológicas
        </h1>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden flex flex-col justify-between w-6 h-6 focus:outline-none"
          aria-label="Toggle menu"
        >
          <span className={`block h-0.5 w-full bg-white transform transition duration-300 ease-in-out ${isOpen ? "rotate-45 translate-y-1.5" : ""}`} />
          <span className={`block h-0.5 w-full bg-white transition duration-300 ease-in-out ${isOpen ? "opacity-0" : "opacity-100"}`} />
          <span className={`block h-0.5 w-full bg-white transform transition duration-300 ease-in-out ${isOpen ? "-rotate-45 -translate-y-4" : ""}`} />
        </button>

        {/* Menú Desktop */}
        <nav className="hidden md:flex space-x-8 text-base font-semibold">
          {menuItems.map((item, index) => (
            item.href ? (
              <a
                key={index}
                href={item.href}
                className="relative inline-block transition duration-300 ease-in-out hover:text-[#4572a5]"
              >
                {item.label}
              </a>
            ) : (
              <button
                key={index}
                onClick={() => handleScrollTo(item.id!)}
                className="relative inline-block transition duration-300 ease-in-out hover:text-[#4572a5]"
              >
                {item.label}
              </button>
            )
          ))}
        </nav>

        {/* Menú Mobile */}
        {isOpen && (
          <nav className="absolute top-full left-0 w-full bg-[#05A4C0] flex flex-col space-y-4 py-4 px-6 md:hidden ">
            {menuItems.map((item, index) =>
              item.href ? (
                <a
                  key={index}
                  href={item.href}
                  className="text-white font-semibold text-lg"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </a>
              ) : (
                <button
                  key={index}
                  onClick={() => handleScrollTo(item.id!)}
                  className="text-white font-semibold text-lg text-left"
                >
                  {item.label}
                </button>
              )
            )}
          </nav>
        )}
      </div>
    </header>
  );
}
