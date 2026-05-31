import { cities } from "../data";

export const metadata = {
  title: "Rencontres adultes Québec | NightRank AI",
  description: "Meilleurs sites de rencontres adultes au Québec.",
};

export default function DatingPage() {
  return (
    <main className="min-h-screen bg-black text-white p-10">
      <a href="/" className="text-pink-400">← Retour accueil</a>

      <h1 className="text-5xl font-bold text-pink-500 mt-10 mb-6">
        Rencontres adultes au Québec
      </h1>

      <p className="text-xl text-gray-300 mb-10">
        Découvrez les pages dating locales générées pour les villes du Québec.
      </p>

      <div className="grid md:grid-cols-4 gap-4">
        {cities.map((city) => (
          <a
            key={city.slug}
            href={`/dating/${city.slug}`}
            className="bg-zinc-900 border border-zinc-800 rounded-xl p-5 hover:border-pink-500"
          >
            Rencontre {city.name}
          </a>
        ))}
      </div>
    </main>
  );
}