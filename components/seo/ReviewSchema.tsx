type ReviewSchemaProps = {
  name: string;
  description: string;
  url: string;
  ratingValue: string;
  bestRating?: string;
  worstRating?: string;
};

export default function ReviewSchema({
  name,
  description,
  url,
  ratingValue,
  bestRating = "5",
  worstRating = "1",
}: ReviewSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Review",
    itemReviewed: {
      "@type": "Thing",
      name,
      url,
      description,
    },
    reviewRating: {
      "@type": "Rating",
      ratingValue,
      bestRating,
      worstRating,
    },
    author: {
      "@type": "Organization",
      name: "NightRank AI",
    },
    publisher: {
      "@type": "Organization",
      name: "NightRank AI",
      logo: {
        "@type": "ImageObject",
        url: "https://nightrankai.com/favicon.ico",
      },
    },
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