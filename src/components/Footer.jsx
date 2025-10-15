/**
 * Improved Footer component for ONTIME.  This footer draws
 * inspiration from the LeStudio template while keeping your brand
 * identity.  It is designed mobile‑first: stacked layout on small
 * screens and a responsive grid on larger devices.  The content is
 * structured into four sections: a call to action, contact info,
 * sitemap and socials.  Additional navigation links can be added to
 * the fourth column without duplicating markup elsewhere.
 */
import FooterColumn from "./FooterColumn.jsx";

export default function Footer() {
  // Define the footer columns data in a single array.  Each column has a
  // title and a list of links with their respective hrefs.  Keeping
  // this data at the top of the component makes it easy to add or
  // remove entries without modifying the markup below.
  const columns = [
    {
      title: "Contact us",
      links: [
        { text: "ontime@ontime.com", href: "mailto:ontime@ontime.com" },
        { text: "+54 9 11 4143‑0471", href: "tel:+5491141430471" },
      ],
    },
    {
      title: "Sitemap",
      links: [
        { text: "Home", href: "/" },
        { text: "Who We Are", href: "/who-we-are" },
        { text: "Services", href: "/services" },
        { text: "Projects", href: "/projects" },
        { text: "Contact", href: "/contact" },
      ],
    },
    {
      title: "Socials",
      links: [
        { text: "Instagram", href: "#" },
        { text: "LinkedIn", href: "#" },
      ],
    },
    {
      title: "More",
      links: [
        { text: "Blog", href: "/blog" },
        { text: "Privacy Policy", href: "/privacy-policy" },
      ],
    },
  ];
  return (
    <footer className="bg-black-ontime text-offwhite transition-colors duration-500 w-full pt-12 pb-8">
      <div className="container mx-auto px-6 space-y-12 mt-20">
        {/* Call to action section */}
        <div className="text-center">
          <h2 className="text-4xl md:text-6xl font-extrabold uppercase mb-4">
           Make Your Brand Unforgettable.
          </h2>
          <p className="text-base md:text-lg text-gray-400 mb-6">
            It’s time to give your company the presence it deserves.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center font-semibold hover:text-yellow-500 transition"
          >
            <span>Start a Project</span>
            <span className="ml-1 text-2xl">↠</span>
          </a>
        </div>
        {/* Links grid using FooterColumn for each section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 text-sm md:text-base text-center md:text-left">
          {columns.map((col) => (
            <FooterColumn key={col.title} title={col.title} links={col.links} />
          ))}
        </div>
        {/* Copyright */}
        <div className="text-sm text-center text-gray-500">
          2025 — ONTIME<sup className="text-yellow-400">✲</sup>
        </div>
      </div>
    </footer>
  );
}