import { notFound } from "next/navigation";

const articles = [
  {
    title: "Meilleurs sites webcams au Québec en 2026",
    slug: "meilleurs-sites-webcams-quebec",
    description:
      "Guide complet des meilleurs sites webcams pour les utilisateurs adultes du Québec.",
    category: "Webcams",
  },
  {
  title: "Jerkmate vs LiveJasmin : quel site webcam choisir en 2026 ?",
  slug: "jerkmate-vs-livejasmin",
  description:
    "Comparatif complet entre Jerkmate et LiveJasmin pour les visiteurs adultes du Québec et du Canada.",
  category: "Webcams",
},
  {
    title: "Comment choisir un site de rencontre adulte",
    slug: "choisir-site-rencontre",
    description:
      "Conseils pour comparer les plateformes de rencontres adultes au Québec et au Canada.",
    category: "Dating",
  },
  {
    title: "Tendances dating au Canada en 2026",
    slug: "dating-canada",
    description:
      "Aperçu des tendances de rencontres adultes au Canada, avec un angle Québec-first.",
    category: "Dating",
  },
];

export async function generateStaticParams() {
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);

  if (!article) return {};

  return {
    title: `${article.title} | NightRank AI`,
    description: article.description,
  };
}

function ArticleContent({ slug }: { slug: string }) {
  if (slug === "meilleurs-sites-webcams-quebec") {
    return (
      <>
        <section className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 mb-10">
          <h2 className="text-3xl font-bold mb-6">
            Pourquoi comparer les sites webcams au Québec ?
          </h2>

          <p className="text-gray-300 mb-4">
            Les utilisateurs adultes du Québec recherchent de plus en plus des
            plateformes webcams simples, rapides et accessibles depuis le Canada.
            Le problème est qu’il existe beaucoup d’options, souvent très
            différentes les unes des autres. Certaines plateformes misent sur une
            expérience moderne, d’autres sur une image premium, et d’autres sur
            la variété.
          </p>

          <p className="text-gray-300 mb-4">
            C’est exactement pour cette raison que NightRank AI construit des
            comparatifs Québec-first. Au lieu de simplement lister des plateformes
            internationales, nous organisons les informations autour des besoins
            des visiteurs francophones : accessibilité au Canada, facilité
            d’utilisation, expérience mobile, réputation et clarté de l’offre.
          </p>

          <p className="text-gray-300">
            Notre sélection actuelle repose principalement sur trois plateformes :
            Jerkmate, LiveJasmin et BongaCams. Chacune occupe une position
            différente dans le marché webcam adulte.
          </p>
        </section>

        <section className="grid lg:grid-cols-3 gap-6 mb-10">
          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-7">
            <h2 className="text-3xl font-bold text-pink-500 mb-4">Jerkmate</h2>
            <p className="text-gray-300 mb-6">
              Jerkmate est notre choix global pour les visiteurs qui veulent une
              plateforme moderne, rapide et facile à comprendre. C’est une bonne
              première option pour commencer dans la catégorie webcam.
            </p>
            <a href="/offres/jerkmate" className="text-pink-400 font-bold">
              Lire notre avis Jerkmate →
            </a>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-7">
            <h2 className="text-3xl font-bold text-pink-500 mb-4">LiveJasmin</h2>
            <p className="text-gray-300 mb-6">
              LiveJasmin se positionne davantage comme une option premium. Elle
              peut intéresser les visiteurs qui préfèrent une image plus soignée
              et une plateforme reconnue internationalement.
            </p>
            <a href="/offres/livejasmin" className="text-pink-400 font-bold">
              Lire notre avis LiveJasmin →
            </a>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-7">
            <h2 className="text-3xl font-bold text-pink-500 mb-4">BongaCams</h2>
            <p className="text-gray-300 mb-6">
              BongaCams est intéressant pour les visiteurs qui veulent beaucoup
              de variété. Ce n’est pas forcément l’option la plus premium, mais
              c’est une plateforme utile pour comparer plusieurs styles.
            </p>
            <a href="/offres/bongacams" className="text-pink-400 font-bold">
              Lire notre avis BongaCams →
            </a>
          </div>
        </section>

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
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-zinc-800">
                  <td className="py-4 pr-4 font-bold">Jerkmate</td>
                  <td className="py-4 pr-4">4.8/5</td>
                  <td className="py-4 pr-4">Choix global moderne</td>
                </tr>
                <tr className="border-b border-zinc-800">
                  <td className="py-4 pr-4 font-bold">LiveJasmin</td>
                  <td className="py-4 pr-4">4.7/5</td>
                  <td className="py-4 pr-4">Expérience premium</td>
                </tr>
                <tr>
                  <td className="py-4 pr-4 font-bold">BongaCams</td>
                  <td className="py-4 pr-4">4.5/5</td>
                  <td className="py-4 pr-4">Grande variété</td>
                </tr>
              </tbody>
            </table>
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
            Jerkmate est notre choix global, LiveJasmin est notre choix premium
            et BongaCams est notre choix pour la variété.
          </p>

          <h3 className="text-xl font-bold mb-2">
            Les plateformes sont-elles accessibles au Canada ?
          </h3>
          <p className="text-gray-300 mb-6">
            Les plateformes présentées par NightRank AI sont généralement
            accessibles aux utilisateurs adultes du Québec et du Canada, selon
            les conditions de chaque partenaire.
          </p>

          <h3 className="text-xl font-bold mb-2">
            NightRank AI héberge-t-il du contenu explicite ?
          </h3>
          <p className="text-gray-300">
            Non. NightRank AI est un site de comparaison, d’avis et de guides.
            Les visiteurs sont redirigés vers les plateformes partenaires.
          </p>
        </section>

        <FinalCta
          title="Voir le comparatif complet"
          href="/comparatifs/meilleurs-sites-webcams-quebec"
        />
      </>
    );
  }
if (slug === "jerkmate-vs-livejasmin") {
  return (
    <>
      <section className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 mb-10">
        <h2 className="text-3xl font-bold mb-6">
          Jerkmate vs LiveJasmin : lequel choisir en 2026 ?
        </h2>

        <p className="text-gray-300 mb-4">
          Jerkmate et LiveJasmin figurent parmi les plateformes webcams les plus
          connues auprès des utilisateurs adultes du Québec et du Canada.
          Même si les deux appartiennent à la même catégorie, leur approche
          est différente.
        </p>

        <p className="text-gray-300 mb-4">
          Jerkmate met l'accent sur une expérience moderne, rapide et intuitive.
          LiveJasmin adopte davantage un positionnement premium avec une image
          haut de gamme reconnue à l'international.
        </p>

        <p className="text-gray-300">
          Dans ce comparatif NightRank AI, nous analysons les forces de chaque
          plateforme afin d'aider les visiteurs québécois à choisir celle qui
          correspond le mieux à leurs préférences.
        </p>
      </section>

      <section className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 mb-10">
        <h2 className="text-3xl font-bold mb-6">
          Tableau comparatif rapide
        </h2>

        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-zinc-700 text-pink-400">
                <th className="py-4 pr-4">Critère</th>
                <th className="py-4 pr-4">Jerkmate</th>
                <th className="py-4 pr-4">LiveJasmin</th>
              </tr>
            </thead>

            <tbody>
              <tr className="border-b border-zinc-800">
                <td className="py-4 pr-4 font-bold">Facilité d'utilisation</td>
                <td className="py-4 pr-4">★★★★★</td>
                <td className="py-4 pr-4">★★★★☆</td>
              </tr>

              <tr className="border-b border-zinc-800">
                <td className="py-4 pr-4 font-bold">Image premium</td>
                <td className="py-4 pr-4">★★★★☆</td>
                <td className="py-4 pr-4">★★★★★</td>
              </tr>

              <tr className="border-b border-zinc-800">
                <td className="py-4 pr-4 font-bold">Popularité</td>
                <td className="py-4 pr-4">★★★★★</td>
                <td className="py-4 pr-4">★★★★★</td>
              </tr>

              <tr>
                <td className="py-4 pr-4 font-bold">Note NightRank AI</td>
                <td className="py-4 pr-4">4.8/5</td>
                <td className="py-4 pr-4">4.7/5</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="grid lg:grid-cols-2 gap-6 mb-10">
        <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-7">
          <h2 className="text-3xl font-bold text-pink-500 mb-4">
            Pourquoi choisir Jerkmate ?
          </h2>

          <p className="text-gray-300 mb-4">
            Jerkmate est généralement notre recommandation principale pour les
            visiteurs qui souhaitent une plateforme simple à comprendre,
            moderne et efficace.
          </p>

          <p className="text-gray-300 mb-6">
            Son interface intuitive et son positionnement généraliste en font
            un excellent point de départ pour découvrir l'univers webcam.
          </p>

          <a
            href="/offres/jerkmate"
            className="text-pink-400 font-bold"
          >
            Voir l'avis Jerkmate →
          </a>
        </div>

        <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-7">
          <h2 className="text-3xl font-bold text-pink-500 mb-4">
            Pourquoi choisir LiveJasmin ?
          </h2>

          <p className="text-gray-300 mb-4">
            LiveJasmin conserve une forte réputation grâce à son image premium
            et à son ancienneté dans l'industrie.
          </p>

          <p className="text-gray-300 mb-6">
            Les visiteurs qui recherchent une expérience plus haut de gamme
            apprécieront généralement davantage LiveJasmin.
          </p>

          <a
            href="/offres/livejasmin"
            className="text-pink-400 font-bold"
          >
            Voir l'avis LiveJasmin →
          </a>
        </div>
      </section>

      <section className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 mb-10">
        <h2 className="text-3xl font-bold mb-6">
          Quel est le meilleur choix pour le Québec ?
        </h2>

        <p className="text-gray-300 mb-4">
          Pour la majorité des visiteurs, Jerkmate demeure notre recommandation
          principale grâce à sa simplicité d'utilisation et à son expérience
          moderne.
        </p>

        <p className="text-gray-300 mb-4">
          LiveJasmin reste cependant une excellente alternative pour les
          utilisateurs qui préfèrent une plateforme davantage orientée premium.
        </p>

        <p className="text-gray-300">
          Dans tous les cas, les deux plateformes figurent parmi les références
          les plus connues dans notre comparatif webcams Québec.
        </p>
      </section>

      <section className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 mb-10">
        <h2 className="text-3xl font-bold mb-6">
          FAQ
        </h2>

        <h3 className="text-xl font-bold mb-2">
          Jerkmate est-il meilleur que LiveJasmin ?
        </h3>

        <p className="text-gray-300 mb-6">
          Tout dépend de vos préférences. Jerkmate est plus moderne et
          accessible, tandis que LiveJasmin mise davantage sur une image
          premium.
        </p>

        <h3 className="text-xl font-bold mb-2">
          Les deux plateformes sont-elles accessibles au Canada ?
        </h3>

        <p className="text-gray-300 mb-6">
          Oui, elles sont généralement accessibles aux utilisateurs adultes
          du Québec et du Canada.
        </p>

        <h3 className="text-xl font-bold mb-2">
          Quelle plateforme recommande NightRank AI ?
        </h3>

        <p className="text-gray-300">
          Jerkmate obtient actuellement notre meilleure note globale, mais
          LiveJasmin demeure une excellente option premium.
        </p>
      </section>

      <FinalCta
        title="Voir le comparatif webcams complet"
        href="/comparatifs/meilleurs-sites-webcams-quebec"
      />
    </>
  );
}
  if (slug === "choisir-site-rencontre") {
    return (
      <>
        <section className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 mb-10">
          <h2 className="text-3xl font-bold mb-6">
            Les critères importants pour choisir un site de rencontre adulte
          </h2>

          <p className="text-gray-300 mb-4">
            Choisir un site de rencontre adulte ne devrait pas se faire
            uniquement en cliquant sur le premier bouton disponible. Les visiteurs
            du Québec doivent comparer plusieurs critères : type de plateforme,
            simplicité, audience, spécialisation, accessibilité au Canada et
            clarté de l’expérience.
          </p>

          <p className="text-gray-300 mb-4">
            Certains sites sont généralistes, comme AdultFriendFinder. D’autres
            sont plus directs, comme Sex Messenger. D’autres encore ciblent une
            niche plus précise, comme BBW Fun. Le bon choix dépend donc surtout
            de l’intention du visiteur.
          </p>

          <p className="text-gray-300">
            NightRank AI recommande de commencer par identifier le type
            d’expérience souhaité avant de choisir une plateforme.
          </p>
        </section>

        <section className="grid lg:grid-cols-3 gap-6 mb-10">
          <OfferCard
            title="AdultFriendFinder"
            text="Le choix généraliste pour les visiteurs qui veulent une plateforme dating adulte connue."
            href="/offres/adultfriendfinder"
          />
          <OfferCard
            title="Sex Messenger"
            text="Une option plus directe, orientée messagerie et échanges rapides."
            href="/offres/sexmessenger"
          />
          <OfferCard
            title="BBW Fun"
            text="Une option plus niche, intéressante pour les visiteurs qui préfèrent une plateforme spécialisée."
            href="/offres/bbwfun"
          />
        </section>

        <section className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 mb-10">
          <h2 className="text-3xl font-bold mb-6">
            Généraliste, messagerie ou niche ?
          </h2>

          <p className="text-gray-300 mb-4">
            Une plateforme généraliste est souvent plus simple pour commencer,
            car elle couvre une audience large. C’est le rôle d’AdultFriendFinder
            dans notre sélection. Elle permet de découvrir l’univers dating adulte
            sans être limité à une niche trop précise.
          </p>

          <p className="text-gray-300 mb-4">
            Une plateforme orientée messagerie, comme Sex Messenger, peut
            convenir aux visiteurs qui préfèrent une expérience plus directe. Ce
            type d’offre est moins généraliste, mais peut être plus simple à
            comprendre pour certains utilisateurs.
          </p>

          <p className="text-gray-300">
            Enfin, une plateforme niche comme BBW Fun permet de cibler une
            audience plus spécifique. Ce type de site peut être très pertinent
            lorsqu’un visiteur sait déjà ce qu’il recherche.
          </p>
        </section>

        <section className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 mb-10">
          <h2 className="text-3xl font-bold mb-6">
            FAQ — choisir un site de rencontre adulte
          </h2>

          <h3 className="text-xl font-bold mb-2">
            Quel est le meilleur site de rencontre adulte au Québec ?
          </h3>
          <p className="text-gray-300 mb-6">
            AdultFriendFinder est notre choix généraliste, Sex Messenger est plus
            direct et BBW Fun est une alternative niche.
          </p>

          <h3 className="text-xl font-bold mb-2">
            Faut-il choisir un site généraliste ou spécialisé ?
          </h3>
          <p className="text-gray-300 mb-6">
            Un site généraliste convient mieux pour commencer, tandis qu’un site
            spécialisé peut être plus adapté si vous avez déjà une préférence
            précise.
          </p>

          <h3 className="text-xl font-bold mb-2">
            NightRank AI héberge-t-il des profils ?
          </h3>
          <p className="text-gray-300">
            Non. NightRank AI compare les plateformes et redirige les visiteurs
            vers les partenaires.
          </p>
        </section>

        <FinalCta
          title="Voir le comparatif rencontres"
          href="/comparatifs/top-rencontres-adultes-quebec"
        />
      </>
    );
  }

  if (slug === "dating-canada") {
    return (
      <>
        <section className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 mb-10">
          <h2 className="text-3xl font-bold mb-6">
            Le dating adulte au Canada évolue rapidement
          </h2>

          <p className="text-gray-300 mb-4">
            Le marché des rencontres adultes au Canada est de plus en plus
            diversifié. Les visiteurs recherchent des plateformes simples,
            mobiles, discrètes et adaptées à leurs préférences. Au Québec, le
            facteur linguistique ajoute une dimension importante : beaucoup de
            visiteurs préfèrent des guides en français avant de choisir une
            plateforme.
          </p>

          <p className="text-gray-300 mb-4">
            NightRank AI adopte donc une approche Québec-first. Plutôt que de
            cibler uniquement des mots-clés génériques, nous construisons des
            pages locales, des comparatifs et des avis orientés vers les
            utilisateurs francophones du Canada.
          </p>

          <p className="text-gray-300">
            Cette approche permet de mieux couvrir les recherches liées à
            Montréal, Québec, Laval, Gatineau, Sherbrooke et aux autres villes
            importantes.
          </p>
        </section>

        <section className="grid lg:grid-cols-3 gap-6 mb-10">
          <OfferCard
            title="AdultFriendFinder"
            text="Une plateforme connue et généraliste pour les rencontres adultes."
            href="/offres/adultfriendfinder"
          />
          <OfferCard
            title="Sex Messenger"
            text="Une offre plus directe pour les visiteurs qui préfèrent la messagerie."
            href="/offres/sexmessenger"
          />
          <OfferCard
            title="BBW Fun"
            text="Une option de niche pour diversifier les recommandations dating."
            href="/offres/bbwfun"
          />
        </section>

        <section className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 mb-10">
          <h2 className="text-3xl font-bold mb-6">
            Pourquoi les pages locales sont importantes ?
          </h2>

          <p className="text-gray-300 mb-4">
            Les recherches locales peuvent être plus accessibles que les mots-clés
            nationaux très compétitifs. Une page comme “rencontres adultes
            Montréal” ou “dating adulte Québec” peut devenir une porte d’entrée
            importante pour un site comme NightRank AI.
          </p>

          <p className="text-gray-300 mb-4">
            C’est pourquoi nous développons progressivement des pages locales pour
            les webcams et les rencontres adultes. Chaque page renforce le
            maillage interne et aide Google à comprendre que NightRank AI est
            spécialisé dans le marché québécois.
          </p>

          <p className="text-gray-300">
            À long terme, cette stratégie peut créer une base SEO plus solide
            qu’une simple page d’accueil avec quelques boutons affiliés.
          </p>
        </section>

        <section className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 mb-10">
          <h2 className="text-3xl font-bold mb-6">
            Pages locales utiles
          </h2>

          <div className="grid md:grid-cols-2 gap-4 text-pink-400">
            <a href="/dating/montreal">Rencontres adultes Montréal</a>
            <a href="/dating/quebec">Rencontres adultes Québec</a>
            <a href="/dating/laval">Rencontres adultes Laval</a>
            <a href="/dating/gatineau">Rencontres adultes Gatineau</a>
            <a href="/dating/sherbrooke">Rencontres adultes Sherbrooke</a>
          </div>
        </section>

        <FinalCta
          title="Voir le comparatif dating"
          href="/comparatifs/top-rencontres-adultes-quebec"
        />
      </>
    );
  }

  return null;
}

function OfferCard({
  title,
  text,
  href,
}: {
  title: string;
  text: string;
  href: string;
}) {
  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-7">
      <h2 className="text-3xl font-bold text-pink-500 mb-4">{title}</h2>
      <p className="text-gray-300 mb-6">{text}</p>
      <a href={href} className="text-pink-400 font-bold">
        Lire l’avis →
      </a>
    </div>
  );
}

function FinalCta({ title, href }: { title: string; href: string }) {
  return (
    <section className="text-center bg-gradient-to-br from-pink-900/40 to-zinc-950 border border-pink-900 rounded-3xl p-10">
      <h2 className="text-4xl font-bold mb-5">{title}</h2>
      <p className="text-gray-300 mb-8 max-w-3xl mx-auto">
        Continuez votre lecture avec nos comparatifs détaillés, nos avis et nos
        guides locaux Québec-first.
      </p>
      <a href={href} className="bg-pink-600 px-8 py-4 rounded-xl font-bold">
        Continuer →
      </a>
    </section>
  );
}

export default async function BlogArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);

  if (!article) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-black text-white">
      <article className="max-w-[1400px] mx-auto px-6 md:px-10 py-12">
        <a href="/blog" className="text-pink-400">
          ← Retour blog
        </a>

        <div className="mt-10 mb-12 bg-gradient-to-br from-zinc-950 to-pink-950/30 border border-zinc-800 rounded-3xl p-8 md:p-12">
          <p className="text-pink-400 font-semibold mb-4">
            Blog NightRank AI • {article.category}
          </p>

          <h1 className="text-5xl md:text-7xl font-bold text-pink-500 mb-6">
            {article.title}
          </h1>

          <p className="text-xl text-gray-300 max-w-4xl">
            {article.description}
          </p>
        </div>

        <ArticleContent slug={slug} />
      </article>
    </main>
  );
}