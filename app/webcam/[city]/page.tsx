import { cities } from "../../data";

const webcamOffers = [
  {
    name: "Jerkmate",
    rating: "4.8/5",
    tag: "Meilleur choix global",
    desc: "Plateforme webcam moderne, populaire et facile à utiliser.",
    url: "/offres/jerkmate",
  },
  {
    name: "LiveJasmin",
    rating: "4.7/5",
    tag: "Choix premium",
    desc: "Site webcam haut de gamme reconnu pour son image premium.",
    url: "/offres/livejasmin",
  },
  {
    name: "BongaCams",
    rating: "4.5/5",
    tag: "Meilleure variété",
    desc: "Grande sélection de modèles, catégories et diffusion en direct.",
    url: "/offres/bongacams",
  },
];

export async function generateStaticParams() {
  return cities.map((city) => ({
    city: city.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ city: string }>;
}) {
  const { city: citySlug } = await params;
  const city = cities.find((c) => c.slug === citySlug);

  return {
    title: `Webcam ${city?.name || "Québec"} 2026 | Meilleurs sites webcams | NightRank AI`,
    description: `Découvrez les meilleurs sites webcams à ${
      city?.name || "Québec"
    } : Jerkmate, LiveJasmin et BongaCams. Comparatif local pour les adultes du Québec et du Canada.`,
  };
}

export default async function WebcamCityPage({
  params,
}: {
  params: Promise<{ city: string }>;
}) {
  const { city: citySlug } = await params;
  const city = cities.find((c) => c.slug === citySlug);

  if (!city) {
    return (
      <main className="min-h-screen bg-black text-white p-10">
        <h1 className="text-4xl text-pink-500 font-bold">
          Ville introuvable
        </h1>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-black text-white">
      <section className="max-w-[1400px] mx-auto px-6 md:px-10 py-12">
        <a href="/" className="text-pink-400">
          ← Retour accueil
        </a>

        <div className="mt-10 mb-12 bg-gradient-to-br from-zinc-950 to-pink-950/30 border border-zinc-800 rounded-3xl p-8 md:p-12">
          <p className="text-pink-400 font-semibold mb-4">
            Guide webcam local Québec • 2026
          </p>

          <h1 className="text-5xl md:text-7xl font-bold text-pink-500 mb-6">
            Webcam {city.name} : meilleurs sites webcams en 2026
          </h1>

          <p className="text-xl text-gray-300 max-w-4xl">
            Vous cherchez un site webcam accessible à {city.name} ? NightRank AI
            compare les principales plateformes webcams disponibles pour les
            adultes du Québec et du Canada : Jerkmate, LiveJasmin et BongaCams.
          </p>
        </div>

        <section className="grid md:grid-cols-3 gap-6 mb-12">
          {webcamOffers.map((offer) => (
            <a
              key={offer.name}
              href={offer.url}
              className="bg-zinc-900 border border-zinc-800 rounded-3xl p-7 hover:border-pink-500 transition"
            >
              <p className="text-pink-400 text-sm mb-2">{offer.tag}</p>

              <h2 className="text-3xl font-bold mb-3">{offer.name}</h2>

              <p className="text-yellow-400 mb-4">★★★★★ {offer.rating}</p>

              <p className="text-gray-400 mb-6">{offer.desc}</p>

              <span className="inline-block bg-pink-600 px-6 py-3 rounded-xl font-bold">
                Voir {offer.name}
              </span>
            </a>
          ))}
        </section>

        <section className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 mb-10">
          <h2 className="text-3xl font-bold mb-6">
            Pourquoi chercher une webcam à {city.name} ?
          </h2>

          <p className="text-gray-300 mb-4">
            Les visiteurs de {city.name} recherchent souvent des plateformes
            webcams fiables, rapides et accessibles depuis le Québec. L’objectif
            n’est pas seulement de trouver un site populaire, mais aussi une
            plateforme qui fonctionne bien au Canada, qui soit simple à utiliser
            et qui propose une expérience adaptée aux adultes francophones.
          </p>

          <p className="text-gray-300 mb-4">
            NightRank AI adopte une approche locale : au lieu de simplement
            lister des plateformes internationales, nous organisons nos guides
            autour des villes importantes du Québec. Cela permet de mieux
            répondre aux recherches comme “webcam {city.name}”, “site webcam
            {city.name}” ou “meilleur site webcam au Québec”.
          </p>

          <p className="text-gray-300">
            Cette page ne diffuse aucun contenu explicite. Elle agit comme guide
            comparatif et redirige les visiteurs vers des plateformes partenaires
            réservées aux adultes de 18 ans et plus.
          </p>
        </section>

        <section className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 mb-10">
          <h2 className="text-3xl font-bold mb-6">
            Tableau comparatif webcam {city.name}
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-zinc-700 text-pink-400">
                  <th className="py-4 pr-4">Site</th>
                  <th className="py-4 pr-4">Note</th>
                  <th className="py-4 pr-4">Meilleur pour</th>
                  <th className="py-4 pr-4">Page avis</th>
                </tr>
              </thead>

              <tbody>
                <tr className="border-b border-zinc-800">
                  <td className="py-4 pr-4 font-bold">Jerkmate</td>
                  <td className="py-4 pr-4">4.8/5</td>
                  <td className="py-4 pr-4">Choix global moderne</td>
                  <td className="py-4 pr-4">
                    <a href="/offres/jerkmate" className="text-pink-400">
                      Lire l’avis
                    </a>
                  </td>
                </tr>

                <tr className="border-b border-zinc-800">
                  <td className="py-4 pr-4 font-bold">LiveJasmin</td>
                  <td className="py-4 pr-4">4.7/5</td>
                  <td className="py-4 pr-4">Expérience premium</td>
                  <td className="py-4 pr-4">
                    <a href="/offres/livejasmin" className="text-pink-400">
                      Lire l’avis
                    </a>
                  </td>
                </tr>

                <tr>
                  <td className="py-4 pr-4 font-bold">BongaCams</td>
                  <td className="py-4 pr-4">4.5/5</td>
                  <td className="py-4 pr-4">Grande variété</td>
                  <td className="py-4 pr-4">
                    <a href="/offres/bongacams" className="text-pink-400">
                      Lire l’avis
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="grid lg:grid-cols-3 gap-6 mb-10">
          {webcamOffers.map((offer) => (
            <div
              key={offer.name}
              className="bg-zinc-900 border border-zinc-800 rounded-3xl p-7"
            >
              <h2 className="text-3xl font-bold text-pink-500 mb-4">
                {offer.name}
              </h2>

              <p className="text-gray-300 mb-6">
                {offer.name} fait partie des plateformes recommandées par
                NightRank AI pour les visiteurs adultes de {city.name}. Cette
                option est pertinente si vous cherchez une plateforme webcam
                reconnue, accessible au Québec et facile à comparer avec les
                autres sites de notre sélection.
              </p>

              <a
                href={offer.url}
                className="inline-block bg-pink-600 px-6 py-3 rounded-xl font-bold"
              >
                Voir {offer.name}
              </a>
            </div>
          ))}
        </section>

        <section className="grid md:grid-cols-2 gap-6 mb-10">
          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8">
            <h2 className="text-3xl font-bold mb-5">
              Recherches locales ciblées
            </h2>

            <ul className="space-y-3 text-gray-300">
              <li>• webcam {city.name}</li>
              <li>• site webcam {city.name}</li>
              <li>• cam live {city.name}</li>
              <li>• webcam adulte Québec</li>
              <li>• meilleurs sites webcams Québec</li>
            </ul>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8">
            <h2 className="text-3xl font-bold mb-5">
              Pages utiles
            </h2>

            <div className="grid grid-cols-1 gap-3 text-pink-400">
              <a href="/comparatifs/meilleurs-sites-webcams-quebec">
                Comparatif webcams Québec
              </a>
              <a href="/offres/jerkmate">Avis Jerkmate</a>
              <a href="/offres/livejasmin">Avis LiveJasmin</a>
              <a href="/offres/bongacams">Avis BongaCams</a>
              <a href="/comparatifs/top-rencontres-adultes-quebec">
                Top rencontres adultes Québec
              </a>
            </div>
          </div>
        </section>

        <section className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 mb-10">
          <h2 className="text-3xl font-bold mb-6">
            FAQ Webcam {city.name}
          </h2>

          <h3 className="text-xl font-bold mb-2">
            Quel est le meilleur site webcam à {city.name} ?
          </h3>
          <p className="text-gray-300 mb-6">
            Jerkmate est notre choix global, LiveJasmin est notre choix premium
            et BongaCams est recommandé pour la variété. Le meilleur choix dépend
            surtout des préférences du visiteur.
          </p>

          <h3 className="text-xl font-bold mb-2">
            Les sites webcams sont-ils accessibles depuis {city.name} ?
          </h3>
          <p className="text-gray-300 mb-6">
            Oui, les plateformes que nous analysons sont généralement accessibles
            aux utilisateurs adultes du Québec et du Canada, selon les conditions
            de chaque plateforme partenaire.
          </p>

          <h3 className="text-xl font-bold mb-2">
            NightRank AI propose-t-il du contenu explicite ?
          </h3>
          <p className="text-gray-300 mb-6">
            Non. NightRank AI est un site de comparaison, d’avis et de guides
            SEO. Les visiteurs sont redirigés vers les plateformes partenaires.
          </p>

          <h3 className="text-xl font-bold mb-2">
            Cette page est-elle réservée aux adultes ?
          </h3>
          <p className="text-gray-300">
            Oui. Les pages liées aux webcams, rencontres et gaming adulte sont
            destinées uniquement aux visiteurs de 18 ans et plus.
          </p>
        </section>

        <section className="text-center bg-gradient-to-br from-pink-900/40 to-zinc-950 border border-pink-900 rounded-3xl p-10">
          <h2 className="text-4xl font-bold mb-5">
            Notre choix recommandé pour {city.name}
          </h2>

          <p className="text-gray-300 mb-8 max-w-3xl mx-auto">
            Pour la majorité des visiteurs adultes de {city.name}, Jerkmate est
            un bon point de départ grâce à son expérience moderne. LiveJasmin est
            une bonne alternative premium, tandis que BongaCams est intéressant
            pour ceux qui veulent davantage de variété.
          </p>

          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <a
              href="/offres/jerkmate"
              className="bg-pink-600 px-8 py-4 rounded-xl font-bold"
            >
              Voir Jerkmate
            </a>

            <a
              href="/comparatifs/meilleurs-sites-webcams-quebec"
              className="border border-pink-500 px-8 py-4 rounded-xl font-bold"
            >
              Comparatif complet
            </a>
          </div>
        </section>
      </section>
    </main>
  );
}