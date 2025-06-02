import { useEffect, useState } from 'react';

export default function ScrollBackground({ children }) {
  const [bgColor, setBgColor] = useState('#ffffff');

  useEffect(() => {
    const sections = Array.from(document.querySelectorAll('section'));
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section.offsetTop <= scrollPosition) {
          const isDark = section.dataset.bg === 'dark';
          setBgColor(isDark ? '#000000' : '#ffffff');
          break;
        }
      }
    };

    handleScroll(); // run on load
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const textColor = bgColor === '#000000' ? '#ffffff' : '#000000';

  return (
    <div style={{ backgroundColor: bgColor, color: textColor, transition: 'background-color 0.5s ease, color 0.5s ease' }}>
      {children}
    </div>
  );
}
