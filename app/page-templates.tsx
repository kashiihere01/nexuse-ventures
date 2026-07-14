import { BrandPortfolio } from "./brand-portfolio";
import { CTA, Hero, Icon, PageIntro, PlatformLogo, SectionHeader, SiteShell } from "./components";
import { copy, Lang, platformLogos } from "./content";

export function AboutPage({ lang }: { lang: Lang }) {
  const ar = lang === "ar";

  return (
    <SiteShell lang={lang}>
      <Hero
        lang={lang}
        image="meeting"
        title={ar ? "نصل أفضل علامات العالم بالخليج" : "Connecting the World's Best Brands to the Gulf"}
        subtitle={ar ? "جذور خليجية. اتصال عالمي. مبني للعلامات التي تستحق أكثر." : "Gulf-rooted. Globally connected. Built for brands that deserve more."}
      />
      <PageIntro>
        <section className="story-grid">
          <div>
            <SectionHeader title={ar ? "قصتنا" : "Our Story"} />
            <p>{ar ? "تأسست نيكسس إي فينتشرز كوربوريشن على يد مدسر غلزار بمهمة واضحة: أن تكون الجسر بين العلامات الدولية المثبتة وسوق التجارة الإلكترونية الخليجي سريع النمو." : "Nexus eVentures Corporation was founded by Mudassir Gulzar with a clear mission: to bridge proven international brands with the Gulf's rapidly growing e-commerce market."}</p>
            <p>{ar ? "نحدد العلامات التي تحقق أداءً قوياً في الولايات المتحدة والمملكة المتحدة وأستراليا وأوروبا، لكنها لا تملك حضوراً في الإمارات أو السعودية. ثم نؤمّن حقوق التوزيع ونطلقها على أمازون ونون." : "We identify brands performing strongly in the US, UK, Australia and Europe, but with no UAE or KSA presence. Then we secure distribution rights and launch them across Amazon and Noon."}</p>
            <p>{ar ? "لسنا شركة لوجستية فقط. نحن شريك نمو للعلامة، نبدأ بالجملة لبناء الترتيب والمراجعات، ثم نفعّل الحصرية لحماية الربحية على المدى الطويل." : "We are not only a logistics company. We are a brand growth partner, starting with wholesale to build rank and reviews, then activating exclusivity to protect long-term profitability."}</p>
          </div>
          <aside className="image-panel warehouse-panel" />
        </section>

        <section className="soft-section">
          <SectionHeader title={ar ? "معايير الشراكة" : "Our Partnership Criteria"} sub={ar ? "نختار العلامات التي تستوفي كل هذه الشروط." : "We only partner with brands that meet every standard below."} />
          <div className="criteria-grid">
            {[
              [ar ? "التقييم" : "Star Rating", ar ? "4.0 نجوم كحد أدنى في السوق الأساسي" : "Minimum 4.0 stars on the home marketplace"],
              [ar ? "المراجعات" : "Review Count", ar ? "1,000 مراجعة حقيقية على الأقل" : "Minimum 1,000 genuine reviews"],
              [ar ? "لا حضور خليجي" : "No Gulf Presence", ar ? "لا تعمل حالياً على أمازون الإمارات أو السعودية أو نون" : "Not currently operating on Amazon UAE, KSA or Noon"],
              [ar ? "علامة حقيقية" : "Real Brand", ar ? "شركة مسجلة وهوية علامة قابلة للتحقق" : "Registered company with verifiable brand identity"],
              [ar ? "جودة المنتج" : "Product Quality", ar ? "منتجات أصلية وآمنة ومتوافقة" : "Genuine, safe and compliant products"],
              [ar ? "مدة الشراكة" : "Partnership Term", ar ? "اتفاق توزيع لمدة سنتين على الأقل" : "Minimum 2-year distribution agreement"],
            ].map(([title, body]) => (
              <article key={title}>
                <Icon name="check" />
                <h3>{title}</h3>
                <p>{body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="note-panel">
          <h2>{ar ? "لماذا تهم المراجعات؟" : "Why Reviews Matter"}</h2>
          <p>{ar ? "عند إطلاق علامة في الخليج، يمكن دمج مراجعات القوائم من الأسواق الحالية مثل الولايات المتحدة والمملكة المتحدة وأستراليا والهند في قوائم الإمارات والسعودية لنفس ASIN. لذلك تنطلق علامتك بدليل اجتماعي جاهز، وليس من الصفر." : "When we launch a brand in the Gulf, existing marketplace reviews from the US, UK, Australia, India and other regions can be merged into the new UAE and KSA listings for the same ASIN. Your brand launches with social proof already built in, not from zero."}</p>
        </section>

        <section>
          <SectionHeader title={ar ? "أسواقنا" : "Our Markets"} />
          <div className="market-table">
            {[
              ["United Arab Emirates", "Erha Impex", "Amazon UAE + Noon UAE"],
              ["Kingdom of Saudi Arabia", "KSA partner company", "Amazon KSA + Noon KSA"],
              ["United Kingdom", "Nexus eVentures Corporation Ltd", "HQ and global operations"],
              ["Canada", "Nexus eVentures Corporation Ltd", "Growing client base"],
            ].map(([country, entity, role]) => (
              <div key={country}>
                <strong>{country}</strong>
                <span>{entity}</span>
                <p>{role}</p>
              </div>
            ))}
          </div>
        </section>
        <CTA lang={lang} />
      </PageIntro>
    </SiteShell>
  );
}

export function HowItWorksPage({ lang }: { lang: Lang }) {
  const ar = lang === "ar";
  const steps = ar
    ? ["بحث العلامة", "نتواصل معك", "مكالمة تعريفية", "توقيع الاتفاق", "توريد المنتج", "الإطلاق", "مرحلة الجملة", "تفعيل الحصرية", "تقارير شهرية", "التجديد"]
    : ["Brand Research", "We Contact You", "Discovery Call", "Agreement Signed", "Product Supply", "Launch", "Wholesale Phase", "Exclusivity Active", "Monthly Reports", "Renewal"];

  return (
    <SiteShell lang={lang}>
      <Hero lang={lang} image="warehouse" title={ar ? "كيف نحمي علامتك ونبني زخم الخليج" : "How We Protect Your Brand While Building Gulf Momentum"} subtitle={ar ? "نعمل على مرحلتين: الجملة أولاً، ثم الحصرية. هذا النموذج يقلل المخاطر ويحمي قيمة العلامة." : "We operate in two phases: wholesale first, then exclusive. This model reduces risk and protects brand value."} />
      <PageIntro>
        <section className="how-phase">
          <article>
            <span>01</span>
            <h2>{ar ? "مرحلة الجملة: الأشهر 1 إلى 6" : "Phase 1: Wholesale Distribution"}</h2>
            <p>{ar ? "نشتري منتجاتك بسعر جملة متفق عليه ونبيعها على أمازون ونون، مع بناء ترتيب المبيعات وإطلاق الإعلانات والمحتوى العربي وتحمل تكاليف الإعداد." : "We purchase products at an agreed wholesale price and sell them on Amazon and Noon while building BSR, launching PPC, creating Arabic content and absorbing setup costs."}</p>
          </article>
          <article>
            <span>02</span>
            <h2>{ar ? "مرحلة الحصرية: بعد الشهر السادس" : "Phase 2: Exclusive Distribution"}</h2>
            <p>{ar ? "بعد إثبات المبيعات، نفعّل حقوق التوزيع الحصرية لحماية صندوق الشراء ومنع السوق الرمادي وتغذية شبكة أكثر من 1,000 بائع." : "After proven sales, we activate exclusive rights to protect the Buy Box, stop grey-market sellers and supply our 1,000+ seller network."}</p>
          </article>
        </section>
        <section className="note-panel">
          <h2>{ar ? "لماذا ينجح هذا النموذج؟" : "Why This Model Works"}</h2>
          <p>{ar ? "بدون حصرية، يستطيع بائعون آخرون نسخ القائمة والمنافسة على صندوق الشراء. مرحلة الجملة تبني الترتيب والمراجعات أولاً، ثم تجعل الحصرية أقوى وأكثر ربحية." : "Without exclusivity, other sellers can copy a listing and compete for the Buy Box. The wholesale phase builds rank and reviews first, making exclusivity stronger and more profitable."}</p>
        </section>
        <section>
          <SectionHeader title={ar ? "العملية خطوة بخطوة" : "Full Step-by-Step Process"} />
          <div className="launch-process">
            {steps.map((step, index) => (
              <article key={step}>
                <span>{index + 1}</span>
                <h3>{step}</h3>
                <p>{ar ? "خطوة واضحة ضمن رحلة إطلاق العلامة، مع إدارة كاملة للتفاصيل التشغيلية والتقارير." : "A clear step in the launch journey, with full operational handling and reporting from our team."}</p>
              </article>
            ))}
          </div>
        </section>
        <CTA lang={lang} />
      </PageIntro>
    </SiteShell>
  );
}

export function ForBrandsPage({ lang }: { lang: Lang }) {
  const ar = lang === "ar";
  const t = copy[lang];
  const faqs = ar
    ? [["كم التكلفة؟", "لا شيء. نستثمر في الإطلاق والمحتوى والإعلانات."], ["متى تبدأ المبيعات؟", "نستهدف أول مبيعات خلال 30 يوماً من نشر القوائم."], ["هل أحتاج للسفر؟", "لا. ندير العملية بالكامل عن بُعد."], ["كيف تنتقل المراجعات؟", "تستطيع أمازون دمج مراجعات نفس ASIN عبر الأسواق."]]
    : [["How much does it cost?", "Nothing. We invest in launch, content and PPC."], ["How long before sales?", "We aim for first sales within 30 days of listings going live."], ["Do I need to travel?", "No. Everything can be handled remotely."], ["How do reviews transfer?", "Amazon can merge reviews for the same ASIN across marketplaces."]];

  return (
    <SiteShell lang={lang}>
      <Hero lang={lang} image="commerce" title={ar ? "علامتك. خليجنا. نمو بلا حدود." : "Your Brand. Our Gulf. Unlimited Growth."} subtitle={ar ? "نطلق علامتك على أمازون الإمارات والسعودية ونون، بدون تكلفة وبدون مخاطرة وبإدارة كاملة." : "We launch your brand on Amazon UAE, KSA and Noon: zero cost, zero risk and fully handled."} />
      <PageIntro>
        <section className="brand-fit">
          <div className="brand-fit-copy">
            <span>{ar ? "معايير القبول" : "Partnership fit"}</span>
            <h2>{ar ? "نبحث عن علامات مثبتة، لا أفكار غير مجربة." : "We want proven brands, not untested ideas."}</h2>
            <p>{ar ? "إذا كانت علامتك تبيع بالفعل في سوق دولي ولا تملك حضوراً خليجياً منظماً، فهذا هو بالضبط النوع الذي نبني له إطلاقاً قوياً." : "If your brand already sells in a major international marketplace and does not have a structured Gulf presence, this is exactly the kind of launch we build."}</p>
          </div>
          <div className="fit-list">
            {(ar
              ? ["تقييم 4.0+ مع مراجعات حقيقية", "لا حضور منظم في الإمارات أو السعودية", "شركة مسجلة وهوية علامة واضحة", "استعداد لشراكة توزيع لمدة سنتين", "منتجات قابلة للامتثال والشحن"]
              : ["4.0+ rating with real reviews", "No structured UAE or KSA presence", "Registered company with clear brand identity", "Open to a 2-year distribution partnership", "Products ready for compliance and shipping"]
            ).map((item) => (
              <p key={item}><Icon name="check" />{item}</p>
            ))}
          </div>
        </section>

        <section className="deal-models">
          <div className="deal-head">
            <span>{ar ? "نموذجان للشراكة" : "Two ways to partner"}</span>
            <h2>{ar ? "اختر نموذجاً يناسب طريقة نمو علامتك." : "Choose the model that fits how your brand wants to grow."}</h2>
          </div>
          <article className="deal-card">
            <div>
              <span>A</span>
              <h3>{ar ? "مشاركة الإيرادات" : "Revenue Share"}</h3>
              <p>{ar ? "نبيع نيابة عنك، مع بقاء قرارات التسعير أقرب إلى العلامة." : "We sell on your behalf while keeping pricing decisions closer to the brand."}</p>
            </div>
            <strong>60 / 40</strong>
            <small>{ar ? "للعلامة / نيكسس" : "brand / Nexus"}</small>
          </article>
          <article className="deal-card highlighted">
            <div>
              <span>B</span>
              <h3>{ar ? "الجملة" : "Wholesale"}</h3>
              <p>{ar ? "نشتري المنتجات مباشرة بسعر جملة ونبني الطلب الخليجي من خلال قنواتنا." : "We buy products outright at wholesale price and build Gulf demand through our channels."}</p>
            </div>
            <strong>{ar ? "أوامر شراء" : "Purchase orders"}</strong>
            <small>{ar ? "مخاطرة أقل على العلامة" : "lower brand risk"}</small>
          </article>
        </section>

        <section className="soft-section">
          <SectionHeader title={ar ? "ما يشمله النموذج" : "What Both Models Include"} />
          <div className="benefit-grid compact">
            {["Full listing creation", "Arabic and English content", "PPC advertising", "Monthly reporting", "Buy Box protection", "1,000+ seller network"].map((item) => (
              <article key={item}><Icon name="check" /><h3>{ar ? translateShort(item) : item}</h3></article>
            ))}
          </div>
        </section>

        <section className="ownership-split">
          <article>
            <span>{ar ? "أنت تحتفظ" : "You keep"}</span>
            {(ar
              ? ["ملكية العلامة عالمياً", "عملياتك خارج الإمارات والسعودية", "حق مراجعة المواد التسويقية", "رؤية واضحة للتقارير الشهرية"]
              : ["Global brand ownership", "Operations outside UAE and KSA", "Right to review Gulf marketing", "Clear monthly reporting visibility"]
            ).map((item) => <p key={item}><Icon name="check" />{item}</p>)}
          </article>
          <article>
            <span>{ar ? "نحن ندير" : "We handle"}</span>
            {(ar
              ? ["أمازون الإمارات والسعودية ونون", "المحتوى العربي والإنجليزي", "الإعلانات وحماية صندوق الشراء", "شبكة 1,000+ بائع"]
              : ["Amazon UAE, Amazon KSA and Noon", "Arabic and English content", "PPC and Buy Box protection", "1,000+ seller client network"]
            ).map((item) => <p key={item}><Icon name="check" />{item}</p>)}
          </article>
        </section>

        <section>
          <SectionHeader title={ar ? "الأسئلة الشائعة" : "FAQ"} />
          <div className="faq-list">
            {faqs.map(([q, a]) => (
              <details key={q}>
                <summary>{q}</summary>
                <p>{a}</p>
              </details>
            ))}
          </div>
        </section>
        <CTA lang={lang} button={t.apply} />
      </PageIntro>
    </SiteShell>
  );
}

export function OurBrandsPage({ lang }: { lang: Lang }) {
  const ar = lang === "ar";

  return (
    <SiteShell lang={lang}>
      <Hero lang={lang} title={ar ? "محفظة علاماتنا الحصرية" : "Our Exclusive Brand Portfolio"} subtitle={ar ? "علامات مختارة بعناية يحصل عليها البائعون والعملاء في الخليج عبر قنوات موثوقة." : "Curated brands made available to Gulf sellers and shoppers through trusted marketplace channels."} />
      <PageIntro>
        <BrandPortfolio lang={lang} />
        <CTA lang={lang} title={ar ? "هل علامتك غير موجودة في هذه القائمة؟" : "Is Your Brand Missing From This List?"} sub={ar ? "نبحث باستمرار عن شركاء جدد في كل الفئات." : "We are actively seeking new brand partners in every category."} />
      </PageIntro>
    </SiteShell>
  );
}

export function LegacyContactPage({ lang }: { lang: Lang }) {
  const ar = lang === "ar";

  return (
    <SiteShell lang={lang}>
      <Hero lang={lang} image="meeting" title={ar ? "أرسل طلب شراكة" : "Send a Partnership Request"} subtitle={ar ? "أخبرنا عن علامتك أو احتياجك، وسنراجع فرصة التوسع في الخليج." : "Tell us about your brand or seller needs, and we will review the Gulf expansion opportunity."} />
      <PageIntro>
        <section className="contact-grid">
          <div className="contact-card">
            <h2>{ar ? "بيانات التواصل" : "Contact Details"}</h2>
            <p><strong>Email:</strong> info@nexuseventurescorp.com</p>
            <p><strong>{ar ? "واتساب:" : "WhatsApp:"}</strong> {ar ? "+44 7737 138827" : "+44 7737 138827"}</p>
            <p><strong>UK Company:</strong> Nexus eVentures Corporation Ltd</p>
            <p><strong>VAT:</strong> GB 467 2495 57</p>
            <p>151 Lapage Street, Bradford, England, BD3 8AF</p>
            <div className="mini-platforms">
              {platformLogos.map((platform) => <PlatformLogo key={platform.name} type={platform.kind} />)}
            </div>
          </div>
          <form className="contact-form">
            {[
              ar ? "الاسم الكامل" : "Full Name",
              ar ? "البريد الإلكتروني" : "Email Address",
              ar ? "رقم واتساب" : "WhatsApp Number",
              ar ? "اسم العلامة / الشركة" : "Brand / Company Name",
            ].map((label) => (
              <label key={label}>{label}<input required={label !== (ar ? "رقم واتساب" : "WhatsApp Number")} /></label>
            ))}
            <label>{ar ? "أنا" : "I am a"}<select><option>{ar ? "علامة تبحث عن توزيع خليجي" : "Brand looking for Gulf distribution"}</option><option>{ar ? "بائع يبحث عن علامات حصرية" : "Seller looking for exclusive brands"}</option><option>{ar ? "إعلام / صحافة" : "Media / Press"}</option></select></label>
            <label>{ar ? "التقييم الحالي على أمازون" : "Current star rating on Amazon"}<select><option>5 stars</option><option>4-5 stars</option><option>3-4 stars</option><option>Below 3 stars</option></select></label>
            <label>{ar ? "الرسالة" : "Message"}<textarea rows={5} /></label>
            <button className="btn btn-gold" type="submit">{ar ? "إرسال طلب الشراكة" : "Send Partnership Request"}</button>
          </form>
        </section>
      </PageIntro>
    </SiteShell>
  );
}

export function ContactPage({ lang }: { lang: Lang }) {
  const ar = lang === "ar";
  const contactStats = ar
    ? [["30", "يوماً كهدف للإطلاق"], ["4", "منصات سوقية"], ["1,000+", "ضمن شبكة البائعين"]]
    : [["30", "day launch target"], ["4", "marketplaces covered"], ["1,000+", "seller network"]];
  const contactSteps = ar
    ? [
        ["01", "مراجعة العلامة", "نراجع الفئة، التقييمات الحالية، حضورك في الأسواق، وفرصة الطلب في الخليج."],
        ["02", "خطة الإطلاق", "نحدد المسار الأنسب للإمارات والسعودية، وترتيب المنصات، ونموذج التشغيل."],
        ["03", "مسار الاتفاق", "إذا كانت الفرصة مناسبة، ننتقل إلى شروط الجملة أو التوزيع الحصري."],
      ]
    : [
        ["01", "Brand review", "We check category fit, existing reviews, current marketplace traction, and Gulf demand."],
        ["02", "Launch plan", "You receive the recommended UAE and KSA route, platform sequence, and operating model."],
        ["03", "Agreement path", "If the fit is strong, we move into wholesale or exclusive distribution terms."],
      ];

  return (
    <SiteShell lang={lang}>
      <Hero
        lang={lang}
        image="meeting"
        title={ar ? "ابدأ شراكة خليجية" : "Start a Gulf Partnership"}
        subtitle={
          ar
            ? "أخبرنا عن علامتك ومنتجاتك وأدائك في الأسواق، وسنراجع فرصة الإطلاق في الخليج."
            : "Tell us about your brand, products, and marketplace traction. We will review the Gulf launch opportunity and respond with next steps."
        }
      />
      <PageIntro>
        <section className="contact-page-grid">
          <div className="contact-panel">
            <div>
              <span className="contact-kicker">{ar ? "طلب شراكة" : "Partnership intake"}</span>
              <h2>{ar ? "أرسل لنا العلامة. نرسم لها طريق الخليج." : "Bring us the brand. We'll map the Gulf route."}</h2>
              <p>
                {ar
                  ? "استخدم هذه الصفحة لطلبات توزيع العلامات، وصول البائعين، أو الشراكات. أفضل الطلبات تتضمن روابط السوق، التقييمات الحالية، والفئات المستهدفة."
                  : "Use this page for brand distribution, seller access, or partnership enquiries. The strongest submissions include marketplace links, current ratings, and target categories."}
              </p>
            </div>

            <div className="contact-statline" aria-label="Contact proof points">
              {contactStats.map(([value, label]) => (
                <span key={label}>
                  <strong>{value}</strong>
                  {label}
                </span>
              ))}
            </div>

            <div className="contact-routes">
              <a href="mailto:info@nexuseventurescorp.com">
                <Icon name="mail" />
                <span>
                  <strong>info@nexuseventurescorp.com</strong>
                  {ar ? "البريد المباشر للشراكات" : "Direct partnership inbox"}
                </span>
              </a>
              <div>
                <Icon name="globe" />
                <span>
                  <strong>Amazon UAE, Amazon KSA, Noon UAE, Noon KSA</strong>
                  {ar ? "أسواق الإطلاق التي نراجعها لكل علامة" : "Launch markets we review for every fit"}
                </span>
              </div>
              <div>
                <Icon name="shield" />
                <span>
                  <strong>Nexus eVentures Corporation Ltd</strong>
                  {ar ? "شركة بريطانية مع تشغيل للأسواق الخليجية" : "UK company with Gulf marketplace operations"}
                </span>
              </div>
            </div>

            <div className="mini-platforms">
              {platformLogos.map((platform) => (
                <PlatformLogo key={platform.name} type={platform.kind} />
              ))}
            </div>
          </div>

          <form className="contact-form contact-form-elevated">
            <div className="form-heading">
              <span>{ar ? "نموذج الطلب" : "Request form"}</span>
              <h2>{ar ? "أخبرنا ماذا تريد أن تطلق." : "Tell us what you want to launch."}</h2>
              <p>{ar ? "شاركنا معلومات كافية لمراجعة جادة، وسنرد بالخطوة التالية الأنسب." : "Share enough context for a serious first review. We will respond with the most relevant next step."}</p>
            </div>

            <div className="form-row">
              <label>
                {ar ? "الاسم الكامل" : "Full name"}
                <input required placeholder={ar ? "اسمك" : "Your name"} />
              </label>
              <label>
                {ar ? "البريد المهني" : "Work email"}
                <input required type="email" placeholder="name@company.com" />
              </label>
            </div>

            <div className="form-row">
              <label>
                {ar ? "العلامة / الشركة" : "Brand / company"}
                <input required placeholder={ar ? "اسم العلامة" : "Brand name"} />
              </label>
              <label>
                {ar ? "واتساب" : "WhatsApp"}
                <input placeholder="+44 / +971 / +966" />
              </label>
            </div>

            <div className="form-row">
              <label>
                {ar ? "نوع الطلب" : "Enquiry type"}
                <select>
                  <option>{ar ? "علامة تبحث عن توزيع خليجي" : "Brand looking for Gulf distribution"}</option>
                  <option>{ar ? "بائع يبحث عن علامات حصرية" : "Seller looking for exclusive brands"}</option>
                  <option>{ar ? "منصة أو شريك استراتيجي" : "Marketplace / strategic partner"}</option>
                  <option>{ar ? "إعلام / صحافة" : "Media / Press"}</option>
                </select>
              </label>
              <label>
                {ar ? "التقييم الحالي" : "Current rating"}
                <select>
                  <option>{ar ? "4.5+ نجوم" : "4.5+ stars"}</option>
                  <option>{ar ? "4.0-4.5 نجوم" : "4.0-4.5 stars"}</option>
                  <option>{ar ? "3.5-4.0 نجوم" : "3.5-4.0 stars"}</option>
                  <option>{ar ? "غير موجودة حالياً على أمازون" : "Not currently on Amazon"}</option>
                </select>
              </label>
            </div>

            <label>
              {ar ? "رابط السوق أو الموقع" : "Marketplace or website link"}
              <input placeholder={ar ? "رابط أمازون أو موقع العلامة" : "Amazon, brand site, or marketplace URL"} />
            </label>

            <label>
              {ar ? "ما الذي يجب أن نعرفه؟" : "What should we know?"}
              <textarea rows={5} placeholder={ar ? "الفئة، أهم المنتجات، الأسواق الحالية، المبيعات الشهرية، أو أهداف الخليج." : "Category, top products, current markets, monthly sales, or Gulf goals."} />
            </label>

            <button className="btn btn-gold" type="submit">{ar ? "إرسال طلب الشراكة" : "Send Partnership Request"}</button>
          </form>
        </section>

        <section className="contact-workflow" aria-label="What happens after you contact Nexus eVentures">
          <div className="contact-workflow-head">
            <span className="contact-kicker">{ar ? "بعد الإرسال" : "After you submit"}</span>
            <h2>{ar ? "ماذا يحدث بعد ذلك" : "What happens next"}</h2>
          </div>
          <div className="contact-workflow-list">
            {contactSteps.map(([number, title, body]) => (
              <article key={title}>
                <span>{number}</span>
                <div>
                  <h3>{title}</h3>
                  <p>{body}</p>
                </div>
              </article>
            ))}
          </div>
        </section>
      </PageIntro>
    </SiteShell>
  );
}

function translateShort(item: string) {
  const map: Record<string, string> = {
    "Full listing creation": "إنشاء القوائم بالكامل",
    "Arabic and English content": "محتوى عربي وإنجليزي",
    "PPC advertising": "إعلانات PPC",
    "Monthly reporting": "تقارير شهرية",
    "Buy Box protection": "حماية صندوق الشراء",
    "1,000+ seller network": "شبكة 1,000+ بائع",
  };
  return map[item] || item;
}
