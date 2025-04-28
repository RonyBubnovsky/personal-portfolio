import '@/app/globals.css';
import type { Metadata } from 'next';
import { Outfit, Plus_Jakarta_Sans, Inter, Space_Grotesk } from 'next/font/google';

// Configure the Outfit font
const outfit = Outfit({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-outfit',
});

// Configure the Plus Jakarta Sans font
const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-plus-jakarta',
});

// Configure Space Grotesk for headings
const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-space-grotesk',
});

// Configure the Inter font as a fallback
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'Rony B | Full Stack Developer',
  description: 'Portfolio website showcasing my skills, projects, and experience as a Full Stack Developer specializing in React, Next.js, and modern web development.',
  keywords: ['full stack developer', 'web developer', 'React developer', 'Next.js', 'portfolio', 'Rony B', 'developer portfolio', 'software engineer'],
  authors: [{ name: 'Rony B' }],
  creator: 'Rony B',
  publisher: 'Rony B',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://ronyportfolio.vercel.app/',
    title: 'Rony B | Full Stack Developer',
    description: 'Portfolio website showcasing my skills, projects, and experience as a Full Stack Developer',
    siteName: 'Rony B Portfolio'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rony B | Full Stack Developer',
    description: 'Full Stack Developer specializing in React and Next.js'
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${outfit.variable} ${plusJakarta.variable} ${spaceGrotesk.variable} ${inter.variable}`}>
      <body className="bg-gray-950 text-white font-plus-jakarta">
        {children}
      </body>
    </html>
  );
}
