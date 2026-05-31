import { cities } from "../data";

export const metadata = {
  title: "Cams live Québec | NightRank AI",
  description: "Meilleurs sites webcams et cams live au Québec.",
};

export default function CamsPage() {
  return (
    <main className="min-h-screen bg-black text-white p-10">
      <a href="/" className="text-pink-400">← Retour accueil</a>

      <h1 className="text-5xl font-bold text-pink-500 mt-10 mb-6">
        Cams live au Québec
      </h1>

      <p className="text-xl text-gray-300 mb-10">
        Découvrez les pages webcams locales générées pour les villes du Québec.
      </p>

      <div className="grid md:grid-cols-4 gap-4">
        {cities.map((city) => (
          <a
            key={city.slug}
            href={`/webcam/${city.slug}`}
            className="bg-zinc-900 border border-zinc-800 rounded-xl p-5 hover:border-pink-500"
          >
            Webcam {city.name}
          </a>
        ))}
      </div>
    </main>
  );
}