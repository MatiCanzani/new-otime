// src/components/SectionBlock.jsx
import Video from "./Video";

export default function SectionBlock({ section }) {
  return (
    <section
      id={`section-${section.id}`}
      className="relative isolate min-h-[100svh] py-16 sm:py-24 bg-transparent w-full"
    >
      <div className="container mx-auto px-6 flex flex-col items-center gap-8">
        <h2 className="text-6xl text-center">{section.title}</h2>
      </div>

      <div className="relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen my-12 sm:my-20">
        <Video
          mp4_4k={section.video}
          mp4_1080={section.video}
          // poster="/video/hero_poster.jpg"
          className="w-screen block"
        />
      </div>
    </section>
  );
}
