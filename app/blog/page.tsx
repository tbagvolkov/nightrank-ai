import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog NightRank AI | Guides, avis et comparatifs Québec 2026",

  description:
    "Tous les guides NightRank AI sur les webcams, AI Companions, rencontres adultes et gaming au Québec.",

  keywords: [
    "blog webcam Québec",
    "blog AI girlfriend",
    "blog dating Québec",
    "blog gaming adulte",
    "NightRank AI",
    "comparatifs Québec",
    "guides webcams",
    "AI Companion Canada",
  ],

  authors: [
    {
      name: "NightRank AI Editorial Team",
    },
  ],

  creator: "NightRank AI",

  publisher: "NightRank AI",

  alternates: {
    canonical: "https://nightrankai.com/blog",
  },

  openGraph: {
    title: "Blog NightRank AI",

    description:
      "Guides et comparatifs sur les webcams, AI Companions, dating et gaming.",

    url: "https://nightrankai.com/blog",

    siteName: "NightRank AI",

    locale: "fr_CA",

    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title: "Blog NightRank AI",

    description:
      "Les meilleurs guides adultes du Québec.",
  },

  robots: {
    index: true,
    follow: true,
  },
};

const aiArticles = [
  {
    title: "Top 5 AI Girlfriends Québec 2026 : comparatif complet",
    slug: "top-5-ai-girlfriends-quebec-2026",
  },
  {
    title: "Joi AI Québec : avis, accès et alternatives en 2026",
    slug: "joi-ai-quebec",
  },
  {
    title: "OurDream AI Québec : avis, accès et alternatives en 2026",
    slug: "ourdream-ai-quebec",
  },
  {
    title: "Candy AI Québec : avis, accès et alternatives en 2026",
    slug: "candy-ai-quebec",
  },
  {
    title: "DarLink AI Québec : avis, accès et alternatives en 2026",
    slug: "darlink-ai-quebec",
  },
  {
    title: "Lovescape Québec : avis, accès et alternatives en 2026",
    slug: "lovescape-quebec",
  },
];

const webcamArticles = [
  {
    title: "Top 5 Webcams Québec 2026 : comparatif complet",
    slug: "top-5-webcams-quebec-2026",
  },
  {
    title: "Meilleurs sites webcams au Québec",
    slug: "meilleurs-sites-webcams-quebec",
  },
  {
    title: "Cam to Cam Québec : les meilleures plateformes en 2026",
    slug: "cam-to-cam-quebec",
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
];

const datingArticles = [
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

const gamingArticles = [
  {
    title: "Gaming adulte au Québec",
    slug: "gaming-adulte-quebec",
  },
];

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-10">
      <div className="max-w-[1600px] mx-auto">
        <a href="/" className="text-pink-400 hover:text-pink-300">
          ← Retour accueil
        </a>

        <section className="mt-10 mb-10 bg-zinc-950 border border-zinc-800 rounded-3xl p-8 md:p-12">
          <p className="text-pink-500 font-bold mb-4">
            Blog NightRank AI • Québec 2026
          </p>

          <h1 className="text-5xl md:text-6xl font-bold text-pink-500 mb-6">
            Guides, avis et comparatifs
          </h1>

          <p className="text-xl text-gray-300 max-w-4xl">
            Retrouvez nos guides SEO sur les webcams, AI Companions,
            rencontres adultes et gaming adulte au Québec et au Canada.
          </p>
        </section>

        <nav className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          <a href="#ai" className="bg-zinc-900 border border-zinc-800 hover:border-pink-500 rounded-2xl p-6">
            <h2 className="text-2xl font-bold text-pink-400 mb-2">🤖 AI</h2>
            <p className="text-gray-400">AI Girlfriends et compagnons IA</p>
          </a>

          <a href="#webcams" className="bg-zinc-900 border border-zinc-800 hover:border-pink-500 rounded-2xl p-6">
            <h2 className="text-2xl font-bold text-pink-400 mb-2">📹 Webcams</h2>
            <p className="text-gray-400">Cams live, cam to cam et avis</p>
          </a>

          <a href="#dating" className="bg-zinc-900 border border-zinc-800 hover:border-pink-500 rounded-2xl p-6">
            <h2 className="text-2xl font-bold text-pink-400 mb-2">❤️ Rencontres</h2>
            <p className="text-gray-400">Dating adulte au Québec</p>
          </a>

          <a href="#gaming" className="bg-zinc-900 border border-zinc-800 hover:border-pink-500 rounded-2xl p-6">
            <h2 className="text-2xl font-bold text-pink-400 mb-2">🎮 Gaming</h2>
            <p className="text-gray-400">Jeux et expériences adultes</p>
          </a>
        </nav>

        <BlogSection
          id="ai"
          title="🤖 AI Companions"
          description="Comparatifs et avis sur les meilleures AI Girlfriends, compagnons IA et plateformes conversationnelles accessibles au Québec."
          articles={aiArticles}
          ctaHref="/ai"
          ctaLabel="Voir la catégorie AI →"
        />

        <BlogSection
          id="webcams"
          title="📹 Webcams"
          description="Guides et comparatifs sur les meilleures plateformes webcams accessibles aux visiteurs du Québec et du Canada."
          articles={webcamArticles}
        />

        <BlogSection
          id="dating"
          title="❤️ Rencontres adultes"
          description="Articles sur les sites de rencontres adultes, comparatifs dating et recherches locales au Québec."
          articles={datingArticles}
        />

        <BlogSection
          id="gaming"
          title="🎮 Gaming adulte"
          description="Guides sur les offres gaming adulte et les expériences interactives présentées sur NightRank AI."
          articles={gamingArticles}
        />
      </div>
    </main>
  );
}

function BlogSection({
  id,
  title,
  description,
  articles,
  ctaHref,
  ctaLabel,
}: {
  id: string;
  title: string;
  description: string;
  articles: { title: string; slug: string }[];
  ctaHref?: string;
  ctaLabel?: string;
}) {
  return (
    <section id={id} className="mb-14 scroll-mt-24">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-6">
        <div>
          <h2 className="text-4xl font-bold text-pink-500 mb-3">{title}</h2>
          <p className="text-gray-300 max-w-3xl">{description}</p>
        </div>

        {ctaHref && ctaLabel && (
          <a
            href={ctaHref}
            className="inline-block border border-pink-500 text-pink-400 hover:bg-pink-500/10 px-5 py-3 rounded-xl font-bold"
          >
            {ctaLabel}
          </a>
        )}
      </div>

      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
        {articles.map((article) => (
          <article
            key={article.slug}
            className="bg-zinc-900 rounded-2xl p-6 border border-zinc-800 hover:border-pink-500 transition"
          >
            <h3 className="text-2xl font-bold mb-4">{article.title}</h3>

            <a href={`/blog/${article.slug}`} className="text-pink-400">
              Lire →
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}