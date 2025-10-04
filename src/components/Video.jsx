// ProgressiveVideo.jsx
import { useEffect, useRef } from "react";

export default function Video({
  poster,
  mp4_4k,      // 4K (opcional si lo tenés)
  mp4_1080,     // fallback universal
  className,
  autoPlayOnView = true,
  loop = true,
  rounded = true,
}) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const tryPlay = () => el.play().catch(() => { });
    tryPlay();

    // autoplay on view
    if (!autoPlayOnView) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry) return;
        if (entry.isIntersecting) tryPlay();
        else el.pause();
      },
      { threshold: 0.15 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [autoPlayOnView]);

  return (
    <video
      ref={ref}
      muted
      playsInline
      loop={loop}
      preload="metadata"
      poster={poster}
      className={className}
      style={{
        width: "100%",
        aspectRatio: "16 / 9",
        objectFit: "cover",
      }}
    >
      {/* 4K para pantallas grandes (si lo tenés) */}
      {mp4_4k && (
        <source
          src={mp4_4k}
          type="video/mp4"
          media="(min-width: 1600px)"
        />
      )}
      {/* Fallback universal 1080p */}
      <source src={mp4_1080} type="video/mp4" />

      Tu navegador no soporta video HTML5.
    </video>
  );
}
