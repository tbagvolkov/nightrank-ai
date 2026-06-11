import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://nightrankai.com"),

  title: {
    default: "NightRank AI | Meilleurs sites adultes au Québec",
    template: "%s | NightRank AI",
  },

  description:
    "Guide Québec-first des webcams, rencontres adultes, comparatifs et gaming adulte. Découvrez les meilleures plateformes disponibles au Québec et au Canada.",

  keywords: [
    "webcam Québec",
    "webcam Montréal",
    "dating Québec",
    "rencontre adulte Québec",
    "cams live Québec",
    "Jerkmate avis",
    "LiveJasmin avis",
    "BongaCams avis",
    "AdultFriendFinder avis",
    "NightRank AI",
  ],

  openGraph: {
    title: "NightRank AI | Meilleurs sites adultes au Québec",
    description:
      "Comparatifs, avis et guides des meilleures plateformes webcams, dating et gaming adulte au Québec.",
    url: "https://nightrankai.com",
    siteName: "NightRank AI",
    locale: "fr_CA",
    type: "website",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}