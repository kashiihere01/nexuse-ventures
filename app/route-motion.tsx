"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

export function RouteMotion() {
  const pathname = usePathname();

  useEffect(() => {
    const root = document.documentElement;
    root.classList.remove("route-motion");
    window.requestAnimationFrame(() => {
      root.classList.add("route-motion");
    });

    const timer = window.setTimeout(() => {
      root.classList.remove("route-motion");
    }, 800);

    return () => window.clearTimeout(timer);
  }, [pathname]);

  return null;
}
