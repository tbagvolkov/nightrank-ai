import { cities } from "./data";
import AgeGate from "./AgeGate";

export const metadata = {
  title: "NightRank AI | Meilleurs sites adultes au Québec",
  description:
    "Guide Québec-first des meilleurs sites webcams, rencontres adultes, gaming et comparatifs au Canada.",
};

const webcamOffers = [
  {
    name: "Jerkmate",
    category: "Webcam",
    rating: "4.8/5",
    url: "/offres/jerkmate",
    desc: "Plateforme webcam moderne et populaire.",
  },
  {
    name: "LiveJasmin",
    category: "Webcam Premium",
    rating: "4.7/5",
    url: "/offres/livejasmin",
    desc: "Expérience webcam plus haut de gamme.",
  },
  {
    name: "BongaCams",
    category: "Webcam",
    rating: "4.5/5",
    url: "/offres/bongacams",
    desc: "Grande variété de modèles en direct.",
  },
];

const datingOffers = [
  {
    name: "AdultFriendFinder",
    category: "Dating",
    url: "/offres/adultfriendfinder",
    desc: "Communauté adulte internationale.",
  },
  {
    name: "Sex Messenger",
    category: "Dating",
    url: "/offres/sexmessenger",
    desc: "Messagerie adulte et rencontres rapides.",
  },
  {
    name: "BBW Fun",
    category: "Dating BBW",
    url: "/offres/bbwfun",
    desc: "Offre dating niche orientée BBW.",
  },
];

const gamingOffers = [
  {
    name: "Sex Emulator",
    category: "Gaming",
    url: "/offres/sexemulator",
    desc: "Simulation adulte interactive.",
  },
  {
    name: "Hentai Heroes",
    category: "Gaming Hentai",
    url: "/offres/hentaiheroes",
    desc: "Jeu adulte avec progression et collection.",
  },
  {
    name: "Comix Harem",
    category: "Gaming Comics",
    url: "/offres/comixharem",
    desc: "Univers comics et collection adulte.",
  },
];

export default function Home() {
  const popularCities = cities.slice(0, 8);

  return (
    <main className="min-h-screen bg-black text-white">
      <AgeGate />

      <nav className="sticky top-0 z-50 flex justify-between items-center px-8 py-5 border-b border-zinc-900 bg-black/90 backdrop-blur">
        <a href="/" className="text-2xl font-bold text-pink-500">
          NightRank AI
        </a>

        <div className="hidden md:flex gap-8 text-sm text-gray-300">
          <a href="/cams" className="hover:text-pink-400">Cams</a>
          <a href="/dating" className="hover:text-pink-400">Dating</a>
          <a href="/comparatifs" className="hover:text-pink-400">Comparatifs</a>
          <a href="/blog" className="hover:text-pink-400">Blog</a>
          <a href="/gaming" className="hover:text-pink-400">Gaming</a>
        </div>
      </nav>

      <section className="relative min-h-[760px] overflow-hidden">
        <img
          src="/hero.jpg"
          alt="NightRank AI Québec"
          className="absolute inset-0 w-full h-full object-cover opacity-35"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/70 to-black" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#be185d55,transparent_40%)]" />

        <div className="relative z-10 max-w-6xl mx-auto px-6 pt-28 pb-20 text-center">
          <p className="text-pink-400 font-semibold mb-5">
            Guide adulte Québec-first • 18+
          </p>

          <h1 className="text-5xl md:text-8xl font-bold leading-tight mb-8">
            Les meilleurs sites adultes{" "}
            <span className="text-pink-500">au Québec</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-10">
            Comparez webcams live, rencontres adultes, gaming et guides locaux
            pour Montréal, Québec, Laval et le Canada.
          </p>

          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <a
              href="/comparatifs/meilleurs-sites-webcams-quebec"
              className="bg-pink-600 hover:bg-pink-700 px-8 py-4 rounded-xl font-bold"
            >
              Voir les webcams
            </a>

            <a
              href="/comparatifs/top-rencontres-adultes-quebec"
              className="border border-pink-500 hover:bg-pink-500/10 px-8 py-4 rounded-xl font-bold"
            >
              Rencontres adultes
            </a>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 pb-20">
        <div className="grid md:grid-cols-3 gap-6">
          <a href="/cams" className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 hover:border-pink-500 transition">
            <p className="text-4xl mb-4">📹</p>
            <h2 className="text-3xl font-bold mb-3">Webcams</h2>
            <p className="text-gray-400">Jerkmate, LiveJasmin, BongaCams et comparatifs webcam Québec.</p>
          </a>

          <a href="/dating" className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 hover:border-pink-500 transition">
            <p className="text-4xl mb-4">❤️</p>
            <h2 className="text-3xl font-bold mb-3">Dating</h2>
            <p className="text-gray-400">AdultFriendFinder, Sex Messenger, BBW Fun et rencontres adultes.</p>
          </a>

          <a href="/gaming" className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 hover:border-pink-500 transition">
            <p className="text-4xl mb-4">🎮</p>
            <h2 className="text-3xl font-bold mb-3">Gaming</h2>
            <p className="text-gray-400">Sex Emulator, Hentai Heroes, Comix Harem et gaming adulte.</p>
          </a>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 pb-24">
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="text-pink-400 mb-2">Top webcams</p>
            <h2 className="text-4xl font-bold">Offres webcam recommandées</h2>
          </div>
          <a href="/comparatifs/meilleurs-sites-webcams-quebec" className="hidden md:block text-pink-400">
            Voir le comparatif →
          </a>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {webcamOffers.map((offer) => (
            <a
              key={offer.name}
              href={offer.url}
              className="bg-gradient-to-br from-zinc-900 to-zinc-950 border border-zinc-800 rounded-3xl p-7 hover:border-pink-500 transition"
            >
              <div className="h-40 rounded-2xl bg-gradient-to-br from-pink-900/50 to-zinc-900 border border-zinc-800 mb-6 flex items-center justify-center">
                <span className="text-4xl">🔞</span>
              </div>

              <p className="text-pink-400 text-sm mb-2">{offer.category}</p>
              <h3 className="text-3xl font-bold mb-2">{offer.name}</h3>
              <p className="text-yellow-400 mb-4">★★★★★ {offer.rating}</p>
              <p className="text-gray-400 mb-6">{offer.desc}</p>

              <span className="inline-block bg-pink-600 px-5 py-3 rounded-xl font-bold">
                Voir l’offre
              </span>
            </a>
          ))}
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 pb-24">
        <p className="text-pink-400 mb-2">Dating Québec</p>
        <h2 className="text-4xl font-bold mb-10">Rencontres adultes populaires</h2>

        <div className="grid md:grid-cols-3 gap-6">
          {datingOffers.map((offer) => (
            <a
              key={offer.name}
              href={offer.url}
              className="bg-zinc-900 border border-zinc-800 rounded-3xl p-7 hover:border-pink-500 transition"
            >
              <p className="text-pink-400 mb-3">{offer.category}</p>
              <h3 className="text-3xl font-bold mb-4">{offer.name}</h3>
              <p className="text-gray-400 mb-6">{offer.desc}</p>
              <span className="inline-block bg-pink-600 px-5 py-3 rounded-xl font-bold">
                Découvrir
              </span>
            </a>
          ))}
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 pb-24">
        <p className="text-pink-400 mb-2">Gaming adulte</p>
        <h2 className="text-4xl font-bold mb-10">Sélection gaming</h2>

        <div className="grid md:grid-cols-3 gap-6">
          {gamingOffers.map((offer) => (
            <a
              key={offer.name}
              href={offer.url}
              className="bg-zinc-900 border border-zinc-800 rounded-3xl p-7 hover:border-pink-500 transition"
            >
              <p className="text-pink-400 mb-3">{offer.category}</p>
              <h3 className="text-3xl font-bold mb-4">{offer.name}</h3>
              <p className="text-gray-400 mb-6">{offer.desc}</p>
              <span className="inline-block bg-pink-600 px-5 py-3 rounded-xl font-bold">
                Voir le jeu
              </span>
            </a>
          ))}
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 pb-24">
        <p className="text-pink-400 mb-2">SEO local</p>
        <h2 className="text-4xl font-bold mb-10">Villes populaires au Québec</h2>

        <div className="grid md:grid-cols-4 gap-4">
          {popularCities.map((city) => (
            <div
              key={city.slug}
              className="bg-zinc-900 border border-zinc-800 rounded-2xl p-5"
            >
              <h3 className="text-xl font-bold mb-4">{city.name}</h3>

              <div className="flex flex-col gap-3 text-sm">
                <a href={`/webcam/${city.slug}`} className="text-pink-400">
                  Webcam {city.name}
                </a>
                <a href={`/dating/${city.slug}`} className="text-pink-400">
                  Rencontre {city.name}
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 pb-24">
        <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8">
          <h2 className="text-3xl font-bold mb-6">
            NightRank AI : comparateur adulte pour le Québec
          </h2>

          <p className="text-gray-300 mb-4">
            NightRank AI aide les visiteurs adultes du Québec et du Canada à
            comparer les meilleures plateformes webcams, dating et gaming.
          </p>

          <p className="text-gray-300">
            Le site cible des recherches locales comme webcam Montréal,
            rencontre adulte Laval, cams Québec ou gaming adulte Canada grâce à
            une structure SEO par ville et par catégorie.
          </p>
        </div>
      </section>

      <footer className="border-t border-zinc-900 py-16 text-center">
        <h3 className="text-3xl text-pink-500 font-bold mb-4">
          NightRank AI
        </h3>

        <p className="text-gray-400">
          Guide indépendant Québec • Canada • 18+
        </p>

        <div className="flex flex-wrap justify-center gap-8 mt-6 text-gray-300">
          <a href="/cams">Cams</a>
          <a href="/dating">Dating</a>
          <a href="/comparatifs">Comparatifs</a>
          <a href="/blog">Blog</a>
          <a href="/gaming">Gaming</a>
        </div>
      </footer>
    </main>
  );
}