import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";
export const metadata = {
  title: "Conditions d’utilisation | NightRank AI",
  description:
    "Consultez les conditions d’utilisation de NightRank AI, incluant les limites de responsabilité, les liens externes, le contenu informatif et l’accès réservé aux adultes.",
};

export default function TermsPage() {
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
      name: "Conditions d'utilisation",
      url: "https://nightrankai.com/company/terms",
    },
  ]}
/>
      <div className="max-w-6xl mx-auto">
        <a href="/company" className="text-pink-400 hover:text-pink-300">
          ← Retour Trust Center
        </a>

        <section className="mt-10 bg-zinc-950 border border-zinc-800 rounded-3xl p-8 md:p-12">
          <p className="text-pink-500 font-bold mb-4">
            NightRank AI • Conditions
          </p>

          <h1 className="text-5xl md:text-6xl font-bold text-pink-500 mb-6">
            Conditions d’utilisation
          </h1>

          <p className="text-gray-300 text-lg max-w-4xl">
            En utilisant NightRank AI, vous acceptez les présentes conditions
            d’utilisation. Le site est destiné uniquement à un public adulte et
            propose des contenus informatifs et comparatifs.
          </p>
        </section>

        <section className="mt-10 grid gap-6">
          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8">
            <h2 className="text-3xl font-bold text-pink-500 mb-5">
              1. Nature du site
            </h2>

            <p className="text-gray-300">
              NightRank AI est un site de comparaison et d’information. Nous
              présentons des guides, avis et classements sur des plateformes
              tierces, mais nous n’exploitons pas directement ces plateformes.
            </p>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8">
            <h2 className="text-3xl font-bold text-pink-500 mb-5">
              2. Public adulte seulement
            </h2>

            <p className="text-gray-300">
              Le contenu du site concerne des services destinés aux adultes.
              En utilisant NightRank AI, vous confirmez être majeur selon les
              lois applicables dans votre juridiction.
            </p>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8">
            <h2 className="text-3xl font-bold text-pink-500 mb-5">
              3. Contenu informatif
            </h2>

            <p className="text-gray-300">
              Les informations publiées sur NightRank AI sont fournies à titre
              informatif. Elles ne constituent pas des conseils juridiques,
              financiers, médicaux ou professionnels.
            </p>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8">
            <h2 className="text-3xl font-bold text-pink-500 mb-5">
              4. Liens externes
            </h2>

            <p className="text-gray-300">
              Le site contient des liens vers des plateformes tierces. Lorsque
              vous cliquez sur ces liens, vous quittez NightRank AI. Nous ne
              contrôlons pas le contenu, les prix, les conditions, les politiques
              ou les services proposés par ces sites externes.
            </p>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8">
            <h2 className="text-3xl font-bold text-pink-500 mb-5">
              5. Liens affiliés
            </h2>

            <p className="text-gray-300">
              Certains liens présents sur NightRank AI peuvent être des liens
              affiliés. Cela signifie que nous pouvons recevoir une commission
              si une action admissible est effectuée après un clic sur un lien.
            </p>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8">
            <h2 className="text-3xl font-bold text-pink-500 mb-5">
              6. Exactitude des informations
            </h2>

            <p className="text-gray-300">
              Nous faisons notre possible pour publier des informations utiles
              et cohérentes. Cependant, les plateformes peuvent modifier leurs
              offres, prix, fonctionnalités ou conditions sans préavis. Les
              visiteurs doivent toujours vérifier les informations directement
              sur les sites officiels.
            </p>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8">
            <h2 className="text-3xl font-bold text-pink-500 mb-5">
              7. Limitation de responsabilité
            </h2>

            <p className="text-gray-300">
              NightRank AI ne peut être tenu responsable des décisions prises par
              les visiteurs après consultation du site, ni des expériences,
              transactions, inscriptions ou interactions réalisées sur des
              plateformes tierces.
            </p>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8">
            <h2 className="text-3xl font-bold text-pink-500 mb-5">
              8. Modifications
            </h2>

            <p className="text-gray-300">
              Nous pouvons modifier ces conditions d’utilisation à tout moment.
              Les changements prennent effet dès leur publication sur cette page.
            </p>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8">
            <h2 className="text-3xl font-bold text-pink-500 mb-5">
              9. Contact
            </h2>

            <p className="text-gray-300 mb-4">
              Pour toute question concernant ces conditions, vous pouvez nous
              écrire à :
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