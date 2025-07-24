// src/components/SectionBlock.jsx
import CTA from "./CallToAction";

export default function SectionBlock({ section }) {
  return (
    <section
      id={`section-${section.id}`}
      className="h-screen flex items-center justify-center py-16 px-8 bg-transparent"
    >
      <div className="container mx-auto flex flex-col items-center gap-8">
        <h2 className="text-6xl text-center">{section.title}</h2>
        <img
          src={section.imgSrc}
          alt={section.imgAlt}
          className="max-w-xl rounded-xl"
        />
        <CTA link={section.link} text={section.cta} className="text-current" />
      </div>
    </section>
  );
}
