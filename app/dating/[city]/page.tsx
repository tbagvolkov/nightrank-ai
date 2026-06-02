import { cities } from "../../data";
import { notFound } from "next/navigation";

const datingOffers = [
  {
    name: "AdultFriendFinder",
    desc: "Communauté adulte pour rencontres et connexions entre adultes.",
    url: "/offres/adultfriendfinder",
  },
  {
    name: "Sex Messenger",
    desc: "Plateforme orientée messagerie adulte et échanges rapides.",
    url: "/offres/sexmessenger",
  },
  {
    name: "BBW Fun",
    desc: "Offre dating niche orientée BBW pour adultes.",
    url: "/offres/bbwfun",
  },
];

export async function generateMetadata({
  params,
}: {
  params: Promise<{ city: string }>;
}) {
  const { city } = await params;
  const currentCity = cities.find((c) => c.slug === city);

  if (!currentCity) return {};

  return {
    title: `Rencontres ${currentCity.name} | NightRank AI`,
    description: `Découvrez les meilleurs sites de rencontres adultes à ${currentCity.name} au Québec.`,
  };
}

export async function generateStaticParams() {
  return cities.map((city) => ({
    city: city.slug,
  }));
}

export default async function Page({
  params,
}: {
  params: Promise<{ city: string }>;
}) {
  const { city } = await params;

  const currentCity = cities.find((c) => c.slug === city);

  if (!currentCity) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-black text-white">
      <section className="px-6 py-16 max-w-6xl mx-auto">
        <a href="/" className="text-pink-400">
          ← Retour accueil
        </a>

        <h1 className="text-5xl font-bold text-pink-500 mt-10 mb-6">
          Rencontres adultes à {currentCity.name}
        </h1>

        <p className="text-xl text-gray-300 mb-12">
          Découvrez les meilleurs sites de rencontres adultes accessibles à{" "}
          {currentCity.name} et au Québec.
        </p>

        <section className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 mb-10">
          <h2 className="text-3xl font-bold mb-5">
            Pourquoi choisir un site de rencontre à {currentCity.name} ?
          </h2>

          <p className="text-gray-300 mb-4">
            Les utilisateurs de {currentCity.name} recherchent souvent des
            plateformes discrètes, simples à utiliser et adaptées au marché
            québécois.
          </p>

          <p className="text-gray-300">
            NightRank AI compare les options dating adultes selon leur
            popularité, leur simplicité, leur positionnement et leur pertinence
            pour les adultes du Québec et du Canada.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-3xl font-bold mb-6">
            Sites de rencontres recommandés à {currentCity.name}
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {datingOffers.map((offer) => (
              <a
                key={offer.name}
                href={offer.url}
                className="bg-zinc-900 border border-zinc-800 hover:border-pink-500 rounded-2xl p-6 transition"
              >
                <p className="text-pink-400 mb-3">Dating</p>

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
            FAQ Rencontres {currentCity.name}
          </h2>

          <h3 className="text-xl font-bold mb-2">
            Quels sont les meilleurs sites de rencontres adultes à{" "}
            {currentCity.name} ?
          </h3>
          <p className="text-gray-300 mb-6">
            Les plateformes recommandées incluent AdultFriendFinder, Sex
            Messenger et BBW Fun.
          </p>

          <h3 className="text-xl font-bold mb-2">
            Ces sites sont-ils accessibles au Québec ?
          </h3>
          <p className="text-gray-300">
            Oui, la majorité des plateformes internationales acceptent les
            utilisateurs adultes du Québec et du Canada.
          </p>
        </section>
      </section>
    </main>
  );
}