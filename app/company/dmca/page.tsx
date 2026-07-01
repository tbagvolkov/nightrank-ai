export const metadata = {
  title: "DMCA | NightRank AI",
  description:
    "Politique DMCA de NightRank AI concernant les droits d'auteur et les demandes de retrait de contenu.",
};

export default function DMCAPage() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-14">
      <div className="max-w-6xl mx-auto">
        <a href="/company" className="text-pink-400 hover:text-pink-300">
          ← Retour Trust Center
        </a>

        <section className="mt-10 bg-zinc-950 border border-zinc-800 rounded-3xl p-8 md:p-12">
          <p className="text-pink-500 font-bold mb-4">
            NightRank AI • DMCA
          </p>

          <h1 className="text-5xl md:text-6xl font-bold text-pink-500 mb-6">
            Politique DMCA
          </h1>

          <p className="text-gray-300 text-lg max-w-4xl">
            NightRank AI respecte les droits d'auteur et s'engage à retirer tout
            contenu qui violerait les droits de propriété intellectuelle lorsqu'une
            demande valide est reçue.
          </p>
        </section>

        <section className="mt-10 grid gap-6">

          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8">
            <h2 className="text-3xl font-bold text-pink-500 mb-5">
              Respect des droits d'auteur
            </h2>

            <p className="text-gray-300">
              NightRank AI publie principalement du contenu original, des guides,
              des comparatifs et des ressources informatives. Nous faisons notre
              possible pour respecter les droits de propriété intellectuelle de
              tous les créateurs.
            </p>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8">
            <h2 className="text-3xl font-bold text-pink-500 mb-5">
              Signaler une violation
            </h2>

            <p className="text-gray-300 mb-4">
              Si vous pensez qu'un contenu publié sur NightRank AI porte atteinte
              à vos droits d'auteur, veuillez nous envoyer une demande contenant :
            </p>

            <ul className="space-y-2 text-gray-300">
              <li>• Votre nom complet</li>
              <li>• Vos coordonnées</li>
              <li>• L'URL concernée</li>
              <li>• Une description du contenu</li>
              <li>• Une preuve de propriété ou d'autorisation</li>
            </ul>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8">
            <h2 className="text-3xl font-bold text-pink-500 mb-5">
              Traitement des demandes
            </h2>

            <p className="text-gray-300">
              Toute demande recevra une analyse dans les meilleurs délais. Si la
              demande est jugée fondée, le contenu concerné pourra être supprimé
              ou modifié.
            </p>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8">
            <h2 className="text-3xl font-bold text-pink-500 mb-5">
              Contact DMCA
            </h2>

            <p className="text-gray-300 mb-4">
              Les demandes DMCA peuvent être envoyées à :
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