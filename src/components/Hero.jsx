import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import CTA from "./CallToAction";

const lineVariant = {
  hidden: (i) => ({ opacity: 0, x: i % 2 === 0 ? "100%" : "-100%" }),
  visible: (i) => ({
    opacity: 1,
    x: "0%",
    transition: { delay: 0.2 + i * 0.3, duration: 0.5, ease: "easeOut" },
  }),
};

export default function Hero() {
  const [overlayVisible, setOverlayVisible] = useState(true);

  useEffect(() => {
    if (overlayVisible) {
      document.body.style.overflow = "hidden";
      document.body.style.position = "fixed";
      document.body.style.top = "0";
    } else {
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.top = "";
    }
  }, [overlayVisible]);

  return (
    <section className="relative h-dvh overflow-hidden bg-transparent text-offwhite">
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <div className="text-center">
          <h1 className="font-suisse text-5xl md:text-8xl font-semibold leading-tight mb-6">
            <div className="title-line">Creativity and Publicity</div>
            <div className="title-line">At the Right Time.</div>
          </h1>

          <motion.div
            className="mt-4 px-6 text-base md:text-xl leading-relaxed font-suisse"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.6, delay: 0.2, ease: "easeOut" },
              },
            }}
            initial="hidden"
            animate={overlayVisible ? "hidden" : "visible"}
          >
            <p className="text-offwhite/90">
              Ontime Creative is a Buenos Aires–based agency led by Nicolás Canzani.
            </p>
            <p className="text-offwhite/90">
              We deliver branding, visual content, and publicity strategies for companies
              that want to stand out with precision and style.
            </p>
          </motion.div>

          <motion.div
            className="flex justify-center mt-10"
            variants={{
              hidden: { opacity: 0, y: 10 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.4, delay: 0.4, ease: "easeOut" },
              },
            }}
            initial="hidden"
            animate={overlayVisible ? "hidden" : "visible"}
          >
            <CTA
              link="/contact"
              text="Experience On Time"
              className="bg-orange-ontime hover:bg-orange-ontime/90 text-black-ontime"
            />
          </motion.div>
        </div>
      </div>

      {overlayVisible && (
        <motion.div
          className="absolute inset-0 flex items-center justify-center pointer-events-none"
          style={{ backgroundColor: "#ffffff" }}
          initial={{ clipPath: "inset(0% 0% 0% 0%)" }}
          animate={{ clipPath: "inset(100% 0% 0% 0%)" }}
          transition={{ delay: 1.2, duration: 1.1, ease: "easeInOut" }}
          onAnimationComplete={() =>   setOverlayVisible(false)}
        >
          <motion.h1
            className="font-suisse text-5xl md:text-8xl font-semibold leading-tight text-offwhite"
            initial="hidden"
            animate="visible"
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.3, delayChildren: 0.2 } } }}
          >
            {["Creativity and Publicity", "At the Right Time."].map((t, i) => (
              <motion.div key={i} custom={i} variants={lineVariant} className="overflow-hidden">
                <div className="title-line">{t}</div>
              </motion.div>
            ))}
          </motion.h1>
        </motion.div>
      )}
    </section>
  );
}
