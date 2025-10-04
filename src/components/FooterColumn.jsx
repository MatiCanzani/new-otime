export default function FooterColumn({ title, links }) {
  return (
    <div>
      <h3 className="font-semibold mb-4">{title}</h3>
      <nav className="space-y-2">
        {links.map((link) => (
          <a href={link.href} className="block hover:underline" key={link.text}>
            {link.text}
          </a>
        ))}
      </nav>
    </div>
  );
}