export const metadata = {
  title: "Top rencontres adultes au Québec 2026 | NightRank AI",
  description:
    "Comparatif complet des meilleurs sites de rencontres adultes au Québec : AdultFriendFinder, Sex Messenger et BBW Fun.",
};

const offers = [
  {
    rank: "1",
    name: "AdultFriendFinder",
    rating: "4.7/5",
    tag: "Meilleur choix général",
    url: "https://t.crdtg2.com/197466/5165?aff_sub5=SF_006OG000004lmDN",
    desc: "Plateforme généraliste connue pour les rencontres adultes et les communautés en ligne.",
    strengths: ["Grande notoriété", "Communauté internationale", "Bon choix général"],
  },
  {
    rank: "2",
    name: "Sex Messenger",
    rating: "4.5/5",
    tag: "Meilleur pour messagerie",
    url: "https://t.crdtg2.com/197466/7234?aff_sub5=SF_006OG000004lmDN",
    desc: "Offre orientée messagerie adulte et échanges rapides entre utilisateurs.",
    strengths: ["Messagerie directe", "Approche simple", "Multi-CPA intéressant"],
  },
  {
    rank: "3",
    name: "BBW Fun",
    rating: "4.4/5",
    tag: "Meilleure niche BBW",
    url: "https://t.crdtg2.com/197466/7088?aff_sub5=SF_006OG000004lmDN",
    desc: "Offre dating niche orientée BBW, idéale pour varier les recommandations.",
    strengths: ["Niche spécifique", "Audience ciblée", "Bon potentiel RevShare"],
  },
];

export default function Page() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="max-w-[1400px] mx-auto px-6 md:px-10 py-12">

        <a href="/comparatifs" className="text-pink-400">
          ← Retour aux comparatifs
        </a>

        <div className="mt-10 mb-12 bg-gradient-to-br from-zinc-950 to-pink-950/30 border border-zinc-800 rounded-3xl p-8 md:p-12">
          <p className="text-pink-400 font-semibold mb-4">
            Comparatif dating Québec • 2026
          </p>

          <h1 className="text-5xl md:text-7xl font-bold text-pink-500 mb-6">
            Top rencontres adultes au Québec
          </h1>

          <p className="text-xl text-gray-300 max-w-4xl">
            Vous cherchez un site de rencontres adultes fiable, discret et
            accessible au Québec ? NightRank AI compare trois options utiles pour
            les visiteurs adultes du Canada francophone : AdultFriendFinder, Sex
            Messenger et BBW Fun.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-14">
          {offers.map((offer) => (
            <a
              key={offer.name}
              href={offer.url}
              target="_blank"
              rel="nofollow sponsored noopener noreferrer"
              className="bg-zinc-900 border border-zinc-800 rounded-3xl p-7 hover:border-pink-500 transition"
            >
              <p className="text-pink-400 text-sm mb-2">
                #{offer.rank} — {offer.tag}
              </p>

              <h2 className="text-3xl font-bold mb-3">{offer.name}</h2>

              <p className="text-yellow-400 mb-4">★★★★★ {offer.rating}</p>

              <p className="text-gray-400 mb-6">{offer.desc}</p>

              <span className="inline-block bg-pink-600 px-6 py-3 rounded-xl font-bold">
                Visiter {offer.name}
              </span>
            </a>
          ))}
        </div>

        <section className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 mb-10">
          <h2 className="text-3xl font-bold mb-6">
            Tableau comparatif rapide
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-zinc-700 text-pink-400">
                  <th className="py-4 pr-4">Site</th>
                  <th className="py-4 pr-4">Note</th>
                  <th className="py-4 pr-4">Meilleur pour</th>
                  <th className="py-4 pr-4">Type</th>
                </tr>
              </thead>

              <tbody>
                <tr className="border-b border-zinc-800">
                  <td className="py-4 pr-4 font-bold">AdultFriendFinder</td>
                  <td className="py-4 pr-4">4.7/5</td>
                  <td className="py-4 pr-4">Rencontres adultes généralistes</td>
                  <td className="py-4 pr-4">Dating adulte</td>
                </tr>

                <tr className="border-b border-zinc-800">
                  <td className="py-4 pr-4 font-bold">Sex Messenger</td>
                  <td className="py-4 pr-4">4.5/5</td>
                  <td className="py-4 pr-4">Messagerie et échanges rapides</td>
                  <td className="py-4 pr-4">Messagerie adulte</td>
                </tr>

                <tr>
                  <td className="py-4 pr-4 font-bold">BBW Fun</td>
                  <td className="py-4 pr-4">4.4/5</td>
                  <td className="py-4 pr-4">Dating BBW et niche spécifique</td>
                  <td className="py-4 pr-4">Dating niche</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="grid lg:grid-cols-3 gap-6 mb-12">
          {offers.map((offer) => (
            <div
              key={offer.name}
              className="bg-zinc-900 border border-zinc-800 rounded-3xl p-7"
            >
              <h2 className="text-3xl font-bold text-pink-500 mb-4">
                {offer.name}
              </h2>

              <p className="text-gray-300 mb-5">{offer.desc}</p>

              <ul className="space-y-3 text-gray-300 mb-6">
                {offer.strengths.map((item) => (
                  <li key={item}>✅ {item}</li>
                ))}
              </ul>

              <a
                href={offer.url}
                target="_blank"
                rel="nofollow sponsored noopener noreferrer"
                className="inline-block bg-pink-600 px-6 py-3 rounded-xl font-bold"
              >
                Voir {offer.name}
              </a>
            </div>
          ))}
        </section>

        <section className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 mb-10">
          <h2 className="text-3xl font-bold mb-6">
            Comment choisir un site de rencontres adultes au Québec ?
          </h2>

          <p className="text-gray-300 mb-4">
            Le meilleur site de rencontre adulte dépend de l’intention du
            visiteur. Certains utilisateurs veulent une grande communauté,
            d’autres préfèrent une messagerie rapide, tandis que certains
            recherchent une niche plus précise comme le dating BBW.
          </p>

          <p className="text-gray-300 mb-4">
            AdultFriendFinder est le choix le plus généraliste. Sex Messenger
            convient mieux aux visiteurs qui aiment l’idée d’échanges rapides et
            de messagerie. BBW Fun est intéressant pour une audience plus ciblée
            et peut devenir une bonne alternative à long terme grâce à son angle
            niche.
          </p>

          <p className="text-gray-300">
            NightRank AI ne gère aucun profil utilisateur et n’héberge pas de
            contenu explicite. Le site agit comme guide indépendant, comparateur
            et portail d’affiliation vers des plateformes partenaires réservées
            aux adultes de 18 ans et plus.
          </p>
        </section>

        <section className="grid md:grid-cols-2 gap-6 mb-12">
          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8">
            <h2 className="text-3xl font-bold mb-5">
              Mots-clés locaux ciblés
            </h2>

            <ul className="space-y-3 text-gray-300">
              <li>• rencontre adulte Québec</li>
              <li>• dating adulte Montréal</li>
              <li>• site de rencontre adulte Canada</li>
              <li>• rencontre discrète Québec</li>
              <li>• BBW dating Québec</li>
            </ul>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8">
            <h2 className="text-3xl font-bold mb-5">
              Villes importantes
            </h2>

            <div className="grid grid-cols-2 gap-3 text-pink-400">
              <a href="/dating/montreal">Dating Montréal</a>
              <a href="/dating/quebec">Dating Québec</a>
              <a href="/dating/laval">Dating Laval</a>
              <a href="/dating/gatineau">Dating Gatineau</a>
              <a href="/dating/sherbrooke">Dating Sherbrooke</a>
              <a href="/dating/longueuil">Dating Longueuil</a>
            </div>
          </div>
        </section>

        <section className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 mb-10">
          <h2 className="text-3xl font-bold mb-6">
            FAQ — rencontres adultes au Québec
          </h2>

          <h3 className="text-xl font-bold mb-2">
            Quel est le meilleur site de rencontre adulte au Québec ?
          </h3>
          <p className="text-gray-300 mb-6">
            AdultFriendFinder est notre choix généraliste, car il s’adresse à
            une audience large et propose une communauté adulte internationale.
          </p>

          <h3 className="text-xl font-bold mb-2">
            Sex Messenger est-il différent d’AdultFriendFinder ?
          </h3>
          <p className="text-gray-300 mb-6">
            Oui. Sex Messenger met davantage l’accent sur les échanges rapides
            et la messagerie, tandis qu’AdultFriendFinder est plus généraliste.
          </p>

          <h3 className="text-xl font-bold mb-2">
            BBW Fun est-il une offre de niche ?
          </h3>
          <p className="text-gray-300 mb-6">
            Oui. BBW Fun vise une audience plus spécifique, ce qui peut être
            intéressant pour les visiteurs qui recherchent une expérience dating
            moins généraliste.
          </p>

          <h3 className="text-xl font-bold mb-2">
            NightRank AI héberge-t-il des profils ?
          </h3>
          <p className="text-gray-300">
            Non. NightRank AI est un site de comparaison. Les visiteurs sont
            redirigés vers les plateformes partenaires.
          </p>
        </section>

        <section className="text-center bg-gradient-to-br from-pink-900/40 to-zinc-950 border border-pink-900 rounded-3xl p-10">
          <h2 className="text-4xl font-bold mb-5">
            Notre choix recommandé
          </h2>

          <p className="text-gray-300 mb-8 max-w-3xl mx-auto">
            Pour la majorité des visiteurs au Québec, AdultFriendFinder est le
            meilleur point de départ. Sex Messenger est utile pour une approche
            plus directe, tandis que BBW Fun ajoute une option niche intéressante.
          </p>

          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <a
              href="https://t.crdtg2.com/197466/5165?aff_sub5=SF_006OG000004lmDN"
              target="_blank"
              rel="nofollow sponsored noopener noreferrer"
              className="bg-pink-600 px-8 py-4 rounded-xl font-bold"
            >
              Voir AdultFriendFinder
            </a>

            <a
              href="/comparatifs"
              className="border border-pink-500 px-8 py-4 rounded-xl font-bold"
            >
              Voir tous les comparatifs
            </a>
          </div>
        </section>

      </section>
    </main>
  );
}