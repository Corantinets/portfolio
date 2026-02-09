import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { ThemeProvider } from "@/contexts/ThemeContext";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  title: "Corantin Louchard | Développeur Full-Stack | ÉTS Montréal",
  description: "Étudiant en Génie TI à l'ÉTS Montréal passionné par le développement web sécurisé. Portfolio de projets incluant SecureVault (chiffrement AES-256) et contrôleur USB HID personnalisé.",
  keywords: [
    "développeur fullstack",
    "développeur backend",
    "cybersécurité",
    "ÉTS Montréal",
    "React",
    "Next.js",
    "Node.js",
    "TypeScript",
    "JavaScript",
    "Python",
    "Java",
    "chiffrement AES-256",
    "MongoDB",
    "PostgreSQL",
    "Express",
    "REST API",
    "développement web",
    "développement embarqué",
    "Raspberry Pi Pico",
    "CircuitPython",
    "USB HID",
    "sécurité applicative",
    "Tailwind CSS",
    "Git",
    "GitHub",
    "Vercel",
    "UML",
    "architecture MVC",
    "tests unitaires",
    "Jest",
    "Pug",
    "stage été 2026",
    "ingénieur TI"
  ],
  authors: [{ name: "Corantin Louchard" }],
  openGraph: {
    title: "Corantin Louchard - Développeur Full-Stack",
    description: "Portfolio professionnel - Étudiant en Génie TI à l'ÉTS Montréal spécialisé en développement web sécurisé",
    type: "website",
    locale: "fr_CA",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                const theme = localStorage.getItem('theme') || 'dark';
                if (theme === 'dark') {
                  document.documentElement.classList.add('dark');
                } else {
                  document.documentElement.classList.remove('dark');
                }
              } catch (e) {}
            `,
          }}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider>
          {children}
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
