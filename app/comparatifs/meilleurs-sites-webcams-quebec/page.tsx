export const metadata = {
  title: "Meilleurs sites webcams au Québec | NightRank AI",
  description:
    "Comparatif complet des meilleurs sites webcams au Québec en 2026 : Jerkmate, LiveJasmin, BongaCams, ImLive et LivePrivates.",
};

const sites = [
  {
    rank: "#1 — Meilleur choix global",
    name: "Jerkmate",
    note: "4.8/5",
    best: "Choix global et expérience moderne",
    desc: "Plateforme moderne, rapide et populaire pour les webcams live.",
    visit: "/offres/jerkmate",
    review: "/blog/jerkmate-quebec",
  },
  {
    rank: "#2 — Choix premium",
    name: "LiveJasmin",
    note: "4.7/5",
    best: "Expérience premium",
    desc: "Plateforme webcam haut de gamme avec une image plus premium.",
    visit: "/offres/livejasmin",
    review: "/blog/livejasmin-quebec",
  },
  {
    rank: "#3 — Meilleure variété",
    name: "BongaCams",
    note: "4.5/5",
    best: "Variété et grand choix",
    desc: "Site webcam international avec beaucoup de choix et de catégories.",
    visit: "/offres/bongacams",
    review: "/blog/bongacams-quebec",
  },
  {
    rank: "#4 — Plateforme classique",
    name: "ImLive",
    note: "4.4/5",
    best: "Webcam classique",
    desc: "Alternative webcam établie pour les visiteurs qui veulent comparer plusieurs options.",
    visit:
      "https://t.acrsmartcam.com/197466/2118/0?po=6533&aff_sub5=SF_006OG000004lmDN",
    review: "/blog/imlive-quebec",
  },
  {
    rank: "#5 — Shows privés",
    name: "LivePrivates",
    note: "4.3/5",
    best: "Expériences privées",
    desc: "Plateforme orientée vers les expériences privées et personnalisées.",
    visit:
      "https://ctwmsg.com/?performerName=&siteId=lpr&cobrandId=&superCategoryName=girls&categoryName=girl&pageName=listpage&prm[psid]=tbagvolkov&prm[pstool]=205_1&prm[psprogram]=revs&prm[campaign_id]=&subAffId=",
    review: "/blog/liveprivates-quebec",
  },
];

export default function MeilleursSitesWebcamsQuebec() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-14">
      <div className="max-w-6xl mx-auto">
        <a
          href="/comparatifs"
          className="inline-block text-pink-400 hover:text-pink-300 mb-10"
        >
          ← Retour aux comparatifs
        </a>

        <section className="bg-zinc-950 border border-zinc-800 rounded-3xl p-8 md:p-12 mb-10">
          <p className="text-pink-500 font-bold mb-4">
            Comparatif webcam Québec • 2026
          </p>

          <h1 className="text-5xl md:text-6xl font-bold text-pink-500 mb-6">
            Meilleurs sites webcams au Québec
          </h1>

          <p className="text-gray-300 max-w-3xl text-lg">
            Vous cherchez un site webcam fiable, rapide et accessible au Québec ?
            NightRank AI compare les 5 principales plateformes webcams
            accessibles aux adultes au Canada francophone : Jerkmate,
            LiveJasmin, BongaCams, ImLive et LivePrivates.
          </p>
        </section>

        <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {sites.map((site) => (
            <article
              key={site.name}
              className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 hover:border-pink-500 transition"
            >
              <p className="text-pink-500 text-sm font-bold mb-3">
                {site.rank}
              </p>

              <h2 className="text-3xl font-bold mb-3">{site.name}</h2>

              <p className="text-yellow-400 font-bold mb-4">
                ★★★★★ {site.note}
              </p>

              <p className="text-gray-400 mb-6">{site.desc}</p>

              <div className="flex flex-wrap gap-3">
                <a
                  href={site.visit}
                  target={site.visit.startsWith("http") ? "_blank" : undefined}
                  rel={
                    site.visit.startsWith("http")
                      ? "nofollow sponsored noopener noreferrer"
                      : undefined
                  }
                  className="bg-pink-600 hover:bg-pink-700 text-white font-bold px-5 py-3 rounded-xl"
                >
                  Visiter {site.name}
                </a>

                <a
                  href={site.review}
                  className="border border-pink-500 text-pink-400 hover:bg-pink-500 hover:text-white font-bold px-5 py-3 rounded-xl"
                >
                  Lire l’avis
                </a>
              </div>
            </article>
          ))}
        </section>

        <section className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 mb-10 overflow-x-auto">
          <h2 className="text-3xl font-bold mb-6">
            Tableau comparatif rapide
          </h2>

          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-zinc-700 text-pink-400">
                <th className="py-4 pr-4">Site</th>
                <th className="py-4 pr-4">Note</th>
                <th className="py-4 pr-4">Meilleur pour</th>
                <th className="py-4 pr-4">Accès</th>
              </tr>
            </thead>

            <tbody>
              {sites.map((site) => (
                <tr key={site.name} className="border-b border-zinc-800">
                  <td className="py-4 pr-4 font-bold">{site.name}</td>
                  <td className="py-4 pr-4">{site.note}</td>
                  <td className="py-4 pr-4">{site.best}</td>
                  <td className="py-4 pr-4">Québec / Canada</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        <section className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 mb-10">
          <h2 className="text-3xl font-bold mb-6">
            Notre avis final
          </h2>

          <p className="text-gray-300 mb-4">
            Pour la majorité des visiteurs québécois, Jerkmate reste notre choix
            global grâce à son expérience moderne et directe. LiveJasmin est la
            meilleure option premium, tandis que BongaCams se démarque par sa
            grande variété.
          </p>

          <p className="text-gray-300 mb-4">
            ImLive complète le classement avec une approche plus classique, et
            LivePrivates ajoute une option intéressante pour les utilisateurs
            qui recherchent davantage d’expériences privées.
          </p>

          <p className="text-gray-300">
            Ce Top 5 donne une base solide pour comparer les principales
            plateformes webcams accessibles au Québec en 2026.
          </p>
        </section>

        <section className="grid md:grid-cols-2 gap-6 mb-10">
          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8">
            <h2 className="text-3xl font-bold mb-5">
              Guides liés
            </h2>

            <div className="grid gap-3 text-pink-400">
              <a href="/blog/top-5-webcams-quebec-2026">
                Top 5 Webcams Québec 2026 →
              </a>
              <a href="/blog/cam-to-cam-quebec">
                Cam to Cam Québec →
              </a>
              <a href="/blog/jerkmate-vs-livejasmin">
                Jerkmate vs LiveJasmin →
              </a>
              <a href="/blog/bongacams-vs-jerkmate">
                BongaCams vs Jerkmate →
              </a>
              <a href="/blog/livejasmin-vs-bongacams">
                LiveJasmin vs BongaCams →
              </a>
            </div>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8">
            <h2 className="text-3xl font-bold mb-5">
              Recherches ciblées
            </h2>

            <ul className="space-y-3 text-gray-300">
              <li>• meilleurs sites webcams Québec</li>
              <li>• webcam Québec</li>
              <li>• cam to cam Québec</li>
              <li>• site webcam Canada</li>
              <li>• comparatif webcam Québec</li>
            </ul>
          </div>
        </section>
      </div>
    </main>
  );
}