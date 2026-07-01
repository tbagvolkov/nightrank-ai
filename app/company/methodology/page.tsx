export const metadata = {
  title: "Notre méthodologie | NightRank AI",
  description:
    "Découvrez comment NightRank AI analyse, compare et évalue les plateformes webcams, rencontres adultes, AI Companions et gaming adulte.",
};

const criteria = [
  {
    title: "Expérience utilisateur",
    weight: "25%",
    text: "Nous observons la clarté de l’interface, la facilité de navigation, la rapidité d’accès aux principales fonctions et la qualité globale de l’expérience.",
  },
  {
    title: "Fonctionnalités",
    weight: "20%",
    text: "Nous regardons les outils proposés, les options de personnalisation, les filtres, les modes d’interaction et les éléments qui différencient chaque plateforme.",
  },
  {
    title: "Réputation",
    weight: "20%",
    text: "Nous tenons compte de la notoriété, de la présence internationale, de la stabilité du service et de la cohérence globale de la marque.",
  },
  {
    title: "Rapport qualité/prix",
    weight: "20%",
    text: "Nous analysons si la plateforme offre une expérience cohérente avec son positionnement, ses fonctionnalités et son modèle économique.",
  },
  {
    title: "Pertinence Québec / Canada",
    weight: "15%",
    text: "Nous vérifions si le service est accessible aux utilisateurs canadiens, s’il est pertinent pour un public francophone et s’il s’intègre bien au marché local.",
  },
];

const steps = [
  "Sélection des plateformes",
  "Analyse des fonctionnalités",
  "Comparaison avec les alternatives",
  "Évaluation selon nos critères",
  "Rédaction du guide",
  "Mise à jour régulière",
];

const categories = [
  {
    name: "Webcams",
    text: "Nous comparons les plateformes selon la variété, l’interface, la qualité de navigation, les options cam to cam et l’expérience globale.",
  },
  {
    name: "Rencontres adultes",
    text: "Nous analysons la simplicité d’utilisation, la communauté, les fonctionnalités de messagerie, la pertinence des profils et la clarté de l’offre.",
  },
  {
    name: "AI Companions",
    text: "Nous évaluons la qualité des conversations, la personnalisation, l’immersion, les scénarios, l’interface et l’accessibilité au Canada.",
  },
  {
    name: "Gaming adulte",
    text: "Nous regardons l’expérience interactive, la progression, l’univers visuel, la simplicité d’accès et la valeur divertissement.",
  },
];

export default function MethodologyPage() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-14">
      <div className="max-w-6xl mx-auto">
        <a href="/company" className="text-pink-400 hover:text-pink-300">
          ← Retour Trust Center
        </a>

        <section className="mt-10 bg-zinc-950 border border-zinc-800 rounded-3xl p-8 md:p-12">
          <p className="text-pink-500 font-bold mb-4">
            NightRank AI • Méthodologie
          </p>

          <h1 className="text-5xl md:text-6xl font-bold text-pink-500 mb-6">
            Notre méthodologie de comparaison
          </h1>

          <p className="text-gray-300 text-lg max-w-4xl">
            NightRank AI compare les plateformes selon une approche structurée,
            transparente et adaptée aux utilisateurs du Québec et du Canada.
            Notre objectif est d’aider les visiteurs à comprendre les
            différences entre les services avant de faire leur choix.
          </p>
        </section>

        <section className="mt-10 grid md:grid-cols-2 gap-6">
          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8">
            <h2 className="text-3xl font-bold text-pink-500 mb-5">
              Pourquoi une méthodologie ?
            </h2>

            <p className="text-gray-300 mb-4">
              Le marché des plateformes pour adultes, des AI Companions et des
              expériences interactives évolue rapidement. Sans méthode claire,
              les classements peuvent devenir subjectifs ou difficiles à
              comparer.
            </p>

            <p className="text-gray-300">
              Nous utilisons donc des critères récurrents afin de présenter les
              plateformes de manière plus lisible, plus cohérente et plus utile
              pour les visiteurs.
            </p>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8">
            <h2 className="text-3xl font-bold text-pink-500 mb-5">
              Ce que nous ne faisons pas
            </h2>

            <ul className="space-y-3 text-gray-300">
              <li>• Nous ne promettons pas de résultat garanti.</li>
              <li>• Nous ne prétendons pas qu’une plateforme convient à tous.</li>
              <li>• Nous ne remplaçons pas les conditions officielles des sites.</li>
              <li>• Nous ne présentons pas nos classements comme définitifs.</li>
            </ul>
          </div>
        </section>

        <section className="mt-10">
          <h2 className="text-4xl font-bold text-pink-500 mb-6">
            Nos critères d’évaluation
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {criteria.map((item) => (
              <div
                key={item.title}
                className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8"
              >
                <div className="flex items-center justify-between gap-4 mb-4">
                  <h3 className="text-2xl font-bold">{item.title}</h3>
                  <span className="bg-pink-600/20 text-pink-400 border border-pink-500/30 rounded-full px-4 py-2 font-bold">
                    {item.weight}
                  </span>
                </div>

                <p className="text-gray-300">{item.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-10 bg-zinc-900 border border-zinc-800 rounded-3xl p-8">
          <h2 className="text-4xl font-bold text-pink-500 mb-6">
            Notre processus éditorial
          </h2>

          <div className="grid md:grid-cols-3 gap-4">
            {steps.map((step, index) => (
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

        <section className="mt-10 grid md:grid-cols-2 gap-6">
          {categories.map((cat) => (
            <div
              key={cat.name}
              className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8"
            >
              <h2 className="text-3xl font-bold text-pink-500 mb-4">
                {cat.name}
              </h2>

              <p className="text-gray-300">{cat.text}</p>
            </div>
          ))}
        </section>

        <section className="mt-10 bg-zinc-900 border border-zinc-800 rounded-3xl p-8">
          <h2 className="text-4xl font-bold text-pink-500 mb-6">
            Comment nous attribuons les notes
          </h2>

          <p className="text-gray-300 mb-4">
            Les notes publiées sur NightRank AI sont des repères éditoriaux. Elles
            ne doivent pas être interprétées comme une vérité absolue, mais comme
            une synthèse de nos observations selon les critères ci-dessus.
          </p>

          <p className="text-gray-300 mb-4">
            Une plateforme peut obtenir une excellente note parce qu’elle offre
            une expérience fluide, une bonne réputation, des fonctionnalités
            utiles ou une pertinence forte pour les visiteurs du Québec et du
            Canada.
          </p>

          <p className="text-gray-300">
            À l’inverse, une plateforme peut être moins bien classée si elle
            manque de clarté, si ses fonctionnalités sont limitées ou si elle est
            moins pertinente pour notre public cible.
          </p>
        </section>

        <section className="mt-10 bg-zinc-900 border border-zinc-800 rounded-3xl p-8">
          <h2 className="text-4xl font-bold text-pink-500 mb-6">
            Liens affiliés et indépendance éditoriale
          </h2>

          <p className="text-gray-300 mb-4">
            NightRank AI peut recevoir une commission lorsqu’un visiteur clique
            sur certains liens affiliés et effectue une action admissible. Cette
            commission ne change pas le prix pour l’utilisateur.
          </p>

          <p className="text-gray-300">
            La présence d’un lien affilié ne signifie pas automatiquement qu’une
            plateforme sera mieux classée. Nous cherchons à garder une structure
            éditoriale cohérente, utile et transparente.
          </p>
        </section>

        <section className="mt-10 bg-zinc-950 border border-zinc-800 rounded-3xl p-8">
          <h2 className="text-4xl font-bold text-pink-500 mb-6">
            Questions fréquentes
          </h2>

          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold mb-2">
                Les notes sont-elles définitives ?
              </h3>
              <p className="text-gray-300">
                Non. Les notes peuvent évoluer lorsque les plateformes changent,
                ajoutent de nouvelles fonctionnalités ou modifient leur offre.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-2">
                Les liens affiliés influencent-ils les classements ?
              </h3>
              <p className="text-gray-300">
                Les liens affiliés peuvent soutenir le site, mais notre objectif
                est de conserver une présentation claire et utile pour les
                visiteurs.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-2">
                Pourquoi le Québec et le Canada ?
              </h3>
              <p className="text-gray-300">
                NightRank AI est pensé pour les utilisateurs francophones du
                Québec et du Canada. Nos contenus tiennent compte de cette
                audience lorsqu’ils évaluent la pertinence d’une plateforme.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-10 grid md:grid-cols-3 gap-6">
          <a
            href="/company"
            className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 hover:border-pink-500 transition"
          >
            <h3 className="text-2xl font-bold mb-3">Trust Center</h3>
            <p className="text-gray-300">
              Retourner à la page principale du centre de confiance.
            </p>
          </a>

          <a
            href="/company/contact"
            className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 hover:border-pink-500 transition"
          >
            <h3 className="text-2xl font-bold mb-3">Contact</h3>
            <p className="text-gray-300">
              Nous contacter pour une question ou une correction.
            </p>
          </a>

          <a
            href="/blog"
            className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 hover:border-pink-500 transition"
          >
            <h3 className="text-2xl font-bold mb-3">Guides</h3>
            <p className="text-gray-300">
              Lire nos derniers articles et comparatifs.
            </p>
          </a>
        </section>
      </div>
    </main>
  );
}