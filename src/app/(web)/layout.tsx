import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';

import Header from '@/components/Header/Header';
import './globals.css';
import Footer from '@/components/Footer/Footer';
import ThemeProvider from '@/components/ThemeProvider/ThemeProvider';
import { NextAuthProvider } from '@/components/AuthProvider/AuthProvider';
import Toast from '@/components/Toast/Toast';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '700', '900'],
  style: ['italic', 'normal'],
  variable: '--font-poppins',
});

export const metadata: Metadata = {
  title: 'Hotels Management System | Hashiif Abdillah - Full-Stack Software Engineer | MERN, Next.js & Flutter Expert',
  description: 'Hotels Management System - Proactive Full-Stack Software Engineer specializing in MERN stack, Next.js, Flutter, and modern web technologies. Expert in building scalable applications with focus on performance and SEO.',
  keywords: 'Hashiif Abdillah, Full-Stack Developer, Software Engineer, MERN Stack, Next.js, Flutter, TypeScript, PostgreSQL, Docker, RESTful API, GraphQL',
  authors: [{ name: 'Hashiif Abdillah', url: 'https://www.linkedin.com/in/hashiif-abdillah-665373297/' }],
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
    other: {
      rel: 'apple-touch-icon-precomposed',
      url: '/favicon.svg',
    },
  },
  openGraph: {
    title: 'Hashiif Abdillah - Full-Stack Software Engineer',
    description: 'Innovative Full-Stack Developer with expertise in MERN stack, Next.js, Flutter, and modern web technologies.',
    type: 'profile',
    locale: 'en_US',
    images: [
      {
        url: '/images/profile.jpg',
        width: 1200,
        height: 630,
        alt: 'Hashiif Abdillah - Full-Stack Software Engineer'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hashiif Abdillah - Full-Stack Software Engineer',
    description: 'Innovative Full-Stack Developer specializing in modern web technologies',
    images: ['/images/profile.jpg']
  },
  verification: {
    google: 'your-google-verification-code',
    other: {
      me: ['https://www.linkedin.com/in/hashiif-abdillah-665373297/']
    }
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <head>
        <link
          rel='stylesheet'
          href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css'
          crossOrigin='anonymous'
        />
      </head>
      <body className={poppins.className}>
        <NextAuthProvider>
          <ThemeProvider>
            <Toast />
            <main className='font-normal'>
              <Header />
              {children}
              <Footer />
            </main>
          </ThemeProvider>
        </NextAuthProvider>
      </body>
    </html>
  );
}
