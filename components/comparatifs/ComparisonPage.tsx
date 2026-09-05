import Image from "next/image";
import Link from "next/link";

export type ComparisonOffer = {
  position: number;
  name: string;
  rating: string;
  badge: string;
  badgeColor: string;
  best: string;
  description: string;
  image?: string;
  imageAlt: string;
  affiliate: string;
  review: string;
  strengths: string[];
  limits: string;
  pricing: string;
  ideal: string;
};

export type ComparisonFaq = {
  question: string;
  answer: string;
};

type GuideStep = {
  title: string;
  text: string;
};

type ComparisonPageProps = {
  breadcrumb: string;
  eyebrow: string;
  title: string;
  highlightedTitle: string;
  introduction: string;
  topLabel: string;
  topHeading: string;
  offers: ComparisonOffer[];
  analysisEyebrow: string;
  analysisHeading: string;
  analysisIntro: string;
  guideEyebrow: string;
  guideHeading: string;
  guideSteps: GuideStep[];
  practicalEyebrow: string;
  practicalHeading: string;
  practicalIntro: string;
  practicalItems: GuideStep[];
  methodHeading: string;
  methodText: string;
  criteria: GuideStep[];
  faqHeading: string;
  faqs: ComparisonFaq[];
  finalParagraphs: string[];
  relatedLinks: Array<{ href: string; label: string }>;
};

function safeJsonLd(value: unknown) {
  return JSON.stringify(value).replace(/</g, "\\u003c");
}

export default function ComparisonPage({
  breadcrumb,
  eyebrow,
  title,
  highlightedTitle,
  introduction,
  topLabel,
  topHeading,
  offers,
  analysisEyebrow,
  analysisHeading,
  analysisIntro,
  guideEyebrow,
  guideHeading,
  guideSteps,
  practicalEyebrow,
  practicalHeading,
  practicalIntro,
  practicalItems,
  methodHeading,
  methodText,
  criteria,
  faqHeading,
  faqs,
  finalParagraphs,
  relatedLinks,
}: ComparisonPageProps) {
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: topHeading,
    numberOfItems: offers.length,
    itemListElement: offers.map((offer) => ({
      "@type": "ListItem",
      position: offer.position,
      name: offer.name,
      url: `https://nightrankai.com${offer.review}`,
    })),
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };

  return (
    <main className="min-h-screen bg-black px-4 py-10 text-white sm:px-6 lg:px-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonLd(itemListSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonLd(faqSchema) }}
      />

      <div className="mx-auto max-w-7xl">
        <nav
          aria-label="Fil d’Ariane"
          className="mb-8 flex flex-wrap items-center gap-2 text-sm text-gray-400"
        >
          <Link href="/" className="transition hover:text-pink-400">Accueil</Link>
          <span>›</span>
          <Link href="/comparatifs" className="transition hover:text-pink-400">
            Comparatifs
          </Link>
          <span>›</span>
          <span className="text-gray-200">{breadcrumb}</span>
        </nav>

        <section className="relative mb-10 overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-950 p-7 sm:p-10 lg:p-14">
          <div className="pointer-events-none absolute -right-32 -top-40 h-96 w-96 rounded-full bg-pink-600/20 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-40 left-1/3 h-80 w-80 rounded-full bg-purple-700/20 blur-3xl" />

          <div className="relative grid items-center gap-10 lg:grid-cols-[1.5fr_0.8fr]">
            <div>
              <p className="mb-4 font-bold text-pink-500">{eyebrow}</p>
              <h1 className="mb-6 max-w-4xl text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl">
                {title} <span className="text-pink-500">{highlightedTitle}</span>
              </h1>
              <p className="max-w-3xl text-lg leading-8 text-gray-300">
                {introduction}
              </p>

              <div className="mt-8 grid gap-4 text-sm text-gray-200 sm:grid-cols-2 lg:grid-cols-4">
                {[
                  ["✓", "Comparaison indépendante"],
                  ["↻", "Informations vérifiées"],
                  ["⚜", "Pensé pour le Québec"],
                  ["🔒", "Conseils de confidentialité"],
                ].map(([icon, label]) => (
                  <div key={label} className="flex items-center gap-3 rounded-xl border border-zinc-800 bg-black/40 p-4">
                    <span className="text-xl text-pink-500">{icon}</span>
                    <span>{label}</span>
                  </div>
                ))}
              </div>
            </div>

            <aside className="rounded-2xl border border-pink-500/20 bg-black/50 p-6 shadow-2xl shadow-pink-950/20">
              <h2 className="mb-5 text-xl font-bold">Comment lire ce classement?</h2>
              <ul className="space-y-4 text-sm leading-6 text-gray-300">
                <li>✓ Les notes sont éditoriales et non officielles.</li>
                <li>✓ Les services et leurs prix peuvent évoluer.</li>
                <li>✓ Les liens « Visiter » peuvent être affiliés.</li>
                <li>✓ Les plateformes sont réservées aux adultes.</li>
              </ul>
              <div className="mt-6 rounded-xl border border-zinc-800 bg-zinc-950 p-5">
                <p className="text-sm text-gray-400">Notre choix global</p>
                <p className="mt-1 text-2xl font-black text-pink-500">{offers[0].name}</p>
                <p className="mt-2 font-bold text-yellow-400">★★★★★ {offers[0].rating}</p>
              </div>
            </aside>
          </div>
        </section>

        <section className="mb-14">
          <div className="mb-7">
            <p className="font-semibold text-pink-500">{topLabel}</p>
            <h2 className="mt-2 text-3xl font-black sm:text-4xl">{topHeading}</h2>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            {offers.map((offer, index) => (
              <article
                key={offer.name}
                className={`group overflow-hidden rounded-3xl border bg-zinc-950 transition duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-pink-950/30 ${
                  index === 0 ? "border-yellow-500/60 lg:col-span-2" : "border-zinc-800 hover:border-pink-500/60"
                }`}
              >
                <div className={`grid ${index === 0 ? "md:grid-cols-[0.9fr_1.1fr]" : "md:grid-cols-[0.85fr_1.15fr]"}`}>
                  <div className="relative min-h-[300px] overflow-hidden bg-gradient-to-br from-pink-950 via-zinc-950 to-black">
                    {offer.image ? (
                      <Image
                        src={offer.image}
                        alt={offer.imageAlt}
                        fill
                        sizes={index === 0 ? "(max-width: 768px) 100vw, 45vw" : "(max-width: 768px) 100vw, 35vw"}
                        className="object-cover transition duration-500 group-hover:scale-105"
                        priority={index === 0}
                      />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center p-8 text-center">
                        <div>
                          <span className="text-5xl">✦</span>
                          <p className="mt-4 text-2xl font-black text-pink-400">Image de {offer.name}</p>
                          <p className="mt-2 text-sm text-gray-500">Emplacement prêt pour votre visuel</p>
                        </div>
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/5 to-transparent md:bg-gradient-to-r md:from-transparent md:to-zinc-950/40" />
                    <div className="absolute left-4 top-4 rounded-xl border border-white/20 bg-black/70 px-4 py-2 text-xl font-black backdrop-blur">
                      #{offer.position}
                    </div>
                  </div>

                  <div className="flex flex-col p-6 sm:p-8">
                    <div className={`mb-5 inline-flex w-fit rounded-full bg-gradient-to-r ${offer.badgeColor} px-4 py-2 text-xs font-black uppercase tracking-wide text-white`}>
                      {offer.badge}
                    </div>
                    <h3 className="text-3xl font-black sm:text-4xl">{offer.name}</h3>
                    <div className="mt-3 flex flex-wrap items-center gap-3">
                      <span className="font-bold text-yellow-400">★★★★★</span>
                      <span className="font-bold">{offer.rating}</span>
                      <span className="text-sm text-gray-500">Note éditoriale</span>
                    </div>
                    <p className="mt-5 leading-7 text-gray-300">{offer.description}</p>
                    <ul className="mt-5 grid gap-3 text-sm text-gray-300">
                      {offer.strengths.map((strength) => (
                        <li key={strength} className="flex items-center gap-3">
                          <span className="flex h-5 w-5 items-center justify-center rounded-full border border-pink-500 text-xs text-pink-400">✓</span>
                          {strength}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-7 flex flex-wrap gap-3">
                      <a href={offer.affiliate} target="_blank" rel="nofollow sponsored noopener noreferrer" className="rounded-xl bg-pink-600 px-5 py-3 font-bold transition hover:bg-pink-500">
                        Visiter {offer.name} →
                      </a>
                      <Link href={offer.review} className="rounded-xl border border-pink-500 px-5 py-3 font-bold text-pink-400 transition hover:bg-pink-500 hover:text-white">
                        Lire l’avis
                      </Link>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="mb-14 overflow-x-auto rounded-3xl border border-zinc-800 bg-zinc-950 p-6 sm:p-8">
          <h2 className="mb-3 text-3xl font-black">Tableau comparatif rapide</h2>
          <p className="mb-7 max-w-3xl leading-7 text-gray-400">
            Ce résumé aide à identifier rapidement le positionnement de chaque service. Vérifiez toujours les prix et conditions directement sur la plateforme avant toute inscription.
          </p>
          <table className="w-full min-w-[850px] text-left">
            <thead>
              <tr className="border-b border-zinc-700 text-sm uppercase tracking-wide text-pink-400">
                <th className="px-3 py-4">Position</th><th className="px-3 py-4">Plateforme</th><th className="px-3 py-4">Note</th><th className="px-3 py-4">Meilleur pour</th><th className="px-3 py-4">Tarification</th><th className="px-3 py-4">Accès</th>
              </tr>
            </thead>
            <tbody>
              {offers.map((offer) => (
                <tr key={offer.name} className="border-b border-zinc-800 text-gray-300 transition hover:bg-zinc-900/80">
                  <td className="px-3 py-5 font-black text-pink-500">#{offer.position}</td>
                  <td className="px-3 py-5 font-bold text-white">{offer.name}</td>
                  <td className="px-3 py-5 text-yellow-400">{offer.rating}</td>
                  <td className="px-3 py-5">{offer.best}</td>
                  <td className="max-w-xs px-3 py-5 text-sm">{offer.pricing}</td>
                  <td className="px-3 py-5">Québec / Canada</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        <section className="mb-14">
          <div className="mb-8 max-w-4xl">
            <p className="font-semibold text-pink-500">{analysisEyebrow}</p>
            <h2 className="mt-2 text-3xl font-black sm:text-4xl">{analysisHeading}</h2>
            <p className="mt-5 text-lg leading-8 text-gray-300">{analysisIntro}</p>
          </div>
          <div className="space-y-7">
            {offers.map((offer) => (
              <article key={`analysis-${offer.name}`} className="rounded-3xl border border-zinc-800 bg-zinc-950 p-7 sm:p-9">
                <div className="grid gap-8 lg:grid-cols-[1fr_0.42fr]">
                  <div>
                    <p className="mb-2 font-bold text-pink-500">#{offer.position} • {offer.badge}</p>
                    <h3 className="text-3xl font-black">Notre avis sur {offer.name}</h3>
                    <p className="mt-5 leading-8 text-gray-300">{offer.description}</p>
                    <h4 className="mt-7 text-xl font-bold">À qui convient {offer.name}?</h4>
                    <p className="mt-3 leading-7 text-gray-300">{offer.ideal}</p>
                    <h4 className="mt-7 text-xl font-bold">Prix et fonctionnement</h4>
                    <p className="mt-3 leading-7 text-gray-300">{offer.pricing}</p>
                  </div>
                  <aside className="space-y-5">
                    <div className="rounded-2xl border border-emerald-500/20 bg-emerald-500/5 p-5">
                      <h4 className="font-bold text-emerald-400">Points forts</h4>
                      <ul className="mt-4 space-y-3 text-sm text-gray-300">
                        {offer.strengths.map((strength) => <li key={strength}>✓ {strength}</li>)}
                      </ul>
                    </div>
                    <div className="rounded-2xl border border-orange-500/20 bg-orange-500/5 p-5">
                      <h4 className="font-bold text-orange-400">Point à considérer</h4>
                      <p className="mt-3 text-sm leading-6 text-gray-300">{offer.limits}</p>
                    </div>
                  </aside>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="mb-14 grid gap-6 lg:grid-cols-2">
          <article className="rounded-3xl border border-zinc-800 bg-zinc-950 p-7 sm:p-9">
            <p className="font-semibold text-pink-500">{guideEyebrow}</p>
            <h2 className="mt-2 text-3xl font-black">{guideHeading}</h2>
            <div className="mt-7 space-y-6 text-gray-300">
              {guideSteps.map((step, index) => (
                <div key={step.title}>
                  <h3 className="text-lg font-bold text-white">{index + 1}. {step.title}</h3>
                  <p className="mt-2 leading-7">{step.text}</p>
                </div>
              ))}
            </div>
          </article>

          <article className="rounded-3xl border border-zinc-800 bg-zinc-950 p-7 sm:p-9">
            <p className="font-semibold text-pink-500">{practicalEyebrow}</p>
            <h2 className="mt-2 text-3xl font-black">{practicalHeading}</h2>
            <p className="mt-5 leading-8 text-gray-300">{practicalIntro}</p>
            <div className="mt-7 space-y-4">
              {practicalItems.map((item) => (
                <div key={item.title} className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-5">
                  <h3 className="font-bold text-white">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-gray-400">{item.text}</p>
                </div>
              ))}
            </div>
          </article>
        </section>

        <section className="mb-14 rounded-3xl border border-zinc-800 bg-zinc-950 p-7 sm:p-10">
          <p className="font-semibold text-pink-500">Transparence éditoriale</p>
          <h2 className="mt-2 text-3xl font-black">{methodHeading}</h2>
          <p className="mt-5 max-w-4xl leading-8 text-gray-300">{methodText}</p>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {criteria.map((criterion) => (
              <div key={criterion.title} className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-5">
                <h3 className="font-bold text-pink-400">{criterion.title}</h3>
                <p className="mt-2 text-sm leading-6 text-gray-400">{criterion.text}</p>
              </div>
            ))}
          </div>
          <p className="mt-7 text-sm leading-6 text-gray-500">
            Certains liens sont affiliés. NightRank AI peut recevoir une commission sans coût supplémentaire pour le visiteur. Cette rémunération ne garantit jamais une meilleure position dans le classement.
          </p>
        </section>

        <section className="mb-14">
          <p className="font-semibold text-pink-500">Questions fréquentes</p>
          <h2 className="mt-2 text-3xl font-black sm:text-4xl">{faqHeading}</h2>
          <div className="mt-8 grid gap-5 lg:grid-cols-2">
            {faqs.map((faq) => (
              <article key={faq.question} className="rounded-2xl border border-zinc-800 bg-zinc-950 p-6">
                <h3 className="text-lg font-bold">{faq.question}</h3>
                <p className="mt-3 leading-7 text-gray-400">{faq.answer}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mb-14 rounded-3xl border border-pink-500/20 bg-gradient-to-br from-zinc-950 to-pink-950/20 p-7 sm:p-10">
          <h2 className="text-3xl font-black">Notre avis final</h2>
          <div className="mt-6 max-w-4xl space-y-5 leading-8 text-gray-300">
            {finalParagraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </div>
        </section>

        <section className="grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-zinc-800 bg-zinc-950 p-7 sm:p-8">
            <h2 className="text-2xl font-black">Guides et comparatifs liés</h2>
            <div className="mt-6 grid gap-3">
              {relatedLinks.map((link) => (
                <Link key={link.href} href={link.href} className="rounded-xl border border-zinc-800 bg-zinc-900/50 px-5 py-4 font-semibold text-pink-400 transition hover:border-pink-500 hover:text-pink-300">
                  {link.label} →
                </Link>
              ))}
            </div>
          </div>
          <div className="rounded-3xl border border-zinc-800 bg-zinc-950 p-7 sm:p-8">
            <h2 className="text-2xl font-black">Explorer les avis individuels</h2>
            <p className="mt-4 leading-7 text-gray-400">Consultez chaque analyse pour comprendre les fonctionnalités, les limites et le positionnement de la plateforme avant de la visiter.</p>
            <div className="mt-6 grid gap-3">
              {offers.map((offer) => (
                <Link key={offer.review} href={offer.review} className="flex items-center justify-between rounded-xl border border-zinc-800 bg-zinc-900/50 px-5 py-4 font-semibold transition hover:border-pink-500">
                  <span>Avis {offer.name}</span><span className="text-pink-500">→</span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
