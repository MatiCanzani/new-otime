import { motion } from "framer-motion";


const brands = [
  {
    name: "Jeep",
    logo: "https://upload.wikimedia.org/wikipedia/commons/4/4e/Jeep_logo.svg",
  },
  {
    name: "YPF",
    logo: "https://upload.wikimedia.org/wikipedia/commons/f/f8/YPF_logo.svg",
  },
  {
    name: "Quilmes",
    logo: "https://upload.wikimedia.org/wikipedia/commons/3/34/Quilmes_logo.svg",
  },
  {
    name: "Aerolíneas Argentinas",
    logo: "https://upload.wikimedia.org/wikipedia/commons/0/03/Aerol%C3%ADneas_Argentinas_logo_2010.svg",
  },
  {
    name: "Mercado Libre",
    logo: "https://upload.wikimedia.org/wikipedia/commons/9/99/Mercado_Libre_logo.svg",
  },
];

export default function Brands() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-6 text-center">
        <motion.h2
          className="text-4xl md:text-6xl font-bold mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Brands That Chose to be On Time.
        </motion.h2>
        <motion.div initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }} className="w-full mx-auto text-balance text-center md:mt-4 md:px-6 text-base md:text-xl leading-relaxed font-suisse">
          <p className="text-white/90">Our clients range from global corporations to high-growth startups. They have one thing in common: a vision for creativity as a driver of business.</p>

        </motion.div>
        {/* 
        <div className="flex flex-wrap justify-center items-center gap-12">
          {brands.map((brand, index) => (
            <motion.div
              key={brand.name}
              className="w-36 h-20 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <img
                src={brand.logo}
                alt={`${brand.name} logo`}
                className="max-h-16 max-w-full object-contain"
              />
            </motion.div>
          ))}
        </div> */}
      </div>
      <div className="container mx-auto px-6 text-center my-20">
        <motion.h3
          className="text-2xl md:text-4xl font-bold mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          Manifiesto.
        </motion.h3>
        <motion.div initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }} className="w-full mx-auto text-balance text-center md:mt-4 md:px-6 text-base md:text-xl leading-relaxed font-suisse">
          <p className="text-white/90">The call to break free from what's expected.
            From the simulation. From the feed.
            We design for those who feel the system is too small for their vision.
            We create brands that don’t just grow — they escape gravity.
            If you’ve made it this far, you’ve probably felt it too.
            That whisper in your head: “this isn’t the first time.”
            Good.
            You’re not here by chance.
            You’re here to LEAVE.</p>
        </motion.div>
      </div>
    </section>
  );
}
