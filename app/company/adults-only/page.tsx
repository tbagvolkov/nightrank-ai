import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";
export const metadata = {
  title: "18+ | NightRank AI",
  description:
    "NightRank AI est réservé aux adultes. Cette page explique notre position concernant l’accès 18+, la responsabilité et l’utilisation des plateformes présentées.",
};

export default function AdultsOnlyPage() {
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
    {
      name: "18+",
      url: "https://nightrankai.com/company/adults-only",
    },
  ]}
/>
      <div className="max-w-6xl mx-auto">
        <a href="/company" className="text-pink-400 hover:text-pink-300">
          ← Retour Trust Center
        </a>

        <section className="mt-10 bg-zinc-950 border border-zinc-800 rounded-3xl p-8 md:p-12">
          <p className="text-pink-500 font-bold mb-4">
            NightRank AI • 18+
          </p>

          <h1 className="text-5xl md:text-6xl font-bold text-pink-500 mb-6">
            Accès réservé aux adultes
          </h1>

          <p className="text-gray-300 text-lg max-w-4xl">
            NightRank AI présente des informations et comparatifs liés à des
            plateformes destinées à un public adulte. Le site est réservé aux
            personnes majeures selon les lois applicables dans leur juridiction.
          </p>
        </section>

        <section className="mt-10 grid md:grid-cols-2 gap-6">
          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8">
            <h2 className="text-3xl font-bold text-pink-500 mb-5">
              Public majeur seulement
            </h2>

            <p className="text-gray-300 mb-4">
              En consultant NightRank AI, vous confirmez être majeur dans votre
              province, pays ou région de résidence.
            </p>

            <p className="text-gray-300">
              Si vous n’avez pas l’âge légal requis, vous devez quitter ce site
              immédiatement.
            </p>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8">
            <h2 className="text-3xl font-bold text-pink-500 mb-5">
              Site de comparaison
            </h2>

            <p className="text-gray-300 mb-4">
              NightRank AI n’héberge pas de contenu adulte et n’exploite pas les
              plateformes présentées.
            </p>

            <p className="text-gray-300">
              Le site fournit des guides, avis et comparatifs informatifs afin
              d’aider les visiteurs adultes à comparer des services tiers.
            </p>
          </div>
        </section>

        <section className="mt-10 bg-zinc-900 border border-zinc-800 rounded-3xl p-8">
          <h2 className="text-4xl font-bold text-pink-500 mb-6">
            Responsabilité des visiteurs
          </h2>

          <p className="text-gray-300 mb-4">
            Les visiteurs sont responsables de vérifier les lois applicables dans
            leur juridiction avant d’utiliser une plateforme présentée sur
            NightRank AI.
          </p>

          <p className="text-gray-300 mb-4">
            Certaines plateformes peuvent avoir leurs propres règles d’âge, de
            vérification, de confidentialité, de paiement ou d’utilisation.
          </p>

          <p className="text-gray-300">
            Nous recommandons toujours de lire les conditions officielles des
            plateformes tierces avant toute inscription ou action.
          </p>
        </section>

        <section className="mt-10 grid md:grid-cols-3 gap-6">
          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8">
            <h3 className="text-2xl font-bold text-pink-500 mb-3">
              18+
            </h3>
            <p className="text-gray-300">
              Le contenu s’adresse exclusivement aux personnes majeures.
            </p>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8">
            <h3 className="text-2xl font-bold text-pink-500 mb-3">
              Comparatif
            </h3>
            <p className="text-gray-300">
              NightRank AI présente des informations, pas un service adulte
              directement exploité par le site.
            </p>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8">
            <h3 className="text-2xl font-bold text-pink-500 mb-3">
              Vérification
            </h3>
            <p className="text-gray-300">
              Chaque plateforme tierce possède ses propres règles et conditions.
            </p>
          </div>
        </section>

        <section className="mt-10 bg-zinc-950 border border-zinc-800 rounded-3xl p-8">
          <h2 className="text-4xl font-bold text-pink-500 mb-6">
            Questions fréquentes
          </h2>

          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold mb-2">
                NightRank AI héberge-t-il du contenu adulte ?
              </h3>
              <p className="text-gray-300">
                Non. NightRank AI est un site de comparaison et d’information.
                Les plateformes présentées sont des sites tiers.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-2">
                Pourquoi une page 18+ ?
              </h3>
              <p className="text-gray-300">
                Parce que le site traite de plateformes destinées aux adultes.
                Il est important de préciser clairement cette restriction.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-2">
                Dois-je vérifier les règles des plateformes ?
              </h3>
              <p className="text-gray-300">
                Oui. Chaque plateforme possède ses propres conditions
                d’utilisation, règles d’âge, politiques de confidentialité et
                restrictions géographiques.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-10 grid md:grid-cols-3 gap-6">
          <a
            href="/company/terms"
            className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 hover:border-pink-500 transition"
          >
            <h3 className="text-2xl font-bold mb-3">
              Conditions d’utilisation
            </h3>
            <p className="text-gray-300">
              Lire les conditions générales de NightRank AI.
            </p>
          </a>

          <a
            href="/company/privacy"
            className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 hover:border-pink-500 transition"
          >
            <h3 className="text-2xl font-bold mb-3">
              Confidentialité
            </h3>
            <p className="text-gray-300">
              Voir notre politique de confidentialité.
            </p>
          </a>

          <a
            href="/company/contact"
            className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 hover:border-pink-500 transition"
          >
            <h3 className="text-2xl font-bold mb-3">Contact</h3>
            <p className="text-gray-300">
              Nous écrire pour une question ou une correction.
            </p>
          </a>
        </section>
      </div>
    </main>
  );
}