import { motion, useReducedMotion } from "framer-motion";
import { projectsData } from "../data/projectsData.js";

export default function ProjectsPageContent() {
  const reduce = useReducedMotion();

  const fadeUp = {
    hidden: { opacity: 0, y: reduce ? 0 : 40 },
    show:   { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <>
      <section className="bg-grape text-offwhite py-32 px-6 text-center">
        <motion.h1
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-5xl md:text-7xl font-bold mb-6 font-suisse"
        >
          Our Work/
        </motion.h1>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="max-w-2xl mx-auto text-lg text-gray-400 font-suisse"
        >
          A curated selection of our favorite ✲ projects
        </motion.p>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-10"
        >
          <a
            href="/contact"
            className="inline-block bg-black-ontime text-offwhite py-3 px-6 rounded-full font-semibold hover:bg-neutral-200 transition"
          >
            Start a project
          </a>
        </motion.div>
      </section>

      {/* Scroll Stack simple */}
      <section className="relative bg-grape text-offwhite">
        {[...projectsData].reverse().map((project, idx) => (
          <motion.div
            key={project.slug}
            className="sticky top-0 h-[100svh] overflow-hidden will-change-transform"
            style={{ zIndex: idx + 1 }}
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
          >
            {/* Imagen full-bleed */}
            <div className="absolute inset-0">
              <img
                src={project.heroImage}
                alt={project.title}
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-grape/25" />
            </div>

            {/* Overlay contenido */}
            <div className="relative z-10 h-full flex items-end">
              <div className="container mx-auto px-6 pb-10">
                <a href={`/projects/${project.slug}`} className="block">
                  <h2 className="text-3xl md:text-5xl font-bold">
                    {project.title}
                  </h2>
                  <p className="text-gray-300 mt-2">
                    {project.category} · {project.year}
                  </p>
                  <p className="text-lg text-gray-200 max-w-2xl mt-6 font-suisse leading-relaxed">
                    {project.description}
                  </p>
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </section>
    </>
  );
}
