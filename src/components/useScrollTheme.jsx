// useScrollTheme.js
import { useEffect, useState } from 'react';

export default function useScrollTheme(sections) {
  const [isDark, setIsDark] = useState(false);
  useEffect(() => {
    const threshold = window.innerHeight * 0.5;
    function onScroll() {
      let newTheme = 'dark';
      for (const { id, theme } of sections) {
        const el = document.getElementById(`section-${id}`);
        if (!el) continue;
        if (el.getBoundingClientRect().top <= threshold) newTheme = theme;
      }
      setIsDark(newTheme === 'dark');
    }
    window.addEventListener('scroll', onScroll);
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, [sections]);
  return isDark;
}
