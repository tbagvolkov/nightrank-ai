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
    title: `Webcam ${currentCity.name} | NightRank AI`,
    description: `Découvrez les meilleurs sites webcams à ${currentCity.name}. Comparatifs, plateformes live et recommandations pour le Québec.`,
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
        Webcam {currentCity.name}
      </h1>

      <p className="text-xl text-gray-300 mb-10">
        Découvrez les meilleurs sites webcams à {currentCity.name}.
      </p>

      <div className="bg-zinc-900 rounded-2xl p-8 mb-8">
        <h2 className="text-3xl font-bold mb-4">
          Pourquoi choisir une webcam à {currentCity.name} ?
        </h2>

        <p className="text-gray-300 mb-4">
          Les utilisateurs de {currentCity.name} recherchent souvent des
          plateformes fiables, rapides et accessibles depuis le Québec.
          NightRank AI compare les principales plateformes webcams afin de
          faciliter le choix des utilisateurs.
        </p>

        <p className="text-gray-300">
          Nos comparatifs tiennent compte de la popularité, de la qualité de
          l'expérience utilisateur et de la réputation des plateformes.
        </p>
      </div>

      <div className="bg-zinc-900 rounded-2xl p-8 mb-8">
        <h2 className="text-3xl font-bold mb-4">
          Sites webcams recommandés
        </h2>

        <ul className="space-y-3 text-gray-300">
          <li>• Jerkmate</li>
          <li>• LiveJasmin</li>
          <li>• BongaCams</li>
        </ul>
      </div>

      <div className="bg-zinc-900 rounded-2xl p-8">
        <h2 className="text-3xl font-bold mb-4">
          FAQ Webcam {currentCity.name}
        </h2>

        <h3 className="font-bold mb-2">
          Quels sont les meilleurs sites webcams ?
        </h3>

        <p className="text-gray-300 mb-4">
          Les plateformes populaires incluent Jerkmate, LiveJasmin et BongaCams.
        </p>

        <h3 className="font-bold mb-2">
          Les sites webcams sont-ils accessibles au Canada ?
        </h3>

        <p className="text-gray-300">
          Oui, la majorité des plateformes internationales sont accessibles aux
          utilisateurs du Québec et du Canada.
        </p>
      </div>
    </main>
  );
}