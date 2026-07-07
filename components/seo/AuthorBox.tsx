type AuthorBoxProps = {
  published: string;
  updated: string;
  readingTime: string;
};

export default function AuthorBox({
  published,
  updated,
  readingTime,
}: AuthorBoxProps) {
  return (
    <section className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 my-10">
      <div className="flex flex-col md:flex-row md:justify-between gap-6">

        <div>
          <p className="text-sm text-gray-400 mb-2">
            Auteur
          </p>

          <h3 className="text-2xl font-bold text-pink-500">
            NightRank AI Editorial Team
          </h3>

          <p className="text-gray-300 mt-3 max-w-xl">
            Nos contenus sont rédigés selon notre méthodologie éditoriale
            afin d'offrir des comparatifs indépendants destinés aux visiteurs
            du Québec et du Canada.
          </p>
        </div>

        <div className="space-y-2 text-gray-300">

          <p>
            📅 <strong>Publié :</strong> {published}
          </p>

          <p>
            🔄 <strong>Mis à jour :</strong> {updated}
          </p>

          <p>
            ⏱️ <strong>Temps de lecture :</strong> {readingTime}
          </p>

          <a
            href="/company/methodology"
            className="block text-pink-400 hover:text-pink-300"
          >
            Voir notre méthodologie →
          </a>

          <a
            href="/company/editorial-policy"
            className="block text-pink-400 hover:text-pink-300"
          >
            Politique éditoriale →
          </a>

        </div>

      </div>
    </section>
  );
}