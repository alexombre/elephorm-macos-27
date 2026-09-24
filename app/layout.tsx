import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Maîtriser macOS 27 Golden Gate | Proposition de formation",
  description:
    "Découvrez le programme proposé pour maîtriser macOS 27 Golden Gate, la productivité, Siri AI et la bureautique sur Mac.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className="antialiased">{children}</body>
    </html>
  );
}
