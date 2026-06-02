export const metadata = {
  title: "Top rencontres adultes Québec | NightRank AI",
  description:
    "Comparatif des meilleurs sites de rencontres adultes au Québec et au Canada : AdultFriendFinder, Sex Messenger et BBW Fun.",
};

const sites = [
  {
    name: "AdultFriendFinder",
    note: "4.7/5",
    desc: "Plateforme généraliste connue pour les rencontres adultes et les communautés en ligne.",
    url: "/offres/adultfriendfinder",
  },
  {
    name: "Sex Messenger",
    note: "4.5/5",
    desc: "Offre orientée messagerie adulte et échanges rapides entre utilisateurs.",
    url: "/offres/sexmessenger",
  },
  {
    name: "BBW Fun",
    note: "4.4/5",
    desc: "Offre dating niche orientée BBW, idéale pour varier les recommandations.",
    url: "/offres/bbwfun",
  },
];

export default function Page() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="max-w-6xl mx-auto px-6 py-20">
        <a href="/comparatifs" className="text-pink-400">
          ← Retour comparatifs
        </a>

        <h1 className="text-5xl font-bold text-pink-500 mt-10 mb-6">
          Top rencontres adultes au Québec
        </h1>

        <p className="text-xl text-gray-300 mb-12">
          Découvrez notre comparatif des offres dating adultes populaires pour
          les utilisateurs du Québec et du Canada.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mb-14">
          {sites.map((site) => (
            <div
              key={site.name}
              className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8"
            >
              <p className="text-pink-400 mb-2">{site.note}</p>

              <h2 className="text-3xl font-bold mb-4">{site.name}</h2>

              <p className="text-gray-400 mb-8">{site.desc}</p>

              <a
                href={site.url}
                className="inline-block bg-pink-600 hover:bg-pink-700 px-6 py-3 rounded-xl font-bold"
              >
                Voir l’offre
              </a>
            </div>
          ))}
        </div>

        <section className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8">
          <h2 className="text-3xl font-bold mb-5">
            Pourquoi comparer les sites de rencontres adultes ?
          </h2>

          <p className="text-gray-300 mb-4">
            Les sites de rencontres adultes n’ont pas tous le même
            positionnement. Certains sont généralistes, d’autres sont orientés
            messagerie rapide ou niches spécifiques.
          </p>

          <p className="text-gray-300 mb-4">
            NightRank AI compare les offres dating selon leur type, leur
            pertinence pour le Québec, leur simplicité et leur complémentarité
            avec les autres catégories du site comme les webcams et le gaming.
          </p>

          <p className="text-gray-300">
            Cette page permet aux visiteurs adultes de découvrir plusieurs
            options sans que NightRank AI n’héberge de contenu explicite ou de
            profils utilisateurs.
          </p>
        </section>
      </section>
    </main>
  );
}