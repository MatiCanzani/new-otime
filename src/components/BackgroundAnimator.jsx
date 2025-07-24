import { motion, useScroll, useTransform } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function BackgroundAnimator({ children }) {
  const { scrollYProgress } = useScroll();
  const bgColor = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    ['var(--colors-bg-default)', 'var(--colors-bg-dark)', 'var(--colors-bg-default)']
  );

  const [startTransition, setStartTransition] = useState(false);

  useEffect(() => {
    // Iniciar la animación de la página
    const timeout = setTimeout(() => {
      setStartTransition(true); // Inicia la transición después del retraso
    }, 200);

    // Bloqueo del scroll durante la transición
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden"; // Bloquea el html

    return () => {
      clearTimeout(timeout);
      document.body.style.overflow = "auto";
      document.documentElement.style.overflow = "auto"; // Restauramos el scroll
    };
  }, []);

  useEffect(() => {
    // Desbloquear el scroll cuando la animación termine
    if (startTransition) {
      document.body.style.overflow = "auto"; // Restauramos el scroll
      document.documentElement.style.overflow = "auto"; // Restauramos el html
    }
  }, [startTransition]);

  useEffect(() => {
    // Manejar la animación de las secciones
    const sections = document.querySelectorAll('[data-bg]');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const theme = entry.target.getAttribute('data-bg');
            if (theme === 'dark') {
              document.documentElement.classList.add('dark');
            } else {
              document.documentElement.classList.remove('dark');
            }
          }
        });
      },
      { threshold: 0.6 }
    );
    sections.forEach((sec) => observer.observe(sec));
    return () => observer.disconnect();
  }, []);

  return (
    <motion.div
      style={{ backgroundColor: bgColor }}
      className="min-h-screen transition-colors duration-300"
    >
      {children}
    </motion.div>
  );
}
