"use client";

import { useMemo, useState } from "react";
import Link from "next/link";

type Article = {
  slug: string;
  title: string;
  description?: string;
};

export default function BlogSearch({
  articles,
}: {
  articles: Article[];
}) {
  const [query, setQuery] = useState("");

  const results = useMemo(() => {
    if (!query.trim()) return [];

    return articles.filter((article) => {
  const searchQuery = query.toLowerCase();

  return (
    article.title.toLowerCase().includes(searchQuery) ||
    article.description?.toLowerCase().includes(searchQuery)
  );
});
  }, [query, articles]);

  return (
    <div className="mb-12">
      <input
        type="text"
        placeholder="Rechercher un article..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-full rounded-xl border border-gray-700 bg-gray-900 px-5 py-4 text-white placeholder-gray-500 focus:border-pink-500 focus:outline-none"
      />

      {query && (
        <div className="mt-4 rounded-xl border border-gray-800 bg-black">
          {results.length > 0 ? (
            results.map((article) => (
              <Link
                key={article.slug}
                href={`/blog/${article.slug}`}
                className="block border-b border-gray-800 px-5 py-4 hover:bg-gray-900"
              >
                <h3 className="font-semibold text-white">
                  {article.title}
                </h3>

                {article.description && (
  <p className="mt-1 text-sm text-gray-400">
    {article.description}
  </p>
)}
              </Link>
            ))
          ) : (
            <p className="px-5 py-4 text-gray-400">
              Aucun article trouvé.
            </p>
          )}
        </div>
      )}
    </div>
  );
}