import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import CTA from "./CallToAction";

// Animación del H1 (igual que tenías)
const lineVariant = {
  hidden: (i) => ({ opacity: 0, x: i % 2 === 0 ? "100%" : "-100%" }),
  visible: (i) => ({
    opacity: 1, x: "0%",
    transition: { delay: 0.2 + i * 0.3, duration: 0.5, ease: "easeOut" },
  }),
};

const ctaVariant = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { delay: 3.4, duration: 0.4, ease: "easeOut" } },
};

const parasVariant = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.4, delayChildren: 2.6 } },
};

const paraLineVariant = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

export default function Hero() {
  const [played, setPlayed] = useState(false);
  const [start, setStart] = useState(false);

  // Bloquear scroll solo hasta que termina la intro
  useEffect(() => {
    const lock = () => {
      document.documentElement.style.overflow = "hidden";
      document.body.style.overflow = "hidden";
      document.body.style.position = "fixed";
      document.body.style.top = "0";
    };
    const unlock = () => {
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.top = "";
    };
    if (!start) lock(); else unlock();
    return unlock;
  }, [start]);

  useEffect(() => {
    const t = setTimeout(() => setStart(true), 200);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    if (!played) setPlayed(true);
  }, [played]);

  return (
    <motion.section
      className="relative h-dvh px-6 overflow-hidden bg-transparent text-white"
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.5 }}
      animate={played ? "visible" : "hidden"}
    >
      <motion.div
        className="absolute inset-0 z-[60] pointer-events-none bg-grape"
        style={{ willChange: "transform" }}
        initial={false}
        animate={start ? { y: "-100%" } : { y: "0%" }}
        transition={{ delay: 1.2, duration: 1.4, ease: "easeInOut" }}
        onAnimationComplete={() => setStart(true)}
      />

      <div className="relative z-[70] container mx-auto h-full flex flex-col gap-4 items-start md:items-center justify-center">
        <motion.h1
          className="w-full font-suisse text-5xl md:text-8xl font-semibold leading-tight mb-6 overflow-hidden text-center text-white"
          transition={{ duration: 1, ease: "easeOut" }}
        >
          {["Creativity and Publicity", "At the Right Time."].map((text, i) => (
            <motion.div key={i} custom={i} variants={lineVariant} className="overflow-hidden">
              <div className="title-line">{text}</div>
            </motion.div>
          ))}
        </motion.h1>

        <motion.div
          id="paras"
          className="w-full mx-auto text-balance text-center md:mt-4 md:px-6 text-base md:text-xl leading-relaxed font-suisse"
          variants={parasVariant}
        >
          {[
            "Ontime Creative is a Buenos Aires–based agency led by Nicolás Canzani.",
            "We deliver branding, visual content, and publicity strategies for companies that want to stand out with precision and style.",
          ].map((line, idx) => (
            <motion.p key={idx} variants={paraLineVariant} className="text-white/90">
              {line}
            </motion.p>
          ))}
        </motion.div>

        <motion.div className="w-full flex justify-center mt-10" variants={ctaVariant}>
          <CTA
            link="/contact"
            text="Experience On Time"
            className="bg-yellow-400 hover:bg-yellow-500/90 text-black"
          />
        </motion.div>
      </div>
    </motion.section>
  );
}
