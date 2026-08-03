import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";



const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});



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
      className={`
          overflow-x-hidden
          ${spaceGrotesk.variable}
          ${inter.variable}          
        `}
    >
      <body className="overflow-x-hidden w-full box-border min-h-screen flex flex-col antialiased bg-background text-foreground tracking-tight">
          <header>
            <Navbar />
        </header>

        <main className="flex-1">
          {children}
        </main>
        <footer>
            <Footer />
        </footer>
      
       </body>
    </html>
  );
}
