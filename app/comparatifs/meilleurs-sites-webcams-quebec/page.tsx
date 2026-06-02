export const metadata = {
  title: "Meilleurs sites webcams Québec | NightRank AI",
  description:
    "Comparatif des meilleurs sites webcams au Québec et au Canada : Jerkmate, LiveJasmin et BongaCams.",
};

const sites = [
  {
    name: "Jerkmate",
    note: "4.8/5",
    desc: "Très populaire pour les webcams live et l’expérience mobile.",
    url: "/offres/jerkmate",
  },
  {
    name: "LiveJasmin",
    note: "4.7/5",
    desc: "Option premium avec une image de marque plus haut de gamme.",
    url: "/offres/livejasmin",
  },
  {
    name: "BongaCams",
    note: "4.5/5",
    desc: "Plateforme internationale avec beaucoup de modèles disponibles.",
    url: "/offres/bongacams",
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
          Meilleurs sites webcams au Québec
        </h1>

        <p className="text-xl text-gray-300 mb-12">
          Découvrez notre comparatif des plateformes webcams populaires pour les
          utilisateurs du Québec et du Canada.
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
            Pourquoi comparer les sites webcams ?
          </h2>

          <p className="text-gray-300 mb-4">
            Tous les sites webcams ne proposent pas la même expérience. Certains
            sont mieux adaptés au trafic mobile, d’autres se démarquent par une
            image plus premium ou une interface plus simple.
          </p>

          <p className="text-gray-300">
            NightRank AI aide les utilisateurs québécois à choisir rapidement
            une plateforme adaptée à leurs préférences, tout en mettant l’accent
            sur la discrétion, la vitesse et la simplicité.
          </p>
        </section>
      </section>
    </main>
  );
}