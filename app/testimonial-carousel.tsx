"use client";

import { useEffect, useMemo, useState } from "react";
import { Lang } from "./content";

export function TestimonialCarousel({
  lang,
  testimonials,
}: {
  lang: Lang;
  testimonials: string[][];
}) {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const total = testimonials.length;
  const isAr = lang === "ar";

  const controls = useMemo(
    () => ({
      label: isAr ? "Brand partner testimonials" : "Brand partner testimonials",
    }),
    [isAr],
  );

  useEffect(() => {
    if (paused || total < 2) return;

    const timer = window.setInterval(() => {
      setActive((current) => (current + 1) % total);
    }, 4800);

    return () => window.clearInterval(timer);
  }, [paused, total]);

  return (
    <div
      className="testimonial-carousel"
      aria-roledescription="carousel"
      aria-label={controls.label}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="testimonial-window">
        <div className="testimonial-track" style={{ transform: `translateX(${isAr ? active * 100 : -active * 100}%)` }}>
          {testimonials.map(([quote, brand, country], index) => (
            <article className="testimonial-slide" key={brand} aria-hidden={active !== index}>
              <span className="quote-mark">&quot;</span>
              <p>{quote}</p>
              <div>
                <strong>{brand}</strong>
                <span>{country}</span>
              </div>
            </article>
          ))}
        </div>
      </div>

      <div className="testimonial-controls">
        <div className="testimonial-dots">
          {testimonials.map(([, brand], index) => (
            <button
              type="button"
              key={brand}
              className={active === index ? "active" : ""}
              aria-label={`Show testimonial ${index + 1}`}
              aria-current={active === index}
              onClick={() => setActive(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
