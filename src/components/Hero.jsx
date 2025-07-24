import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import CTA from "./CallToAction";

// Variantes de animación para el texto
const lineVariant = {
  hidden: i => ({
    opacity: 0,
    x: i % 2 === 0 ? "100%" : "-100%",
  }),
  visible: i => ({
    opacity: 1,
    x: "0%",
    transition: {
      delay: 0.2 + i * 0.3,
      duration: 0.5,
      ease: "easeOut",
    },
  }),
};

const ctaVariant = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { delay: 3.4, duration: 0.4, ease: "easeOut" },
  },
};

const parasVariant = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.4,
      delayChildren: 2.6,
    },
  },
};

const paraLineVariant = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

export default function Hero() {
  const [played, setPlayed] = useState(false);
  const [start, setStart] = useState(false);

  useEffect(() => {
    if (!start) {
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
      document.body.style.position = "fixed";
      document.body.style.top = "0";
    } else {
      document.body.style.overflow = "auto";
      document.documentElement.style.overflow = "auto";
      document.body.style.position = "";
    }
  }, [start]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setStart(true);
    }, 200);

    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    if (!played) {
      setPlayed(true);
    }
  }, [played]);

  return (
    <>
      {!start ? (
        <motion.div
          className="fixed inset-0 bg-black z-50 pointer-events-none"
          initial={{ scaleY: 1 }}
          animate={{ scaleY: 0 }}
          exit={{ opacity: 0 }}
          transition={{
            delay: 1,
            duration: 1.4,
            ease: "easeInOut",
          }}
          style={{ transformOrigin: "top" }}
        />
      ) : null}

      <motion.section
        data-bg="light"
        className="relative h-dvh px-6 text-white overflow-hidden mt-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.5 }}
        animate={played ? "visible" : "hidden"}
      >
        <div className="container mx-auto h-full relative flex flex-col gap-4 items-start md:items-center justify-center">
          <motion.h1
            className=" w-full font-suisse text-5xl md:text-8xl font-semibold leading-tight mb-6 text-current overflow-hidden text-center"
            transition={{ duration: 1, ease: "easeOut" }}
          >
            {["WE DESIGN CLIENTS", "WE CRAFT VISUAL IMPACT"].map((text, i) => (
              <motion.div
                key={i}
                custom={i}
                variants={lineVariant}
                className="overflow-hidden"
              >
                <div className="title-line">{text}</div>
              </motion.div>
            ))}
          </motion.h1>

          <motion.div
            id="paras"
            className="w-full mx-auto text-balance text-center md:mt-4 md:px-6 text-base md:text-xl leading-relaxed font-suisse md:text-center"
            variants={parasVariant}
          >
            {[
              "A creative agency based in Buenos Aires, led by Nicolás Canzani.",
              "Visual content, Branding and performance with vision, Graphic Design, and Strategy.",
            ].map((line, idx) => (
              <motion.p key={idx} variants={paraLineVariant}>
                {line}
              </motion.p>
            ))}
          </motion.div>

          <motion.div
            className="w-full flex justify-center mt-10"
            variants={ctaVariant}
          >
            <CTA
              link="/contact"
              text="See Our Work"
              className="text-current bg-yellow-400 hover:bg-yellow-500/90"
            />
          </motion.div>
        </div>
      </motion.section>
    </>
  );
}
