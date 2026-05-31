import { notFound } from "next/navigation";

const articles = [
  {
    title: "Meilleurs sites webcams au Québec",
    slug: "meilleurs-sites-webcams-quebec",
    description:
      "Guide des meilleurs sites webcams pour les utilisateurs du Québec.",
  },
  {
    title: "Comment choisir un site de rencontre adulte",
    slug: "choisir-site-rencontre",
    description:
      "Conseils pour comparer les plateformes de rencontres adultes.",
  },
  {
    title: "Tendances dating au Canada",
    slug: "dating-canada",
    description:
      "Aperçu des tendances de rencontres adultes au Canada.",
  },
];

export async function generateStaticParams() {
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);

  if (!article) return {};

  return {
    title: `${article.title} | NightRank AI`,
    description: article.description,
  };
}

export default async function BlogArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);

  if (!article) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-black text-white p-10">
      <a href="/blog" className="text-pink-400">
        ← Retour blog
      </a>

      <article className="max-w-4xl mt-10">
        <h1 className="text-5xl font-bold text-pink-500 mb-6">
          {article.title}
        </h1>

        <p className="text-xl text-gray-300 mb-10">
          {article.description}
        </p>

        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8">
          <p className="text-gray-300 mb-4">
            NightRank AI analyse les plateformes adultes populaires afin
            d’aider les utilisateurs du Québec et du Canada à comparer les
            options disponibles.
          </p>

          <p className="text-gray-300 mb-4">
            L’objectif est de proposer un guide clair, rapide et discret avec
            une approche SEO locale adaptée au marché québécois.
          </p>

          <p className="text-gray-300">
            Cette page servira ensuite de base pour ajouter du contenu plus
            détaillé, des comparatifs et des liens affiliés.
          </p>
        </div>
      </article>
    </main>
  );
}