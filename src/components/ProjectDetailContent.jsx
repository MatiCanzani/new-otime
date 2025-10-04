import { motion } from "framer-motion";

/**
 * ProjectDetailContent renders a full project case study page.  It
 * expects a `project` object (with title, categories, year, heroImage,
 * description, sections, gallery and quote properties) and an
 * `otherProjects` array containing the remaining projects.  The
 * component uses Framer Motion to animate content into view and
 * mirrors the layout of the LeStudio template’s project pages.  The
 * design is mobile first but scales gracefully on larger screens.
 */
export default function ProjectDetailContent({ project, otherProjects }) {
  if (!project) return <p>Project not found</p>;

  return (
    <>
      {/* Hero section: dark background with project title and categories */}
      <section className="bg-black text-white pt-28 pb-16 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.h1
            className="text-5xl md:text-7xl font-extrabold tracking-tight mb-4"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {project.title}
            <span className="text-yellow-400">/</span>
          </motion.h1>
          <motion.p
            className="text-sm md:text-base uppercase tracking-widest text-gray-400"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            {project.categories.join(" · ")} &nbsp;—&nbsp; {project.year}
          </motion.p>
        </div>
      </section>

      {/* Hero image */}
      {project.heroImage && (
        <motion.div
          className="overflow-hidden"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <img
            src={project.heroImage}
            alt={project.title}
            className="w-full h-80 md:h-[32rem] object-cover"
          />
        </motion.div>
      )}

      {/* Description paragraphs */}
      {project.description && project.description.length > 0 && (
        <section className="px-4 md:px-8 py-12">
          <div className="max-w-4xl mx-auto space-y-6">
            {project.description.map((paragraph, idx) => (
              <motion.p
                key={idx}
                className="text-lg leading-relaxed text-gray-700"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: idx * 0.1 }}
              >
                {paragraph}
              </motion.p>
            ))}
          </div>
        </section>
      )}

      {/* Additional sections with heading and text */}
      {project.sections && project.sections.length > 0 && (
        <section className="px-4 md:px-8 py-12 space-y-16">
          {project.sections.map((sec, idx) => (
            <motion.div
              key={idx}
              className="max-w-5xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: idx * 0.1 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                {sec.heading}
              </h2>
              <p className="text-lg leading-relaxed text-gray-700">
                {sec.text}
              </p>
            </motion.div>
          ))}
        </section>
      )}

      {/* Gallery images: displayed in a simple responsive grid */}
      {project.gallery && project.gallery.length > 0 && (
        <section className="px-4 md:px-8 py-12">
          <div className="max-w-6xl mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {project.gallery.map((imgSrc, idx) => (
              <motion.div
                key={idx}
                className="overflow-hidden rounded-lg"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: idx * 0.1 }}
              >
                <img
                  src={imgSrc}
                  alt={`${project.title} image ${idx + 1}`}
                  className="w-full h-64 object-cover"
                  loading="lazy"
                />
              </motion.div>
            ))}
          </div>
        </section>
      )}

      {/* Quote section */}
      {project.quote && (
        <section className="bg-gray-50 px-4 md:px-8 py-16">
          <div className="max-w-4xl mx-auto text-center">
            <motion.blockquote
              className="text-2xl md:text-3xl italic font-medium text-gray-800"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              “{project.quote.text}”
            </motion.blockquote>
            <motion.footer
              className="mt-4 text-gray-500"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            >
              — {project.quote.author}
            </motion.footer>
          </div>
        </section>
      )}

      {/* Check our last work section with grid of other projects */}
      {otherProjects && otherProjects.length > 0 && (
        <section className="px-4 md:px-8 py-16">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Check our last work
            </h2>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {otherProjects.map((proj, idx) => (
                <motion.a
                  href={`/projects/${proj.slug}`}
                  key={proj.slug}
                  className="relative group overflow-hidden rounded-lg"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6, ease: "easeOut", delay: idx * 0.1 }}
                >
                  <img
                    src={proj.heroImage}
                    alt={proj.title}
                    className="w-full h-60 object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-4">
                    <h3 className="text-white text-lg font-semibold mb-1">
                      {proj.title}
                    </h3>
                    <p className="text-gray-300 text-xs mb-1">
                      {proj.categories.join(" · ")}
                    </p>
                    <span className="text-gray-400 text-xs">{proj.year}</span>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}