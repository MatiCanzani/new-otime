import { AnimatePresence, motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { sectionsData } from "../data/sectionsData";
import Brands from "./Brands";
import Hero from "./Hero";
import SectionBlock from "./SectionBlock";

export default function OnTimeClient() {
  const [isDark, setIsDark] = useState(false);

  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  const heroRef = useRef(null);
  const heroInView = useInView(heroRef, { amount: 0.5 });
  useEffect(() => {
    if (heroInView) setIsDark(true);
  }, [heroInView]);

  useEffect(() => {
    const threshold = window.innerHeight * 0.5;
    function onScroll() {
      let newTheme = "dark";
      for (const { id, theme } of sectionsData) {
        const el = document.getElementById(`section-${id}`);
        if (!el) continue;
        const top = el.getBoundingClientRect().top;
        if (top <= threshold) {
          newTheme = theme;
        }
      }
      setIsDark(newTheme === "dark");
    }

    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (mounted) {
      document.documentElement.classList.toggle("dark", isDark);
      localStorage.setItem("theme", isDark ? "dark" : "light");
    }
  }, [isDark, mounted]);

  const [start, setStart] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setStart(true), 200);
    return () => clearTimeout(t);
  }, []);

  const wrapperBase = "relative min-h-screen overflow-hidden transition-colors duration-700 ease-in-out";
  const wrapperClasses = mounted
    ? `${wrapperBase} ${isDark ? "bg-black text-white" : "bg-white text-black"}`
    : wrapperBase;

  return (
    <>
      <AnimatePresence>
        {!start ? null : (
          <motion.div
            className="fixed inset-0 bg-white mix-blend-difference z-50 pointer-events-none"
            style={{ transformOrigin: "top" }}
            initial={{ scaleY: 1 }}
            animate={{ scaleY: 0 }}
            exit={{ opacity: 0 }}
            transition={{ delay: 1, duration: 1.4, ease: "easeInOut" }}
          />
        )}
      </AnimatePresence>

      <motion.div
        initial={false}
        animate={{
          backgroundColor: isDark ? "#000000" : "#ffffff",
          color: isDark ? "#ffffff" : "#000000",
        }}
        transition={{
          duration: 1.2,
          ease: [0.77, 0, 0.175, 1],
        }}
        className="relative overflow-hidden"
      >
        <div ref={heroRef} className="h-[100dvh]">
          <Hero />
        </div>
        {sectionsData.map((section) =>
          section.id === "brands" ? (
            <div key={section.id} id={`section-${section.id}`}>
              <Brands />
            </div>
          ) : (
            <SectionBlock key={section.id} section={section} />
          )
        )}
      </motion.div>

    </>
  );
}
