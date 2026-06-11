import { cities } from "../../data";

const datingOffers = [
  {
    name: "AdultFriendFinder",
    rating: "4.7/5",
    tag: "Meilleur choix général",
    desc: "Plateforme de rencontres adultes connue avec une audience large.",
    url: "/offres/adultfriendfinder",
  },
  {
    name: "Sex Messenger",
    rating: "4.5/5",
    tag: "Meilleur pour messagerie",
    desc: "Offre orientée messagerie adulte et échanges rapides.",
    url: "/offres/sexmessenger",
  },
  {
    name: "BBW Fun",
    rating: "4.4/5",
    tag: "Meilleure niche",
    desc: "Plateforme dating niche orientée communauté spécialisée.",
    url: "/offres/bbwfun",
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
    title: `Rencontres adultes ${city?.name || "Québec"} 2026 | NightRank AI`,
    description: `Découvrez les meilleurs sites de rencontres adultes à ${
      city?.name || "Québec"
    } : AdultFriendFinder, Sex Messenger et BBW Fun. Comparatif local pour les adultes du Québec et du Canada.`,
  };
}

export default async function DatingCityPage({
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
            Guide rencontres adultes Québec • 2026
          </p>

          <h1 className="text-5xl md:text-7xl font-bold text-pink-500 mb-6">
            Rencontres adultes à {city.name} : meilleurs sites en 2026
          </h1>

          <p className="text-xl text-gray-300 max-w-4xl">
            Vous cherchez un site de rencontres adultes accessible à {city.name} ?
            NightRank AI compare les plateformes dating recommandées pour les
            adultes du Québec et du Canada : AdultFriendFinder, Sex Messenger et
            BBW Fun.
          </p>
        </div>

        <section className="grid md:grid-cols-3 gap-6 mb-12">
          {datingOffers.map((offer) => (
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
            Pourquoi chercher des rencontres adultes à {city.name} ?
          </h2>

          <p className="text-gray-300 mb-4">
            Les visiteurs de {city.name} recherchent souvent des plateformes de
            rencontres adultes simples, discrètes et accessibles depuis le Québec.
            L’objectif est de comparer les options disponibles avant de choisir
            une plateforme adaptée à ses préférences.
          </p>

          <p className="text-gray-300 mb-4">
            NightRank AI adopte une approche locale afin de mieux répondre aux
            recherches comme “rencontre adulte {city.name}”, “dating adulte
            {city.name}” ou “site de rencontre adulte au Québec”. Cette stratégie
            permet aux visiteurs francophones de trouver plus facilement des
            guides adaptés à leur ville.
          </p>

          <p className="text-gray-300">
            Cette page ne contient aucun profil utilisateur et n’héberge aucun
            contenu explicite. Elle agit comme guide comparatif et redirige les
            visiteurs vers des plateformes partenaires réservées aux adultes de
            18 ans et plus.
          </p>
        </section>

        <section className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 mb-10">
          <h2 className="text-3xl font-bold mb-6">
            Tableau comparatif rencontres adultes {city.name}
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
                  <td className="py-4 pr-4 font-bold">AdultFriendFinder</td>
                  <td className="py-4 pr-4">4.7/5</td>
                  <td className="py-4 pr-4">Choix généraliste</td>
                  <td className="py-4 pr-4">
                    <a href="/offres/adultfriendfinder" className="text-pink-400">
                      Lire l’avis
                    </a>
                  </td>
                </tr>

                <tr className="border-b border-zinc-800">
                  <td className="py-4 pr-4 font-bold">Sex Messenger</td>
                  <td className="py-4 pr-4">4.5/5</td>
                  <td className="py-4 pr-4">Messagerie et échanges rapides</td>
                  <td className="py-4 pr-4">
                    <a href="/offres/sexmessenger" className="text-pink-400">
                      Lire l’avis
                    </a>
                  </td>
                </tr>

                <tr>
                  <td className="py-4 pr-4 font-bold">BBW Fun</td>
                  <td className="py-4 pr-4">4.4/5</td>
                  <td className="py-4 pr-4">Dating niche spécialisé</td>
                  <td className="py-4 pr-4">
                    <a href="/offres/bbwfun" className="text-pink-400">
                      Lire l’avis
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="grid lg:grid-cols-3 gap-6 mb-10">
          {datingOffers.map((offer) => (
            <div
              key={offer.name}
              className="bg-zinc-900 border border-zinc-800 rounded-3xl p-7"
            >
              <h2 className="text-3xl font-bold text-pink-500 mb-4">
                {offer.name}
              </h2>

              <p className="text-gray-300 mb-6">
                {offer.name} fait partie des plateformes dating recommandées par
                NightRank AI pour les visiteurs adultes de {city.name}. Cette
                option est utile si vous cherchez une plateforme accessible au
                Québec et facile à comparer avec les autres sites de notre
                sélection.
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
              <li>• rencontre adulte {city.name}</li>
              <li>• dating adulte {city.name}</li>
              <li>• site rencontre adulte {city.name}</li>
              <li>• rencontre discrète Québec</li>
              <li>• top rencontres adultes Québec</li>
            </ul>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8">
            <h2 className="text-3xl font-bold mb-5">
              Pages utiles
            </h2>

            <div className="grid grid-cols-1 gap-3 text-pink-400">
              <a href="/comparatifs/top-rencontres-adultes-quebec">
                Comparatif rencontres adultes Québec
              </a>
              <a href="/offres/adultfriendfinder">Avis AdultFriendFinder</a>
              <a href="/offres/sexmessenger">Avis Sex Messenger</a>
              <a href="/offres/bbwfun">Avis BBW Fun</a>
              <a href="/comparatifs/meilleurs-sites-webcams-quebec">
                Meilleurs sites webcams Québec
              </a>
            </div>
          </div>
        </section>

        <section className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 mb-10">
          <h2 className="text-3xl font-bold mb-6">
            FAQ rencontres adultes {city.name}
          </h2>

          <h3 className="text-xl font-bold mb-2">
            Quel est le meilleur site de rencontre adulte à {city.name} ?
          </h3>
          <p className="text-gray-300 mb-6">
            AdultFriendFinder est notre choix généraliste, Sex Messenger est
            recommandé pour une approche plus directe, et BBW Fun est une option
            plus spécialisée.
          </p>

          <h3 className="text-xl font-bold mb-2">
            Les sites de rencontres adultes sont-ils accessibles depuis {city.name} ?
          </h3>
          <p className="text-gray-300 mb-6">
            Oui, les plateformes que nous analysons sont généralement accessibles
            aux utilisateurs adultes du Québec et du Canada, selon les conditions
            de chaque plateforme partenaire.
          </p>

          <h3 className="text-xl font-bold mb-2">
            NightRank AI héberge-t-il des profils ?
          </h3>
          <p className="text-gray-300 mb-6">
            Non. NightRank AI est un site de comparaison, d’avis et de guides
            SEO. Les visiteurs sont redirigés vers les plateformes partenaires.
          </p>

          <h3 className="text-xl font-bold mb-2">
            Cette page est-elle réservée aux adultes ?
          </h3>
          <p className="text-gray-300">
            Oui. Les pages liées aux rencontres adultes sont destinées uniquement
            aux visiteurs de 18 ans et plus.
          </p>
        </section>

        <section className="text-center bg-gradient-to-br from-pink-900/40 to-zinc-950 border border-pink-900 rounded-3xl p-10">
          <h2 className="text-4xl font-bold mb-5">
            Notre choix recommandé pour {city.name}
          </h2>

          <p className="text-gray-300 mb-8 max-w-3xl mx-auto">
            Pour la majorité des visiteurs adultes de {city.name},
            AdultFriendFinder est un bon point de départ grâce à son approche
            généraliste. Sex Messenger est utile pour une expérience plus directe,
            tandis que BBW Fun complète la sélection avec un angle plus spécialisé.
          </p>

          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <a
              href="/offres/adultfriendfinder"
              className="bg-pink-600 px-8 py-4 rounded-xl font-bold"
            >
              Voir AdultFriendFinder
            </a>

            <a
              href="/comparatifs/top-rencontres-adultes-quebec"
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