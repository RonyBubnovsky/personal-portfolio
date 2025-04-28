import '@/app/globals.css';
import type { Metadata } from 'next';
import { Inter, Montserrat, Poppins, Playfair_Display } from 'next/font/google';

// Configure the Inter font
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

// Configure the Montserrat font
const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-montserrat',
});

// Configure the Poppins font
const poppins = Poppins({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
});

// Configure the Playfair Display font
const playfair = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-playfair',
});

export const metadata: Metadata = {
  title: 'Rony B | Full Stack Developer',
  description: 'Portfolio website showcasing my skills, projects, and experience as a Full Stack Developer',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${montserrat.variable} ${poppins.variable} ${playfair.variable}`}>
      <body className="bg-gray-950 text-white">
        {children}
      </body>
    </html>
  );
}
