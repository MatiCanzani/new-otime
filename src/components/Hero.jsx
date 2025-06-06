export default function Hero() {
  return (
    <section className="h-dvh section bg-black text-white py-20 px-6">
      <div className="container mx-auto flex flex-col items-center gap-12">
        <div className="flex flex-col flex-1">
          <h1 className="text-6xl md:text-[5rem] font-semibold leading-tight mb-6 font-suisse">
            <div className="mb-2">
              <span className="inline-block transform">Crafting visual</span>
              <sup className="ml-1 text-mostard align-super text-4xl">✲</sup>
            </div>
            <div>
              <span className="inline-block">Excellence/</span>
            </div>
          </h1>

          <a
            href="/contact"
            className="inline-flex items-center bg-yellow-400 text-black font-semibold px-6 py-3 rounded-lg hover:bg-yellow-500 transition"
          >
            <span>● Start a project</span>
            <span className="ml-2 text-2xl">↠</span>
          </a>

          <p className="mt-8 max-w-xl text-lg leading-relaxed font-suisse">
            At ONTIME, we don't just design—we innovate, we inspire, we
            transform. Our comprehensive suite of creative services is designed
            to elevate your brand and captivate your audience.
          </p>
        </div>
      </div>
    </section>
  );
}
