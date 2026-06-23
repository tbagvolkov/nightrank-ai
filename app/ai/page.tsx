export const metadata = {
  title: "AI Companions Québec 2026 | NightRank AI",
  description:
    "Découvrez les meilleurs AI Companions et AI Girlfriends accessibles au Québec : Joi AI, OurDream AI, Candy AI, DarLink AI et Lovescape.",
};

const aiOffers = [
  {
    rank: "#1",
    name: "Joi AI",
    note: "4.8/5",
    description:
      "Compagnon IA orienté conversations naturelles et expériences personnalisées.",
    href: "/blog/joi-ai-quebec",
  },
  {
    rank: "#2",
    name: "OurDream AI",
    note: "4.8/5",
    description:
      "AI Girlfriend populaire avec personnalisation avancée et personnages variés.",
    href: "/blog/ourdream-ai-quebec",
  },
  {
    rank: "#3",
    name: "Candy AI",
    note: "4.7/5",
    description:
      "Plateforme AI Girlfriend connue, moderne et accessible au Canada.",
    href: "/blog/candy-ai-quebec",
  },
  {
    rank: "#4",
    name: "DarLink AI",
    note: "4.7/5",
    description:
      "Plateforme AI Girlfriend et roleplay IA avec personnages immersifs.",
    href: "/blog/darlink-ai-quebec",
  },
  {
    rank: "#5",
    name: "Lovescape",
    note: "4.5/5",
    description:
      "Compagnon virtuel IA orienté immersion, conversations et expériences personnalisées.",
    href: "/blog/lovescape-quebec",
  },
];

export default function AIPage() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-16">
      <div className="max-w-7xl mx-auto">
        <a href="/" className="text-pink-400 hover:text-pink-300">
          ← Retour accueil
        </a>

        <section className="mt-10 bg-zinc-950 border border-zinc-800 rounded-3xl p-8 md:p-12">
          <p className="text-pink-500 font-bold mb-4">
            AI Companions Québec • 2026
          </p>

          <h1 className="text-5xl md:text-6xl font-bold text-pink-500 mb-6">
            Meilleurs AI Companions au Québec
          </h1>

          <p className="text-gray-300 max-w-3xl text-lg">
            Découvrez les meilleures plateformes de compagnons virtuels IA,
            AI Girlfriends et chatbots relationnels accessibles au Québec et au
            Canada.
          </p>
        </section>

        <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {aiOffers.map((offer) => (
            <a
              key={offer.name}
              href={offer.href}
              className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 hover:border-pink-500 transition"
            >
              <p className="text-pink-500 font-bold mb-3">{offer.rank}</p>

              <h2 className="text-3xl font-bold mb-3">{offer.name}</h2>

              <p className="text-yellow-400 font-bold mb-4">
                ★★★★★ {offer.note}
              </p>

              <p className="text-gray-300 mb-5">{offer.description}</p>

              <span className="text-pink-400 font-bold">
                Lire l’avis →
              </span>
            </a>
          ))}
        </section>

        <section className="mt-10 bg-zinc-900 border border-zinc-800 rounded-3xl p-8">
          <h2 className="text-3xl font-bold mb-6">
            Classement complet des AI Girlfriends
          </h2>

          <p className="text-gray-300 mb-6">
            Pour comparer les plateformes en détail, consultez notre page pilier
            dédiée aux meilleures AI Girlfriends au Québec en 2026.
          </p>

          <a
            href="/blog/top-5-ai-girlfriends-quebec-2026"
            className="inline-block bg-pink-600 hover:bg-pink-700 px-6 py-3 rounded-xl font-bold"
          >
            Voir le Top 5 AI Girlfriends
          </a>
        </section>

        <section className="mt-10 grid md:grid-cols-2 gap-6">
          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8">
            <h2 className="text-3xl font-bold mb-5">
              Pourquoi les AI Companions ?
            </h2>

            <p className="text-gray-300">
              Les AI Companions gagnent en popularité parce qu’ils offrent des
              conversations personnalisées, disponibles à tout moment, avec des
              personnages virtuels alimentés par l’intelligence artificielle.
            </p>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8">
            <h2 className="text-3xl font-bold mb-5">
              Recherches ciblées
            </h2>

            <ul className="space-y-3 text-gray-300">
              <li>• AI Girlfriend Québec</li>
              <li>• AI Companion Québec</li>
              <li>• compagnon IA Canada</li>
              <li>• petite amie virtuelle IA</li>
              <li>• chatbot relationnel IA</li>
            </ul>
          </div>
        </section>
      </div>
    </main>
  );
}