import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";
export const metadata = {
  title: "À propos | NightRank AI",
  description:
    "Découvrez NightRank AI, notre mission, notre méthode de comparaison, nos critères éditoriaux et notre engagement de transparence.",
};

const values = [
  {
    title: "Transparence",
    text: "Nous indiquons clairement que certains liens peuvent être affiliés. Notre objectif est d'aider les visiteurs à comparer avant de choisir.",
  },
  {
    title: "Comparaison",
    text: "Chaque plateforme est présentée selon des critères simples : expérience, fonctionnalités, réputation, accessibilité et pertinence.",
  },
  {
    title: "Québec & Canada",
    text: "NightRank AI met l'accent sur les utilisateurs francophones du Québec et du Canada, avec des guides adaptés au marché local.",
  },
  {
    title: "Mise à jour",
    text: "Le secteur évolue vite. Nos guides sont pensés pour être révisés et améliorés régulièrement.",
  },
];

const process = [
  "Recherche des plateformes",
  "Analyse des fonctionnalités",
  "Comparaison avec les alternatives",
  "Rédaction du guide",
  "Mise à jour du contenu",
];

export default function CompanyPage() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-14">
      <BreadcrumbSchema
  items={[
    {
      name: "Accueil",
      url: "https://nightrankai.com",
    },
    {
      name: "Trust Center",
      url: "https://nightrankai.com/company",
    },
  ]}
/>
      <div className="max-w-6xl mx-auto">
        <a href="/" className="text-pink-400 hover:text-pink-300">
          ← Retour accueil
        </a>

        <section className="mt-10 bg-zinc-950 border border-zinc-800 rounded-3xl p-8 md:p-12">
          <p className="text-pink-500 font-bold mb-4">
            NightRank AI • Trust Center
          </p>

          <h1 className="text-5xl md:text-6xl font-bold text-pink-500 mb-6">
            À propos de NightRank AI
          </h1>

          <p className="text-gray-300 text-lg max-w-4xl">
            NightRank AI est un guide comparatif indépendant dédié aux
            plateformes webcams, rencontres adultes, gaming adulte et AI
            Companions accessibles au Québec et au Canada.
          </p>
        </section>

        <section className="mt-10 grid md:grid-cols-2 gap-6">
          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8">
            <h2 className="text-3xl font-bold mb-5 text-pink-500">
              Notre mission
            </h2>

            <p className="text-gray-300 mb-4">
              Le marché des plateformes pour adultes est vaste, changeant et
              parfois difficile à comprendre. Notre mission est de rendre la
              comparaison plus simple, plus claire et plus utile.
            </p>

            <p className="text-gray-300">
              Nous aidons les visiteurs à identifier les différences entre les
              plateformes, leurs points forts, leurs limites et les situations
              dans lesquelles elles peuvent être pertinentes.
            </p>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8">
            <h2 className="text-3xl font-bold mb-5 text-pink-500">
              Ce que nous couvrons
            </h2>

            <ul className="space-y-3 text-gray-300">
              <li>📹 Webcams et cam to cam</li>
              <li>❤️ Rencontres adultes</li>
              <li>🤖 AI Girlfriends et AI Companions</li>
              <li>🎮 Gaming adulte</li>
              <li>📍 Guides Québec / Canada</li>
            </ul>
          </div>
        </section>

        <section className="mt-10">
          <h2 className="text-4xl font-bold text-pink-500 mb-6">
            Nos valeurs
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {values.map((value) => (
              <div
                key={value.title}
                className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8"
              >
                <h3 className="text-2xl font-bold mb-3">{value.title}</h3>
                <p className="text-gray-300">{value.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-10 bg-zinc-900 border border-zinc-800 rounded-3xl p-8">
          <h2 className="text-4xl font-bold text-pink-500 mb-6">
            Notre méthode de travail
          </h2>

          <div className="grid md:grid-cols-5 gap-4">
            {process.map((step, index) => (
              <div
                key={step}
                className="bg-zinc-950 border border-zinc-800 rounded-2xl p-5"
              >
                <p className="text-pink-500 font-bold mb-2">
                  Étape {index + 1}
                </p>
                <p className="text-gray-300">{step}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-10 bg-zinc-900 border border-zinc-800 rounded-3xl p-8">
          <h2 className="text-4xl font-bold text-pink-500 mb-6">
            Divulgation des liens affiliés
          </h2>

          <p className="text-gray-300 mb-4">
            Certains liens présents sur NightRank AI peuvent être des liens
            affiliés. Cela signifie que nous pouvons recevoir une commission si
            un visiteur clique sur un lien et effectue une action admissible.
          </p>

          <p className="text-gray-300">
            Cette commission ne change pas le prix pour l'utilisateur. Notre
            objectif reste de présenter les plateformes de manière claire,
            structurée et utile.
          </p>
        </section>

        <section className="mt-10 grid md:grid-cols-3 gap-6">
          <a
            href="/blog"
            className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 hover:border-pink-500 transition"
          >
            <h3 className="text-2xl font-bold mb-3">Blog</h3>
            <p className="text-gray-300">Lire nos guides et comparatifs.</p>
          </a>

          <a
            href="/ai"
            className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 hover:border-pink-500 transition"
          >
            <h3 className="text-2xl font-bold mb-3">AI Companions</h3>
            <p className="text-gray-300">Voir notre catégorie IA.</p>
          </a>

          <a
            href="/"
            className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 hover:border-pink-500 transition"
          >
            <h3 className="text-2xl font-bold mb-3">Accueil</h3>
            <p className="text-gray-300">Retourner à NightRank AI.</p>
          </a>
        </section>
      </div>
    </main>
  );
}