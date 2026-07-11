import type { Metadata } from "next";
import { cities } from "../data";
import { getOffersByCategory } from "@/lib/getOffers";
import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";
import ItemListSchema from "@/components/seo/ItemListSchema";
import FAQSchema from "@/components/seo/FAQSchema";
import AuthorBox from "@/components/seo/AuthorBox";

export const metadata: Metadata = {
  title: "Meilleurs sites webcams au Québec en 2026 | NightRank AI",

  description:
    "Comparez les meilleurs sites webcams accessibles au Québec et au Canada : Jerkmate, LiveJasmin et BongaCams. Avis, classement, guides cam live et pages locales.",

  keywords: [
    "webcam Québec",
    "site webcam Québec",
    "cam live Québec",
    "cam to cam Québec",
    "Jerkmate Québec",
    "LiveJasmin Québec",
    "BongaCams Québec",
    "meilleur site webcam Canada",
    "webcam Montréal",
    "webcam Laval",
    "webcam Québec ville",
  ],

  authors: [{ name: "NightRank AI Editorial Team" }],
  creator: "NightRank AI",
  publisher: "NightRank AI",

  alternates: {
    canonical: "https://nightrankai.com/cams",
  },

  openGraph: {
    title: "Meilleurs sites webcams au Québec en 2026",
    description:
      "Classement, avis et comparatifs des meilleures plateformes cam live accessibles au Québec et au Canada.",
    url: "https://nightrankai.com/cams",
    siteName: "NightRank AI",
    locale: "fr_CA",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Meilleurs sites webcams au Québec",
    description:
      "Découvrez notre classement des meilleures plateformes webcam accessibles au Québec.",
  },

  robots: {
    index: true,
    follow: true,
  },
};

const webcamOffers = getOffersByCategory("webcam");

const faqItems = [
  {
    question: "Quel est le meilleur site webcam au Québec en 2026 ?",
    answer:
      "Jerkmate occupe actuellement la première place de notre classement grâce à son interface moderne, sa simplicité d’utilisation et son expérience adaptée aux appareils mobiles.",
  },
  {
    question: "Les sites webcams présentés sont-ils accessibles au Canada ?",
    answer:
      "Oui. Les plateformes présentées sur NightRank AI sont généralement accessibles aux visiteurs adultes du Québec et du Canada, sous réserve de leurs propres conditions d’utilisation.",
  },
  {
    question: "Quelle plateforme choisir pour une expérience premium ?",
    answer:
      "LiveJasmin est généralement notre recommandation pour les visiteurs qui recherchent une présentation plus haut de gamme et une plateforme reconnue internationalement.",
  },
  {
    question: "Quelle plateforme propose le plus de variété ?",
    answer:
      "BongaCams se distingue principalement par son grand choix de profils et de catégories.",
  },
  {
    question: "NightRank AI héberge-t-il des webcams en direct ?",
    answer:
      "Non. NightRank AI est un guide indépendant de comparaison. Les visiteurs sont redirigés vers les plateformes partenaires.",
  },
];

export default function CamsPage() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-14">
      <BreadcrumbSchema
        items={[
          {
            name: "Accueil",
            url: "https://nightrankai.com",
          },
          {
            name: "Webcams",
            url: "https://nightrankai.com/cams",
          },
        ]}
      />

      <ItemListSchema
        title="Meilleurs sites webcams au Québec en 2026"
        items={webcamOffers.map((offer) => ({
          name: offer.name,
          url: `https://nightrankai.com/blog/${offer.slug}-quebec`,
        }))}
      />

      <FAQSchema faqs={faqItems} />

      <div className="max-w-7xl mx-auto">
        <a
          href="/"
          className="inline-block text-pink-400 hover:text-pink-300"
        >
          ← Retour accueil
        </a>

        {/* HERO */}

        <section className="mt-10 bg-zinc-950 border border-zinc-800 rounded-3xl p-8 md:p-12">
          <p className="text-pink-500 font-bold mb-4">
            Webcams Québec • Comparatif 2026 • Réservé aux adultes
          </p>

          <h1 className="text-5xl md:text-6xl font-bold text-pink-500 mb-6">
            Meilleurs sites webcams au Québec en 2026
          </h1>

          <p className="text-xl text-gray-300 max-w-4xl leading-relaxed mb-6">
            Comparez les plateformes cam live les plus pertinentes pour les
            visiteurs adultes du Québec et du Canada. NightRank AI analyse
            notamment la simplicité, l’expérience mobile, la variété, la
            réputation et le positionnement de chaque plateforme.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#classement"
              className="bg-pink-600 hover:bg-pink-700 px-6 py-3 rounded-xl font-bold"
            >
              Voir le classement
            </a>

            <a
              href="#villes"
              className="border border-pink-500 text-pink-400 hover:bg-pink-500/10 px-6 py-3 rounded-xl font-bold"
            >
              Explorer les villes
            </a>

            <a
              href="/comparatifs/meilleurs-sites-webcams-quebec"
              className="border border-zinc-700 hover:border-pink-500 px-6 py-3 rounded-xl font-bold"
            >
              Comparatif détaillé
            </a>
          </div>
        </section>

        {/* TRUST BAR */}

        <section className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
          <TrustCard
            title="Comparatifs indépendants"
            text="Les plateformes sont présentées selon des critères éditoriaux cohérents."
          />

          <TrustCard
            title="Québec-first"
            text="Contenu conçu pour les visiteurs francophones du Québec et du Canada."
          />

          <TrustCard
            title="Transparence affiliée"
            text="Certains liens peuvent générer une commission sans coût supplémentaire."
          />

          <TrustCard
            title="Réservé aux adultes"
            text="Les visiteurs doivent respecter l’âge légal et les règles des plateformes."
          />
        </section>

        {/* CLASSEMENT DYNAMIQUE */}

        <section id="classement" className="mt-14 scroll-mt-24">
          <div className="mb-8">
            <p className="text-pink-400 font-bold mb-3">
              Classement NightRank AI
            </p>

            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Les meilleures plateformes webcam
            </h2>

            <p className="text-gray-300 max-w-4xl leading-relaxed">
              Le classement ci-dessous est alimenté par notre base centralisée.
              Lorsqu’une nouvelle plateforme webcam est ajoutée dans
              <code className="text-pink-400"> lib/offers.ts</code>, elle peut
              apparaître automatiquement sur cette page.
            </p>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
            {webcamOffers.map((offer, index) => (
              <article
                key={offer.slug}
                className="bg-zinc-900 border border-zinc-800 rounded-3xl p-7 hover:border-pink-500 hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex items-center justify-between gap-4 mb-5">
                  <p className="text-pink-500 text-xl font-bold">
                    #{index + 1}
                  </p>

                  <p className="text-yellow-400 font-bold">
                    ★★★★★ {offer.rating}/5
                  </p>
                </div>

                <div className="h-52 rounded-2xl overflow-hidden border border-zinc-800 bg-black mb-6">
                  <img
                    src={offer.image}
                    alt={`${offer.name} Québec`}
                    className="w-full h-full object-cover"
                  />
                </div>

                <h3 className="text-3xl font-bold mb-4">{offer.name}</h3>

                <p className="text-gray-300 leading-relaxed mb-6">
                  {offer.description}
                </p>

                <div className="mb-6">
                  <p className="font-bold text-white mb-3">Points forts</p>

                  <ul className="space-y-2 text-gray-300">
                    {offer.pros.slice(0, 3).map((pro) => (
                      <li key={pro}>✓ {pro}</li>
                    ))}
                  </ul>
                </div>

                <div className="grid gap-3">
                  <a
                    href={`/blog/${offer.slug}-quebec`}
                    className="w-full text-center border border-pink-500 text-pink-400 hover:bg-pink-500/10 py-3 rounded-xl font-bold"
                  >
                    Lire notre avis
                  </a>

                  <a
                    href={offer.affiliate}
                    target="_blank"
                    rel="nofollow sponsored noopener noreferrer"
                    className="w-full text-center bg-pink-600 hover:bg-pink-700 py-3 rounded-xl font-bold"
                  >
                    Visiter {offer.name}
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* TABLEAU DYNAMIQUE */}

        <section className="mt-14 bg-zinc-900 border border-zinc-800 rounded-3xl p-8">
          <h2 className="text-4xl font-bold text-pink-500 mb-6">
            Comparatif rapide
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[720px] text-left">
              <thead>
                <tr className="border-b border-zinc-700 text-pink-400">
                  <th className="py-4 pr-5">Position</th>
                  <th className="py-4 pr-5">Plateforme</th>
                  <th className="py-4 pr-5">Note</th>
                  <th className="py-4 pr-5">Points forts</th>
                  <th className="py-4">Avis</th>
                </tr>
              </thead>

              <tbody>
                {webcamOffers.map((offer, index) => (
                  <tr
                    key={offer.slug}
                    className="border-b border-zinc-800 last:border-0"
                  >
                    <td className="py-5 pr-5 font-bold">#{index + 1}</td>

                    <td className="py-5 pr-5 font-bold">{offer.name}</td>

                    <td className="py-5 pr-5 text-yellow-400">
                      {offer.rating}/5
                    </td>

                    <td className="py-5 pr-5 text-gray-300">
                      {offer.pros.slice(0, 2).join(" • ")}
                    </td>

                    <td className="py-5">
                      <a
                        href={`/blog/${offer.slug}-quebec`}
                        className="text-pink-400 hover:text-pink-300 font-bold"
                      >
                        Lire →
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* GUIDE SEO */}

        <section className="mt-14 grid lg:grid-cols-2 gap-6">
          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8">
            <h2 className="text-3xl font-bold text-pink-500 mb-5">
              Comment choisir un site webcam ?
            </h2>

            <p className="text-gray-300 leading-relaxed mb-5">
              Le meilleur choix dépend principalement du type d’expérience
              recherché. Certains visiteurs privilégient une interface moderne,
              d’autres préfèrent une image premium ou un catalogue plus vaste.
            </p>

            <ul className="space-y-3 text-gray-300">
              <li>✓ Vérifier la compatibilité mobile</li>
              <li>✓ Comparer la simplicité de navigation</li>
              <li>✓ Examiner la réputation de la plateforme</li>
              <li>✓ Lire les conditions et paramètres de confidentialité</li>
              <li>✓ Comparer plusieurs plateformes avant de choisir</li>
            </ul>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8">
            <h2 className="text-3xl font-bold text-pink-500 mb-5">
              Quelle plateforme correspond à votre besoin ?
            </h2>

            <div className="space-y-6">
              <Recommendation
                title="Pour une expérience moderne"
                text="Jerkmate est notre recommandation générale pour sa simplicité et son positionnement actuel."
              />

              <Recommendation
                title="Pour une expérience premium"
                text="LiveJasmin convient davantage aux visiteurs qui recherchent une présentation plus haut de gamme."
              />

              <Recommendation
                title="Pour un grand choix"
                text="BongaCams est particulièrement pertinent pour les visiteurs qui veulent explorer davantage de profils et de catégories."
              />
            </div>
          </div>
        </section>

        {/* PAGES LOCALES */}

        <section id="villes" className="mt-14 scroll-mt-24">
          <div className="mb-8">
            <p className="text-pink-400 font-bold mb-3">
              Pages locales Québec
            </p>

            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Webcams par ville
            </h2>

            <p className="text-gray-300 max-w-4xl">
              Explorez nos pages locales dédiées aux principales villes du
              Québec. Elles permettent de découvrir les plateformes recommandées
              et les guides associés à chaque zone.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {cities.map((city) => (
              <a
                key={city.slug}
                href={`/webcam/${city.slug}`}
                className="bg-zinc-900 border border-zinc-800 rounded-2xl p-5 hover:border-pink-500 hover:-translate-y-1 transition-all"
              >
                <h3 className="text-xl font-bold mb-2">
                  Webcam {city.name}
                </h3>

                <p className="text-sm text-gray-400">
                  Plateformes et guide local
                </p>

                <p className="text-pink-400 font-bold mt-4">
                  Explorer →
                </p>
              </a>
            ))}
          </div>
        </section>

        {/* MAILLAGE INTERNE */}

        <section className="mt-14 bg-zinc-950 border border-zinc-800 rounded-3xl p-8">
          <h2 className="text-4xl font-bold text-pink-500 mb-6">
            Guides et comparatifs populaires
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            <InternalLink
              title="Top 5 Webcams Québec 2026"
              href="/blog/top-5-webcams-quebec-2026"
            />

            <InternalLink
              title="Meilleurs sites webcams au Québec"
              href="/blog/meilleurs-sites-webcams-quebec"
            />

            <InternalLink
              title="Cam to Cam Québec"
              href="/blog/cam-to-cam-quebec"
            />

            <InternalLink
              title="Jerkmate vs LiveJasmin"
              href="/blog/jerkmate-vs-livejasmin"
            />

            <InternalLink
              title="BongaCams vs Jerkmate"
              href="/blog/bongacams-vs-jerkmate"
            />

            <InternalLink
              title="LiveJasmin vs BongaCams"
              href="/blog/livejasmin-vs-bongacams"
            />
          </div>
        </section>

        {/* FAQ */}

        <section className="mt-14 bg-zinc-900 border border-zinc-800 rounded-3xl p-8">
          <h2 className="text-4xl font-bold text-pink-500 mb-8">
            Questions fréquentes
          </h2>

          <div className="space-y-8">
            {faqItems.map((item) => (
              <div key={item.question}>
                <h3 className="text-2xl font-bold mb-3">
                  {item.question}
                </h3>

                <p className="text-gray-300 leading-relaxed">
                  {item.answer}
                </p>
              </div>
            ))}
          </div>
        </section>

        <AuthorBox
          published="10 juillet 2026"
          updated="10 juillet 2026"
          readingTime="8 min"
        />

        {/* CTA FINAL */}

        <section className="mt-10 bg-gradient-to-r from-pink-600 to-pink-800 rounded-3xl p-8 md:p-12 text-center">
          <h2 className="text-4xl font-bold mb-5">
            Comparez les meilleures plateformes webcam
          </h2>

          <p className="text-lg mb-7 max-w-3xl mx-auto">
            Consultez notre comparatif détaillé pour examiner les avantages,
            les différences et les alternatives disponibles au Québec.
          </p>

          <a
            href="/comparatifs/meilleurs-sites-webcams-quebec"
            className="inline-block bg-white text-black hover:bg-gray-200 px-7 py-4 rounded-xl font-bold"
          >
            Voir le comparatif complet
          </a>
        </section>
      </div>
    </main>
  );
}

function TrustCard({
  title,
  text,
}: {
  title: string;
  text: string;
}) {
  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-5">
      <h2 className="font-bold text-pink-400 mb-2">{title}</h2>
      <p className="text-sm text-gray-400">{text}</p>
    </div>
  );
}

function Recommendation({
  title,
  text,
}: {
  title: string;
  text: string;
}) {
  return (
    <div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-300">{text}</p>
    </div>
  );
}

function InternalLink({
  title,
  href,
}: {
  title: string;
  href: string;
}) {
  return (
    <a
      href={href}
      className="bg-zinc-900 border border-zinc-800 rounded-2xl p-5 hover:border-pink-500 transition"
    >
      <h3 className="font-bold mb-3">{title}</h3>
      <p className="text-pink-400 font-bold">Lire le guide →</p>
    </a>
  );
}