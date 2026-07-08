import type { Metadata } from "next";
import { cities } from "../data";

export const metadata: Metadata = {
  title: "Webcams Québec | Meilleurs sites cam live 2026 | NightRank AI",
  description:
    "Comparez les meilleurs sites webcams accessibles au Québec et au Canada : Jerkmate, LiveJasmin, BongaCams, ImLive et autres plateformes cam live.",
  keywords: [
    "webcam Québec",
    "cam live Québec",
    "cam to cam Québec",
    "Jerkmate Québec",
    "LiveJasmin Québec",
    "BongaCams Québec",
    "meilleur site webcam Canada",
  ],
  authors: [{ name: "NightRank AI Editorial Team" }],
  creator: "NightRank AI",
  publisher: "NightRank AI",
  alternates: {
    canonical: "https://nightrankai.com/cams",
  },
  openGraph: {
    title: "Meilleurs sites webcams au Québec",
    description:
      "Comparatifs webcams, cam to cam et avis de plateformes accessibles au Canada.",
    url: "https://nightrankai.com/cams",
    siteName: "NightRank AI",
    locale: "fr_CA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Webcams Québec | NightRank AI",
    description:
      "Comparatifs des meilleurs sites webcams accessibles au Québec.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function CamsPage() {
  return (
    <main className="min-h-screen bg-black text-white p-10">
      <a href="/" className="text-pink-400">← Retour accueil</a>

      <h1 className="text-5xl font-bold text-pink-500 mt-10 mb-6">
        Cams live au Québec
      </h1>

      <p className="text-xl text-gray-300 mb-10">
        Découvrez les pages webcams locales générées pour les villes du Québec.
      </p>

      <div className="grid md:grid-cols-4 gap-4">
        {cities.map((city) => (
          <a
            key={city.slug}
            href={`/webcam/${city.slug}`}
            className="bg-zinc-900 border border-zinc-800 rounded-xl p-5 hover:border-pink-500"
          >
            Webcam {city.name}
          </a>
        ))}
      </div>
    </main>
  );
}