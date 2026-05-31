import { cities } from "../../data";
import { notFound } from "next/navigation";

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
    <main className="min-h-screen bg-black text-white p-10">
      <h1 className="text-5xl font-bold text-pink-500 mb-6">
        Rencontres adultes à {currentCity.name}
      </h1>

      <p className="text-xl text-gray-300 mb-10">
        Découvrez les meilleurs sites de rencontres adultes à{" "}
        {currentCity.name}.
      </p>

      <div className="bg-zinc-900 rounded-2xl p-8 mb-8">
        <h2 className="text-3xl font-bold mb-4">
          Pourquoi choisir un site de rencontre à {currentCity.name} ?
        </h2>

        <p className="text-gray-300 mb-4">
          Les utilisateurs de {currentCity.name} recherchent souvent des
          plateformes discrètes, simples à utiliser et adaptées au marché
          québécois. NightRank AI compare les meilleures options disponibles.
        </p>

        <p className="text-gray-300">
          Nos recommandations sont basées sur la popularité des plateformes,
          leur réputation et l'expérience utilisateur proposée.
        </p>
      </div>

      <div className="bg-zinc-900 rounded-2xl p-8 mb-8">
        <h2 className="text-3xl font-bold mb-4">
          Sites de rencontres recommandés
        </h2>

        <ul className="space-y-3 text-gray-300">
          <li>• Ashley Madison</li>
          <li>• AdultFriendFinder</li>
          <li>• Smartlink Dating</li>
        </ul>
      </div>

      <div className="bg-zinc-900 rounded-2xl p-8">
        <h2 className="text-3xl font-bold mb-4">
          FAQ Rencontres {currentCity.name}
        </h2>

        <h3 className="font-bold mb-2">
          Quels sont les meilleurs sites de rencontres adultes ?
        </h3>

        <p className="text-gray-300 mb-4">
          Ashley Madison et AdultFriendFinder figurent parmi les plateformes
          les plus connues pour les rencontres entre adultes.
        </p>

        <h3 className="font-bold mb-2">
          Ces sites sont-ils accessibles au Québec ?
        </h3>

        <p className="text-gray-300">
          Oui. La majorité des plateformes internationales acceptent les
          utilisateurs du Québec et du Canada.
        </p>
      </div>
    </main>
  );
}