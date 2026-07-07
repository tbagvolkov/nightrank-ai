type ArticleSchemaProps = {
  title: string;
  description: string;
  url: string;
  image: string;
  publishedTime: string;
  modifiedTime: string;
};

export default function ArticleSchema({
  title,
  description,
  url,
  image,
  publishedTime,
  modifiedTime,
}: ArticleSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    image,
    datePublished: publishedTime,
    dateModified: modifiedTime,
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
    mainEntityOfPage: url,
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