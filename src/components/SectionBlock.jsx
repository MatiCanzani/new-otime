export default function SectionBlock({ section, bg = "offWhite" }) {
  return (
    <section
      id={`section-${section.id}`}
      data-bg={bg}
      className="min-h-screen py-16 px-8 flex flex-col items-center align-center gap-8 font-suisse"
    >
      <h2 className="text-6xl max-w-3xl text-center">{section.title}</h2>
      <img
        src={section.imgSrc}
        alt={section.imgAlt}
        className="max-w-xl rounded-xl"
      />
      {section.item && (
        <div className="max-w-xl w-full">
          {section.items.map((item, i) => (
            <div key={i} className="mb-6">
              <h3 className="font-bold text-2xl mb-1">{item.title}</h3>
              {item.text && <p>{item.text}</p>}
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
