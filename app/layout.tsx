import type { Metadata } from "next";
import {Inter} from "next/font/google";
import "./globals.css";

const inter = Inter({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-inter'
});

// Metadate globale pentru întregul site
export const metadata: Metadata = {
    // Metadate de bază care se aplică la toate paginile
    metadataBase: new URL('https://coletulstudentului.ro'),

    // Generator și aplicația
    generator: 'Next.js',
    applicationName: 'Coletul Studentului',
    referrer: 'origin-when-cross-origin',

    // Creators
    creator: 'Matei Marius',
    publisher: 'ColetulStudentului',

    // Format detection
    formatDetection: {
        email: false,
        address: false,
        telephone: false,
    },

    // Icons globale
    icons: {
        icon: [
            { url: '/favicon.ico' },
            { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
            { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
        ],
        apple: [
            { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
        ],
        other: [
            {
                rel: 'apple-touch-icon-precomposed',
                url: '/apple-touch-icon-precomposed.png',
            },
        ],
    },

    // Manifest pentru PWA (opțional)
    manifest: '/manifest.json',

    // Verification pentru Google Search Console
    verification: {
        google: 'your-google-verification-code',
        // yandex: 'your-yandex-verification-code',
        // bing: 'your-bing-verification-code',
    },

    // Category
    category: 'transport',
};

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (
        <html lang="ro" className={`${inter.variable} scroll-smooth`}>
        <head>
            {/* Preconnect pentru performance */}
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />

            {/* DNS Prefetch pentru resurse externe */}
            <link rel="dns-prefetch" href="https://www.google-analytics.com" />

            {/* Theme color pentru mobile browsers */}
            <meta name="theme-color" content="#f97316" />
            <meta name="msapplication-TileColor" content="#f97316" />

            {/* Preload critical assets */}
            <link rel="preload" href="/fonts/Inter-var.woff2" as="font" type="font/woff2" crossOrigin="" />
            <title>Coletul Studentului</title>
        </head>
        <body className={`${inter.className} antialiased`}>
        {/* Skip to main content pentru accessibility */}
        <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-orange-500 text-white px-4 py-2 rounded-lg z-50"
        >
            Sari la conținutul principal
        </a>

        {/* Main content cu ID pentru skip link */}
        <main id="main-content">
            {children}
        </main>

        {/* Google Analytics (exemplu) */}
        {process.env.NODE_ENV === 'production' && (
            <>
                <script
                    async
                    src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
                />
                <script
                    dangerouslySetInnerHTML={{
                        __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}', {
                    page_title: document.title,
                    page_location: window.location.href,
                  });
                `,
                    }}
                />
            </>
        )}
        </body>
        </html>
    );
}