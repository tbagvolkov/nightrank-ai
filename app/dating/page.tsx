import { cities } from "../data";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Rencontres adultes Québec | Meilleurs sites 2026 | NightRank AI",

  description:
    "Comparez les meilleurs sites de rencontres adultes accessibles au Québec. Avis, comparatifs et guides indépendants.",

  keywords: [
    "rencontre adulte Québec",
    "dating Québec",
    "AdultFriendFinder Québec",
    "Sex Messenger",
    "BBW Fun",
    "hookup Québec",
    "rencontre discrète",
  ],

  authors: [
    {
      name: "NightRank AI Editorial Team",
    },
  ],

  creator: "NightRank AI",

  publisher: "NightRank AI",

  alternates: {
    canonical: "https://nightrankai.com/dating",
  },

  openGraph: {
    title: "Rencontres adultes Québec",

    description:
      "Comparatifs des meilleurs sites de rencontres adultes au Québec.",

    url: "https://nightrankai.com/dating",

    siteName: "NightRank AI",

    locale: "fr_CA",

    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title: "Rencontres adultes Québec",

    description:
      "Comparatifs indépendants des meilleurs sites dating.",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function DatingPage() {
  return (
    <main className="min-h-screen bg-black text-white p-10">
      <a href="/" className="text-pink-400">← Retour accueil</a>

      <h1 className="text-5xl font-bold text-pink-500 mt-10 mb-6">
        Rencontres adultes au Québec
      </h1>

      <p className="text-xl text-gray-300 mb-10">
        Découvrez les pages dating locales générées pour les villes du Québec.
      </p>

      <div className="grid md:grid-cols-4 gap-4">
        {cities.map((city) => (
          <a
            key={city.slug}
            href={`/dating/${city.slug}`}
            className="bg-zinc-900 border border-zinc-800 rounded-xl p-5 hover:border-pink-500"
          >
            Rencontre {city.name}
          </a>
        ))}
      </div>
    </main>
  );
}