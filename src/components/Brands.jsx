import { motion } from "framer-motion";

import CTA from "./CallToAction";

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
        <CTA
          link="/contact"
          text="Experience On Time"
          className="text-offwhite bg-purple-900 hover:bg-yellow-500/90"
        />

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
        </div>
      </div>
    </section>
  );
}
