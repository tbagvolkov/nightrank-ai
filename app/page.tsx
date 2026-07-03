import { cities } from "./data";
import AgeGate from "./AgeGate";

export const metadata = {
  title: "NightRank AI | Meilleurs sites adultes et AI au Québec",
  description:
    "Guide Québec-first des meilleurs sites webcams, rencontres adultes, gaming adulte et compagnons IA au Canada.",
};

const topPlatforms = [
  ["Jerkmate", "4.8/5", "/offres/jerkmate"],
  ["LiveJasmin", "4.7/5", "/offres/livejasmin"],
  ["BongaCams", "4.5/5", "/offres/bongacams"],
  ["OurDream AI", "4.8/5", "/blog/ourdream-ai-quebec"],
  ["Joi AI", "4.6/5", "/blog/joi-ai-quebec"],
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

const aiCompanions = [
  ["OurDream AI", "4.8/5", "Compagnon IA complet et personnalisable.", "/blog/ourdream-ai-quebec"],
  ["Joi AI", "4.6/5", "Assistant conversationnel IA moderne.", "/blog/joi-ai-quebec"],
  ["Lovescape", "4.7/5", "Expérience immersive de compagnon virtuel.", "/blog/lovescape-quebec"],
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
            <a href="/ai" className="hover:text-pink-400">AI</a>
            <a href="/comparatifs" className="hover:text-pink-400">Comparatifs</a>
            <a href="/blog" className="hover:text-pink-400">Blog</a>
          </div>
        </div>
      </nav>

      <section className="max-w-[1800px] mx-auto px-6 py-5 grid xl:grid-cols-[260px_1fr_300px] gap-5">
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

            <a href="/comparatifs" className="block text-center mt-6 border border-pink-500 text-pink-400 py-3 rounded-xl">
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

        <div>
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
                Les meilleurs sites webcams, rencontres, gaming et AI{" "}
                <span className="text-pink-500">au Québec</span>
              </h1>

              <p className="text-xl text-gray-200 max-w-2xl mb-8">
                Comparez les meilleures plateformes adultes et compagnons IA.
                Guides locaux, avis détaillés et offres pour Canadiens francophones.
              </p>

              <div className="flex flex-wrap gap-3 mb-8 text-sm">
                <span className="bg-black/60 border border-zinc-700 px-4 py-3 rounded-xl">🛡️ Offres vérifiées</span>
                <span className="bg-black/60 border border-zinc-700 px-4 py-3 rounded-xl">⚜️ Québec-first</span>
                <span className="bg-black/60 border border-zinc-700 px-4 py-3 rounded-xl">📅 Mise à jour 2026</span>
                <span className="bg-black/60 border border-zinc-700 px-4 py-3 rounded-xl">🤖 Section AI</span>
              </div>

              <div className="flex flex-wrap gap-4">
                <a href="/comparatifs/meilleurs-sites-webcams-quebec" className="bg-pink-600 hover:bg-pink-700 px-8 py-4 rounded-xl font-bold text-center">
                  📹 Voir les webcams
                </a>

                <a href="/comparatifs/top-rencontres-adultes-quebec" className="border border-pink-500 hover:bg-pink-500/10 px-8 py-4 rounded-xl font-bold text-center">
                  ❤️ Rencontres adultes
                </a>

                <a href="/gaming" className="border border-pink-500 hover:bg-pink-500/10 px-8 py-4 rounded-xl font-bold text-center">
                  🎮 Gaming adulte
                </a>

                <a href="/ai" className="border border-pink-500 hover:bg-pink-500/10 px-8 py-4 rounded-xl font-bold text-center">
                  🤖 AI Companions
                </a>
              </div>
            </div>
          </section>

          <section className="mt-8 space-y-8">

  <OfferBox
    title="❤️ WEBCAMS POPULAIRES"
    items={webcams}
    cta="Voir l'offre"
  />

  <OfferBox
    title="❤️ RENCONTRES POPULAIRES"
    items={dating}
    cta="Découvrir"
  />

  <OfferBox
    title="🤖 AI COMPANIONS"
    items={aiCompanions}
    cta="Découvrir"
  />

  <OfferBox
    title="🎮 GAMING POPULAIRE"
    items={gaming}
    cta="Voir le jeu"
  />

</section>

          <section className="mt-5 bg-zinc-950/90 border border-zinc-800 rounded-2xl p-5">
            <div className="flex justify-between items-center mb-5">
              <h2 className="font-bold text-xl">GUIDES ET COMPARATIFS POPULAIRES</h2>
              <a href="/blog" className="text-pink-400 text-sm">Voir tous les guides</a>
            </div>

            <div className="grid md:grid-cols-4 gap-4">
              <Guide title="Meilleurs sites webcams au Québec" href="/comparatifs/meilleurs-sites-webcams-quebec" />
              <Guide title="Top rencontres adultes Québec" href="/comparatifs/top-rencontres-adultes-quebec" />
              <Guide title="Gaming adulte au Québec" href="/comparatifs/gaming-adulte-quebec" />
              <Guide title="OurDream AI Québec" href="/blog/ourdream-ai-quebec" />
            </div>
          </section>

          <section className="mt-5 grid md:grid-cols-5 gap-4">
            {["Webcams", "Rencontres", "Gaming", "AI Companions", "Québec First"].map((item) => (
              <div key={item} className="bg-zinc-950/90 border border-zinc-800 rounded-2xl p-5 text-center">
                <p className="text-pink-400 text-2xl mb-2">✦</p>
                <p className="font-bold">{item}</p>
              </div>
            ))}
          </section>
        </div>

        <aside className="hidden xl:flex flex-col gap-5">
          <div className="bg-zinc-950/90 border border-zinc-800 rounded-2xl p-5">
            <h3 className="font-bold mb-5">📍 VILLES POPULAIRES</h3>

            <div className="space-y-4">
              {popularCities.map((city) => (
                <a key={city.slug} href={`/webcam/${city.slug}`} className="flex justify-between items-center hover:text-pink-400">
                  <span>
                    <strong>{city.name}</strong>
                    <br />
                    <span className="text-gray-500 text-sm">Guides & offres</span>
                  </span>
                  <span>→</span>
                </a>
              ))}
            </div>

            <a href="/comparatifs" className="block text-center mt-6 border border-pink-500 text-pink-400 py-3 rounded-xl">
              Toutes les villes
            </a>
          </div>

          <div className="bg-zinc-950/90 border border-zinc-800 rounded-2xl p-5">
            <h3 className="font-bold mb-5">🔥 TENDANCES ACTUELLES</h3>

            <div className="space-y-3 text-sm">
              <a href="/webcam/montreal" className="block hover:text-pink-400">⌘ Webcam Montréal</a>
              <a href="/dating/quebec" className="block hover:text-pink-400">⌘ Rencontre adulte Québec</a>
              <a href="/ai" className="block hover:text-pink-400">⌘ OurDream AI Québec</a>
              <a href="/blog/joi-ai-quebec" className="block hover:text-pink-400">⌘ Joi AI Québec</a>
              <a href="/blog/lovescape-quebec" className="block hover:text-pink-400">⌘ Lovescape Québec</a>
            </div>
          </div>

          <div className="bg-zinc-950/90 border border-zinc-800 rounded-2xl p-5">
            <h3 className="font-bold mb-5">✍️ DERNIERS GUIDES</h3>

            <div className="space-y-4 text-sm">
              <a href="/blog/top-5-webcams-quebec-2026" className="block hover:text-pink-400">
                Top 5 Webcams Québec 2026
              </a>
              <a href="/ai" className="block hover:text-pink-400">
                OurDream AI Québec
              </a>
              <a href="/blog/joi-ai-quebec" className="block hover:text-pink-400">
                Joi AI Québec
              </a>
              <a href="/blog/lovescape-quebec" className="block hover:text-pink-400">
                Lovescape Québec
              </a>
            </div>
          </div>
        </aside>
      </section>

      <section className="max-w-[1400px] mx-auto px-6 py-20">
        <div className="bg-zinc-950 border border-zinc-800 rounded-3xl p-10">
          <h2 className="text-4xl font-bold text-pink-500 mb-8">
            Les meilleurs sites adultes et AI au Québec en 2026
          </h2>

          <p className="text-gray-300 mb-6">
            NightRank AI est un guide indépendant conçu pour aider les adultes du
            Québec à découvrir les meilleures plateformes webcams, rencontres,
            gaming adulte et compagnons virtuels alimentés par l’intelligence
            artificielle.
          </p>

          <p className="text-gray-300 mb-6">
            Le marché adulte évolue rapidement. En plus des webcams et des sites
            de rencontres, les plateformes AI comme OurDream AI, Joi AI et
            Lovescape deviennent une nouvelle catégorie importante.
          </p>

          <p className="text-gray-300 mb-12">
            Nous analysons les plateformes populaires, créons des comparatifs
            détaillés, publions des avis indépendants et développons
            progressivement une base de connaissances dédiée au Québec, à
            Montréal, Laval, Gatineau, Sherbrooke et aux autres villes de la
            province.
          </p>

          <div className="grid lg:grid-cols-4 gap-6 mb-12">
            <CategoryCard
              title="Webcams Québec"
              text="Découvrez notre sélection des meilleures plateformes webcams pour les visiteurs du Québec : Jerkmate, LiveJasmin, BongaCams, ImLive et LivePrivates."
              href="/comparatifs/meilleurs-sites-webcams-quebec"
            />

            <CategoryCard
              title="Rencontres Adultes"
              text="Comparez AdultFriendFinder, Sex Messenger et BBW Fun afin d’identifier les options de rencontres adultes les plus pertinentes."
              href="/comparatifs/top-rencontres-adultes-quebec"
            />

            <CategoryCard
              title="Gaming Adulte"
              text="Nous analysons plusieurs jeux adultes populaires incluant Sex Emulator, Hentai Heroes et Comix Harem."
              href="/comparatifs/gaming-adulte-quebec"
            />

            <CategoryCard
              title="AI Companions"
              text="Découvrez les nouvelles plateformes de compagnons virtuels IA comme OurDream AI, Joi AI et Lovescape."
              href="/ai"
            />
          </div>

          <h2 className="text-4xl font-bold text-pink-500 mb-8">
            Nos avis détaillés
          </h2>

          <p className="text-gray-300 mb-8">
            En plus de nos comparatifs, nous publions des analyses détaillées
            pour chaque plateforme importante : avantages, limites,
            fonctionnalités principales, note globale et FAQ dédiée.
          </p>

          <div className="flex flex-wrap gap-4 mb-12">
            <ReviewButton href="/offres/jerkmate" label="Avis Jerkmate" />
            <ReviewButton href="/offres/livejasmin" label="Avis LiveJasmin" />
            <ReviewButton href="/offres/bongacams" label="Avis BongaCams" />
            <ReviewButton href="/blog/ourdream-ai-quebec" label="Avis OurDream AI" />
            <ReviewButton href="/blog/joi-ai-quebec" label="Avis Joi AI" />
            <ReviewButton href="/blog/lovescape-quebec" label="Avis Lovescape" />
          </div>

          <h2 className="text-4xl font-bold text-pink-500 mb-8">
            Pourquoi NightRank AI ?
          </h2>

          <p className="text-gray-300 mb-6">
            Contrairement à de nombreux annuaires génériques, NightRank AI adopte
            une approche Québec-first. Notre objectif est de construire
            progressivement la ressource francophone de référence pour les
            comparatifs webcams, rencontres, gaming et intelligence artificielle
            au Québec.
          </p>

          <p className="text-gray-300 mb-6">
            Nous privilégions les guides détaillés, les avis complets et les
            analyses transparentes plutôt que les listes génériques sans
            explication.
          </p>

          <p className="text-gray-300 mb-12">
            Au fil du temps, NightRank AI continuera d’ajouter de nouveaux avis,
            comparatifs, guides locaux et analyses approfondies afin de devenir
            une référence incontournable dans son domaine.
          </p>

          <h2 className="text-4xl font-bold text-pink-500 mb-8">
            Questions fréquentes
          </h2>

          <div className="space-y-6">
            <Faq
              question="Quel est le meilleur site webcam au Québec ?"
              answer="Jerkmate est actuellement notre choix global, tandis que LiveJasmin est davantage orienté premium et BongaCams se distingue par sa variété."
            />

            <Faq
              question="Quel est le meilleur site de rencontre adulte ?"
              answer="AdultFriendFinder reste l’une des références les plus connues du secteur et fait partie de nos analyses détaillées."
            />

            <Faq
              question="Qu’est-ce qu’un AI Companion ?"
              answer="Un AI Companion est un compagnon virtuel basé sur l’intelligence artificielle capable d’interagir avec l’utilisateur à travers des conversations personnalisées."
            />

            <Faq
              question="Quel est le meilleur AI Companion au Québec ?"
              answer="OurDream AI est actuellement notre recommandation principale, suivi par Joi AI et Lovescape."
            />

            <Faq
              question="NightRank AI héberge-t-il du contenu adulte ?"
              answer="Non. NightRank AI est un site de comparaison, d’avis et de contenu SEO. Les visiteurs sont redirigés vers les plateformes partenaires."
            />
          </div>
        </div>
      </section>

      <footer className="border-t border-zinc-900 bg-black px-6 py-16">
  <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-5 gap-10">
    <div className="lg:col-span-2">
      <h3 className="text-3xl text-pink-500 font-bold mb-4">
        NightRank AI
      </h3>

      <p className="text-gray-400 mb-5 max-w-md">
        Guide comparatif indépendant pour les plateformes webcams,
        rencontres adultes, AI Companions et gaming adulte au Québec et au
        Canada.
      </p>

      <p className="text-gray-500 text-sm">
        Réservé aux adultes 18+. Certains liens peuvent être affiliés.
      </p>

      <p className="text-gray-500 text-sm mt-3">
        Contact :{" "}
        <a href="mailto:nightrankai@gmail.com" className="text-pink-400">
          nightrankai@gmail.com
        </a>
      </p>
    </div>

    <div>
      <h4 className="text-white font-bold mb-4">Navigation</h4>
      <ul className="space-y-3 text-gray-400">
        <li><a href="/" className="hover:text-pink-400">Accueil</a></li>
        <li><a href="/blog" className="hover:text-pink-400">Blog</a></li>
        <li><a href="/ai" className="hover:text-pink-400">AI Companions</a></li>
        <li><a href="/comparatifs" className="hover:text-pink-400">Comparatifs</a></li>
      </ul>
    </div>

    <div>
      <h4 className="text-white font-bold mb-4">Trust Center</h4>
      <ul className="space-y-3 text-gray-400">
        <li><a href="/company" className="hover:text-pink-400">À propos</a></li>
        <li><a href="/company/methodology" className="hover:text-pink-400">Méthodologie</a></li>
        <li><a href="/company/editorial-policy" className="hover:text-pink-400">Politique éditoriale</a></li>
        <li><a href="/company/faq" className="hover:text-pink-400">FAQ</a></li>
        <li><a href="/company/contact" className="hover:text-pink-400">Contact</a></li>
      </ul>
    </div>

    <div>
      <h4 className="text-white font-bold mb-4">Légal</h4>
      <ul className="space-y-3 text-gray-400">
        <li><a href="/company/affiliate-disclosure" className="hover:text-pink-400">Liens affiliés</a></li>
        <li><a href="/company/privacy" className="hover:text-pink-400">Confidentialité</a></li>
        <li><a href="/company/terms" className="hover:text-pink-400">Conditions</a></li>
        <li><a href="/company/dmca" className="hover:text-pink-400">DMCA</a></li>
        <li><a href="/company/adults-only" className="hover:text-pink-400">18+</a></li>
      </ul>
    </div>
  </div>

  <div className="max-w-7xl mx-auto border-t border-zinc-900 mt-12 pt-6 text-sm text-gray-500 flex flex-col md:flex-row gap-3 md:items-center md:justify-between">
    <p>© 2026 NightRank AI. Tous droits réservés.</p>
    <p>Comparatifs indépendants • Québec • Canada • 18+</p>
  </div>
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
    <section className="bg-zinc-950/90 border border-zinc-800 rounded-3xl p-6 mb-8">
      <h2 className="text-2xl font-bold mb-6 text-white">
        {title}
      </h2>

      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
        {items.map(([name, rating, desc, url]) => {
          const imageName = name
            .toLowerCase()
            .replace(/\s+/g, "")
            .replace(/[^a-z0-9]/g, "");

          return (
            <a
              key={name}
              href={url}
              className="bg-zinc-900 border border-zinc-800 rounded-2xl p-5 hover:border-pink-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-pink-500/20 transition-all duration-300"
            >
              <div className="h-64 rounded-2xl overflow-hidden border border-zinc-700 mb-5 bg-black">
                <img
                  src={`/offres/${imageName}.png`}
                  alt={name}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>

              <h3 className="text-2xl font-bold text-white mb-2">
                {name}
              </h3>

              <p className="text-yellow-400 text-lg font-bold mb-3">
                ★★★★★ {rating}
              </p>

              <p className="text-gray-300 text-sm leading-relaxed min-h-[60px]">
                {desc}
              </p>

              <span className="mt-6 block w-full text-center bg-pink-600 hover:bg-pink-700 py-3 rounded-xl font-bold transition">
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
    <a href={href} className="bg-zinc-900 border border-zinc-800 rounded-xl p-5 hover:border-pink-500 transition">
      <h3 className="font-bold mb-3">{title}</h3>
      <p className="text-pink-400 text-sm">Lire →</p>
    </a>
  );
}

function CategoryCard({
  title,
  text,
  href,
}: {
  title: string;
  text: string;
  href: string;
}) {
  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8">
      <h3 className="text-3xl font-bold text-pink-400 mb-4">
        {title}
      </h3>

      <p className="text-gray-300 mb-5">
        {text}
      </p>

      <a href={href} className="text-pink-400 font-bold">
        Voir le guide →
      </a>
    </div>
  );
}

function ReviewButton({ href, label }: { href: string; label: string }) {
  return (
    <a href={href} className="border border-pink-500 px-5 py-3 rounded-xl hover:bg-pink-500/10">
      {label}
    </a>
  );
}

function Faq({ question, answer }: { question: string; answer: string }) {
  return (
    <div>
      <h3 className="text-2xl font-bold mb-2">
        {question}
      </h3>

      <p className="text-gray-300">
        {answer}
      </p>
    </div>
  );
}