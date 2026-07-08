import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gaming adulte Québec | Jeux interactifs 2026 | NightRank AI",
  description:
    "Comparez les meilleures offres de gaming adulte accessibles au Québec : Sex Emulator, Hentai Heroes, Comix Harem et autres expériences interactives.",
  keywords: [
    "gaming adulte Québec",
    "jeux adultes",
    "Sex Emulator",
    "Hentai Heroes",
    "Comix Harem",
    "jeux hentai",
    "jeux interactifs adultes",
  ],
  authors: [{ name: "NightRank AI Editorial Team" }],
  creator: "NightRank AI",
  publisher: "NightRank AI",
  alternates: {
    canonical: "https://nightrankai.com/gaming",
  },
  openGraph: {
    title: "Gaming adulte Québec",
    description:
      "Guides et comparatifs des meilleures offres gaming adulte accessibles au Québec.",
    url: "https://nightrankai.com/gaming",
    siteName: "NightRank AI",
    locale: "fr_CA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gaming adulte Québec",
    description:
      "Comparatifs indépendants des meilleurs jeux adultes et interactifs.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const games = [
{
name: "Sex Emulator",
desc:
"Simulation adulte et gameplay interactif.",
},

{
name: "Hentai Heroes",
desc:
"Collection, progression et univers gaming adulte.",
},

{
name: "Comix Harem",
desc:
"Jeu orienté progression et collection.",
},
];

export default function GamingPage() {
return (

<main className="min-h-screen bg-black text-white">

<div className="max-w-6xl mx-auto px-6 py-20">

<a
href="/"
className="text-pink-400"
>
← Retour
</a>

<h1 className="text-6xl font-bold text-pink-500 mt-10 mb-6">

Gaming adulte

</h1>

<p className="text-gray-300 text-xl mb-14">

Sélection gaming et divertissement.

</p>

<div className="grid md:grid-cols-3 gap-6">

{games.map((game)=>(

<div
key={game.name}
className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8"
>

<h2 className="text-3xl font-bold mb-4">
{game.name}
</h2>

<p className="text-gray-400 mb-8">
{game.desc}
</p>

<button
className="bg-pink-600 px-6 py-3 rounded-xl"
>

Découvrir

</button>

</div>

))}

</div>

</div>

</main>

);
}