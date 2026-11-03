import type { Metadata } from "next";
import "./globals.css";
import AgeGate from "./AgeGate";

export const metadata: Metadata = {
  metadataBase: new URL("https://nightrankai.com"),

  title: "NightRank AI | Comparatifs adultes Québec & Canada",

  description:
    "NightRank AI compare les meilleures plateformes webcams, rencontres adultes, AI Companions et gaming adulte au Québec et au Canada.",

  applicationName: "NightRank AI",
  authors: [{ name: "Équipe éditoriale NightRank AI" }],
  creator: "Équipe éditoriale NightRank AI",
  publisher: "NightRank AI",
  openGraph: {
    type: "website",
    locale: "fr_CA",
    siteName: "NightRank AI",
    url: "https://nightrankai.com",
    title: "NightRank AI | Comparatifs adultes Québec & Canada",
    description:
      "Comparatifs indépendants de plateformes webcams, rencontres adultes, compagnons IA et gaming adulte pour le Québec et le Canada.",
  },
  twitter: {
    card: "summary",
    title: "NightRank AI | Comparatifs adultes Québec & Canada",
    description:
      "Comparatifs indépendants de plateformes adultes et compagnons IA pour le Québec et le Canada.",
  },

  verification: {
    other: {
      "p:domain_verify": "4e033d2a025f54b8e8e57bc57e72e107",
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "NightRank AI",
    url: "https://nightrankai.com",
    logo: "https://nightrankai.com/favicon.ico",
    email: "nightrankai@gmail.com",
    sameAs: ["https://www.facebook.com/NightRankAI"],
    description:
      "NightRank AI est un guide comparatif indépendant pour les plateformes webcams, rencontres adultes, AI Companions et gaming adulte au Québec et au Canada.",
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "NightRank AI",
    url: "https://nightrankai.com",
    inLanguage: "fr-CA",
  };

  return (
    <html lang="fr-CA">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema),
          }}
        />

        <AgeGate />
        {children}
      </body>
    </html>
  );
}
