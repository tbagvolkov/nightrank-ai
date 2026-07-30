import Image from "next/image";

export const metadata = {
  title: "Meilleurs sites webcams au Québec en 2026 | NightRank AI",
  description:
    "Comparatif détaillé des meilleurs sites webcams accessibles au Québec en 2026 : Jerkmate, LiveJasmin, BongaCams, ImLive et LivePrivates.",
  alternates: {
    canonical:
      "https://nightrankai.com/comparatifs/meilleurs-sites-webcams-quebec",
  },
  openGraph: {
    title: "Meilleurs sites webcams au Québec en 2026",
    description:
      "Comparez Jerkmate, LiveJasmin, BongaCams, ImLive et LivePrivates selon leur interface, leur variété, leurs options privées et leur facilité d’utilisation.",
    url: "https://nightrankai.com/comparatifs/meilleurs-sites-webcams-quebec",
    siteName: "NightRank AI",
    locale: "fr_CA",
    type: "article",
  },
};

const sites = [
  {
    position: 1,
    rank: "#1",
    badge: "Meilleur choix",
    badgeColor: "from-yellow-500 to-amber-600",
    name: "Jerkmate",
    note: "4.8/5",
    best: "Expérience moderne et recommandations",
    desc: "Une plateforme moderne conçue pour trouver rapidement des diffusions et des profils correspondant aux préférences de l’utilisateur.",
    image: "/images/webcams/jerkmate-quebec.webp",
    imageAlt:
      "Présentation de Jerkmate dans le comparatif des sites webcams au Québec",
    visit: "/offres/jerkmate",
    review: "/blog/jerkmate-quebec",
    strengths: [
      "Interface moderne et intuitive",
      "Navigation adaptée au mobile",
      "Grande diversité de profils",
    ],
    limits:
      "Les interactions privées et les fonctionnalités payantes peuvent rapidement augmenter le coût d’utilisation.",
    pricing:
      "Accès initial gratuit, puis système de crédits pour les fonctions payantes.",
    ideal:
      "Les visiteurs qui privilégient une interface moderne et une découverte rapide des profils.",
  },
  {
    position: 2,
    rank: "#2",
    badge: "Choix premium",
    badgeColor: "from-violet-500 to-purple-700",
    name: "LiveJasmin",
    note: "4.7/5",
    best: "Présentation premium et qualité visuelle",
    desc: "Une plateforme historique qui met l’accent sur la présentation, la qualité des diffusions et les interactions privées.",
    image: "/images/webcams/livejasmin-quebec.webp",
    imageAlt:
      "Présentation de LiveJasmin, plateforme webcam premium accessible au Québec",
    visit: "/offres/livejasmin",
    review: "/blog/livejasmin-quebec",
    strengths: [
      "Présentation visuelle soignée",
      "Nombreux filtres de recherche",
      "Expérience privée développée",
    ],
    limits:
      "Le positionnement premium peut produire une facture plus élevée selon les profils et les options sélectionnés.",
    pricing:
      "Inscription et exploration possibles sans abonnement obligatoire; crédits requis pour plusieurs interactions premium.",
    ideal:
      "Les utilisateurs qui recherchent une expérience plus haut de gamme et personnalisée.",
  },
  {
    position: 3,
    rank: "#3",
    badge: "Meilleure variété",
    badgeColor: "from-orange-500 to-red-600",
    name: "BongaCams",
    note: "4.5/5",
    best: "Variété de catégories et salons publics",
    desc: "Une plateforme internationale reconnue pour son grand nombre de diffusions, ses catégories variées et son modèle orienté salons publics.",
    image: "/images/webcams/bongacams-quebec.webp",
    imageAlt:
      "Présentation de BongaCams dans le classement webcam Québec et Canada",
    visit: "/offres/bongacams",
    review: "/blog/bongacams-quebec",
    strengths: [
      "Nombreuses catégories disponibles",
      "Salons publics faciles à explorer",
      "Plateforme optimisée pour mobile",
    ],
    limits:
      "La qualité de présentation et de diffusion peut varier sensiblement d’un profil à l’autre.",
    pricing:
      "Consultation de salons publics, puis jetons pour les pourboires, demandes et sessions privées.",
    ideal:
      "Les visiteurs qui souhaitent explorer beaucoup de catégories avant de choisir une interaction payante.",
  },
  {
    position: 4,
    rank: "#4",
    badge: "Plateforme classique",
    badgeColor: "from-blue-500 to-indigo-700",
    name: "ImLive",
    note: "4.4/5",
    best: "Expérience établie et approche traditionnelle",
    desc: "Une plateforme webcam établie qui conserve une approche plus classique, principalement centrée sur les échanges personnalisés.",
    image: "/images/webcams/imlive-quebec.webp",
    imageAlt:
      "Présentation de ImLive, plateforme webcam classique disponible au Canada",
    visit:
      "https://t.acrsmartcam.com/197466/2118/0?po=6533&aff_sub5=SF_006OG000004lmDN",
    review: "/blog/imlive-quebec",
    strengths: [
      "Plateforme présente depuis longtemps",
      "Interactions privées personnalisées",
      "Filtres de recherche accessibles",
    ],
    limits:
      "Le design et l’organisation peuvent sembler plus traditionnels que ceux des plateformes plus récentes.",
    pricing:
      "Système de crédits dont l’utilisation dépend du profil et du type de session sélectionné.",
    ideal:
      "Les utilisateurs qui préfèrent une expérience webcam classique et centrée sur les échanges privés.",
  },
  {
    position: 5,
    rank: "#5",
    badge: "Expérience privée",
    badgeColor: "from-fuchsia-500 to-purple-700",
    name: "LivePrivates",
    note: "4.3/5",
    best: "Sessions privées et interactions directes",
    desc: "Une plateforme particulièrement orientée vers les expériences privées, les échanges directs et les interactions personnalisées.",
    image: "/images/webcams/liveprivates-quebec.webp",
    imageAlt:
      "Présentation de LivePrivates et de ses options privées au Québec",
    visit:
      "https://ctwmsg.com/?performerName=&siteId=lpr&cobrandId=&superCategoryName=girls&categoryName=girl&pageName=listpage&prm[psid]=tbagvolkov&prm[pstool]=205_1&prm[psprogram]=revs&prm[campaign_id]=&subAffId=",
    review: "/blog/liveprivates-quebec",
    strengths: [
      "Orientation vers les échanges privés",
      "Interactions plus personnalisées",
      "Navigation relativement simple",
    ],
    limits:
      "Le catalogue et les salons publics peuvent sembler moins étendus que sur les plateformes les plus importantes.",
    pricing:
      "Accès à la plateforme, puis crédits nécessaires pour les interactions privées et certaines fonctions.",
    ideal:
      "Les visiteurs qui accordent plus d’importance aux interactions privées qu’aux grands salons publics.",
  },
];

const faqs = [
  {
    question: "Quel est le meilleur site webcam au Québec en 2026 ?",
    answer:
      "Jerkmate occupe la première position de notre classement éditorial grâce à son interface moderne, sa variété et sa facilité d’utilisation. LiveJasmin constitue toutefois une meilleure option pour les utilisateurs qui recherchent une expérience plus premium.",
  },
  {
    question: "Les sites webcams sont-ils gratuits ?",
    answer:
      "L’accès initial, la consultation des profils ou certains salons publics peuvent être gratuits. Les sessions privées, pourboires, fonctions interactives et contenus premium nécessitent généralement des crédits ou des jetons.",
  },
  {
    question: "Combien coûte un site webcam ?",
    answer:
      "Le coût varie selon la plateforme, le forfait de crédits, le modèle sélectionné, la durée de l’interaction et le type de session. Il est préférable de vérifier le tarif affiché directement avant de commencer une fonction payante.",
  },
  {
    question: "Peut-on utiliser ces plateformes sur un téléphone ?",
    answer:
      "Les cinq plateformes de ce comparatif sont accessibles depuis un navigateur mobile. La qualité de l’expérience dépend néanmoins de l’appareil, du navigateur et de la connexion Internet.",
  },
  {
    question: "Quelle est la différence entre un salon public et privé ?",
    answer:
      "Un salon public peut être visible par plusieurs personnes et fonctionner grâce aux pourboires. Une session privée est réservée à un utilisateur ou à un groupe limité et est généralement facturée à la minute.",
  },
  {
    question: "Faut-il créer un compte ?",
    answer:
      "Certaines pages et diffusions peuvent être consultées sans compte. Une inscription devient généralement nécessaire pour acheter des crédits, envoyer des pourboires, enregistrer des favoris ou démarrer une interaction privée.",
  },
  {
    question: "Les notes affichées sont-elles officielles ?",
    answer:
      "Non. Les notes présentées sont des évaluations éditoriales de NightRank AI fondées sur la navigation, les fonctionnalités, la variété, l’accessibilité mobile et le rapport global entre l’expérience et le prix.",
  },
  {
    question: "Comment éviter de dépenser trop rapidement ?",
    answer:
      "Définissez un budget avant la visite, vérifiez le prix par minute, désactivez les achats automatiques lorsque cette option existe et évitez de conserver un moyen de paiement enregistré si cela n’est pas nécessaire.",
  },
];

const itemListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Meilleurs sites webcams au Québec en 2026",
  description:
    "Classement éditorial NightRank AI des plateformes webcams accessibles au Québec et au Canada.",
  numberOfItems: sites.length,
  itemListElement: sites.map((site) => ({
    "@type": "ListItem",
    position: site.position,
    name: site.name,
    url: `https://nightrankai.com${site.review}`,
  })),
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export default function MeilleursSitesWebcamsQuebec() {
  return (
    <main className="min-h-screen bg-black px-4 py-10 text-white sm:px-6 lg:px-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(itemListSchema),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />

      <div className="mx-auto max-w-7xl">
        <nav
          aria-label="Fil d’Ariane"
          className="mb-8 flex flex-wrap items-center gap-2 text-sm text-gray-400"
        >
          <a href="/" className="transition hover:text-pink-400">
            Accueil
          </a>
          <span>›</span>
          <a
            href="/comparatifs"
            className="transition hover:text-pink-400"
          >
            Comparatifs
          </a>
          <span>›</span>
          <span className="text-gray-200">Webcams Québec</span>
        </nav>

        <section className="relative mb-10 overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-950 p-7 sm:p-10 lg:p-14">
          <div className="pointer-events-none absolute -right-32 -top-40 h-96 w-96 rounded-full bg-pink-600/20 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-40 left-1/3 h-80 w-80 rounded-full bg-purple-700/20 blur-3xl" />

          <div className="relative grid items-center gap-10 lg:grid-cols-[1.5fr_0.8fr]">
            <div>
              <p className="mb-4 font-bold text-pink-500">
                Comparatif webcam Québec • Mis à jour en 2026
              </p>

              <h1 className="mb-6 max-w-4xl text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl">
                Meilleurs sites{" "}
                <span className="text-pink-500">webcams au Québec</span>
              </h1>

              <p className="max-w-3xl text-lg leading-8 text-gray-300">
                Vous recherchez un site webcam fiable, accessible depuis le
                Québec et agréable à utiliser sur ordinateur ou téléphone?
                NightRank AI compare cinq plateformes populaires selon leur
                interface, leur variété, leurs options privées, leur
                accessibilité mobile et leur fonctionnement général.
              </p>

              <div className="mt-8 grid gap-4 text-sm text-gray-200 sm:grid-cols-2 lg:grid-cols-4">
                {[
                  ["✓", "Comparaison indépendante"],
                  ["↻", "Contenu mis à jour"],
                  ["⚜", "Adapté au Québec"],
                  ["🔒", "Conseils de confidentialité"],
                ].map(([icon, label]) => (
                  <div
                    key={label}
                    className="flex items-center gap-3 rounded-xl border border-zinc-800 bg-black/40 p-4"
                  >
                    <span className="text-xl text-pink-500">{icon}</span>
                    <span>{label}</span>
                  </div>
                ))}
              </div>
            </div>

            <aside className="rounded-2xl border border-pink-500/20 bg-black/50 p-6 shadow-2xl shadow-pink-950/20">
              <h2 className="mb-5 text-xl font-bold">
                Comment lire ce classement?
              </h2>

              <ul className="space-y-4 text-sm leading-6 text-gray-300">
                <li>✓ Les notes sont éditoriales et non officielles.</li>
                <li>✓ Les prix peuvent varier selon les options choisies.</li>
                <li>✓ Les liens « Visiter » peuvent être affiliés.</li>
                <li>✓ L’accès aux plateformes est réservé aux adultes.</li>
              </ul>

              <div className="mt-6 rounded-xl border border-zinc-800 bg-zinc-950 p-5">
                <p className="text-sm text-gray-400">Notre choix global</p>
                <p className="mt-1 text-2xl font-black text-pink-500">
                  Jerkmate
                </p>
                <p className="mt-2 font-bold text-yellow-400">
                  ★★★★★ 4.8/5
                </p>
              </div>
            </aside>
          </div>
        </section>

        <section className="mb-14">
          <div className="mb-7">
            <p className="font-semibold text-pink-500">
              Classement NightRank AI
            </p>
            <h2 className="mt-2 text-3xl font-black sm:text-4xl">
              Notre Top 5 des plateformes webcams
            </h2>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            {sites.map((site, index) => {
              const isExternal = site.visit.startsWith("http");

              return (
                <article
                  key={site.name}
                  className={`group overflow-hidden rounded-3xl border bg-zinc-950 transition duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-pink-950/30 ${
                    index === 0
                      ? "border-yellow-500/60 lg:col-span-2"
                      : "border-zinc-800 hover:border-pink-500/60"
                  }`}
                >
                  <div
                    className={`grid ${
                      index === 0
                        ? "md:grid-cols-[0.9fr_1.1fr]"
                        : "md:grid-cols-[0.85fr_1.15fr]"
                    }`}
                  >
                    <div className="relative min-h-[300px] overflow-hidden">
                      <Image
                        src={site.image}
                        alt={site.imageAlt}
                        fill
                        sizes={
                          index === 0
                            ? "(max-width: 768px) 100vw, 45vw"
                            : "(max-width: 768px) 100vw, 35vw"
                        }
                        className="object-cover transition duration-500 group-hover:scale-105"
                        priority={index === 0}
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/5 to-transparent md:bg-gradient-to-r md:from-transparent md:to-zinc-950/40" />

                      <div className="absolute left-4 top-4 rounded-xl border border-white/20 bg-black/70 px-4 py-2 text-xl font-black backdrop-blur">
                        {site.rank}
                      </div>
                    </div>

                    <div className="flex flex-col p-6 sm:p-8">
                      <div
                        className={`mb-5 inline-flex w-fit rounded-full bg-gradient-to-r ${site.badgeColor} px-4 py-2 text-xs font-black uppercase tracking-wide text-white`}
                      >
                        {site.badge}
                      </div>

                      <h3 className="text-3xl font-black sm:text-4xl">
                        {site.name}
                      </h3>

                      <div className="mt-3 flex flex-wrap items-center gap-3">
                        <span className="font-bold text-yellow-400">
                          ★★★★★
                        </span>
                        <span className="font-bold">{site.note}</span>
                        <span className="text-sm text-gray-500">
                          Note éditoriale
                        </span>
                      </div>

                      <p className="mt-5 leading-7 text-gray-300">
                        {site.desc}
                      </p>

                      <ul className="mt-5 grid gap-3 text-sm text-gray-300">
                        {site.strengths.map((strength) => (
                          <li
                            key={strength}
                            className="flex items-center gap-3"
                          >
                            <span className="flex h-5 w-5 items-center justify-center rounded-full border border-pink-500 text-xs text-pink-400">
                              ✓
                            </span>
                            {strength}
                          </li>
                        ))}
                      </ul>

                      <div className="mt-7 flex flex-wrap gap-3">
                        <a
                          href={site.visit}
                          target={isExternal ? "_blank" : undefined}
                          rel={
                            isExternal
                              ? "nofollow sponsored noopener noreferrer"
                              : undefined
                          }
                          className="rounded-xl bg-pink-600 px-5 py-3 font-bold text-white transition hover:bg-pink-500"
                        >
                          Visiter {site.name} →
                        </a>

                        <a
                          href={site.review}
                          className="rounded-xl border border-pink-500 px-5 py-3 font-bold text-pink-400 transition hover:bg-pink-500 hover:text-white"
                        >
                          Lire l’avis
                        </a>
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        <section className="mb-14 overflow-x-auto rounded-3xl border border-zinc-800 bg-zinc-950 p-6 sm:p-8">
          <h2 className="mb-3 text-3xl font-black">
            Tableau comparatif rapide
          </h2>

          <p className="mb-7 max-w-3xl leading-7 text-gray-400">
            Ce tableau résume le positionnement de chaque plateforme. Les prix
            exacts ne sont pas affichés, car ils peuvent changer selon les
            forfaits, les promotions et les profils.
          </p>

          <table className="w-full min-w-[850px] text-left">
            <thead>
              <tr className="border-b border-zinc-700 text-sm uppercase tracking-wide text-pink-400">
                <th className="px-3 py-4">Position</th>
                <th className="px-3 py-4">Plateforme</th>
                <th className="px-3 py-4">Note</th>
                <th className="px-3 py-4">Meilleur pour</th>
                <th className="px-3 py-4">Tarification</th>
                <th className="px-3 py-4">Accès</th>
              </tr>
            </thead>

            <tbody>
              {sites.map((site) => (
                <tr
                  key={site.name}
                  className="border-b border-zinc-800 text-gray-300 transition hover:bg-zinc-900/80"
                >
                  <td className="px-3 py-5 font-black text-pink-500">
                    {site.rank}
                  </td>
                  <td className="px-3 py-5 font-bold text-white">
                    {site.name}
                  </td>
                  <td className="px-3 py-5 text-yellow-400">
                    {site.note}
                  </td>
                  <td className="px-3 py-5">{site.best}</td>
                  <td className="max-w-xs px-3 py-5 text-sm">
                    {site.pricing}
                  </td>
                  <td className="px-3 py-5">Québec / Canada</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        <section className="mb-14">
          <div className="mb-8 max-w-4xl">
            <p className="font-semibold text-pink-500">
              Analyse éditoriale détaillée
            </p>
            <h2 className="mt-2 text-3xl font-black sm:text-4xl">
              Quel site webcam choisir au Québec?
            </h2>

            <p className="mt-5 text-lg leading-8 text-gray-300">
              Il n’existe pas une plateforme parfaite pour tous les
              utilisateurs. Le meilleur choix dépend du type d’expérience
              recherché, du budget disponible, de la qualité de la connexion
              Internet et de l’importance accordée aux salons publics ou aux
              interactions privées.
            </p>
          </div>

          <div className="space-y-7">
            {sites.map((site) => (
              <article
                key={`analyse-${site.name}`}
                className="rounded-3xl border border-zinc-800 bg-zinc-950 p-7 sm:p-9"
              >
                <div className="grid gap-8 lg:grid-cols-[1fr_0.42fr]">
                  <div>
                    <p className="mb-2 font-bold text-pink-500">
                      {site.rank} • {site.badge}
                    </p>

                    <h3 className="text-3xl font-black">
                      Notre avis sur {site.name}
                    </h3>

                    <p className="mt-5 leading-8 text-gray-300">
                      {site.desc} Son positionnement dans notre classement
                      repose sur son expérience générale, sa navigation, son
                      accessibilité depuis le Canada et la façon dont ses
                      fonctionnalités sont présentées aux nouveaux visiteurs.
                    </p>

                    <h4 className="mt-7 text-xl font-bold">
                      À qui convient {site.name}?
                    </h4>

                    <p className="mt-3 leading-7 text-gray-300">
                      {site.ideal}
                    </p>

                    <h4 className="mt-7 text-xl font-bold">
                      Prix et fonctionnement
                    </h4>

                    <p className="mt-3 leading-7 text-gray-300">
                      {site.pricing} Le tarif réel doit toujours être vérifié
                      sur la plateforme avant de démarrer une session. La durée
                      d’utilisation constitue souvent le facteur ayant le plus
                      d’influence sur la dépense totale.
                    </p>
                  </div>

                  <aside className="space-y-5">
                    <div className="rounded-2xl border border-emerald-500/20 bg-emerald-500/5 p-5">
                      <h4 className="font-bold text-emerald-400">
                        Points forts
                      </h4>

                      <ul className="mt-4 space-y-3 text-sm text-gray-300">
                        {site.strengths.map((strength) => (
                          <li key={strength}>✓ {strength}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="rounded-2xl border border-orange-500/20 bg-orange-500/5 p-5">
                      <h4 className="font-bold text-orange-400">
                        Point à considérer
                      </h4>

                      <p className="mt-3 text-sm leading-6 text-gray-300">
                        {site.limits}
                      </p>
                    </div>
                  </aside>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="mb-14 grid gap-6 lg:grid-cols-2">
          <article className="rounded-3xl border border-zinc-800 bg-zinc-950 p-7 sm:p-9">
            <p className="font-semibold text-pink-500">
              Guide d’utilisation
            </p>

            <h2 className="mt-2 text-3xl font-black">
              Comment choisir une plateforme webcam?
            </h2>

            <div className="mt-7 space-y-6 text-gray-300">
              <div>
                <h3 className="text-lg font-bold text-white">
                  1. Définir le type d’expérience
                </h3>
                <p className="mt-2 leading-7">
                  Les salons publics conviennent mieux à l’exploration et à la
                  découverte. Les sessions privées correspondent davantage aux
                  visiteurs recherchant une interaction directe et
                  personnalisée.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-bold text-white">
                  2. Vérifier le coût avant de commencer
                </h3>
                <p className="mt-2 leading-7">
                  Examinez le prix par minute, le nombre de crédits disponibles
                  et les conditions associées aux promotions. Un forfait
                  important n’est avantageux que lorsqu’il correspond à votre
                  utilisation réelle.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-bold text-white">
                  3. Tester la navigation mobile
                </h3>
                <p className="mt-2 leading-7">
                  Une bonne plateforme doit rester rapide, lisible et facile à
                  utiliser sur un téléphone. La qualité vidéo dépend également
                  de votre connexion et de la diffusion du profil sélectionné.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-bold text-white">
                  4. Contrôler les paramètres du compte
                </h3>
                <p className="mt-2 leading-7">
                  Consultez les réglages de confidentialité, les notifications,
                  les préférences de paiement et les options permettant de
                  supprimer ou de sécuriser le compte.
                </p>
              </div>
            </div>
          </article>

          <article className="rounded-3xl border border-zinc-800 bg-zinc-950 p-7 sm:p-9">
            <p className="font-semibold text-pink-500">
              Budget et crédits
            </p>

            <h2 className="mt-2 text-3xl font-black">
              Comprendre les prix des sites webcams
            </h2>

            <p className="mt-5 leading-8 text-gray-300">
              La plupart des plateformes n’utilisent pas un abonnement mensuel
              unique pour toutes les fonctions. Elles proposent plutôt une
              monnaie virtuelle sous forme de crédits ou de jetons.
            </p>

            <div className="mt-7 space-y-4">
              {[
                {
                  title: "Accès et exploration",
                  text: "La page d’accueil, les catégories ou certains salons peuvent être accessibles sans paiement.",
                },
                {
                  title: "Pourboires",
                  text: "Les jetons peuvent servir à soutenir un profil ou à déclencher certaines interactions dans un salon public.",
                },
                {
                  title: "Sessions privées",
                  text: "Elles sont généralement facturées à la minute selon un tarif défini par le profil ou la plateforme.",
                },
                {
                  title: "Options supplémentaires",
                  text: "La caméra bidirectionnelle, les contenus exclusifs et certains modes interactifs peuvent entraîner des frais distincts.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-5"
                >
                  <h3 className="font-bold text-white">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-gray-400">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-2xl border border-pink-500/30 bg-pink-500/5 p-5">
              <p className="font-bold text-pink-400">
                Conseil NightRank AI
              </p>
              <p className="mt-2 text-sm leading-6 text-gray-300">
                Fixez une limite avant d’acheter des crédits et ne considérez
                jamais une promotion comme une économie si elle vous pousse à
                acheter plus que prévu.
              </p>
            </div>
          </article>
        </section>

        <section className="mb-14 rounded-3xl border border-zinc-800 bg-zinc-950 p-7 sm:p-10">
          <p className="font-semibold text-pink-500">
            Transparence éditoriale
          </p>

          <h2 className="mt-2 text-3xl font-black">
            Comment NightRank AI évalue les sites webcams
          </h2>

          <p className="mt-5 max-w-4xl leading-8 text-gray-300">
            Notre classement ne repose pas uniquement sur la popularité d’une
            marque. Nous examinons la clarté de l’interface, la facilité de
            navigation, le nombre de catégories, l’accessibilité mobile, la
            présentation des prix et l’équilibre entre salons publics et
            expériences privées.
          </p>

          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {[
              ["Qualité générale", "Lisibilité, vidéo et stabilité."],
              ["Choix disponible", "Variété des catégories et profils."],
              ["Fonctionnalités", "Filtres, favoris et interactions."],
              ["Prix", "Clarté des crédits et des tarifs."],
              ["Confidentialité", "Réglages et sécurité du compte."],
            ].map(([title, text]) => (
              <div
                key={title}
                className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-5"
              >
                <h3 className="font-bold text-pink-400">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-gray-400">
                  {text}
                </p>
              </div>
            ))}
          </div>

          <p className="mt-7 text-sm leading-6 text-gray-500">
            Certains liens de cette page sont des liens d’affiliation.
            NightRank AI peut recevoir une commission lorsque vous accédez à
            une plateforme par l’un de ces liens. Cette rémunération ne change
            pas le prix affiché au visiteur et ne garantit pas une meilleure
            position dans le classement.
          </p>
        </section>

        <section className="mb-14">
          <div className="mb-8">
            <p className="font-semibold text-pink-500">
              Questions fréquentes
            </p>
            <h2 className="mt-2 text-3xl font-black sm:text-4xl">
              FAQ sur les sites webcams au Québec
            </h2>
          </div>

          <div className="grid gap-5 lg:grid-cols-2">
            {faqs.map((faq) => (
              <article
                key={faq.question}
                className="rounded-2xl border border-zinc-800 bg-zinc-950 p-6"
              >
                <h3 className="text-lg font-bold">{faq.question}</h3>
                <p className="mt-3 leading-7 text-gray-400">
                  {faq.answer}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="mb-14 rounded-3xl border border-pink-500/20 bg-gradient-to-br from-zinc-950 to-pink-950/20 p-7 sm:p-10">
          <h2 className="text-3xl font-black">Notre avis final</h2>

          <div className="mt-6 max-w-4xl space-y-5 leading-8 text-gray-300">
            <p>
              Pour la majorité des visiteurs québécois, Jerkmate représente
              notre choix global grâce à son expérience moderne, sa navigation
              directe et sa grande variété. LiveJasmin constitue une
              alternative premium particulièrement intéressante pour les
              utilisateurs qui accordent beaucoup d’importance à la
              présentation et aux interactions privées.
            </p>

            <p>
              BongaCams se démarque davantage par l’étendue de ses catégories
              et ses salons publics. ImLive convient aux utilisateurs qui
              apprécient une approche plus traditionnelle, tandis que
              LivePrivates vise surtout les visiteurs recherchant des
              expériences privées et personnalisées.
            </p>

            <p>
              Le meilleur site webcam dépend donc moins de sa position absolue
              que de vos préférences, de votre budget et du type d’interaction
              recherché. Comparez les prix affichés au moment de votre visite
              et utilisez toujours ces services de manière responsable.
            </p>
          </div>
        </section>

        <section className="grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-zinc-800 bg-zinc-950 p-7 sm:p-8">
            <h2 className="text-2xl font-black">Guides liés</h2>

            <div className="mt-6 grid gap-3">
              {[
                [
                  "/blog/top-5-webcams-quebec-2026",
                  "Top 5 Webcams Québec 2026",
                ],
                ["/blog/cam-to-cam-quebec", "Guide Cam to Cam Québec"],
                [
                  "/blog/jerkmate-vs-livejasmin",
                  "Jerkmate ou LiveJasmin?",
                ],
                [
                  "/blog/bongacams-vs-jerkmate",
                  "BongaCams ou Jerkmate?",
                ],
                [
                  "/blog/livejasmin-vs-bongacams",
                  "LiveJasmin ou BongaCams?",
                ],
              ].map(([href, label]) => (
                <a
                  key={href}
                  href={href}
                  className="rounded-xl border border-zinc-800 bg-zinc-900/50 px-5 py-4 font-semibold text-pink-400 transition hover:border-pink-500 hover:text-pink-300"
                >
                  {label} →
                </a>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-zinc-800 bg-zinc-950 p-7 sm:p-8">
            <h2 className="text-2xl font-black">
              Explorer les avis individuels
            </h2>

            <p className="mt-4 leading-7 text-gray-400">
              Consultez nos analyses détaillées pour mieux comprendre le
              fonctionnement, les points forts et les limites de chaque
              plateforme.
            </p>

            <div className="mt-6 grid gap-3">
              {sites.map((site) => (
                <a
                  key={site.review}
                  href={site.review}
                  className="flex items-center justify-between rounded-xl border border-zinc-800 bg-zinc-900/50 px-5 py-4 font-semibold transition hover:border-pink-500"
                >
                  <span>Avis {site.name}</span>
                  <span className="text-pink-500">→</span>
                </a>
              ))}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}