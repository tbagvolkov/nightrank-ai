import type { Metadata } from "next";
import { getOffersByCategory } from "@/lib/getOffers";

export const metadata: Metadata = {
  title: "AI Companions Québec | Meilleures AI Girlfriends 2026 | NightRank AI",
  description:
    "Découvrez les meilleures AI Girlfriends, AI Companions et chats IA disponibles au Québec. Comparatifs, avis et guides indépendants.",
  keywords: [
    "AI Girlfriend Québec",
    "AI Companion",
    "AI Chat",
    "AI Girlfriend Canada",
    "Joi AI",
    "Candy AI",
    "OurDream AI",
    "Lovescape",
    "DarLink AI",
  ],
  authors: [{ name: "NightRank AI Editorial Team" }],
  creator: "NightRank AI",
  publisher: "NightRank AI",
  alternates: {
    canonical: "https://nightrankai.com/ai",
  },
  openGraph: {
    title: "Meilleures AI Girlfriends Québec",
    description:
      "Comparatifs des meilleures AI Companions accessibles au Québec.",
    url: "https://nightrankai.com/ai",
    siteName: "NightRank AI",
    locale: "fr_CA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Girlfriends Québec",
    description:
      "Comparatifs indépendants des meilleures AI Companions.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const aiOffers = getOffersByCategory("ai");

export default function AIPage() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-16">
      <div className="max-w-7xl mx-auto">
        <a href="/" className="text-pink-400 hover:text-pink-300">
          ← Retour accueil
        </a>

        <section className="mt-10 bg-zinc-950 border border-zinc-800 rounded-3xl p-8 md:p-12">
          <p className="text-pink-500 font-bold mb-4">
            AI Companions Québec • 2026
          </p>

          <h1 className="text-5xl md:text-6xl font-bold text-pink-500 mb-6">
            Top 5 AI Girlfriends et AI Companions au Québec en 2026
          </h1>

          <p className="text-gray-300 max-w-3xl text-lg">
            Découvrez les meilleures plateformes de compagnons virtuels IA,
            AI Girlfriends et chatbots relationnels accessibles au Québec et au
            Canada.
          </p>
        </section>

        <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {aiOffers.map((offer, index) => (
            <a
              key={offer.slug}
              href={`/blog/${offer.slug}-quebec`}
              className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 hover:border-pink-500 transition"
            >
              <p className="text-pink-500 font-bold mb-3">#{index + 1}</p>

              <h2 className="text-3xl font-bold mb-3">{offer.name}</h2>

              <p className="text-yellow-400 font-bold mb-4">
                ★★★★★ {offer.rating}/5
              </p>

              <p className="text-gray-300 mb-5">{offer.description}</p>

              <span className="text-pink-400 font-bold">Lire l’avis →</span>
            </a>
          ))}
        </section>

        <section className="mt-10 bg-zinc-900 border border-zinc-800 rounded-3xl p-8">
          <h2 className="text-4xl font-bold mb-6 text-pink-500">
            Comparatif rapide des AI Companions
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-zinc-700">
                  <th className="py-3">Plateforme</th>
                  <th className="py-3">Note</th>
                  <th className="py-3">Mots-clés</th>
                </tr>
              </thead>

              <tbody>
                {aiOffers.map((offer) => (
                  <tr key={offer.slug} className="border-b border-zinc-800">
                    <td className="py-4">{offer.name}</td>
                    <td>{offer.rating}/5</td>
                    <td>{offer.keywords.slice(0, 2).join(", ")}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="mt-10 bg-zinc-900 border border-zinc-800 rounded-3xl p-8">
          <h2 className="text-4xl font-bold mb-6 text-pink-500">
            AI Companions au Québec : guide complet
          </h2>

          <p className="text-gray-300 mb-6">
            Les AI Companions connaissent une croissance rapide au Québec. Ces
            plateformes permettent aux utilisateurs de discuter avec des
            personnages virtuels avancés, de découvrir des conversations
            personnalisées et d’explorer une nouvelle catégorie de
            divertissement numérique.
          </p>

          <p className="text-gray-300 mb-6">
            Parmi les plateformes les plus populaires figurent Joi AI, OurDream
            AI, Candy AI, DarLink AI et Lovescape. Chacune possède ses propres
            avantages selon que l'utilisateur recherche une conversation
            naturelle, un compagnon virtuel ou une expérience immersive.
          </p>

          <p className="text-gray-300">
            NightRank AI compare régulièrement les meilleures plateformes
            accessibles au Québec et au Canada afin d'aider les visiteurs à
            choisir la solution la plus adaptée.
          </p>
        </section>

        <section className="mt-10 bg-zinc-900 border border-zinc-800 rounded-3xl p-8">
          <h2 className="text-3xl font-bold mb-6">
            Classement complet des AI Girlfriends
          </h2>

          <p className="text-gray-300 mb-6">
            Pour comparer les plateformes en détail, consultez notre page pilier
            dédiée aux meilleures AI Girlfriends au Québec en 2026.
          </p>

          <a
            href="/blog/top-5-ai-girlfriends-quebec-2026"
            className="inline-block bg-pink-600 hover:bg-pink-700 px-6 py-3 rounded-xl font-bold"
          >
            Voir le Top 5 AI Girlfriends
          </a>
        </section>

        <section className="mt-10 bg-zinc-900 border border-zinc-800 rounded-3xl p-8">
          <h2 className="text-4xl font-bold mb-8 text-pink-500">
            Questions fréquentes
          </h2>

          <div className="space-y-8">
            <Faq
              question="Quelle est la meilleure AI Girlfriend au Québec ?"
              answer="Joi AI, OurDream AI et Candy AI figurent parmi les plateformes les plus populaires actuellement."
            />

            <Faq
              question="Les AI Companions sont-ils disponibles au Canada ?"
              answer="Oui, les plateformes présentées sur NightRank AI sont accessibles depuis le Québec et le Canada."
            />

            <Faq
              question="Quelle alternative à Character AI ?"
              answer="Candy AI, Joi AI, DarLink AI et OurDream AI sont parmi les meilleures alternatives disponibles."
            />
          </div>
        </section>
      </div>
    </main>
  );
}

function Faq({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) {
  return (
    <div>
      <h3 className="text-2xl font-bold mb-2">{question}</h3>
      <p className="text-gray-300">{answer}</p>
    </div>
  );
}