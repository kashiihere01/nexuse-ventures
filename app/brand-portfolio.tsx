"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { brands, Lang } from "./content";

const categories = {
  en: ["All", "Home", "Beauty", "Sports", "Health", "Kitchen", "Baby"],
  ar: ["الكل", "المنزل", "الجمال", "الرياضة", "الصحة", "المطبخ", "الأطفال"],
};

const categoryMap: Record<string, string> = {
  All: "All",
  Home: "Home",
  Beauty: "Beauty",
  Sports: "Sports",
  Health: "Health",
  Kitchen: "Kitchen",
  Baby: "Baby",
  الكل: "All",
  المنزل: "Home",
  الجمال: "Beauty",
  الرياضة: "Sports",
  الصحة: "Health",
  المطبخ: "Kitchen",
  الأطفال: "Baby",
};

export function BrandPortfolio({ lang }: { lang: Lang }) {
  const [active, setActive] = useState(lang === "ar" ? "الكل" : "All");
  const ar = lang === "ar";
  const activeCategory = categoryMap[active];

  const filteredBrands = useMemo(() => {
    if (activeCategory === "All") return brands;
    return brands.filter((brand) => brand.category === activeCategory);
  }, [activeCategory]);

  return (
    <>
      <div className="filter-bar" role="tablist" aria-label={ar ? "تصفية العلامات" : "Filter brands"}>
        {categories[lang].map((item) => (
          <button
            type="button"
            role="tab"
            aria-selected={active === item}
            className={active === item ? "active" : ""}
            key={item}
            onClick={() => setActive(item)}
          >
            {item}
          </button>
        ))}
      </div>

      <section className="portfolio-grid" aria-live="polite">
        {filteredBrands.map((brand) => (
          <article key={brand.name}>
            <div className="brand-mark">{brand.name.slice(0, 2).toUpperCase()}</div>
            <h2>{brand.name}</h2>
            <p>{ar ? brand.arDesc : brand.desc}</p>
            <span>{ar ? brand.arCountry : brand.country}</span>
            <strong>★★★★★ 4.7</strong>
            <Link className="btn btn-small" href="#">
              {ar ? "عرض على أمازون الإمارات" : "View on Amazon UAE"}
            </Link>
          </article>
        ))}
      </section>

      {filteredBrands.length === 0 && (
        <p className="empty-filter">{ar ? "لا توجد علامات في هذه الفئة حالياً." : "No brands in this category yet."}</p>
      )}
    </>
  );
}
