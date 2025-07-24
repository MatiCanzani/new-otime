export default function Footer() {
  return (
    <footer
      className="bg-black dark:bg-black text-white transition-colors duration-500 w-full pt-10"
    >
      <div className="container mx-auto px-6 py-16 max-w-7xl">
        <h1 className="text-3xl md:text-5xl font-extrabold mb-4 uppercase">
          Make Your Brand Unforgettable
        </h1>

        <div className="flex flex-col justify-center my-8 gap-2">
          <p className="text-base md:text-lg text-gray-300">
            Ready to Make Something That Stands Out?
          </p>

          <a
            href="/contact"
            className="inline-flex items-center font-semibold hover:text-yellow-500 transition"
          >
            <span>Let’s Talk</span>
            <span className="text-2xl">↠</span>
          </a>
        </div>
        <hr className="border-gray-700 mb-12" />

        <div className="flex flex-col md:flex-row gap-12 md:gap-24 text-lg md:text-xl justify-center text-center">
          <div className="flex-1">
            <h2 className="font-semibold mb-4">Contact us</h2>
            <div className="space-y-3 mb-6 text-sm font-medium">
              <a href="mailto:ONTIME@ontime.com" className="block hover:underline">
                ontime@ontime.com
              </a>
              <a href="tel:+543414130471" className="block hover:underline">
                +54 9 11 4143-0471
              </a>
            </div>
          </div>

          <div className="flex-1 ">
            <h3 className="font-semibold mb-4">Sitemap</h3>
            <nav className="space-y-2 text-sm">
              <a href="/" className="block hover:underline">Home</a>
              <a href="/about" className="block hover:underline">About Us</a>
              <a href="/services" className="block hover:underline">Services</a>
              <a href="/projects" className="block hover:underline">Projects</a>
              <a href="/contact" className="block hover:underline">Contact</a>
            </nav>
          </div>

          <div className="flex-1">
            <h3 className="font-semibold mb-4">Socials</h3>
            <nav className="space-y-2 text-sm">
              <a href="#" className="block hover:underline">Instagram</a>
            </nav>
          </div>
        </div>
      </div>
      <div className="text-sm text-center text-gray-500 w-full">
        2025 — ONTIME<sup className="text-yellow-400">✲</sup>
      </div>
    </footer>
  );
}