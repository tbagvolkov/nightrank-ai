export const metadata = {
  title: "Politique de confidentialité | NightRank AI",
  description:
    "Découvrez comment NightRank AI traite les informations, les liens externes, les cookies, les données de navigation et la confidentialité des visiteurs.",
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-14">
      <div className="max-w-6xl mx-auto">
        <a href="/company" className="text-pink-400 hover:text-pink-300">
          ← Retour Trust Center
        </a>

        <section className="mt-10 bg-zinc-950 border border-zinc-800 rounded-3xl p-8 md:p-12">
          <p className="text-pink-500 font-bold mb-4">
            NightRank AI • Confidentialité
          </p>

          <h1 className="text-5xl md:text-6xl font-bold text-pink-500 mb-6">
            Politique de confidentialité
          </h1>

          <p className="text-gray-300 text-lg max-w-4xl">
            Cette politique explique comment NightRank AI peut traiter certaines
            informations liées à la navigation, aux liens externes, aux cookies
            et aux services tiers.
          </p>
        </section>

        <section className="mt-10 grid gap-6">
          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8">
            <h2 className="text-3xl font-bold text-pink-500 mb-5">
              Informations collectées
            </h2>

            <p className="text-gray-300 mb-4">
              NightRank AI ne demande pas directement la création d’un compte
              utilisateur sur le site. Cependant, certaines informations
              techniques peuvent être collectées automatiquement par les outils
              d’analyse, d’hébergement ou de sécurité utilisés par le site.
            </p>

            <ul className="space-y-3 text-gray-300">
              <li>• Adresse IP approximative</li>
              <li>• Type d’appareil et navigateur</li>
              <li>• Pages consultées</li>
              <li>• Source du trafic</li>
              <li>• Données techniques nécessaires au fonctionnement du site</li>
            </ul>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8">
            <h2 className="text-3xl font-bold text-pink-500 mb-5">
              Cookies et outils d’analyse
            </h2>

            <p className="text-gray-300 mb-4">
              NightRank AI peut utiliser des cookies ou technologies similaires
              afin d’améliorer l’expérience utilisateur, mesurer les performances
              du site et comprendre quelles pages sont les plus consultées.
            </p>

            <p className="text-gray-300">
              Ces données sont généralement utilisées sous forme agrégée et ne
              servent pas à identifier directement une personne.
            </p>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8">
            <h2 className="text-3xl font-bold text-pink-500 mb-5">
              Liens externes
            </h2>

            <p className="text-gray-300 mb-4">
              NightRank AI contient des liens vers des sites tiers. Lorsque vous
              cliquez sur ces liens, vous quittez NightRank AI et êtes soumis aux
              politiques de confidentialité et conditions du site externe.
            </p>

            <p className="text-gray-300">
              Nous vous recommandons de lire les politiques officielles des
              plateformes que vous visitez.
            </p>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8">
            <h2 className="text-3xl font-bold text-pink-500 mb-5">
              Liens affiliés
            </h2>

            <p className="text-gray-300 mb-4">
              Certains liens peuvent être affiliés. Les partenaires peuvent
              utiliser des technologies de suivi afin d’attribuer correctement
              une commission lorsqu’une action admissible est effectuée.
            </p>

            <p className="text-gray-300">
              Pour plus d’informations, consultez notre page de divulgation des
              liens affiliés.
            </p>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8">
            <h2 className="text-3xl font-bold text-pink-500 mb-5">
              Contact
            </h2>

            <p className="text-gray-300 mb-4">
              Pour toute question liée à cette politique de confidentialité, vous
              pouvez nous contacter à l’adresse suivante :
            </p>

            <a
              href="mailto:nightrankai@gmail.com"
              className="inline-block bg-pink-600 hover:bg-pink-700 px-6 py-3 rounded-xl font-bold"
            >
              nightrankai@gmail.com
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}