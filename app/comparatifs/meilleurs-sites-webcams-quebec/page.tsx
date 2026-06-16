export const metadata = {
  title: "Meilleurs sites webcams au Québec 2026 | NightRank AI",
  description:
    "Comparatif complet des meilleurs sites webcams au Québec et au Canada : Jerkmate, LiveJasmin et BongaCams.",
};

const offers = [
  {
    rank: "1",
    name: "Jerkmate",
    rating: "4.8/5",
    tag: "Meilleur choix global",
    url: "https://t.ajrkmx1.com/197466/6224/0?po=6533&aff_sub5=SF_006OG000004lmDN",
    desc: "Plateforme moderne, rapide et populaire pour les webcams live.",
    strengths: ["Interface moderne", "Bonne expérience mobile", "Large choix de modèles"],
  },
  {
    rank: "2",
    name: "LiveJasmin",
    rating: "4.7/5",
    tag: "Choix premium",
    url: "https://ctwmsg.com/?performerName=&siteId=jasmin&categoryName=girl&pageName=listpage&prm[psid]=tbagvolkov&prm[pstool]=205_1&prm[psprogram]=revs&prm[campaign_id]=&subAffId=",
    desc: "Plateforme webcam haut de gamme avec une image plus premium.",
    strengths: ["Positionnement premium", "Interface soignée", "Bonne réputation"],
  },
  {
    rank: "3",
    name: "BongaCams",
    rating: "4.5/5",
    tag: "Meilleure variété",
    url: "https://bongacams4.com/track?v=2&c=826495",
    desc: "Site webcam international avec beaucoup de choix et de catégories.",
    strengths: ["Grande variété", "Beaucoup de modèles", "Accès simple"],
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
            Comparatif webcam Québec • 2026
          </p>

          <h1 className="text-5xl md:text-7xl font-bold text-pink-500 mb-6">
            Meilleurs sites webcams au Québec
          </h1>

          <p className="text-xl text-gray-300 max-w-4xl">
            Vous cherchez un site webcam fiable, rapide et accessible au Québec ?
            NightRank AI compare les plateformes les plus populaires pour les
            adultes au Canada francophone : Jerkmate, LiveJasmin et BongaCams.
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
                  <th className="py-4 pr-4">Accès</th>
                </tr>
              </thead>

              <tbody>
                <tr className="border-b border-zinc-800">
                  <td className="py-4 pr-4 font-bold">Jerkmate</td>
                  <td className="py-4 pr-4">4.8/5</td>
                  <td className="py-4 pr-4">Choix global et expérience moderne</td>
                  <td className="py-4 pr-4">Québec / Canada</td>
                </tr>

                <tr className="border-b border-zinc-800">
                  <td className="py-4 pr-4 font-bold">LiveJasmin</td>
                  <td className="py-4 pr-4">4.7/5</td>
                  <td className="py-4 pr-4">Expérience premium</td>
                  <td className="py-4 pr-4">Québec / Canada</td>
                </tr>

                <tr>
                  <td className="py-4 pr-4 font-bold">BongaCams</td>
                  <td className="py-4 pr-4">4.5/5</td>
                  <td className="py-4 pr-4">Variété et grand choix</td>
                  <td className="py-4 pr-4">Québec / Canada</td>
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
            Comment choisir un site webcam au Québec ?
          </h2>

          <p className="text-gray-300 mb-4">
            Le meilleur site webcam dépend surtout de ce que vous recherchez :
            une expérience rapide, une interface premium, beaucoup de variété ou
            une plateforme simple à utiliser sur mobile. Pour les utilisateurs
            du Québec, il est aussi important de choisir une plateforme accessible
            au Canada et adaptée aux adultes francophones.
          </p>

          <p className="text-gray-300 mb-4">
            Jerkmate est un bon choix si vous voulez une expérience moderne et
            directe. LiveJasmin est plus adapté si vous préférez une plateforme
            haut de gamme avec une image premium. BongaCams est intéressant pour
            ceux qui veulent beaucoup de choix et une grande variété de modèles.
          </p>

          <p className="text-gray-300">
            NightRank AI ne diffuse pas de contenu explicite. Le site agit comme
            guide indépendant, comparateur et portail d’affiliation vers des
            plateformes partenaires réservées aux adultes de 18 ans et plus.
          </p>
        </section>

        <section className="grid md:grid-cols-2 gap-6 mb-12">
          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8">
            <h2 className="text-3xl font-bold mb-5">
              Mots-clés locaux ciblés
            </h2>

            <ul className="space-y-3 text-gray-300">
              <li>• webcam Québec</li>
              <li>• webcam Montréal</li>
              <li>• cams live Canada</li>
              <li>• meilleur site webcam Québec</li>
              <li>• webcams adultes Québec</li>
            </ul>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8">
            <h2 className="text-3xl font-bold mb-5">
              Villes importantes
            </h2>

            <div className="grid grid-cols-2 gap-3 text-pink-400">
              <a href="/webcam/montreal">Webcam Montréal</a>
              <a href="/webcam/quebec">Webcam Québec</a>
              <a href="/webcam/laval">Webcam Laval</a>
              <a href="/webcam/gatineau">Webcam Gatineau</a>
              <a href="/webcam/sherbrooke">Webcam Sherbrooke</a>
              <a href="/webcam/longueuil">Webcam Longueuil</a>
            </div>
          </div>
        </section>

        <section className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 mb-10">
          <h2 className="text-3xl font-bold mb-6">
            FAQ — sites webcams au Québec
          </h2>

          <h3 className="text-xl font-bold mb-2">
            Quel est le meilleur site webcam au Québec ?
          </h3>
          <p className="text-gray-300 mb-6">
            Jerkmate est notre meilleur choix global grâce à son interface
            moderne, son accès simple et son expérience adaptée aux utilisateurs
            adultes du Québec et du Canada.
          </p>

          <h3 className="text-xl font-bold mb-2">
            LiveJasmin est-il accessible au Canada ?
          </h3>
          <p className="text-gray-300 mb-6">
            Oui, LiveJasmin est accessible aux utilisateurs adultes au Canada.
            Il se distingue surtout par son positionnement premium.
          </p>

          <h3 className="text-xl font-bold mb-2">
            BongaCams est-il différent de Jerkmate ?
          </h3>
          <p className="text-gray-300 mb-6">
            Oui. Jerkmate met davantage l’accent sur une expérience moderne et
            rapide, tandis que BongaCams se distingue par la variété et le grand
            nombre de modèles disponibles.
          </p>

          <h3 className="text-xl font-bold mb-2">
            NightRank AI héberge-t-il du contenu adulte ?
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
            Pour la majorité des visiteurs au Québec, Jerkmate est le meilleur
            point de départ. LiveJasmin est excellent pour une expérience plus
            premium, tandis que BongaCams est une bonne alternative pour ceux qui
            veulent plus de variété.
          </p>

          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <a
              href="https://t.ajrkmx1.com/197466/6224/0?po=6533&aff_sub5=SF_006OG000004lmDN"
              target="_blank"
              rel="nofollow sponsored noopener noreferrer"
              className="bg-pink-600 px-8 py-4 rounded-xl font-bold"
            >
              Voir Jerkmate
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