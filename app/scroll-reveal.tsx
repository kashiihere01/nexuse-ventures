"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

export function ScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    const root = document.documentElement;
    root.classList.add("reveal-ready");

    document.querySelectorAll(".is-visible").forEach((target) => {
      target.classList.remove("is-visible");
    });

    const targets = document.querySelectorAll(
      [
        ".page-main > section",
        ".feature-card",
        ".benefit",
        ".proof-card",
        ".brand-feature",
        ".brand-chip",
        ".portfolio-lead",
        ".portfolio-feature-card",
        ".portfolio-list-card",
        ".launch-process article",
        ".timeline article",
        ".platform-card",
        ".testimonial-grid article",
        ".cta-band",
        ".contact-strip",
      ].join(","),
    );

    if (!("IntersectionObserver" in window)) {
      targets.forEach((target) => target.classList.add("is-visible"));
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 },
    );

    targets.forEach((target, index) => {
      target.setAttribute("style", `${target.getAttribute("style") || ""}; --reveal-delay: ${Math.min(index % 6, 5) * 70}ms`);
      observer.observe(target);
    });

    const fallback = window.setTimeout(() => {
      targets.forEach((target) => {
        if (!target.classList.contains("is-visible")) {
          const rect = target.getBoundingClientRect();
          if (rect.top < window.innerHeight * 1.2) {
            target.classList.add("is-visible");
          }
        }
      });
    }, 500);

    return () => {
      window.clearTimeout(fallback);
      observer.disconnect();
    };
  }, [pathname]);

  return null;
}
