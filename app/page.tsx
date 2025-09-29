
import Header from "@/components/layout/Header";
import Hero from "@/components/layout/Hero";
import Services from "@/components/layout/Services";
import Prices from "@/components/layout/Prices";
import CTA from "@/components/layout/CTA";
import FAQ from "@/components/layout/FAQ";
import Footer from "@/components/layout/Footer";
import {Metadata, Viewport} from "next";


// Viewport configuration (separate export)
export const viewport: Viewport = {
    width: 'device-width',
    initialScale: 1,
    themeColor: '#f97316',
};

// SEO Metadata pentru pagina principală
export const metadata: Metadata = {
    // Basic SEO
    title: 'Coletul Studentului - Transport Colete pentru Studenti | Vaslui, Buzau, Bacau, Vrancea → Iasi, Bucuresti, Brasov',
    description: 'Serviciu de coletarie rapida pentru studentii din Vaslui, Vrancea, Buzau, Bacau catre Iasi, Bucuresti, Brasov. Livrare pachete, mancare de acasa, medicamente la camin. Rezervari 24/7.',

    // Keywords pentru România
    keywords: [
        'transport studenti',
        'coletarie studenti',
        'transport persoane studenti',
        'pachete studenti',
        'Vaslui Iasi transport',
        'Buzau Bucuresti transport',
        'Bacau Brasov transport',
        'Vrancea transport studenti',
        'mancare acasa studenti',
        'livrare camin',
        'calatorie studenti',
        'rezervari transport studenti',
        'coletarie Vaslui',
        'coletarie Buzau',
        'coletarie Bacau',
        'coletarie Vrancea'
    ],

    // Author și robots
    authors: [{ name: 'Coletul Studentului' }],
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },

    // Open Graph pentru social media
    openGraph: {
        type: 'website',
        locale: 'ro_RO',
        url: 'https://coletul-studentului.ro/',
        siteName: 'Coletul Studentului',
        title: 'Coletul Studentului - Transport Colete pentru Studenti',
        description: 'Serviciu de coletarie rapida pentru studenti din Vaslui, Vrancea, Buzau, Bacau catre Iasi, Bucuresti, Brasov. Livrare sigura la camin sau adrese private.',
        images: [
            {
                url: 'https://coletul-studentului.ro/images/og-image.jpg',
                width: 1200,
                height: 630,
                alt: 'Coletul Studentului - Coletarie pentru Studenti',
            },
        ],
    },

    // Canonical și alternate
    alternates: {
        canonical: 'https://coletul-studentului.ro/',
    },

    // Icons
    icons: {
        icon: '/favicon.ico',
        apple: '/apple-touch-icon.png',
    },

    // Additional meta
    other: {
        'theme-color': '#f97316',
        'apple-mobile-web-app-capable': 'yes',
        'apple-mobile-web-app-status-bar-style': 'default',
        'apple-mobile-web-app-title': 'Coletul Studentului',
    },
};

// Structured Data pentru SEO

const generateStructuredData = () => {
    return {
        '@context': 'https://schema.org',
        '@type': 'TransportationCompany',
        name: 'Coletul Studentului',
        description: 'Transport pachete rapid si sigur pentru studenti',
        url: 'https://coletul-studentului.ro/',
        telephone: '+40775538021',
        address: {
            '@type': 'PostalAddress',
            addressCountry: 'RO',
            addressRegion: 'Romania',
        },
        serviceArea: [
            { '@type': 'Place', name: 'Vaslui' },
            { '@type': 'Place', name: 'Vrancea' },
            { '@type': 'Place', name: 'Barlad' },
            { '@type': 'Place', name: 'Adjud' },
            { '@type': 'Place', name: 'Tecuci' },
            { '@type': 'Place', name: 'Ramnicu Sarat' },
            { '@type': 'Place', name: 'Onesti' },
            { '@type': 'Place', name: 'Buzau' },
            { '@type': 'Place', name: 'Bacau' },
            { '@type': 'Place', name: 'Iasi' },
            { '@type': 'Place', name: 'Bucuresti' },
            { '@type': 'Place', name: 'Brasov' },
        ],
        services: [
            {
                '@type': 'Service',
                name: 'Coletarie pentru Studenti',
                description: 'Livrare rapida pachete, mancare de acasa, medicamente',
            },
        ],
        priceRange: '50-60 RON',
        hasOfferCatalog: {
            '@type': 'OfferCatalog',
            name: 'Servicii Transport si Coletarie',
            itemListElement: [
                {
                    '@type': 'Offer',
                    itemOffered: { '@type': 'Service', name: 'Coletarie Standard' },
                    price: '50',
                    priceCurrency: 'RON',
                },
            ],
        },
    };
};

export default function Home() {
    const structuredData = generateStructuredData();

    return (
        <>
            {/* Structured Data Script */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
            />

            <div className="bg-white text-neutral-900 antialiased">
                {/* Header - Server Component (SEO perfect) */}
                <Header />

                {/* Hero Section - Păstrat cu animații pentru impact vizual */}
                <Hero />

                {/* Services Section - Server Component */}
                <Services />

                {/* Prices Section - Server Component */}
                <Prices />

                {/* CTA Section - Server Component */}
                <CTA />

                {/* FAQ Section - Acum HTML nativ (SEO maxim) */}
                <FAQ />

                {/* Footer - Server Component */}
                <Footer />
            </div>
        </>
    );
}