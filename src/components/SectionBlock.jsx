import { motion } from "framer-motion";
import Video from "./Video";


export default function SectionBlock({ section }) {

  const { video, text, title, id } = section
  return (
    <section
      id={`section-${id}`}
      className="relative isolate h-[100dvh] py-16 sm:py-24 bg-transparent w-full mt-20 flex flex-col items-center justify-center"
    >
      <div className="container mx-auto px-6 flex flex-col items-center gap-8">
        <motion.h2
          className="text-3xl md:text-5xl font-bold mb-16 text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {title}
        </motion.h2>
      </div>

      {text && (
        <motion.div initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }} className="w-full mx-auto text-balance text-center md:mt-4 md:px-6 text-base md:text-xl leading-relaxed font-suisse">
          {[
            "Ontime Creative is a Buenos Aires–based agency led by Nicolás Canzani.",
            "We deliver branding, visual content, and publicity strategies for companies that want to stand out with precision and style.",
          ].map((text, idx) => (
            <p key={idx} className="text-white/90">
              {text}
            </p>
          ))}
        </motion.div>
      )}

      {video && (

        <div className="relative w-screen my-12 sm:my-20">
          <Video
            mp4_4k={video}
            mp4_1080={video}
            // poster="/video/hero_poster.jpg"
            className="w-screen block"
          />
        </div>
      )}
    </section>
  );
}
