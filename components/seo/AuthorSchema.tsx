type AuthorSchemaProps = {
  url: string;
};

export default function AuthorSchema({
  url,
}: AuthorSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://nightrankai.com/#organization",
    name: "NightRank AI Editorial Team",
    url: "https://nightrankai.com",
    email: "nightrankai@gmail.com",
    logo: {
      "@type": "ImageObject",
      url: "https://nightrankai.com/favicon.ico",
    },
    sameAs: [
      "https://www.facebook.com/NightRankAI",
    ],
    mainEntityOfPage: url,
    description:
      "Équipe éditoriale de NightRank AI spécialisée dans les comparatifs de plateformes webcams, rencontres adultes, AI Companions et gaming pour le Québec et le Canada.",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema),
      }}
    />
  );
}