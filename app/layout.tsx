import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import 'leaflet/dist/leaflet.css';
import NavigationBottom from '@/components/navigation-bottom';
import Footer from '@/components/footer';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000';
const defaultDescription =
  "Hi! I'm Ibnu Imam, a software engineer specializing in web development.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Ibnu Imam',
    template: '%s | Ibnu Imam',
  },
  description: defaultDescription,
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    siteName: 'Ibnu Imam',
    title: 'Ibnu Imam',
    description: defaultDescription,
    images: [{ url: '/img/bg.jpg', alt: 'Ibnu Imam' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ibnu Imam',
    description: defaultDescription,
    images: ['/img/bg.jpg'],
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
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.9)), url('/img/bg.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'bottom right',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed',
        }}
      >
        {children}
        <NavigationBottom />
        <Footer />
      </body>
    </html>
  );
}
