import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";
export const metadata = {
  title: "Contact | NightRank AI",
  description:
    "Contactez l’équipe éditoriale NightRank AI pour une correction, une suggestion, un partenariat clairement identifié ou une question liée au site.",
  alternates: { canonical: "https://nightrankai.com/company/contact" },
};

export default function ContactPage() {
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
      name: "Contact",
      url: "https://nightrankai.com/company/contact",
    },
  ]}
/>
      <div className="max-w-5xl mx-auto">
        <a href="/company" className="text-pink-400 hover:text-pink-300">
          ← Retour Trust Center
        </a>

        <section className="mt-10 bg-zinc-950 border border-zinc-800 rounded-3xl p-8 md:p-12">
          <p className="text-pink-500 font-bold mb-4">
            NightRank AI • Contact
          </p>

          <h1 className="text-5xl md:text-6xl font-bold text-pink-500 mb-6">
            Contact
          </h1>

          <p className="text-gray-300 text-lg max-w-3xl">
            Vous pouvez contacter l’équipe éditoriale NightRank AI pour une
            correction, une suggestion, une demande de partenariat clairement
            identifiée ou une question liée à nos guides et comparatifs.
          </p>
        </section>

        <section className="mt-10 grid md:grid-cols-2 gap-6">
          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8">
            <h2 className="text-3xl font-bold text-pink-500 mb-5">
              Nous écrire
            </h2>

            <p className="text-gray-300 mb-6">
              Pour le moment, le contact se fait par courriel. L’adresse est
              utilisée pour les échanges éditoriaux et les signalements.
            </p>

            <a
              href="mailto:nightrankai@gmail.com"
              className="inline-block bg-pink-600 hover:bg-pink-700 px-6 py-3 rounded-xl font-bold"
            >
              nightrankai@gmail.com
            </a>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8">
            <h2 className="text-3xl font-bold text-pink-500 mb-5">
              Types de demandes
            </h2>

            <ul className="space-y-3 text-gray-300">
              <li>• Correction ou mise à jour d’un contenu</li>
              <li>• Suggestion de plateforme à analyser</li>
              <li>• Demande de partenariat</li>
              <li>• Question liée aux liens affiliés</li>
              <li>• Signalement d’un problème technique</li>
            </ul>
          </div>
        </section>

        <section className="mt-10 bg-zinc-900 border border-zinc-800 rounded-3xl p-8">
          <h2 className="text-3xl font-bold text-pink-500 mb-5">
            Corrections et partenariats
          </h2>

          <p className="text-gray-300 mb-4">
            Pour accélérer une correction, indiquez l’URL concernée, l’information
            à vérifier et, si possible, une source officielle. Les corrections
            factuelles sont examinées indépendamment de toute relation commerciale.
          </p>

          <p className="text-gray-300">
            Les propositions commerciales doivent être clairement identifiées.
            Un partenariat, une commission ou un accès offert ne garantit ni une
            note, ni une recommandation, ni une position dans un classement.
          </p>
        </section>

        <section className="mt-10 bg-zinc-900 border border-zinc-800 rounded-3xl p-8">
          <h2 className="text-3xl font-bold text-pink-500 mb-5">
            Informations importantes
          </h2>

          <p className="text-gray-300 mb-4">
            NightRank AI est un site de comparaison et d’information. Nous
            n’exploitons pas directement les plateformes présentées sur le site.
          </p>

          <p className="text-gray-300">
            Pour toute question liée à un compte utilisateur, un abonnement, un
            paiement ou un service spécifique, veuillez contacter directement la
            plateforme concernée.
          </p>
        </section>
      </div>
    </main>
  );
}
