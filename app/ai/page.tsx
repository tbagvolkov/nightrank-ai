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
            Top 5 AI Girlfriends et AI Companions au Québec en 2026
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

              <p className="text-pink-500 font-bold mb-3">
                {offer.rank}
              </p>

              <h2 className="text-3xl font-bold mb-3">
                {offer.name}
              </h2>

              <p className="text-yellow-400 font-bold mb-4">
                ★★★★★ {offer.note}
              </p>

              <p className="text-gray-300 mb-5">
                {offer.description}
              </p>

              <span className="text-pink-400 font-bold">
                Lire l’avis →
              </span>

            </a>

          ))}

        </section>

        {/* COMPARATIF */}

        <section className="mt-10 bg-zinc-900 border border-zinc-800 rounded-3xl p-8">

          <h2 className="text-4xl font-bold mb-6 text-pink-500">
            Comparatif rapide des AI Companions
          </h2>

          <div className="overflow-x-auto">

            <table className="w-full text-left">

              <thead>

                <tr className="border-b border-zinc-700">
                  <th className="py-3">Plateforme</th>
                  <th className="py-3">Note</th>
                  <th className="py-3">Spécialité</th>
                </tr>

              </thead>

              <tbody>

                <tr className="border-b border-zinc-800">
                  <td className="py-4">Joi AI</td>
                  <td>4.8/5</td>
                  <td>Conversation naturelle</td>
                </tr>

                <tr className="border-b border-zinc-800">
                  <td className="py-4">OurDream AI</td>
                  <td>4.8/5</td>
                  <td>Personnalisation avancée</td>
                </tr>

                <tr className="border-b border-zinc-800">
                  <td className="py-4">Candy AI</td>
                  <td>4.7/5</td>
                  <td>AI Girlfriend populaire</td>
                </tr>

                <tr className="border-b border-zinc-800">
                  <td className="py-4">DarLink AI</td>
                  <td>4.7/5</td>
                  <td>Roleplay immersif</td>
                </tr>

                <tr>
                  <td className="py-4">Lovescape</td>
                  <td>4.5/5</td>
                  <td>Compagnon virtuel immersif</td>
                </tr>

              </tbody>

            </table>

          </div>

        </section>

        {/* TEXTE SEO */}

        <section className="mt-10 bg-zinc-900 border border-zinc-800 rounded-3xl p-8">

          <h2 className="text-4xl font-bold mb-6 text-pink-500">
            AI Companions au Québec : guide complet
          </h2>

          <p className="text-gray-300 mb-6">
            Les AI Companions connaissent une croissance rapide au Québec.
            Ces plateformes permettent aux utilisateurs de discuter avec des
            personnages virtuels avancés capables de maintenir des conversations
            réalistes, de mémoriser certaines préférences et d'offrir une
            expérience personnalisée.
          </p>

          <p className="text-gray-300 mb-6">
            Parmi les plateformes les plus populaires figurent Joi AI,
            OurDream AI, Candy AI, DarLink AI et Lovescape.
            Chacune possède ses propres avantages selon que l'utilisateur
            recherche une conversation naturelle, un compagnon virtuel ou une
            expérience immersive de rôle.
          </p>

          <p className="text-gray-300">
            NightRank AI compare régulièrement les meilleures plateformes
            accessibles au Québec et au Canada afin d'aider les visiteurs
            à choisir la solution la plus adaptée à leurs besoins.
          </p>

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

        {/* FAQ */}

        <section className="mt-10 bg-zinc-900 border border-zinc-800 rounded-3xl p-8">

          <h2 className="text-4xl font-bold mb-8 text-pink-500">
            Questions fréquentes
          </h2>

          <div className="space-y-8">

            <div>
              <h3 className="text-2xl font-bold mb-2">
                Quelle est la meilleure AI Girlfriend au Québec ?
              </h3>

              <p className="text-gray-300">
                Joi AI, OurDream AI et Candy AI figurent parmi les plateformes
                les plus populaires actuellement.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-2">
                Les AI Companions sont-ils disponibles au Canada ?
              </h3>

              <p className="text-gray-300">
                Oui, les plateformes présentées sur NightRank AI sont
                accessibles depuis le Québec et le Canada.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-2">
                Quelle alternative à Character AI ?
              </h3>

              <p className="text-gray-300">
                Candy AI, Joi AI, DarLink AI et OurDream AI sont parmi les
                meilleures alternatives disponibles.
              </p>
            </div>

          </div>

        </section>

      </div>
    </main>
  );
}
