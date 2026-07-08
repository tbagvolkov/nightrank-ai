import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Comparatifs adultes Québec | Webcams, Dating, AI et Gaming | NightRank AI",
  description:
    "Comparez les meilleures plateformes adultes, webcams, AI Companions, rencontres et gaming au Québec avec les guides indépendants NightRank AI.",
  keywords: [
    "comparatif adulte Québec",
    "comparatif webcam Québec",
    "comparatif AI girlfriend",
    "comparatif rencontre adulte",
    "meilleurs sites adultes Québec",
    "NightRank AI",
  ],
  authors: [{ name: "NightRank AI Editorial Team" }],
  creator: "NightRank AI",
  publisher: "NightRank AI",
  alternates: {
    canonical: "https://nightrankai.com/comparatifs",
  },
  openGraph: {
    title: "Comparatifs adultes Québec",
    description:
      "Guides comparatifs indépendants pour webcams, AI Companions, dating et gaming adulte.",
    url: "https://nightrankai.com/comparatifs",
    siteName: "NightRank AI",
    locale: "fr_CA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Comparatifs adultes Québec",
    description:
      "Les meilleurs comparatifs NightRank AI pour le Québec et le Canada.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const comparatifs = [
  {
    title: "Meilleurs sites webcams Québec",
    url: "/comparatifs/meilleurs-sites-webcams-quebec",
    desc: "Comparez Jerkmate, LiveJasmin et BongaCams pour trouver la meilleure plateforme webcam au Québec.",
    icon: "🎥",
    tag: "Webcams",
  },
  {
    title: "Top rencontres adultes Québec",
    url: "/comparatifs/top-rencontres-adultes-quebec",
    desc: "Classement des plateformes dating adultes : AdultFriendFinder, Sex Messenger et BBW Fun.",
    icon: "❤️",
    tag: "Dating",
  },
  {
    title: "Gaming adulte Québec",
    url: "/comparatifs/gaming-adulte-quebec",
    desc: "Découvrez notre sélection gaming adulte : Sex Emulator, Hentai Heroes et Comix Harem.",
    icon: "🎮",
    tag: "Gaming",
  },
];

export default function Comparatifs() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="max-w-[1400px] mx-auto px-6 md:px-10 py-12">
        <a href="/" className="text-pink-400 hover:text-pink-300 transition">
          ← Retour accueil
        </a>

        <div className="mt-10 mb-12 bg-gradient-to-br from-zinc-950 to-pink-950/30 border border-zinc-800 rounded-3xl p-8 md:p-12">
          <p className="text-pink-400 font-semibold mb-4">
            Guides comparatifs NightRank AI
          </p>

          <h1 className="text-5xl md:text-7xl font-bold text-pink-500 mb-6">
            Comparatifs adultes au Québec
          </h1>

          <p className="text-xl text-gray-300 max-w-4xl">
            Retrouvez nos classements principaux pour comparer les meilleures
            plateformes webcams, rencontres adultes et gaming adulte disponibles
            au Québec et au Canada.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {comparatifs.map((item) => (
            <a
              key={item.title}
              href={item.url}
              className="group bg-zinc-900 border border-zinc-800 rounded-3xl p-8 hover:border-pink-500 hover:-translate-y-1 transition"
            >
              <div className="flex items-center justify-between mb-6">
                <span className="text-4xl">{item.icon}</span>
                <span className="text-sm text-pink-400 border border-pink-500/40 rounded-full px-4 py-1">
                  {item.tag}
                </span>
              </div>

              <h2 className="text-3xl font-bold mb-4 group-hover:text-pink-400 transition">
                {item.title}
              </h2>

              <p className="text-gray-400 mb-8 leading-relaxed">
                {item.desc}
              </p>

              <span className="inline-block bg-pink-600 group-hover:bg-pink-700 px-6 py-3 rounded-xl font-bold">
                Voir le comparatif →
              </span>
            </a>
          ))}
        </div>

        <section className="grid lg:grid-cols-2 gap-6 mb-12">
          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8">
            <h2 className="text-3xl font-bold mb-5">
              Pourquoi utiliser nos comparatifs ?
            </h2>

            <p className="text-gray-300 mb-4">
              NightRank AI organise les principales offres adultes en catégories
              claires afin d’aider les visiteurs québécois à comparer rapidement
              les plateformes disponibles.
            </p>

            <p className="text-gray-300">
              Chaque comparatif met en avant les forces, les différences et les
              pages avis détaillées pour mieux orienter le visiteur avant de
              cliquer sur une offre.
            </p>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8">
            <h2 className="text-3xl font-bold mb-5">
              Pages utiles
            </h2>

            <div className="grid gap-3 text-pink-400">
              <a href="/blog">Lire le blog NightRank AI →</a>
              <a href="/webcam/montreal">Webcam Montréal →</a>
              <a href="/dating/montreal">Rencontres adultes Montréal →</a>
              <a href="/offres/jerkmate">Avis Jerkmate →</a>
              <a href="/offres/adultfriendfinder">
                Avis AdultFriendFinder →
              </a>
            </div>
          </div>
        </section>

        <section className="text-center bg-gradient-to-br from-pink-900/40 to-zinc-950 border border-pink-900 rounded-3xl p-10">
          <h2 className="text-4xl font-bold mb-5">
            Commencez par le classement le plus populaire
          </h2>

          <p className="text-gray-300 mb-8 max-w-3xl mx-auto">
            Le comparatif webcams Québec est actuellement l’un des guides les
            plus importants de NightRank AI, avec Jerkmate, LiveJasmin et
            BongaCams.
          </p>

          <a
            href="/comparatifs/meilleurs-sites-webcams-quebec"
            className="inline-block bg-pink-600 hover:bg-pink-700 px-8 py-4 rounded-xl font-bold"
          >
            Voir les webcams Québec
          </a>
        </section>
      </section>
    </main>
  );
}