import { cities } from "../../data";

const webcamOffers = [
  {
    name: "Jerkmate",
    desc: "Plateforme populaire de webcams live avec expérience premium.",
    url: "/offres/jerkmate",
  },
  {
    name: "LiveJasmin",
    desc: "Site webcam haut de gamme reconnu à l'international.",
    url: "/offres/livejasmin",
  },
  {
    name: "BongaCams",
    desc: "Grande sélection de modèles et diffusion en direct.",
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
    title: `Webcam ${city?.name || "Québec"} | NightRank AI`,
    description: `Découvrez les meilleurs sites webcams à ${
      city?.name || "Québec"
    } avec NightRank AI.`,
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
      <section className="px-6 py-16 max-w-6xl mx-auto">
        <a href="/" className="text-pink-400">
          ← Retour accueil
        </a>

        <h1 className="text-5xl font-bold text-pink-500 mt-10 mb-6">
          Webcam {city.name}
        </h1>

        <p className="text-xl text-gray-300 mb-12">
          Découvrez les meilleurs sites webcams accessibles à {city.name} et au Québec.
        </p>

        <section className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 mb-10">
          <h2 className="text-3xl font-bold mb-5">
            Pourquoi choisir une webcam à {city.name} ?
          </h2>

          <p className="text-gray-300 mb-4">
            Les utilisateurs de {city.name} recherchent souvent des plateformes fiables,
            rapides et accessibles depuis le Québec.
          </p>

          <p className="text-gray-300">
            NightRank AI compare les principales offres webcams afin de faciliter
            le choix des visiteurs adultes.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-3xl font-bold mb-6">
            Sites webcams recommandés à {city.name}
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {webcamOffers.map((offer) => (
              <a
                key={offer.name}
                href={offer.url}
                className="bg-zinc-900 border border-zinc-800 hover:border-pink-500 rounded-2xl p-6 transition"
              >
                <p className="text-pink-400 mb-3">Cams</p>

                <h3 className="text-2xl font-bold mb-4">
                  {offer.name}
                </h3>

                <p className="text-gray-400 mb-6">
                  {offer.desc}
                </p>

                <span className="inline-block bg-pink-600 px-5 py-3 rounded-xl font-bold">
                  Voir l’offre
                </span>
              </a>
            ))}
          </div>
        </section>

        <section className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8">
          <h2 className="text-3xl font-bold mb-6">
            FAQ Webcam {city.name}
          </h2>

          <h3 className="text-xl font-bold mb-2">
            Quels sont les meilleurs sites webcams à {city.name} ?
          </h3>
          <p className="text-gray-300 mb-6">
            Les plateformes populaires incluent Jerkmate, LiveJasmin et BongaCams.
          </p>

          <h3 className="text-xl font-bold mb-2">
            Les sites webcams sont-ils accessibles au Canada ?
          </h3>
          <p className="text-gray-300">
            Oui, la majorité des plateformes internationales sont accessibles aux
            utilisateurs adultes du Québec et du Canada.
          </p>
        </section>
      </section>
    </main>
  );
}