import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Corantin Louchard | Développeur Backend & Cybersécurité | ÉTS Montréal",
  description: "Portfolio de Corantin Louchard, étudiant en Génie TI à l'ÉTS Montréal. Spécialisé en développement backend, cybersécurité et applications web sécurisées. Découvrez SecureVault, mon projet de partage de secrets chiffrés.",
  keywords: ["développeur backend", "cybersécurité", "ÉTS", "React", "Node.js", "TypeScript", "chiffrement"],
  authors: [{ name: "Corantin Louchard" }],
  openGraph: {
    title: "Corantin Louchard - Développeur Backend & Cybersécurité",
    description: "Portfolio professionnel - Étudiant en Génie TI à l'ÉTS Montréal",
    type: "website",
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
