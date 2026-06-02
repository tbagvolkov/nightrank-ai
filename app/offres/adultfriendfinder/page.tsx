export const metadata = {
  title: "AdultFriendFinder avis Québec | NightRank AI",
  description:
    "Avis et présentation de AdultFriendFinder pour les utilisateurs du Québec et du Canada.",
};

const affiliateLink =
  "https://t.crdtg2.com/197466/5165?aff_sub5=SF_006OG000004lmDN";

export default function AdultFriendFinderPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="max-w-5xl mx-auto px-6 py-20">
        <a href="/" className="text-pink-400">
          ← Retour accueil
        </a>

        <p className="text-pink-400 mt-10 mb-4">
          Offre dating adulte
        </p>

        <h1 className="text-5xl md:text-7xl font-bold text-pink-500 mb-8">
          AdultFriendFinder avis Québec
        </h1>

        <p className="text-xl text-gray-300 mb-10">
          AdultFriendFinder est une communauté adulte internationale orientée
          rencontres, profils et connexions entre adultes.
        </p>

        <a
          href={affiliateLink}
          target="_blank"
          rel="nofollow sponsored noopener noreferrer"
          className="inline-block bg-pink-600 hover:bg-pink-700 px-8 py-4 rounded-xl font-bold mb-14"
        >
          Visiter AdultFriendFinder
        </a>

        <div className="grid md:grid-cols-3 gap-6 mb-14">
          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
            <h2 className="text-2xl font-bold mb-3">Type</h2>
            <p className="text-gray-400">Dating adulte</p>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
            <h2 className="text-2xl font-bold mb-3">Pour qui ?</h2>
            <p className="text-gray-400">
              Adultes recherchant une plateforme de rencontres orientée communauté
            </p>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
            <h2 className="text-2xl font-bold mb-3">Catégorie</h2>
            <p className="text-gray-400">Rencontres adultes / dating</p>
          </div>
        </div>

        <section className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 mb-10">
          <h2 className="text-3xl font-bold mb-6">
            Pourquoi choisir AdultFriendFinder ?
          </h2>

          <p className="text-gray-300 mb-4">
            AdultFriendFinder est une plateforme connue dans l’univers des
            rencontres adultes. Pour les utilisateurs du Québec et du Canada,
            elle peut être intéressante pour découvrir une communauté adulte
            internationale avec différents types de profils et d’intérêts.
          </p>

          <p className="text-gray-300 mb-4">
            Sur NightRank AI, AdultFriendFinder est classé dans la catégorie
            dating adulte. Cette offre peut remplacer temporairement Ashley
            Madison dans notre structure, le temps de trouver une autre offre
            dating approuvée.
          </p>

          <p className="text-gray-300">
            NightRank AI ne gère aucun profil utilisateur et n’héberge pas de
            contenu explicite. Le site présente uniquement des avis, des
            comparatifs et des liens vers des plateformes partenaires.
          </p>
        </section>

        <section className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8">
          <h2 className="text-3xl font-bold mb-6">
            FAQ AdultFriendFinder
          </h2>

          <h3 className="text-xl font-bold mb-2">
            AdultFriendFinder est-il accessible au Québec ?
          </h3>
          <p className="text-gray-300 mb-6">
            Oui, AdultFriendFinder est accessible aux utilisateurs adultes au
            Québec et au Canada.
          </p>

          <h3 className="text-xl font-bold mb-2">
            AdultFriendFinder est-il un site de rencontre adulte ?
          </h3>
          <p className="text-gray-300 mb-6">
            Oui, il s’agit d’une plateforme orientée rencontres adultes et
            communauté.
          </p>

          <h3 className="text-xl font-bold mb-2">
            NightRank AI recommande-t-il plusieurs offres dating ?
          </h3>
          <p className="text-gray-300">
            Oui. NightRank AI compare différentes offres dating, webcam et gaming
            pour aider les visiteurs à choisir selon leurs préférences.
          </p>
        </section>
      </section>
    </main>
  );
}