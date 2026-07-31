import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "Comparatifs adultes au Québec : Webcam, IA, Dating et Gaming | NightRank AI",
  description:
    "Explorez les comparatifs NightRank AI consacrés aux plateformes webcams, AI Companions, rencontres adultes et jeux pour adultes accessibles au Québec et au Canada.",
  keywords: [
    "comparatifs adultes Québec",
    "comparatif webcam Québec",
    "comparatif AI Companion",
    "comparatif rencontre adulte Québec",
    "comparatif gaming adulte",
    "plateformes adultes Canada",
    "guides adultes Québec",
    "NightRank AI",
  ],
  authors: [{ name: "NightRank AI Editorial Team" }],
  creator: "NightRank AI",
  publisher: "NightRank AI",
  alternates: {
    canonical: "https://nightrankai.com/comparatifs",
  },
  openGraph: {
    title: "Comparatifs adultes au Québec | NightRank AI",
    description:
      "Webcams, AI Companions, rencontres et gaming : trouvez le comparatif NightRank AI adapté à vos préférences.",
    url: "https://nightrankai.com/comparatifs",
    siteName: "NightRank AI",
    locale: "fr_CA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Comparatifs adultes au Québec | NightRank AI",
    description:
      "Découvrez nos guides comparatifs pour les plateformes webcams, AI Companions, rencontres et gaming.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const comparatifs = [
  {
    title: "Sites webcams",
    shortTitle: "Webcam",
    url: "/comparatifs/meilleurs-sites-webcams-quebec",
    description:
      "Comparez les principales plateformes de diffusion en direct accessibles au Québec selon leur interface, leur variété, leurs options privées, leur compatibilité mobile et leur fonctionnement.",
    icon: "🎥",
    badge: "Comparatif populaire",
    accent:
      "from-pink-600/30 via-fuchsia-600/10 to-transparent",
    border: "hover:border-pink-500/70",
    iconBackground: "bg-pink-500/10 border-pink-500/30",
    button:
      "bg-pink-600 hover:bg-pink-500 shadow-pink-950/40",
    features: [
      "Diffusions en direct",
      "Salons publics et privés",
      "Navigation mobile",
    ],
  },
  {
    title: "AI Companions",
    shortTitle: "Intelligence artificielle",
    url: "/ai",
    description:
      "Découvrez les plateformes proposant des personnages virtuels, des conversations personnalisées, des options de mémoire et différents styles d’interaction avec une intelligence artificielle.",
    icon: "🤖",
    badge: "Catégorie en croissance",
    accent:
      "from-violet-600/30 via-purple-600/10 to-transparent",
    border: "hover:border-violet-500/70",
    iconBackground: "bg-violet-500/10 border-violet-500/30",
    button:
      "bg-violet-600 hover:bg-violet-500 shadow-violet-950/40",
    features: [
      "Conversations personnalisées",
      "Personnages configurables",
      "Expériences interactives",
    ],
  },
  {
    title: "Rencontres adultes",
    shortTitle: "Dating",
    url: "/comparatifs/top-rencontres-adultes-quebec",
    description:
      "Explorez nos comparatifs consacrés aux plateformes de rencontres pour adultes en tenant compte de leur public, de leurs fonctionnalités, de leur accessibilité et de leur simplicité d’utilisation.",
    icon: "❤️",
    badge: "Guides rencontres",
    accent:
      "from-rose-600/30 via-red-600/10 to-transparent",
    border: "hover:border-rose-500/70",
    iconBackground: "bg-rose-500/10 border-rose-500/30",
    button:
      "bg-rose-600 hover:bg-rose-500 shadow-rose-950/40",
    features: [
      "Recherche de profils",
      "Fonctions de communication",
      "Accès Québec et Canada",
    ],
  },
  {
    title: "Jeux pour adultes",
    shortTitle: "Gaming",
    url: "/comparatifs/gaming-adulte-quebec",
    description:
      "Parcourez notre sélection de jeux interactifs destinés aux adultes et comparez leur univers, leurs mécaniques, leur accessibilité et leurs principales fonctionnalités.",
    icon: "🎮",
    badge: "Sélection interactive",
    accent:
      "from-blue-600/30 via-indigo-600/10 to-transparent",
    border: "hover:border-blue-500/70",
    iconBackground: "bg-blue-500/10 border-blue-500/30",
    button:
      "bg-blue-600 hover:bg-blue-500 shadow-blue-950/40",
    features: [
      "Expériences interactives",
      "Jeux sur navigateur",
      "Progression et personnalisation",
    ],
  },
];

const orientations = [
  {
    question: "Vous recherchez une expérience en direct ?",
    answer:
      "Le comparatif webcam est conçu pour les visiteurs qui souhaitent explorer des diffusions en direct, des salons publics et des interactions privées.",
    category: "Voir les comparatifs webcams",
    href: "/comparatifs/meilleurs-sites-webcams-quebec",
    icon: "📡",
  },
  {
    question: "Vous préférez une expérience personnalisée avec une IA ?",
    answer:
      "La section AI Companions présente des plateformes centrées sur la conversation, la personnalisation des personnages et les interactions virtuelles.",
    category: "Explorer les AI Companions",
    href: "/ai",
    icon: "✨",
  },
  {
    question: "Vous souhaitez échanger avec d’autres adultes ?",
    answer:
      "Les comparatifs rencontres analysent les plateformes selon leurs fonctionnalités de recherche, leur public et leurs outils de communication.",
    category: "Voir les comparatifs rencontres",
    href: "/comparatifs/top-rencontres-adultes-quebec",
    icon: "💬",
  },
  {
    question: "Vous cherchez une expérience plus ludique ?",
    answer:
      "La catégorie gaming regroupe des jeux interactifs destinés aux adultes, accessibles depuis un navigateur ou un appareil compatible.",
    category: "Découvrir le gaming adulte",
    href: "/comparatifs/gaming-adulte-quebec",
    icon: "🕹️",
  },
];

const evaluationCriteria = [
  {
    icon: "🖥️",
    title: "Interface",
    description:
      "Clarté des menus, organisation des catégories et facilité de navigation.",
  },
  {
    icon: "📱",
    title: "Compatibilité mobile",
    description:
      "Qualité de l’expérience sur téléphone, tablette et navigateur mobile.",
  },
  {
    icon: "⚙️",
    title: "Fonctionnalités",
    description:
      "Outils de recherche, personnalisation, interactions et options disponibles.",
  },
  {
    icon: "💳",
    title: "Clarté des prix",
    description:
      "Présentation des abonnements, crédits, jetons et fonctions payantes.",
  },
  {
    icon: "🔒",
    title: "Confidentialité",
    description:
      "Paramètres du compte, protection des données et contrôle de l’utilisateur.",
  },
  {
    icon: "⚡",
    title: "Performance",
    description:
      "Rapidité du service, stabilité et confort général d’utilisation.",
  },
  {
    icon: "🌎",
    title: "Accessibilité",
    description:
      "Disponibilité au Québec, au Canada et qualité de l’expérience francophone.",
  },
  {
    icon: "⭐",
    title: "Expérience globale",
    description:
      "Équilibre entre qualité, accessibilité, fonctionnalités et prix.",
  },
];

const faqs = [
  {
    question: "Quel comparatif choisir pour commencer ?",
    answer:
      "Le meilleur point de départ dépend de l’expérience recherchée. Les webcams conviennent aux interactions en direct, les AI Companions aux conversations virtuelles personnalisées, les rencontres aux échanges entre utilisateurs et le gaming aux expériences interactives.",
  },
  {
    question:
      "Quelle est la différence entre un site webcam et un AI Companion ?",
    answer:
      "Un site webcam repose principalement sur des diffusions en direct avec des personnes réelles. Un AI Companion utilise une intelligence artificielle pour générer des conversations et proposer une expérience virtuelle personnalisée.",
  },
  {
    question: "Les plateformes sont-elles accessibles au Québec ?",
    answer:
      "Nos comparatifs se concentrent sur des plateformes généralement accessibles depuis le Québec ou le Canada. La disponibilité de certaines fonctions et méthodes de paiement peut toutefois varier.",
  },
  {
    question: "Comment les plateformes sont-elles évaluées ?",
    answer:
      "Nous examinons notamment l’interface, la compatibilité mobile, les fonctionnalités, la clarté des prix, la confidentialité, l’accessibilité et l’expérience générale.",
  },
  {
    question: "Les notes affichées sont-elles officielles ?",
    answer:
      "Non. Les notes publiées dans les comparatifs sont des évaluations éditoriales NightRank AI. Elles ne sont pas fournies ni garanties par les plateformes présentées.",
  },
  {
    question: "Les prix peuvent-ils changer ?",
    answer:
      "Oui. Les abonnements, crédits, jetons, promotions et tarifs peuvent évoluer. Le prix affiché directement sur la plateforme au moment de la visite doit toujours être considéré comme la référence.",
  },
  {
    question: "Les liens de NightRank AI sont-ils affiliés ?",
    answer:
      "Certains liens peuvent être affiliés. NightRank AI peut recevoir une commission lorsqu’un visiteur utilise l’un de ces liens, sans coût supplémentaire direct pour celui-ci.",
  },
  {
    question: "À quelle fréquence les comparatifs sont-ils mis à jour ?",
    answer:
      "Les pages sont révisées lorsque des changements importants sont identifiés, notamment l’ajout de nouvelles plateformes, l’évolution des fonctionnalités ou des modifications de disponibilité.",
  },
];

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

const collectionSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Comparatifs adultes au Québec",
  description:
    "Centre de ressources NightRank AI consacré aux comparatifs de plateformes webcams, AI Companions, rencontres adultes et gaming.",
  url: "https://nightrankai.com/comparatifs",
  isPartOf: {
    "@type": "WebSite",
    name: "NightRank AI",
    url: "https://nightrankai.com",
  },
  hasPart: comparatifs.map((item) => ({
    "@type": "WebPage",
    name: item.title,
    url: item.url.startsWith("/")
      ? `https://nightrankai.com${item.url}`
      : item.url,
  })),
};

export default function Comparatifs() {
  return (
    <main className="min-h-screen bg-black text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(collectionSchema),
        }}
      />

      <div className="mx-auto max-w-[1500px] px-4 py-10 sm:px-6 md:px-10 lg:py-14">
        <nav
          aria-label="Fil d’Ariane"
          className="mb-8 flex items-center gap-2 text-sm text-gray-500"
        >
          <Link href="/" className="transition hover:text-pink-400">
            Accueil
          </Link>

          <span>›</span>

          <span className="text-gray-300">Comparatifs</span>
        </nav>

        {/* HERO */}
        <section className="relative mb-14 overflow-hidden rounded-[2rem] border border-zinc-800 bg-zinc-950 px-6 py-12 sm:px-10 lg:px-14 lg:py-16">
          <div className="pointer-events-none absolute -right-24 -top-32 h-96 w-96 rounded-full bg-pink-600/20 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-44 left-1/4 h-96 w-96 rounded-full bg-violet-700/20 blur-3xl" />
          <div className="pointer-events-none absolute right-1/3 top-1/3 h-64 w-64 rounded-full bg-blue-700/10 blur-3xl" />

          <div className="relative grid items-center gap-10 lg:grid-cols-[1.35fr_0.65fr]">
            <div>
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-pink-500/30 bg-pink-500/10 px-4 py-2 text-sm font-semibold text-pink-300">
                <span>✦</span>
                Centre de ressources NightRank AI
              </div>

              <h1 className="max-w-5xl text-4xl font-black tracking-tight sm:text-5xl lg:text-7xl">
                Tous nos comparatifs{" "}
                <span className="bg-gradient-to-r from-pink-500 via-fuchsia-400 to-violet-400 bg-clip-text text-transparent">
                  au même endroit
                </span>
              </h1>

              <p className="mt-7 max-w-4xl text-lg leading-8 text-gray-300 sm:text-xl">
                Explorez nos guides consacrés aux plateformes accessibles au
                Québec et au Canada. NightRank AI organise ses analyses en
                quatre grandes catégories : webcams, AI Companions, rencontres
                adultes et gaming interactif.
              </p>

              <p className="mt-4 max-w-4xl leading-7 text-gray-400">
                Chaque comparatif présente le fonctionnement général des
                services, leurs principales fonctionnalités, leurs limites,
                leur accessibilité mobile et les éléments à vérifier avant de
                faire un choix.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#categories"
                  className="rounded-xl bg-pink-600 px-6 py-3.5 font-bold transition hover:bg-pink-500"
                >
                  Explorer les catégories
                </a>

                <a
                  href="#methodologie"
                  className="rounded-xl border border-zinc-700 bg-zinc-900/70 px-6 py-3.5 font-bold text-gray-200 transition hover:border-pink-500 hover:text-pink-400"
                >
                  Notre méthodologie
                </a>
              </div>
            </div>

            <aside className="rounded-3xl border border-zinc-800 bg-black/50 p-6 backdrop-blur sm:p-8">
              <p className="text-sm font-semibold uppercase tracking-wider text-pink-400">
                NightRank AI
              </p>

              <h2 className="mt-3 text-2xl font-black">
                Des guides pensés pour le Québec
              </h2>

              <div className="mt-6 space-y-4">
                {[
                  ["4", "grandes catégories"],
                  ["100 %", "contenu en français"],
                  ["2026", "comparatifs actualisés"],
                  ["18+", "plateformes réservées aux adultes"],
                ].map(([value, label]) => (
                  <div
                    key={label}
                    className="flex items-center gap-4 rounded-2xl border border-zinc-800 bg-zinc-950/80 p-4"
                  >
                    <span className="min-w-16 text-2xl font-black text-pink-500">
                      {value}
                    </span>
                    <span className="text-sm text-gray-300">{label}</span>
                  </div>
                ))}
              </div>
            </aside>
          </div>
        </section>

        {/* CATÉGORIES */}
        <section id="categories" className="mb-20 scroll-mt-24">
          <div className="mb-9 max-w-4xl">
            <p className="font-semibold text-pink-500">
              Explorer NightRank AI
            </p>

            <h2 className="mt-2 text-3xl font-black sm:text-4xl lg:text-5xl">
              Choisissez votre catégorie
            </h2>

            <p className="mt-5 text-lg leading-8 text-gray-400">
              Cette page présente les grandes familles de comparatifs. Les
              classements détaillés et les plateformes recommandées se trouvent
              directement dans chaque catégorie.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            {comparatifs.map((item) => (
              <article
                key={item.title}
                className={`group relative overflow-hidden rounded-[2rem] border border-zinc-800 bg-zinc-950 p-7 transition duration-300 hover:-translate-y-1 hover:shadow-2xl sm:p-9 ${item.border}`}
              >
                <div
                  className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${item.accent} opacity-80`}
                />

                <div className="relative">
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div
                      className={`flex h-16 w-16 items-center justify-center rounded-2xl border text-3xl ${item.iconBackground}`}
                    >
                      {item.icon}
                    </div>

                    <span className="rounded-full border border-white/10 bg-black/40 px-4 py-2 text-xs font-bold uppercase tracking-wide text-gray-300">
                      {item.badge}
                    </span>
                  </div>

                  <p className="mt-8 text-sm font-semibold uppercase tracking-wider text-gray-500">
                    {item.shortTitle}
                  </p>

                  <h3 className="mt-2 text-3xl font-black sm:text-4xl">
                    {item.title}
                  </h3>

                  <p className="mt-5 max-w-2xl leading-8 text-gray-300">
                    {item.description}
                  </p>

                  <ul className="mt-6 grid gap-3 text-sm text-gray-300 sm:grid-cols-3">
                    {item.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center gap-2 rounded-xl border border-white/5 bg-black/20 px-3 py-3"
                      >
                        <span className="text-pink-400">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-8">
                    <Link
                      href={item.url}
                      className={`inline-flex items-center gap-2 rounded-xl px-6 py-3.5 font-bold shadow-lg transition ${item.button}`}
                    >
                      Découvrir le comparatif
                      <span className="transition group-hover:translate-x-1">
                        →
                      </span>
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* ORIENTATION */}
        <section className="mb-20">
          <div className="mb-9 text-center">
            <p className="font-semibold text-pink-500">
              Trouver la bonne direction
            </p>

            <h2 className="mt-2 text-3xl font-black sm:text-4xl">
              Quel comparatif est fait pour vous ?
            </h2>

            <p className="mx-auto mt-5 max-w-3xl leading-8 text-gray-400">
              Chaque catégorie répond à un usage différent. Choisissez selon le
              type d’expérience que vous recherchez plutôt que selon la
              popularité d’une plateforme.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {orientations.map((item) => (
              <article
                key={item.question}
                className="rounded-3xl border border-zinc-800 bg-zinc-950 p-6 transition hover:border-pink-500/50 sm:p-8"
              >
                <div className="flex items-start gap-5">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-pink-500/20 bg-pink-500/10 text-2xl">
                    {item.icon}
                  </div>

                  <div>
                    <h3 className="text-xl font-black">{item.question}</h3>

                    <p className="mt-3 leading-7 text-gray-400">
                      {item.answer}
                    </p>

                    <Link
                      href={item.href}
                      className="mt-5 inline-flex items-center gap-2 font-bold text-pink-400 transition hover:text-pink-300"
                    >
                      {item.category}
                      <span>→</span>
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* CONTENU SEO */}
        <section className="mb-20 grid gap-6 lg:grid-cols-2">
          <article className="rounded-[2rem] border border-zinc-800 bg-zinc-950 p-7 sm:p-10">
            <p className="font-semibold text-pink-500">
              Faire un choix éclairé
            </p>

            <h2 className="mt-2 text-3xl font-black">
              Pourquoi consulter un comparatif avant de choisir ?
            </h2>

            <div className="mt-6 space-y-5 leading-8 text-gray-300">
              <p>
                Les plateformes destinées aux adultes peuvent proposer des
                expériences très différentes. Certaines privilégient les
                interactions en direct, tandis que d’autres misent sur la
                personnalisation, la communication entre utilisateurs ou les
                mécaniques de jeu.
              </p>

              <p>
                Consulter un comparatif permet de mieux comprendre ces
                différences avant de créer un compte ou d’utiliser une
                fonctionnalité payante. Il devient alors plus facile
                d’identifier le type de service correspondant à ses
                préférences, à son appareil et à son budget.
              </p>

              <p>
                NightRank AI structure ses guides pour permettre une lecture
                rapide, tout en proposant des analyses plus détaillées aux
                visiteurs qui souhaitent examiner les fonctionnalités, les
                conditions d’utilisation et les éléments liés à la
                confidentialité.
              </p>
            </div>
          </article>

          <article className="rounded-[2rem] border border-zinc-800 bg-zinc-950 p-7 sm:p-10">
            <p className="font-semibold text-pink-500">
              Une approche durable
            </p>

            <h2 className="mt-2 text-3xl font-black">
              Des catégories capables d’évoluer
            </h2>

            <div className="mt-6 space-y-5 leading-8 text-gray-300">
              <p>
                Le marché évolue régulièrement. De nouvelles plateformes
                apparaissent, certaines ajoutent des fonctions et d’autres
                modifient leur système de prix ou leur disponibilité.
              </p>

              <p>
                C’est pourquoi cette page reste volontairement centrée sur les
                grandes catégories. Les noms des plateformes, les classements
                et les recommandations sont présentés dans les pages
                spécialisées, où ils peuvent être mis à jour sans modifier
                l’organisation générale du site.
              </p>

              <p>
                Cette structure aide également les visiteurs et les moteurs de
                recherche à comprendre le rôle de chaque page : ce hub organise
                les comparatifs, tandis que les guides spécialisés fournissent
                les analyses détaillées.
              </p>
            </div>
          </article>
        </section>

        {/* MÉTHODOLOGIE */}
        <section
          id="methodologie"
          className="mb-20 scroll-mt-24 rounded-[2rem] border border-zinc-800 bg-zinc-950 p-7 sm:p-10 lg:p-12"
        >
          <div className="max-w-4xl">
            <p className="font-semibold text-pink-500">
              Transparence éditoriale
            </p>

            <h2 className="mt-2 text-3xl font-black sm:text-4xl">
              Comment nous construisons nos comparatifs
            </h2>

            <p className="mt-5 text-lg leading-8 text-gray-300">
              Nos classements ne reposent pas uniquement sur la popularité
              d’une marque. Nous examinons l’expérience générale, la
              navigation, les fonctionnalités, la clarté des prix,
              l’accessibilité au Canada et les éléments susceptibles
              d’influencer le choix d’un utilisateur.
            </p>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {evaluationCriteria.map((criterion) => (
              <article
                key={criterion.title}
                className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-5 transition hover:border-pink-500/40"
              >
                <span className="text-2xl">{criterion.icon}</span>

                <h3 className="mt-4 font-black text-white">
                  {criterion.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-gray-400">
                  {criterion.description}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-8 rounded-2xl border border-pink-500/20 bg-pink-500/5 p-6">
            <h3 className="font-bold text-pink-400">
              À propos de nos notes
            </h3>

            <p className="mt-3 text-sm leading-7 text-gray-300">
              Les notes publiées sur NightRank AI sont des évaluations
              éditoriales. Elles ne constituent pas des notes officielles
              fournies par les plateformes et peuvent être modifiées lorsqu’un
              service évolue.
            </p>
          </div>
        </section>

        {/* MISSION */}
        <section className="mb-20 overflow-hidden rounded-[2rem] border border-pink-500/20 bg-gradient-to-br from-pink-950/30 via-zinc-950 to-violet-950/20 p-7 sm:p-10 lg:p-12">
          <div className="grid items-center gap-10 lg:grid-cols-[0.75fr_1.25fr]">
            <div>
              <div className="flex h-20 w-20 items-center justify-center rounded-3xl border border-pink-500/30 bg-pink-500/10 text-4xl">
                NR
              </div>

              <p className="mt-5 font-semibold text-pink-400">
                Notre mission
              </p>

              <h2 className="mt-2 text-3xl font-black">
                Construire une référence francophone
              </h2>
            </div>

            <div className="space-y-5 leading-8 text-gray-300">
              <p>
                NightRank AI a été créé pour aider les internautes francophones
                du Québec et du Canada à comparer plus facilement différentes
                catégories de plateformes destinées aux adultes.
              </p>

              <p>
                Notre objectif est de proposer des guides organisés, des
                explications accessibles et des comparatifs régulièrement
                révisés afin que chaque visiteur puisse mieux comprendre les
                options disponibles avant de prendre une décision.
              </p>

              <p>
                Nous privilégions une présentation claire, une séparation nette
                entre les catégories et une communication transparente sur la
                présence éventuelle de liens d’affiliation.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-20">
          <div className="mb-9 max-w-4xl">
            <p className="font-semibold text-pink-500">
              Questions fréquentes
            </p>

            <h2 className="mt-2 text-3xl font-black sm:text-4xl">
              FAQ sur les comparatifs NightRank AI
            </h2>
          </div>

          <div className="grid gap-5 lg:grid-cols-2">
            {faqs.map((faq) => (
              <article
                key={faq.question}
                className="rounded-2xl border border-zinc-800 bg-zinc-950 p-6 transition hover:border-pink-500/40"
              >
                <h3 className="text-lg font-black">{faq.question}</h3>

                <p className="mt-3 leading-7 text-gray-400">
                  {faq.answer}
                </p>
              </article>
            ))}
          </div>
        </section>

        {/* LIENS UTILES */}
        <section className="grid gap-6 lg:grid-cols-2">
          <article className="rounded-3xl border border-zinc-800 bg-zinc-950 p-7 sm:p-8">
            <h2 className="text-2xl font-black">
              Continuer votre exploration
            </h2>

            <p className="mt-4 leading-7 text-gray-400">
              Consultez nos guides, nos analyses et nos pages locales pour
              approfondir votre recherche.
            </p>

            <div className="mt-6 grid gap-3">
              {[
                ["/blog", "Lire le blog NightRank AI"],
                ["/ai", "Explorer la catégorie AI"],
                ["/webcam/montreal", "Guide webcam Montréal"],
                ["/dating/montreal", "Rencontres adultes Montréal"],
              ].map(([href, label]) => (
                <Link
                  key={href}
                  href={href}
                  className="flex items-center justify-between rounded-xl border border-zinc-800 bg-zinc-900/60 px-5 py-4 font-semibold transition hover:border-pink-500 hover:text-pink-400"
                >
                  <span>{label}</span>
                  <span>→</span>
                </Link>
              ))}
            </div>
          </article>

          <article className="rounded-3xl border border-zinc-800 bg-zinc-950 p-7 sm:p-8">
            <h2 className="text-2xl font-black">
              Information importante
            </h2>

            <div className="mt-5 space-y-4 leading-7 text-gray-400">
              <p>
                Les plateformes présentées dans nos guides sont réservées aux
                personnes majeures. Vérifiez toujours les conditions
                d’utilisation, les prix et les paramètres de confidentialité
                avant de créer un compte ou d’effectuer un paiement.
              </p>

              <p>
                Certains liens publiés sur NightRank AI peuvent être affiliés.
                Une commission peut être versée au site lorsqu’un visiteur
                utilise l’un de ces liens. Cela n’entraîne pas nécessairement
                de coût supplémentaire direct pour l’utilisateur.
              </p>
            </div>

            <Link
              href="/comparatifs/meilleurs-sites-webcams-quebec"
              className="mt-7 inline-flex items-center gap-2 rounded-xl bg-pink-600 px-6 py-3.5 font-bold transition hover:bg-pink-500"
            >
              Voir notre comparatif populaire
              <span>→</span>
            </Link>
          </article>
        </section>
      </div>
    </main>
  );
}