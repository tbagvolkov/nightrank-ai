export const metadata = {
  title: "Gaming adulte Québec | NightRank AI",
  description:
    "Comparatif des offres gaming adulte au Québec et au Canada : Sex Emulator, Hentai Heroes et Comix Harem.",
};

const games = [
  {
    name: "Sex Emulator",
    note: "4.7/5",
    desc: "Simulation adulte interactive avec une approche plus immersive.",
    url: "/offres/sexemulator",
  },
  {
    name: "Hentai Heroes",
    note: "4.5/5",
    desc: "Jeu adulte inspiré de l’univers hentai avec progression et collection.",
    url: "/offres/hentaiheroes",
  },
  {
    name: "Comix Harem",
    note: "4.4/5",
    desc: "Jeu adulte inspiré des comics, orienté collection et divertissement.",
    url: "/offres/comixharem",
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
          Gaming adulte au Québec
        </h1>

        <p className="text-xl text-gray-300 mb-12">
          Découvrez notre sélection d’offres gaming adulte pour les utilisateurs
          du Québec et du Canada.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mb-14">
          {games.map((game) => (
            <div
              key={game.name}
              className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8"
            >
              <p className="text-pink-400 mb-2">{game.note}</p>

              <h2 className="text-3xl font-bold mb-4">{game.name}</h2>

              <p className="text-gray-400 mb-8">{game.desc}</p>

              <a
                href={game.url}
                className="inline-block bg-pink-600 hover:bg-pink-700 px-6 py-3 rounded-xl font-bold"
              >
                Voir l’offre
              </a>
            </div>
          ))}
        </div>

        <section className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8">
          <h2 className="text-3xl font-bold mb-5">
            Pourquoi comparer les offres gaming adulte ?
          </h2>

          <p className="text-gray-300 mb-4">
            Les offres gaming adulte ne proposent pas toutes la même expérience.
            Certaines sont orientées simulation, d’autres misent davantage sur
            la progression, la collection ou un univers visuel spécifique.
          </p>

          <p className="text-gray-300 mb-4">
            NightRank AI compare Sex Emulator, Hentai Heroes et Comix Harem afin
            d’aider les visiteurs adultes du Québec et du Canada à découvrir une
            catégorie différente des webcams et du dating.
          </p>

          <p className="text-gray-300">
            NightRank AI ne propose pas directement de jeux adultes sur son
            site. Les visiteurs sont redirigés vers les plateformes partenaires.
          </p>
        </section>
      </section>
    </main>
  );
}