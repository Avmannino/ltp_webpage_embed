// src/app/components/HeroCarousel.tsx
import { useEffect, useMemo, useRef, useState } from "react";

type HeroCarouselProps = {
  images: { src: string; alt: string }[];
  className?: string;
  intervalMs?: number; // default: 4500
};

export function HeroCarousel({
  images,
  className = "",
  intervalMs = 4500,
}: HeroCarouselProps) {
  const safeImages = useMemo(() => images.filter(Boolean), [images]);
  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef<number | null>(null);

  const count = safeImages.length;

  function go(next: number) {
    if (count === 0) return;
    const wrapped = ((next % count) + count) % count;
    setIndex(wrapped);
  }

  useEffect(() => {
    if (count <= 1) return;

    if (timerRef.current) window.clearInterval(timerRef.current);
    if (!isPaused) {
      timerRef.current = window.setInterval(() => {
        setIndex((prev) => (prev + 1) % count);
      }, intervalMs);
    }

    return () => {
      if (timerRef.current) window.clearInterval(timerRef.current);
    };
  }, [count, intervalMs, isPaused]);

  if (count === 0) {
    return (
      <div
        className={`w-full h-full flex items-center justify-center bg-black/10 text-white/80 ${className}`}
      >
        No images provided
      </div>
    );
  }

  return (
    <div
      className={`relative w-full h-full ${className}`}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onBlur={() => setIsPaused(false)}
      tabIndex={-1}
      aria-roledescription="carousel"
      aria-label="Hero image carousel"
    >
      {/* Slides */}
      {safeImages.map((img, i) => (
        <img
          key={`${img.src}-${i}`}
          src={img.src}
          alt={img.alt}
          className={[
            "absolute inset-0 w-full h-full object-cover",
            "transition-opacity duration-700 ease-in-out",
            i === index ? "opacity-100" : "opacity-0",
          ].join(" ")}
          draggable={false}
          loading={i === 0 ? "eager" : "lazy"}
        />
      ))}

      {/* Soft overlay for readability + polish */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-black/10 pointer-events-none" />

      {/* Dots */}
      {count > 1 ? (
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
          {safeImages.map((_, i) => (
            <button
              key={`dot-${i}`}
              type="button"
              onClick={() => go(i)}
              className={[
                "h-2.5 w-2.5 rounded-full border border-white/40",
                "transition",
                i === index ? "bg-white/80" : "bg-white/20 hover:bg-white/40",
              ].join(" ")}
              aria-label={`Go to slide ${i + 1}`}
              aria-current={i === index ? "true" : "false"}
            />
          ))}
        </div>
      ) : null}

      {/* (Optional) tiny prev/next hit areas for mobile */}
      {count > 1 ? (
        <>
          <button
            type="button"
            onClick={() => go(index - 1)}
            className="absolute inset-y-0 left-0 w-[18%] bg-transparent"
            aria-label="Previous slide"
          />
          <button
            type="button"
            onClick={() => go(index + 1)}
            className="absolute inset-y-0 right-0 w-[18%] bg-transparent"
            aria-label="Next slide"
          />
        </>
      ) : null}
    </div>
  );
}
