import { cities } from "./data";
import AgeGate from "./AgeGate";

export const metadata = {
  title: "NightRank AI | Meilleurs sites adultes au Québec",
  description:
    "Guide Québec-first des meilleurs sites webcams, rencontres adultes, gaming et comparatifs au Canada.",
};

const topPlatforms = [
  ["Jerkmate", "4.8/5", "/offres/jerkmate"],
  ["LiveJasmin", "4.7/5", "/offres/livejasmin"],
  ["BongaCams", "4.5/5", "/offres/bongacams"],
  ["AdultFriendFinder", "4.4/5", "/offres/adultfriendfinder"],
  ["Sex Messenger", "4.3/5", "/offres/sexmessenger"],
];

const webcams = [
  ["Jerkmate", "4.8/5", "Plateforme webcam moderne et populaire.", "/offres/jerkmate"],
  ["LiveJasmin", "4.7/5", "Expérience webcam haut de gamme.", "/offres/livejasmin"],
  ["BongaCams", "4.5/5", "Grande variété de modèles en direct.", "/offres/bongacams"],
];

const dating = [
  ["AdultFriendFinder", "4.4/5", "Communauté adulte internationale.", "/offres/adultfriendfinder"],
  ["Sex Messenger", "4.3/5", "Messagerie adulte et rencontres rapides.", "/offres/sexmessenger"],
  ["BBW Fun", "4.5/5", "Dating niche orienté BBW.", "/offres/bbwfun"],
];

const gaming = [
  ["Sex Emulator", "4.6/5", "Simulation adulte interactive.", "/offres/sexemulator"],
  ["Hentai Heroes", "4.4/5", "Jeu adulte avec progression.", "/offres/hentaiheroes"],
  ["Comix Harem", "4.3/5", "Univers comics et collection.", "/offres/comixharem"],
];

export default function Home() {
  const popularCities = cities.slice(0, 5);

  return (
    <main className="min-h-screen bg-black text-white">
      <AgeGate />

      <nav className="sticky top-0 z-50 border-b border-zinc-900 bg-black/95 backdrop-blur">
        <div className="max-w-[1800px] mx-auto px-6 py-5 flex justify-between items-center">
          <a href="/" className="text-3xl font-bold text-pink-500">
            ♛ NightRank <span className="text-white">AI</span>
          </a>

          <div className="hidden md:flex gap-8 text-sm text-gray-300">
            <a href="/cams" className="hover:text-pink-400">Webcams</a>
            <a href="/dating" className="hover:text-pink-400">Rencontres</a>
            <a href="/gaming" className="hover:text-pink-400">Gaming</a>
            <a href="/comparatifs" className="hover:text-pink-400">Comparatifs</a>
            <a href="/blog" className="hover:text-pink-400">Blog</a>
          </div>
        </div>
      </nav>

      <section className="max-w-[1800px] mx-auto px-6 py-5 grid xl:grid-cols-[260px_1fr_300px] gap-5">

        {/* LEFT SIDEBAR */}
        <aside className="hidden xl:flex flex-col gap-5">
          <div className="bg-zinc-950/90 border border-zinc-800 rounded-2xl p-5">
            <h3 className="font-bold mb-5">🏆 TOP PLATEFORMES</h3>

            <div className="space-y-4">
              {topPlatforms.map(([name, rating, url], index) => (
                <a key={name} href={url} className="flex justify-between items-center text-sm hover:text-pink-400">
                  <span>
                    <span className="inline-flex w-7 h-7 items-center justify-center rounded-full bg-pink-600 mr-3">
                      {index + 1}
                    </span>
                    {name}
                  </span>
                  <span>{rating} ⭐</span>
                </a>
              ))}
            </div>

            <a
              href="/comparatifs"
              className="block text-center mt-6 border border-pink-500 text-pink-400 py-3 rounded-xl"
            >
              Voir tous les classements
            </a>
          </div>

          <div className="bg-zinc-950/90 border border-zinc-800 rounded-2xl p-5 text-center">
            <h3 className="font-bold mb-4">⭐ MEILLEURE NOTE</h3>
            <p className="text-6xl font-bold text-pink-500">4.8/5</p>
            <p className="text-yellow-400 text-2xl mt-3">★★★★★</p>
            <p className="text-gray-400 text-sm mt-3">Note moyenne basée sur nos comparatifs.</p>
          </div>

          <div className="bg-zinc-950/90 border border-zinc-800 rounded-2xl p-5">
            <h3 className="font-bold mb-4">💎 POURQUOI NOUS ?</h3>
            <ul className="space-y-3 text-sm text-gray-300">
              <li>✅ Comparatifs indépendants</li>
              <li>✅ Offres vérifiées</li>
              <li>✅ Guides Québec-first</li>
              <li>✅ Mises à jour régulières</li>
            </ul>
          </div>
        </aside>

        {/* CENTER */}
        <div>
          {/* HERO */}
          <section className="relative min-h-[560px] rounded-3xl overflow-hidden border border-zinc-800">
            <img
              src="/hero.jpg"
              alt="NightRank AI Québec"
              className="absolute inset-0 w-full h-full object-cover opacity-90"
            />

            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/45 to-black/30" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/40" />

            <div className="relative z-10 max-w-4xl px-8 md:px-16 py-20">
              <p className="inline-block border border-pink-500 text-pink-400 rounded-full px-5 py-2 font-bold mb-8">
                LE GUIDE ADULTE #1 AU QUÉBEC
              </p>

              <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-7">
                Les meilleurs sites webcams, rencontres et gaming{" "}
                <span className="text-pink-500">au Québec</span>
              </h1>

              <p className="text-xl text-gray-200 max-w-2xl mb-8">
                Comparez les meilleures plateformes adultes. Guides locaux, avis
                détaillés et offres pour Canadiens francophones.
              </p>

              <div className="flex flex-wrap gap-3 mb-8 text-sm">
                <span className="bg-black/60 border border-zinc-700 px-4 py-3 rounded-xl">🛡️ 9 offres vérifiées</span>
                <span className="bg-black/60 border border-zinc-700 px-4 py-3 rounded-xl">⚜️ Québec-first</span>
                <span className="bg-black/60 border border-zinc-700 px-4 py-3 rounded-xl">📅 Mise à jour 2026</span>
                <span className="bg-black/60 border border-zinc-700 px-4 py-3 rounded-xl">🔒 100% sécurisé</span>
              </div>

              <div className="flex flex-col md:flex-row gap-4">
                <a
                  href="/comparatifs/meilleurs-sites-webcams-quebec"
                  className="bg-pink-600 hover:bg-pink-700 px-10 py-4 rounded-xl font-bold text-center"
                >
                  📹 Voir les webcams
                </a>

                <a
                  href="/comparatifs/top-rencontres-adultes-quebec"
                  className="border border-pink-500 hover:bg-pink-500/10 px-10 py-4 rounded-xl font-bold text-center"
                >
                  ❤️ Rencontres adultes
                </a>
              </div>
            </div>
          </section>

          {/* OFFERS ROW */}
          <div className="grid lg:grid-cols-3 gap-5 mt-5">
            <OfferBox title="💗 WEBCAMS POPULAIRES" items={webcams} cta="Voir l’offre" />
            <OfferBox title="❤️ RENCONTRES POPULAIRES" items={dating} cta="Découvrir" />
            <OfferBox title="🎮 GAMING POPULAIRE" items={gaming} cta="Voir le jeu" />
          </div>

          {/* GUIDES */}
          <section className="mt-5 bg-zinc-950/90 border border-zinc-800 rounded-2xl p-5">
            <div className="flex justify-between items-center mb-5">
              <h2 className="font-bold text-xl">GUIDES ET COMPARATIFS POPULAIRES</h2>
              <a href="/blog" className="text-pink-400 text-sm">Voir tous les guides</a>
            </div>

            <div className="grid md:grid-cols-3 gap-4">
              <Guide title="Meilleurs sites webcams au Québec" href="/comparatifs/meilleurs-sites-webcams-quebec" />
              <Guide title="Top rencontres adultes Québec" href="/comparatifs/top-rencontres-adultes-quebec" />
              <Guide title="Gaming adulte au Québec" href="/comparatifs/gaming-adulte-quebec" />
            </div>
          </section>

          {/* TRUST BAR */}
          <section className="mt-5 grid md:grid-cols-5 gap-4">
            {["9 offres vérifiées", "987+ avis clients", "100% indépendant", "Québec First", "18+ sécurisé"].map((item) => (
              <div key={item} className="bg-zinc-950/90 border border-zinc-800 rounded-2xl p-5 text-center">
                <p className="text-pink-400 text-2xl mb-2">✦</p>
                <p className="font-bold">{item}</p>
              </div>
            ))}
          </section>
        </div>

        {/* RIGHT SIDEBAR */}
        <aside className="hidden xl:flex flex-col gap-5">
          <div className="bg-zinc-950/90 border border-zinc-800 rounded-2xl p-5">
            <h3 className="font-bold mb-5">📍 VILLES POPULAIRES</h3>

            <div className="space-y-4">
              {popularCities.map((city) => (
                <a
                  key={city.slug}
                  href={`/webcam/${city.slug}`}
                  className="flex justify-between items-center hover:text-pink-400"
                >
                  <span>
                    <strong>{city.name}</strong>
                    <br />
                    <span className="text-gray-500 text-sm">Guides & offres</span>
                  </span>
                  <span>→</span>
                </a>
              ))}
            </div>

            <a
              href="/comparatifs"
              className="block text-center mt-6 border border-pink-500 text-pink-400 py-3 rounded-xl"
            >
              Toutes les villes
            </a>
          </div>

          <div className="bg-zinc-950/90 border border-zinc-800 rounded-2xl p-5">
            <h3 className="font-bold mb-5">🔥 TENDANCES ACTUELLES</h3>

            <div className="space-y-3 text-sm">
              <a href="/webcam/montreal" className="block hover:text-pink-400">⌘ Webcam Montréal</a>
              <a href="/dating/quebec" className="block hover:text-pink-400">⌘ Rencontre adulte Québec</a>
              <a href="/offres/bbwfun" className="block hover:text-pink-400">⌘ BBW Dating Québec</a>
              <a href="/offres/jerkmate" className="block hover:text-pink-400">⌘ Jerkmate avis 2026</a>
              <a href="/offres/sexmessenger" className="block hover:text-pink-400">⌘ Sex Messenger avis</a>
            </div>
          </div>

          <div className="bg-zinc-950/90 border border-zinc-800 rounded-2xl p-5">
            <h3 className="font-bold mb-5">✍️ DERNIERS GUIDES</h3>

            <div className="space-y-4 text-sm">
              <a href="/comparatifs/meilleurs-sites-webcams-quebec" className="block hover:text-pink-400">
                Meilleurs sites webcams au Québec en 2026
              </a>
              <a href="/comparatifs/top-rencontres-adultes-quebec" className="block hover:text-pink-400">
                Top rencontres adultes au Québec
              </a>
              <a href="/comparatifs/gaming-adulte-quebec" className="block hover:text-pink-400">
                Gaming adulte au Québec
              </a>
            </div>
          </div>
        </aside>
      </section>

      <footer className="border-t border-zinc-900 py-14 text-center">
        <h3 className="text-3xl text-pink-500 font-bold mb-3">NightRank AI</h3>
        <p className="text-gray-400">Guide indépendant Québec • Canada • 18+</p>
      </footer>
    </main>
  );
}

function OfferBox({
  title,
  items,
  cta,
}: {
  title: string;
  items: string[][];
  cta: string;
}) {
  return (
    <section className="bg-zinc-950/90 border border-zinc-800 rounded-2xl p-5">
      <h2 className="font-bold mb-5">{title}</h2>

      <div className="grid grid-cols-3 gap-3">
        {items.map(([name, rating, desc, url]) => {
          const imageName = name
            .toLowerCase()
            .replace(/\s+/g, "")
            .replace(/[^a-z0-9]/g, "");

          return (
            <a
              key={name}
              href={url}
              className="bg-zinc-900 border border-zinc-800 rounded-xl p-4 hover:border-pink-500 transition"
            >
              <div className="h-36 rounded-lg overflow-hidden border border-zinc-800 mb-4 bg-black">
                <img
                  src={`/offers/${imageName}.jpg`}
                  alt={name}
                  className="w-full h-full object-cover"
                />
              </div>

              <h3 className="text-xl font-bold mb-2 leading-tight text-white">
                {name}
              </h3>

              <p className="text-yellow-400 text-sm mb-2">
                {rating} ★★★★★
              </p>

              <p className="text-xs text-gray-400 min-h-[48px]">
                {desc}
              </p>

              <span className="block mt-4 text-center bg-pink-600 py-2 rounded-lg text-sm font-bold">
                {cta}
              </span>
            </a>
          );
        })}
      </div>
    </section>
  );
}

function Guide({ title, href }: { title: string; href: string }) {
  return (
    <a
      href={href}
      className="bg-gradient-to-br from-zinc-900 to-pink-950/40 border border-zinc-800 rounded-xl p-5 hover:border-pink-500 transition"
    >
      <h3 className="font-bold mb-2">{title}</h3>
      <p className="text-gray-400 text-sm">Comparatif complet 2026</p>
    </a>
  );
}