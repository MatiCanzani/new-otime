"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const menuItems = [
    { name: "Who We Are", href: "/who-we-are" },
    { name: "Services", href: "/services" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/contact" },
  ];

  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { when: "beforeChildren", staggerChildren: 0.1 } },
    exit: { opacity: 0, transition: { when: "afterChildren" } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 20 },
  };

  const menuVariants = {
    hidden: { opacity: 0},
    visible: {
      opacity: 1,
      y: 0,
      transition: { delay: 2.5, duration: 0.4, ease: 'easeOut' },
    },
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 text-offwhite text-[clamp(1rem,1.7vw,1.7vw)] leading-[1.4] bg-grape">
      <motion.div
        variants={menuVariants}
        initial="hidden"
        animate="visible"
        className="absolute z-50 w-full bg-transparent mx-auto px-6 py-4 flex justify-between items-center">
        <a href="/" className="text-xl font-bold tracking-tight">
          Ontime
        </a>

        <button
          className="flex items-center relative group"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Toggle Menu"
        >
          <span className="relative z-10 text-sm">
            {menuOpen ? "✕ CLOSE" : "● MENU"}
          </span>
          <span className="absolute bottom-0 left-0 w-full h-[2px] bg-black-ontime transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
        </button>
      </motion.div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed top-0 left-0 w-full h-full bg-black-ontime text-offwhite z-40 flex items-center justify-center"
            variants={backdropVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <motion.ul className="space-y-8 text-center" role="menu">
              {menuItems.map(({ name, href }) => (
                <motion.li
                  key={name}
                  variants={itemVariants}
                  role="none"
                >
                  <a
                    href={href}
                    onClick={() => setMenuOpen(false)}
                    className="relative inline-block hover:text-gray-400 transition text-3xl md:text-6xl"
                  >
                    {name}
                    <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-black-ontime transition-all duration-300 group-hover:w-full"></span>
                  </a>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
