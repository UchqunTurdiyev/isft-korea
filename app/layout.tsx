import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const PIXEL_ID = process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID ?? '926186176343686';

export const metadata: Metadata = {
  title: 'Sotuv Kursi — Professional Landing',
  description: 'Sotuv kursi uchun zamonaviy landing sahifa. 1 oyda amaliy ko‘nikmalar, ishga yo‘naltirish, kafolatlangan natija.',
  openGraph: {
  title: 'Sotuv Kursi — Professional Landing',
  description: '1 oyda amaliy ko‘nikmalar. Ishga yo‘naltirish. Ustozlar — 10+ yillik tajriba.',
  type: 'website'
  },
  metadataBase: new URL('https://example.com')
  };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="not-dark">
      <head>
<meta name="color-scheme" content="light" />
<meta name="theme-color" content="#7000FF" />

  {/* Meta Pixel base */}
  <Script id="fb-pixel-base" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '${PIXEL_ID}');
            fbq('track', 'PageView');
          `}
        </Script>
</head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: 'none' }}
            src={`https://www.facebook.com/tr?id=${PIXEL_ID}&ev=PageView&noscript=1`}
            alt=""
          />
        </noscript>
        {children}
      </body>
    </html>
  );
}
