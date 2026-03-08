import { Metadata } from 'next';


export const metadata: Metadata = {
  title: 'Support Helen Khachatryan | Fashion Design Journey',
  description: 'From Yerevan to the runways of Italy. Join the campaign to help award-winning fashion designer Helen Khachatryan study in Europe.',
  openGraph: {
    title: 'Support Helen Khachatryan | Fashion Design Journey',
    description: 'Help shape the future of fashion. Join the campaign to send this Vogue-featured designer to Europe.',
    url: 'https://www.helenkhachatryan.com/support',
    siteName: 'Helen Khachatryan Portfolio',
    images: [
      {
        url: '/images/cover.jpg', 
        width: 1200,
        height: 630,
        alt: 'Helen Khachatryan Design Process',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

export default function SupportLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}