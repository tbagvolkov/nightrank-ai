export const metadata = {
  title: "FAQ | NightRank AI",
  description:
    "Questions fréquentes sur NightRank AI, nos comparatifs, nos liens affiliés, nos contenus et notre fonctionnement.",
};

const faqs = [
  {
    question: "Qu’est-ce que NightRank AI ?",
    answer:
      "NightRank AI est un site de comparaison qui présente des guides, avis et classements sur les plateformes webcams, rencontres adultes, AI Companions et gaming adulte accessibles au Québec et au Canada.",
  },
  {
    question: "NightRank AI est-il une plateforme adulte ?",
    answer:
      "Non. NightRank AI n’héberge pas de contenu adulte et n’exploite pas directement les plateformes présentées. Le site sert uniquement à comparer, expliquer et orienter les visiteurs vers des services tiers.",
  },
  {
    question: "Le site est-il réservé aux adultes ?",
    answer:
      "Oui. NightRank AI s’adresse uniquement aux personnes majeures. Le contenu du site concerne des plateformes destinées à un public adulte.",
  },
  {
    question: "Comment choisissez-vous les plateformes présentées ?",
    answer:
      "Nous sélectionnons les plateformes selon leur pertinence, leur accessibilité au Canada, leur réputation, leurs fonctionnalités et leur intérêt pour les visiteurs du Québec.",
  },
  {
    question: "Comment les notes sont-elles attribuées ?",
    answer:
      "Les notes sont des repères éditoriaux basés sur plusieurs critères : expérience utilisateur, fonctionnalités, réputation, rapport qualité/prix et pertinence pour le Québec et le Canada.",
  },
  {
    question: "Les liens sont-ils affiliés ?",
    answer:
      "Certains liens peuvent être affiliés. Cela signifie que NightRank AI peut recevoir une commission si un visiteur clique sur un lien et effectue une action admissible.",
  },
  {
    question: "Est-ce que cela coûte plus cher à l’utilisateur ?",
    answer:
      "Généralement non. Les commissions d’affiliation sont versées par les partenaires et ne changent pas le prix pour l’utilisateur.",
  },
  {
    question: "Les commissions influencent-elles les classements ?",
    answer:
      "Notre objectif est de conserver une structure claire et utile. Les liens affiliés peuvent soutenir le site, mais nous cherchons à présenter les plateformes de façon cohérente et transparente.",
  },
  {
    question: "Les informations sont-elles toujours à jour ?",
    answer:
      "Nous faisons notre possible pour maintenir les contenus à jour. Cependant, les plateformes peuvent modifier leurs prix, fonctionnalités ou conditions. Il faut toujours vérifier les informations directement sur le site officiel.",
  },
  {
    question: "Puis-je proposer une plateforme à analyser ?",
    answer:
      "Oui. Vous pouvez nous contacter si vous souhaitez suggérer une plateforme, signaler une erreur ou proposer une collaboration.",
  },
  {
    question: "NightRank AI donne-t-il des conseils juridiques ou financiers ?",
    answer:
      "Non. Les contenus sont uniquement informatifs. Ils ne constituent pas des conseils juridiques, financiers, médicaux ou professionnels.",
  },
  {
    question: "Comment contacter NightRank AI ?",
    answer:
      "Vous pouvez nous écrire à l’adresse nightrankai@gmail.com pour une question, une correction, une suggestion ou une demande de partenariat.",
  },
];

export default function FAQPage() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-14">
      <div className="max-w-6xl mx-auto">
        <a href="/company" className="text-pink-400 hover:text-pink-300">
          ← Retour Trust Center
        </a>

        <section className="mt-10 bg-zinc-950 border border-zinc-800 rounded-3xl p-8 md:p-12">
          <p className="text-pink-500 font-bold mb-4">
            NightRank AI • FAQ
          </p>

          <h1 className="text-5xl md:text-6xl font-bold text-pink-500 mb-6">
            Questions fréquentes
          </h1>

          <p className="text-gray-300 text-lg max-w-4xl">
            Retrouvez les réponses aux questions les plus fréquentes sur
            NightRank AI, nos comparatifs, nos liens affiliés, notre méthode et
            notre fonctionnement.
          </p>
        </section>

        <section className="mt-10 grid gap-6">
          {faqs.map((faq) => (
            <div
              key={faq.question}
              className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8"
            >
              <h2 className="text-2xl font-bold text-pink-500 mb-4">
                {faq.question}
              </h2>

              <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
            </div>
          ))}
        </section>

        <section className="mt-10 grid md:grid-cols-3 gap-6">
          <a
            href="/company/methodology"
            className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 hover:border-pink-500 transition"
          >
            <h3 className="text-2xl font-bold mb-3">Méthodologie</h3>
            <p className="text-gray-300">
              Voir comment nous comparons les plateformes.
            </p>
          </a>

          <a
            href="/company/affiliate-disclosure"
            className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 hover:border-pink-500 transition"
          >
            <h3 className="text-2xl font-bold mb-3">Liens affiliés</h3>
            <p className="text-gray-300">
              Lire notre divulgation d’affiliation.
            </p>
          </a>

          <a
            href="/company/contact"
            className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 hover:border-pink-500 transition"
          >
            <h3 className="text-2xl font-bold mb-3">Contact</h3>
            <p className="text-gray-300">
              Nous écrire pour une question ou correction.
            </p>
          </a>
        </section>
      </div>
    </main>
  );
}