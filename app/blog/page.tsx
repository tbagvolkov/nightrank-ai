export const metadata = {
  title: "Blog | NightRank AI",
  description:
    "Conseils, comparatifs et tendances adultes au Québec.",
};

const articles = [
  {
    title: "Meilleurs sites webcams au Québec",
    slug: "meilleurs-sites-webcams-quebec",
  },
  {
    title: "Jerkmate vs LiveJasmin",
    slug: "jerkmate-vs-livejasmin",
  },
  {
    title: "Comment choisir un site de rencontre adulte",
    slug: "choisir-site-rencontre",
  },

  {
    title: "Tendances dating au Canada",
    slug: "dating-canada",
  },
];

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-black text-white p-10">

      <a href="/" className="text-pink-400">
        ← Retour accueil
      </a>

      <h1 className="text-5xl font-bold text-pink-500 mt-10 mb-6">
        Blog
      </h1>

      <p className="text-xl text-gray-300 mb-10">
        Guides et comparatifs pour découvrir les meilleures plateformes.
      </p>

      <div className="grid md:grid-cols-3 gap-6">

        {articles.map((article) => (

          <div
            key={article.slug}
            className="bg-zinc-900 rounded-2xl p-6 border border-zinc-800"
          >

            <h2 className="text-2xl font-bold mb-4">
              {article.title}
            </h2>

            <a
              href={`/blog/${article.slug}`}
              className="text-pink-400"
            >
              Lire →
            </a>

          </div>

        ))}

      </div>

    </main>
  );
}