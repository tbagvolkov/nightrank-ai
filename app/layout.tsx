import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NightRank AI",
  description:
    "Comparatif des meilleurs sites webcams et rencontres adultes au Québec et au Canada.",
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