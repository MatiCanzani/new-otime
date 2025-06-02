// src/components/Navbar.jsx
"use client";

import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const menuItems = [
    { name: "About", href: "/about", delay: "100ms" },
    { name: "Services", href: "/services", delay: "200ms" },
    { name: "Projects", href: "/projects", delay: "300ms" },
    { name: "Contact", href: "/contact", delay: "400ms" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 text-white text-[clamp(1rem,1.7vw,1.7vw)] leading-[1.4] bg-black">
      <div className="absolute z-50 w-full bg-black  mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#" className="text-xl font-bold tracking-tight">
          Ontime
        </a>

        <button
          className="flex items-center relative group"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          <span className="relative z-10 text-sm">
            {menuOpen ? "✕ CLOSE" : "● MENU"}
          </span>
          <span className="absolute bottom-0 left-0 w-full h-[2px] bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
        </button>
      </div>

      <div
        className={`transition-opacity duration-500 ease-in-out fixed top-0 left-0 w-full h-full bg-black text-white z-40 flex items-center justify-center ${
          menuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <ul className="space-y-8 text-center text-xl font-medium">
          {menuItems.map(({ name, href, delay }) => (
            <li
              key={name}
              style={{ transitionDelay: delay }}
              className={`transition-all duration-500 transform ${
                menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              <a
                href={href}
                onClick={closeMenu}
                className="relative group inline-block hover:text-gray-400 transition text-6xl"
              >
                {name}
                <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
