import Link from "next/link";

export type GamingGuideData = {
  name: string;
  slug: string;
  rating: string;
  affiliate: string;
  official?: string;
  verdict: string;
  audience: string;
  access: string;
  pricing: string;
  strengths: string[];
  cautions: string[];
  sections: Array<{ title: string; paragraphs: string[] }>;
  faqs: Array<{ question: string; answer: string }>;
};

function safeJson(value: unknown) {
  return JSON.stringify(value).replace(/</g, "\\u003c");
}

export default function GamingGuide({ guide }: { guide: GamingGuideData }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: safeJson({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: `${guide.name} : avis et guide pour le Québec`,
            datePublished: "2026-09-07",
            dateModified: "2026-09-07",
            inLanguage: "fr-CA",
            author: { "@type": "Organization", name: "NightRank AI" },
            publisher: { "@type": "Organization", name: "NightRank AI" },
            mainEntityOfPage: `https://nightrankai.com/blog/${guide.slug}`,
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: safeJson({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: guide.faqs.map((faq) => ({
              "@type": "Question",
              name: faq.question,
              acceptedAnswer: { "@type": "Answer", text: faq.answer },
            })),
          }),
        }}
      />

      <section className="mb-10 grid gap-5 md:grid-cols-4">
        {[
          ["Note éditoriale", guide.rating],
          ["Meilleur pour", guide.audience],
          ["Accès", guide.access],
          ["Modèle", guide.pricing],
        ].map(([label, value]) => (
          <div key={label} className="rounded-3xl border border-zinc-800 bg-zinc-950 p-6">
            <p className="text-sm font-bold text-pink-400">{label}</p>
            <p className="mt-3 text-xl font-black">{value}</p>
          </div>
        ))}
      </section>

      <section className="mb-10 rounded-3xl border border-pink-900/60 bg-gradient-to-br from-zinc-950 to-pink-950/30 p-8">
        <h2 className="text-3xl font-black">Notre verdict sur {guide.name}</h2>
        <p className="mt-5 max-w-4xl text-lg leading-8 text-gray-300">{guide.verdict}</p>
        <div className="mt-7 flex flex-wrap gap-3">
          <a href={guide.affiliate} target="_blank" rel="nofollow sponsored noopener noreferrer" className="rounded-xl bg-pink-600 px-6 py-3 font-bold hover:bg-pink-500">
            Jouer à {guide.name} →
          </a>
          <Link href="/comparatifs/gaming-adulte-quebec" className="rounded-xl border border-pink-500 px-6 py-3 font-bold text-pink-400 hover:bg-pink-500/10">
            Comparer les 5 jeux
          </Link>
        </div>
      </section>

      <section className="mb-10 grid gap-6 lg:grid-cols-2">
        <article className="rounded-3xl border border-emerald-500/20 bg-emerald-500/5 p-8">
          <h2 className="text-2xl font-black text-emerald-400">Points forts</h2>
          <ul className="mt-5 space-y-3 text-gray-300">{guide.strengths.map((item) => <li key={item}>✓ {item}</li>)}</ul>
        </article>
        <article className="rounded-3xl border border-orange-500/20 bg-orange-500/5 p-8">
          <h2 className="text-2xl font-black text-orange-400">Points à vérifier</h2>
          <ul className="mt-5 space-y-3 text-gray-300">{guide.cautions.map((item) => <li key={item}>• {item}</li>)}</ul>
        </article>
      </section>

      {guide.sections.map((section) => (
        <section key={section.title} className="mb-10 rounded-3xl border border-zinc-800 bg-zinc-900 p-8">
          <h2 className="text-3xl font-black">{section.title}</h2>
          {section.paragraphs.map((paragraph) => <p key={paragraph} className="mt-5 leading-8 text-gray-300">{paragraph}</p>)}
        </section>
      ))}

      <section className="mb-10 rounded-3xl border border-zinc-800 bg-zinc-950 p-8">
        <h2 className="text-3xl font-black">FAQ sur {guide.name}</h2>
        <div className="mt-7 space-y-7">
          {guide.faqs.map((faq) => (
            <div key={faq.question}>
              <h3 className="text-xl font-bold">{faq.question}</h3>
              <p className="mt-2 leading-7 text-gray-300">{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
