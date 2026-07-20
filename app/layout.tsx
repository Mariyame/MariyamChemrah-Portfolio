import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "Maryiam Chemrah | Full-Stack Software Engineer (PHP, Symfony, Laravel, React, Next.js)",
  description: "Explore the portfolio of Maryiam Chemrah, a Full-Stack Software Engineer with 8+ years of experience building scalable web applications using Symfony, Laravel, React, Next.js, Node.js, Docker, and modern software engineering practices.",
   openGraph: {
    title: "Maryiam Chemrah | Full-Stack Software Engineer",
    description:
      "Explore my portfolio, projects, and engineering experience.",
    url: "https://mariyamchemrah.com",
    siteName: "Maryiam Chemrah",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/mariyamchemrah.png",
        width: 1200,
        height: 630,
        alt: "Maryiam Chemrah Portfolio",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="h-full antialiased"
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
