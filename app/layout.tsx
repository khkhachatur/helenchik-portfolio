import "./globals.css";
import Script from 'next/script';
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
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', 'YOUR_PIXEL_ID_HERE'); 
            fbq('track', 'PageView');
          `}
        </Script>
        {children}
       <GoogleAnalytics gaId="G-TZY42ESPVF" />
      </body>
    </html>
  );
}
