import "./globals.css";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { GoogleAnalytics } from '@next/third-parties/google';


export const metadata: Metadata = {
  title: 'Helen Khachatryan | Fashion Designer',
  description: 'The official archive and portfolio of award-winning fashion designer Helen Khachatryan.',
  openGraph: {
    title: 'Helen Khachatryan | Brutalist Fashion Archive',
    description: 'Explore the creative process, material studies, and collections of Vogue-featured designer Helen Khachatryan.',
    url: 'https://www.helenkhachatryan.com',
    siteName: 'Helen Khachatryan Portfolio',
    images: [
      {
        url: '/images/gallery/gallery-18.jpg', 
        width: 1200,
        height: 630,
        alt: 'Helen Khachatryan Fashion Collection',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  verification: {
    other: {
      'facebook-domain-verification': ['9rk05czotq7yvt9555yf41tz6yjh2y'],
    },
  },
};

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
       <GoogleAnalytics gaId="G-S4T1YBR9TT" />
      </body>
    </html>
  );
}
