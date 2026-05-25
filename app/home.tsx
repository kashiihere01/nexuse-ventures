import Link from "next/link";
import { BrandPortfolio, CTA, Hero, Icon, PageIntro, PlatformLogo, SectionHeader, SiteShell, Ticker } from "./components";
import { copy, Lang, platforms } from "./content";
import { CountUp } from "./count-up";
import { TestimonialCarousel } from "./testimonial-carousel";

export function HomePage({ lang }: { lang: Lang }) {
  const t = copy[lang];

  return (
    <SiteShell lang={lang}>
      <Hero lang={lang} title={t.heroTitle} subtitle={t.heroSub} />
      <Ticker lang={lang} />
      <PageIntro>
        <section className="stats">
          <div className="stats-label">
            <span>{lang === "ar" ? "دليل السوق" : "Market proof"}</span>
            <strong>{lang === "ar" ? "جاهزون لإطلاق العلامات في الخليج" : "Built for Gulf brand launches"}</strong>
          </div>
          {t.stats.map(([number, label]) => {
            const stat = getStatCounter(number);

            return (
            <div className="stat" key={label}>
              <strong>
                <CountUp value={stat.value} suffix={stat.suffix} />
              </strong>
              <span>{label}</span>
            </div>
            );
          })}
        </section>

        <section className="market-stage">
          <div className="stage-copy">
            <span>{lang === "ar" ? "من العلامة العالمية إلى الرف الخليجي" : "From global brand to Gulf shelf"}</span>
            <h2>{lang === "ar" ? "نحوّل العلامات الناجحة إلى إطلاق خليجي كامل خلال أسابيع." : "We turn proven brands into Gulf-ready marketplace launches in weeks."}</h2>
            <p>{lang === "ar" ? "فريق واحد يدير البحث، الاتفاقيات، القوائم، المحتوى العربي، الإعلانات، وحماية صندوق الشراء." : "One team handles research, agreements, listings, Arabic content, PPC, seller access and buy box protection."}</p>
          </div>
          <div className="stage-visual" aria-hidden="true">
            <div className="stage-image stage-image-one" />
            <div className="stage-image stage-image-two" />
            <div className="stage-badge stage-badge-top">Amazon UAE</div>
            <div className="stage-badge stage-badge-bottom">Noon KSA</div>
          </div>
        </section>

        <section className="visual-proof">
          <article className="proof-card proof-dubai">
            <span>{lang === "ar" ? "سوق الخليج" : "Gulf Market"}</span>
            <strong>{lang === "ar" ? "إطلاق في الإمارات والسعودية" : "UAE and KSA launch coverage"}</strong>
          </article>
          <article className="proof-card proof-packages">
            <span>{lang === "ar" ? "تشغيل كامل" : "Full Operations"}</span>
            <strong>{lang === "ar" ? "قوائم، مخزون، إعلانات، تقارير" : "Listings, stock, PPC, reporting"}</strong>
          </article>
          <article className="proof-card proof-team">
            <span>{lang === "ar" ? "شراكات علامات" : "Brand Partnerships"}</span>
            <strong>{lang === "ar" ? "نمو بدون تكلفة دخول" : "Growth with zero entry cost"}</strong>
          </article>
        </section>

        <section className="split-section launch-engine">
          <div>
            <SectionHeader title={t.whatTitle} sub={t.whatSub} />
            <div className="feature-grid">
              {t.what.map(([title, body], index) => (
                <article className="feature-card" key={title}>
                  <Icon name={(["search", "shield", "rocket", "globe", "box", "chart"] as const)[index]} />
                  <h3>{title}</h3>
                  <p>{body}</p>
                </article>
              ))}
            </div>
          </div>
          <aside className="image-panel commerce-panel">
            <div>
              <span>{lang === "ar" ? "توسع خليجي بدون مخاطرة" : "Zero-risk Gulf expansion"}</span>
              <strong>{lang === "ar" ? "من أول قائمة إلى نمو شهري" : "From first listing to monthly growth"}</strong>
            </div>
          </aside>
        </section>

        <section className="soft-section">
          <SectionHeader
            title={t.whyTitle}
            sub={lang === "ar" ? undefined : "A lower-risk path into UAE and Saudi marketplaces, built around brand control, seller demand and clear reporting."}
          />
          <div className="benefit-grid">
            {t.benefits.map(([title, body]) => (
              <article className="benefit" key={title}>
                <Icon name="check" />
                <h3>{title}</h3>
                <p>{body}</p>
              </article>
            ))}
          </div>
        </section>

        <section>
          <SectionHeader title={t.brandsTitle} sub={t.brandsSub} />
          <BrandPortfolio lang={lang} />
        </section>

        <section className="partnership-flow">
          <SectionHeader title={t.timelineTitle} />
          <div className="timeline">
            {t.timeline.map(([title, body], index) => (
              <article key={title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <div>
                  <h3>{title}</h3>
                  <p>{body}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="platform-section">
          <SectionHeader title={t.platformsTitle} />
          <div className="platform-grid">
            {platforms.map((platform) => (
              <article className="platform-card" key={platform.name}>
                <PlatformLogo type={platform.kind} />
                <h3>{lang === "ar" ? platform.ar : platform.name}</h3>
                <p>{lang === "ar" ? platform.arNote : platform.note}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="testimonials">
          <SectionHeader title={t.testimonialsTitle} />
          <TestimonialCarousel lang={lang} testimonials={t.testimonials} />
        </section>

        <CTA lang={lang} />

        <section className="contact-strip">
          <h2>{lang === "ar" ? "ابدأ رحلتك الخليجية" : "Start Your Gulf Journey"}</h2>
          <p>partnerships@nexuseventurescorp.com</p>
          <Link className="btn btn-navy" href={lang === "ar" ? "/ar/contact" : "/contact"}>
            {t.apply}
          </Link>
        </section>
      </PageIntro>
    </SiteShell>
  );
}

function getStatCounter(value: string) {
  if (value.includes("1,000")) return { value: 1000, suffix: "+" };
  if (value.includes("2")) return { value: 2, suffix: "+ Years" };

  return { value: Number.parseInt(value, 10) || 0, suffix: "" };
}
