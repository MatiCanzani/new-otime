import { motion } from "framer-motion";
import servicesBanner from "../assets/Services.PNG";

export default function InfiniteBanner() {
  return (
    <div className="relative w-full overflow-hidden h-24">
      <motion.div
        className="absolute left-0 top-0 flex h-full"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ ease: "linear", duration: 30, repeat: Infinity }}
      >
        <img src={servicesBanner} alt="Services strip" className="h-full w-auto block" />
        <img src={servicesBanner} alt="" aria-hidden="true" className="h-full w-auto block" />
      </motion.div>
    </div>
  );
}
