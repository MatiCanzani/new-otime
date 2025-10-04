import InfiniteBanner from "../components/InfiniteBanner.jsx";
import { beliefsData } from "../data/servicesData.js";


export default function ServicesPageContent() {
  return (
    <>
      <section className="bg-black text-white py-32 px-6 text-center">
        <h1 className="text-5xl md:text-7xl font-semibold leading-tight mb-6 font-suisse">
          <div>Crafting visual✲</div>
          <div>Excellence/</div>
        </h1>
        <p className="max-w-2xl mx-auto text-lg text-gray-300 font-suisse">
          At Ontime, we don’t just design — we innovate, we inspire, we transform.
        </p>
        <div className="mt-10">
          <a
            href="/contact"
            className="inline-block bg-white text-black py-3 px-6 rounded-full font-semibold hover:bg-neutral-200 transition"
          >
            Let’s work together
          </a>
        </div>
      </section>

      <section id='services'>
        <InfiniteBanner />
      </section>

      <section className="bg-neutral-900 text-white py-28 px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold font-suisse mb-8">
          AT ONTIME✲ WE BELIEVE IN/
        </h2>
        <ul className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-300 font-suisse text-lg">
          {beliefsData.map((b, i) => (
            <li key={i}>• {b}</li>
          ))}
        </ul>
        <div className="mt-12">
          <a
            href="/contact"
            className="inline-block bg-white text-black py-3 px-6 rounded-full font-semibold hover:bg-neutral-200 transition"
          >
            Start your project
          </a>
        </div>
      </section>
    </>
  );
}
