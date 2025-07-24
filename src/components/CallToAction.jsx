export default function CTA({ link, text, className = '' }) {
  return (
    <a
      href={link}
      className={`inline-flex text-center items-center leading-normal justify-center px-4 text-base font-medium md:text-xl px:10 py-3 md:px-6 md:py-3 rounded-lg transition w-full md:w-auto ${className}`}
    >
      <span>{text}</span>
    </a>
  );
}