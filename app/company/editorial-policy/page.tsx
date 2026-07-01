export const metadata = {
  title: "Politique éditoriale | NightRank AI",
  description:
    "Découvrez la politique éditoriale de NightRank AI : transparence, indépendance, mises à jour, comparatifs et responsabilité.",
};

const principles = [
  {
    title: "Clarté",
    text: "Nous cherchons à expliquer les plateformes avec un langage simple, direct et utile pour les visiteurs.",
  },
  {
    title: "Transparence",
    text: "Nous indiquons lorsque des liens peuvent être affiliés et nous expliquons comment fonctionne notre modèle.",
  },
  {
    title: "Cohérence",
    text: "Nous appliquons une structure similaire pour comparer les plateformes d’une même catégorie.",
  },
  {
    title: "Responsabilité",
    text: "NightRank AI s’adresse uniquement à un public adulte et encourage une utilisation responsable des services présentés.",
  },
];

const workflow = [
  "Recherche du sujet",
  "Analyse des plateformes",
  "Rédaction du contenu",
  "Vérification de la cohérence",
  "Publication",
  "Mise à jour",
];

export default function EditorialPolicyPage() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-14">
      <div className="max-w-6xl mx-auto">
        <a href="/company" className="text-pink-400 hover:text-pink-300">
          ← Retour Trust Center
        </a>

        <section className="mt-10 bg-zinc-950 border border-zinc-800 rounded-3xl p-8 md:p-12">
          <p className="text-pink-500 font-bold mb-4">
            NightRank AI • Politique éditoriale
          </p>

          <h1 className="text-5xl md:text-6xl font-bold text-pink-500 mb-6">
            Politique éditoriale
          </h1>

          <p className="text-gray-300 text-lg max-w-4xl">
            Cette page explique comment NightRank AI rédige, structure, révise
            et met à jour ses contenus afin de proposer des comparatifs plus
            clairs et plus utiles aux visiteurs.
          </p>
        </section>

        <section className="mt-10 grid md:grid-cols-2 gap-6">
          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8">
            <h2 className="text-3xl font-bold text-pink-500 mb-5">
              Notre approche
            </h2>

            <p className="text-gray-300 mb-4">
              NightRank AI publie des guides, avis et comparatifs sur les
              plateformes webcams, rencontres adultes, AI Companions et gaming
              adulte accessibles au Québec et au Canada.
            </p>

            <p className="text-gray-300">
              Notre objectif est de présenter les informations essentielles de
              manière organisée, afin d’aider les visiteurs à comparer les
              options disponibles.
            </p>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8">
            <h2 className="text-3xl font-bold text-pink-500 mb-5">
              Notre responsabilité
            </h2>

            <p className="text-gray-300 mb-4">
              Les contenus publiés sur NightRank AI sont informatifs. Ils ne
              remplacent pas les conditions officielles, les politiques de
              confidentialité ou les informations fournies directement par les
              plateformes concernées.
            </p>

            <p className="text-gray-300">
              Les visiteurs doivent toujours consulter les sites officiels avant
              de créer un compte ou d’effectuer une action.
            </p>
          </div>
        </section>

        <section className="mt-10">
          <h2 className="text-4xl font-bold text-pink-500 mb-6">
            Nos principes éditoriaux
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {principles.map((item) => (
              <div
                key={item.title}
                className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8"
              >
                <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                <p className="text-gray-300">{item.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-10 bg-zinc-900 border border-zinc-800 rounded-3xl p-8">
          <h2 className="text-4xl font-bold text-pink-500 mb-6">
            Comment un contenu est préparé
          </h2>

          <div className="grid md:grid-cols-3 gap-4">
            {workflow.map((step, index) => (
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
          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8">
            <h2 className="text-3xl font-bold text-pink-500 mb-5">
              Mises à jour
            </h2>

            <p className="text-gray-300 mb-4">
              Le marché évolue rapidement. Les plateformes peuvent modifier leurs
              fonctionnalités, leurs prix, leur interface ou leur disponibilité.
            </p>

            <p className="text-gray-300">
              Pour cette raison, NightRank AI peut mettre à jour ses pages afin
              de garder les informations plus cohérentes avec l’état actuel des
              services.
            </p>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8">
            <h2 className="text-3xl font-bold text-pink-500 mb-5">
              Corrections
            </h2>

            <p className="text-gray-300 mb-4">
              Si une information semble inexacte, dépassée ou incomplète, les
              visiteurs peuvent nous contacter afin de nous la signaler.
            </p>

            <a
              href="/company/contact"
              className="inline-block bg-pink-600 hover:bg-pink-700 px-6 py-3 rounded-xl font-bold"
            >
              Signaler une correction
            </a>
          </div>
        </section>

        <section className="mt-10 bg-zinc-900 border border-zinc-800 rounded-3xl p-8">
          <h2 className="text-4xl font-bold text-pink-500 mb-6">
            Contenus affiliés
          </h2>

          <p className="text-gray-300 mb-4">
            Certains contenus peuvent inclure des liens affiliés. Cela signifie
            que NightRank AI peut recevoir une commission si un visiteur clique
            sur un lien et effectue une action admissible.
          </p>

          <p className="text-gray-300">
            La présence d’un lien affilié ne dispense pas le visiteur de comparer
            les options, de lire les conditions officielles et de choisir selon
            ses propres besoins.
          </p>
        </section>

        <section className="mt-10 bg-zinc-950 border border-zinc-800 rounded-3xl p-8">
          <h2 className="text-4xl font-bold text-pink-500 mb-6">
            Questions fréquentes
          </h2>

          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold mb-2">
                Les contenus sont-ils sponsorisés ?
              </h3>
              <p className="text-gray-300">
                Certains liens peuvent être affiliés, mais les pages sont
                structurées pour présenter les informations de façon claire et
                utile.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-2">
                Puis-je demander une correction ?
              </h3>
              <p className="text-gray-300">
                Oui. Vous pouvez nous contacter si une information semble
                incorrecte, incomplète ou dépassée.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-2">
                Les classements changent-ils ?
              </h3>
              <p className="text-gray-300">
                Oui. Les classements peuvent évoluer lorsque de nouvelles
                informations, plateformes ou fonctionnalités deviennent
                pertinentes.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-10 grid md:grid-cols-3 gap-6">
          <a
            href="/company/methodology"
            className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 hover:border-pink-500 transition"
          >
            <h3 className="text-2xl font-bold mb-3">Méthodologie</h3>
            <p className="text-gray-300">
              Comprendre notre système de comparaison.
            </p>
          </a>

          <a
            href="/company/affiliate-disclosure"
            className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 hover:border-pink-500 transition"
          >
            <h3 className="text-2xl font-bold mb-3">Liens affiliés</h3>
            <p className="text-gray-300">
              Voir notre divulgation d’affiliation.
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