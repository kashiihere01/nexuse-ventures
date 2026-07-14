import Link from "next/link";
import { brandName, brands, copy, Lang, platformLogos, routes } from "./content";
import { RouteMotion } from "./route-motion";
import { ScrollReveal } from "./scroll-reveal";

const imageMap = {
  skyline:
    "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1800&q=80",
  warehouse:
    "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1400&q=80",
  commerce:
    "https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?auto=format&fit=crop&w=1400&q=80",
  meeting:
    "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1400&q=80",
};

const brandImages = [
  "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1619451334792-150fd785ee74?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1616046229478-9901c5536a45?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=900&q=80",
];

export function Logo({ lang, dark = false }: { lang: Lang; dark?: boolean }) {
  return (
    <span className={`logo ${dark ? "logo-dark" : ""}`} aria-label={brandName[lang]}>
      {lang === "ar" ? (
        brandName.ar
      ) : (
        <>
          Nexus <span>e</span>Ventures Corporation
        </>
      )}
    </span>
  );
}

export function SiteShell({ lang, children }: { lang: Lang; children: React.ReactNode }) {
  const t = copy[lang];
  const isAr = lang === "ar";

  return (
    <div className={isAr ? "site rtl" : "site"} dir={isAr ? "rtl" : "ltr"}>
      <RouteMotion />
      <ScrollReveal />
      <header className="nav-wrap">
        <nav className="nav">
          <Link href={isAr ? "/ar" : "/"} className="nav-logo">
            <Logo lang={lang} />
          </Link>
          <input id="nav-toggle" className="nav-toggle" type="checkbox" aria-label="Toggle navigation" />
          <label className="hamburger" htmlFor="nav-toggle">
            <span />
            <span />
            <span />
          </label>
          <div className="nav-links">
            {routes.map((route) => (
              <Link key={route.href} href={isAr ? route.arHref : route.href}>
                {isAr ? route.ar : route.en}
              </Link>
            ))}
            <Link className="lang-switch" href={isAr ? "/" : "/ar"}>
              {isAr ? "EN" : "عر"}
            </Link>
            <Link className="btn btn-gold" href={isAr ? "/ar/contact" : "/contact"}>
              {t.partner}
            </Link>
          </div>
        </nav>
      </header>
      {children}
      <Footer lang={lang} />
    </div>
  );
}

export function Icon({ name }: { name: "search" | "shield" | "rocket" | "chart" | "globe" | "box" | "check" | "mail" | "linkedin" | "instagram" | "facebook" | "arrow" }) {
  const paths = {
    search: "M10 18a8 8 0 1 1 5.3-14 8 8 0 0 1-5.3 14Zm6-2 5 5",
    shield: "M12 3 4 6v6c0 5 3.5 8 8 9 4.5-1 8-4 8-9V6l-8-3Z",
    rocket: "M5 15c3-7 8-11 16-12-1 8-5 13-12 16l-4-4Zm1 3-3 3 1-5m8-8 4 4",
    chart: "M4 19V5m5 14v-8m5 8V8m5 11V3",
    globe: "M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm-9-9h18M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18",
    box: "M4 8 12 4l8 4-8 4-8-4Zm0 0v8l8 4 8-4V8M12 12v8",
    check: "m4 12 5 5L20 6",
    mail: "M4 6h16v12H4V6Zm0 0 8 7 8-7",
    linkedin: "M6 9v10M6 5v.01M10 19v-6c0-2 1.2-3.5 3.2-3.5S17 10.9 17 13v6M10 9v10",
    instagram: "M7 3h10a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4Zm5 5a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm5.5-1.5v.01",
    facebook: "M15 8h-2a2 2 0 0 0-2 2v2H9v3h2v6h3v-6h2.5l.5-3h-3v-1.5c0-.8.4-1.5 1.4-1.5H17V6.2A9 9 0 0 0 15 6Z",
    arrow: "M5 12h14m-6-6 6 6-6 6",
  };

  return (
    <svg className="icon" viewBox="0 0 24 24" aria-hidden="true">
      <path d={paths[name]} />
    </svg>
  );
}

export function PlatformLogo({ type }: { type: string }) {
  if (type === "amazon") {
    return (
      <div className="market-logo amazon-logo">
        amazon
        <span />
      </div>
    );
  }

  return <div className="market-logo noon-logo">noon</div>;
}

export function Hero({
  lang,
  title,
  subtitle,
  image = "skyline",
  eyebrow,
}: {
  lang: Lang;
  title: string;
  subtitle: string;
  image?: keyof typeof imageMap;
  eyebrow?: string;
}) {
  const t = copy[lang];

  return (
    <section className="hero" style={{ backgroundImage: `linear-gradient(115deg, rgba(6,24,50,.96), rgba(10,31,68,.66)), url(${imageMap[image]})` }}>
      <div className="hero-inner">
        <div className="hero-copy">
          <p className="eyebrow">{eyebrow || (lang === "ar" ? "Ø¥Ø·Ù„Ø§Ù‚ Ø§Ù„Ø¹Ù„Ø§Ù…Ø§Øª ÙÙŠ Ø§Ù„Ø®Ù„ÙŠØ¬" : "Gulf marketplace launch engine")}</p>
          <h1>{title}</h1>
          <p>{subtitle}</p>
          <div className="hero-actions">
            <Link className="btn btn-gold" href={lang === "ar" ? "/ar/contact" : "/contact"}>
              {t.partner}
            </Link>
            <Link className="btn btn-outline" href={lang === "ar" ? "/ar/how-it-works" : "/how-it-works"}>
              {t.how}
            </Link>
          </div>
          <span className="trust-line">{t.trusted}</span>
          <div className="hero-proof" aria-label={lang === "ar" ? "Ø¯Ù„Ø§Ø¦Ù„ Ø§Ù„Ø¥Ø·Ù„Ø§Ù‚" : "Launch proof points"}>
            <span>30-day launch</span>
            <span>Zero upfront brand cost</span>
            <span>UAE + KSA</span>
          </div>
        </div>
        <div className="hero-dashboard" aria-hidden="true">
          <div className="dash-orbit dash-orbit-one" />
          <div className="dash-orbit dash-orbit-two" />
          <div className="dash-card dash-card-main">
            <span>{lang === "ar" ? "جاهزية الإطلاق" : "Launch readiness"}</span>
            <strong>30</strong>
            <small>{lang === "ar" ? "يوماً للوصول إلى السوق" : "days to market"}</small>
          </div>
          <div className="dash-card dash-card-amazon">
            <PlatformLogo type="amazon" />
            <small>{lang === "ar" ? "الإمارات + السعودية" : "UAE + KSA"}</small>
          </div>
          <div className="dash-card dash-card-noon">
            <PlatformLogo type="noon" />
            <small>{lang === "ar" ? "شبكة بائعين نشطة" : "Active seller network"}</small>
          </div>
          <div className="dash-rail">
            <span />
            <span />
            <span />
          </div>
          <div className="dash-status">
            <span />
            {lang === "ar" ? "Ø§Ù„Ø¥Ø·Ù„Ø§Ù‚ Ø¬Ø§Ø±" : "Launch in motion"}
          </div>
        </div>
      </div>
    </section>
  );
}

export function Ticker({ lang }: { lang: Lang }) {
  const items = [...copy[lang].ticker, ...copy[lang].ticker];

  return (
    <div className="ticker" aria-label="Marketplace capabilities">
      <div className="ticker-track">
        {items.map((item, index) => (
          <span key={`${item}-${index}`}>
            <Icon name={index % 2 ? "chart" : "globe"} />
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

export function SectionHeader({ title, sub }: { title: string; sub?: string }) {
  return (
    <div className="section-head">
      <h2>{title}</h2>
      {sub && <p>{sub}</p>}
    </div>
  );
}

export function LogoWall({ lang }: { lang: Lang }) {
  const [featured, ...rest] = brands;

  return (
    <div className="brand-showcase">
      <article
        className="brand-feature"
        style={{ backgroundImage: `linear-gradient(100deg, rgba(6,24,50,.94), rgba(6,24,50,.58)), url(${brandImages[0]})` }}
      >
        <div className="brand-feature-logo">
          <span>{featured.name.slice(0, 2).toUpperCase()}</span>
          <strong>{featured.name}</strong>
        </div>
        <div>
          <small>{lang === "ar" ? "علامة مميزة" : "Featured launch"}</small>
          <h3>{lang === "ar" ? featured.arDesc : featured.desc}</h3>
          <p>
            {lang === "ar"
              ? `${featured.arCategory} · ${featured.arCountry} · جاهزة للبيع في الخليج`
              : `${featured.category} · ${featured.country} · Gulf marketplace ready`}
          </p>
        </div>
      </article>
      <div className="brand-wall">
        {rest.map((brand) => (
          <article className="brand-chip" key={brand.name}>
            <span>{brand.name.slice(0, 2).toUpperCase()}</span>
            <div>
              <strong>{brand.name}</strong>
              <small>{lang === "ar" ? brand.arCategory : brand.category}</small>
            </div>
            <em>{lang === "ar" ? brand.arCountry : brand.country}</em>
          </article>
        ))}
      </div>
    </div>
  );
}

export function BrandPortfolio({ lang }: { lang: Lang }) {
  const isAr = lang === "ar";
  const leadBrands = brands.slice(0, 4);
  const remainingBrands = brands.slice(4);

  return (
    <div className="portfolio-showcase">
      <div className="portfolio-lead">
        <span className="portfolio-kicker">{isAr ? "Gulf launch portfolio" : "Gulf launch portfolio"}</span>
        <h3>{isAr ? "Selected brands now positioned for Gulf marketplace growth" : "Selected brands now positioned for Gulf marketplace growth"}</h3>
        <p>
          {isAr
            ? "A curated portfolio across health, beauty, home, sports, kitchen and baby categories."
            : "A curated portfolio across health, beauty, home, sports, kitchen and baby categories."}
        </p>
        <div className="portfolio-metrics">
          <span>
            <strong>10</strong>
            {isAr ? "Brands" : "Brands"}
          </span>
          <span>
            <strong>6</strong>
            {isAr ? "Categories" : "Categories"}
          </span>
          <span>
            <strong>3-5</strong>
            {isAr ? "Monthly additions" : "Monthly additions"}
          </span>
        </div>
      </div>

      <div className="portfolio-feature-grid">
        {leadBrands.map((brand, index) => (
          <article
            className="portfolio-feature-card"
            key={brand.name}
            style={{ backgroundImage: `linear-gradient(180deg, rgba(6,24,50,.08), rgba(6,24,50,.82)), url(${brandImages[index]})` }}
          >
            <span>{isAr ? brand.arCategory : brand.category}</span>
            <h4>{brand.name}</h4>
            <p>{isAr ? brand.arDesc : brand.desc}</p>
            <em>{isAr ? brand.arCountry : brand.country}</em>
          </article>
        ))}
      </div>

      <div className="portfolio-list">
        {remainingBrands.map((brand) => (
          <article className="portfolio-list-card" key={brand.name}>
            <span>{brand.name.slice(0, 2).toUpperCase()}</span>
            <div>
              <h4>{brand.name}</h4>
              <p>{isAr ? brand.arCategory : brand.category}</p>
            </div>
            <em>{isAr ? brand.arCountry : brand.country}</em>
          </article>
        ))}
      </div>
    </div>
  );
}

export function CTA({ lang, title, sub, button }: { lang: Lang; title?: string; sub?: string; button?: string }) {
  const t = copy[lang];
  const isAr = lang === "ar";

  return (
    <section className="cta-band">
      <div className="cta-copy">
        <span>{isAr ? "فرصة توسع خليجي" : "Gulf expansion opportunity"}</span>
        <h2>{title || t.ctaTitle}</h2>
        <p>{sub || t.ctaSub}</p>
        <small>{t.ctaSmall}</small>
        <div className="cta-actions">
          <Link className="btn btn-gold" href={lang === "ar" ? "/ar/contact" : "/contact"}>
            {button || t.partner}
            <Icon name="arrow" />
          </Link>
          <Link className="btn btn-outline" href={lang === "ar" ? "/ar/how-it-works" : "/how-it-works"}>
            {t.how}
          </Link>
        </div>
      </div>
      <div className="cta-visual" aria-hidden="true">
        <div className="cta-ring" />
        <div className="cta-market cta-market-amazon">
          <PlatformLogo type="amazon" />
          <span>UAE + KSA</span>
        </div>
        <div className="cta-market cta-market-noon">
          <PlatformLogo type="noon" />
          <span>{isAr ? "شبكة البائعين" : "Seller network"}</span>
        </div>
        <div className="cta-score">
          <strong>30</strong>
          <span>{isAr ? "يوم للإطلاق" : "day launch"}</span>
        </div>
      </div>
    </section>
  );
}

export function Footer({ lang }: { lang: Lang }) {
  const isAr = lang === "ar";

  return (
    <footer className="footer">
      <div className="footer-grid">
        <div>
          <Logo lang={lang} />
          <p>{isAr ? "شركة توزيع علامات دولية تطلق العلامات المثبتة على أمازون ونون في الإمارات والسعودية." : "Gulf brand distribution company launching proven global brands on Amazon and Noon across UAE and Saudi Arabia."}</p>
          <div className="socials">
            <a href="mailto:partnerships@nexuseventurescorp.com" aria-label="Email">
              <Icon name="mail" />
            </a>
            <a href="https://www.linkedin.com" aria-label="LinkedIn">
              <Icon name="linkedin" />
            </a>
            <a href="https://www.instagram.com" aria-label="Instagram">
              <Icon name="instagram" />
            </a>
            <a href="https://www.facebook.com" aria-label="Facebook">
              <Icon name="facebook" />
            </a>
          </div>
        </div>
        <div>
          <h3>{isAr ? "روابط سريعة" : "Quick Links"}</h3>
          {routes.map((route) => (
            <Link key={route.href} href={isAr ? route.arHref : route.href}>
              {isAr ? route.ar : route.en}
            </Link>
          ))}
        </div>
        <div>
          <h3>{isAr ? "التواصل" : "Contact"}</h3>
          <p>info@nexuseventurescorp.com</p>
          <p>{isAr ? "واتساب: يضاف لاحقاً" : "WhatsApp: +44 7737 138827"}</p>
          <p>www.nexuseventurescorp.com</p>
        </div>
        <div>
          <h3>{isAr ? "الأسواق" : "Markets"}</h3>
          <p>{isAr ? "الإمارات | السعودية | المملكة المتحدة | كندا" : "UAE | KSA | United Kingdom | Canada"}</p>
          <div className="mini-platforms">
            {platformLogos.map((platform) => (
              <PlatformLogo key={platform.name} type={platform.kind} />
            ))}
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <span>Nexus eVentures Corporation Ltd. Registered in England & Wales No. 15599446. VAT: 467 2495 57</span>
        <span>© 2026 Nexus eVentures Corporation. All rights reserved.</span>
      </div>
    </footer>
  );
}

export function PageIntro({ children }: { children: React.ReactNode }) {
  return <main className="page-main">{children}</main>;
}
