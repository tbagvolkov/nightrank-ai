import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://nightrankai.com"),

  title: {
    default: "NightRank AI | Meilleurs sites adultes au Québec",
    template: "%s | NightRank AI",
  },

  description:
    "Guide Québec-first des webcams, rencontres adultes, comparatifs, IA et gaming adulte au Canada.",

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
    "AI girlfriend",
    "AI chat",
    "Lovescape",
    "gaming adulte",
  ],

  verification: {
    other: {
      "mylead-verification":
        "39d94ff229ba489af44c9c3cf2f78b8a",
    },
  },

  openGraph: {
    title: "NightRank AI | Meilleurs sites adultes au Québec",
    description:
      "Comparatifs webcams, rencontres adultes, IA et gaming adulte pour le Québec et le Canada.",
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
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}