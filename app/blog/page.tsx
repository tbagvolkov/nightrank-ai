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
    title: "Cam to Cam Québec : les meilleures plateformes en 2026",
    slug: "cam-to-cam-quebec",
  },

  {
    title: "Jerkmate vs LiveJasmin",
    slug: "jerkmate-vs-livejasmin",
  },

  {
    title: "BongaCams vs Jerkmate",
    slug: "bongacams-vs-jerkmate",
  },
  
  {
    title: "LiveJasmin vs BongaCams",
    slug: "livejasmin-vs-bongacams",
  },
  {
    title: "Jerkmate Québec : avis, accès et alternatives en 2026",
    slug: "jerkmate-quebec",
  },
  
  {
    title: "LiveJasmin Québec : avis, accès et alternatives en 2026",
    slug: "livejasmin-quebec",
  },
  {
    title: "BongaCams Québec : avis, accès et alternatives en 2026",
    slug: "bongacams-quebec",
  },
  {
    title: "ImLive Québec : avis, accès et alternatives en 2026",
    slug: "imlive-quebec",
  },
  {
    title: "LivePrivates Québec : avis, accès et alternatives en 2026",
    slug: "liveprivates-quebec",
  },
  {
    title: "Top 5 Webcams Québec 2026 : comparatif complet",
    slug: "top-5-webcams-quebec-2026",
  },
  {
    title: "OurDream AI Québec : avis, accès et alternatives en 2026",
    slug: "ourdream-ai-quebec",
  },
  {
    title: "Joi AI Québec : avis, accès et alternatives en 2026",
    slug: "joi-ai-quebec",
  },

  {
    title: "AdultFriendFinder vs Sex Messenger",
    slug: "adultfriendfinder-vs-sexmessenger",
  },

  {
    title: "Tendances dating au Canada",
    slug: "dating-canada",
  },

  {
    title: "Meilleurs sites de rencontres adultes à Montréal en 2026",
    slug: "rencontres-adultes-montreal",
  },

  {
    title: "Meilleurs sites de rencontres adultes à Québec en 2026",
    slug: "rencontres-adultes-quebec",
  },

  {
    title: "Meilleurs sites de rencontres adultes à Laval en 2026",
    slug: "rencontres-adultes-laval",
  },

  {
    title: "Meilleurs sites de rencontres adultes à Gatineau en 2026",
    slug: "rencontres-adultes-gatineau",
  },

  {
    title: "Meilleurs sites de rencontres adultes à Sherbrooke en 2026",
    slug: "rencontres-adultes-sherbrooke",
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