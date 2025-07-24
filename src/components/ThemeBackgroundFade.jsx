import { AnimatePresence, motion } from "framer-motion";

const bgVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

const themeToColor = {
  light: "bg-white",
  dark: "bg-black",
};

export default function ThemeBackgroundFade({ theme }) {
  return (
    <div className="fixed inset-0 z-10 pointer-events-none">
      <AnimatePresence mode="wait">
        <motion.div
          id={theme}
          variants={bgVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className={`absolute inset-0 ${themeToColor[theme]} transition-colors duration-500`}
        />
      </AnimatePresence>
    </div>
  );
}
