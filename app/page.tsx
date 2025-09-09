
import Header from "@/components/layout/Header";
import Hero from "@/components/layout/Hero";
import Services from "@/components/layout/Services";
import Prices from "@/components/layout/Prices";
import CTA from "@/components/layout/CTA";
import FAQ from "@/components/layout/FAQ";
import Footer from "@/components/layout/Footer";
import {Metadata} from "next";

// SEO Metadata pentru pagina principală
export const metadata: Metadata = {
    // Basic SEO
    title: 'Coletul Studentului - Transport Persoane si Coletarie Studenti | Vaslui, Buzau, Bacau, Vrancea → Iasi, Bucuresti, Brasov',
    description: 'Transport persoane sigur si coletarie rapida pentru studenti din Vaslui, Vrancea, Buzau, Bacau catre Iasi, Bucuresti, Brasov. Calatorie confortabila + livrare pachete, mancare de acasa, medicamente la camin. Rezervari 24/7.',

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
        'transport camin',
        'livrare camin',
        'calatorie studenti',
        'transport parinti',
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
        url: 'https://coletulstudentului.ro/',
        siteName: 'Coletul Studentului',
        title: 'Coletul Studentului - Transport Persoane si Coletarie pentru Studenti',
        description: 'Transport persoane sigur si coletarie rapida pentru studenti din Vaslui, Vrancea, Buzau, Bacau catre Iasi, Bucuresti, Brasov. Calatorie confortabila + livrare pachete la camin.',
        images: [
            {
                url: 'https://coletulstudentului.ro/images/og-image.jpg',
                width: 1200,
                height: 630,
                alt: 'Coletul Studentului - Transport si Coletarie pentru Studenti',
            },
        ],
    },

    // Twitter Card
    twitter: {
        card: 'summary_large_image',
        title: 'Coletul Studentului - Transport Persoane si Coletarie Studenti',
        description: 'Transport persoane sigur si coletarie rapida pentru studenti din Vaslui, Vrancea, Buzau, Bacau catre Iasi, Bucuresti, Brasov.',
        images: ['https://studepack.ro/images/twitter-image.jpg'],
    },

    // Canonical și alternate
    alternates: {
        canonical: 'https://coletulstudentului.ro/',
    },

    // Icons
    icons: {
        icon: '/favicon.ico',
        apple: '/apple-touch-icon.png',
    },

    // Viewport și theme
    viewport: {
        width: 'device-width',
        initialScale: 1,
    },

    // Additional meta
    other: {
        'theme-color': '#f97316',
        'apple-mobile-web-app-capable': 'yes',
        'apple-mobile-web-app-status-bar-style': 'default',
        'apple-mobile-web-app-title': 'StudePack',
    },
};

// Structured Data pentru SEO
export const generateStructuredData = () => {
    return {
        '@context': 'https://schema.org',
        '@type': 'TransportationCompany',
        name: 'Coletul Studentului',
        description: 'Transport persoane sigur si coletarie rapida pentru studenti',
        url: 'https://coletulstudentului.ro/',
        telephone: '+40762685597',
        address: {
            '@type': 'PostalAddress',
            addressCountry: 'RO',
            addressRegion: 'Romania',
        },
        serviceArea: [
            { '@type': 'Place', name: 'Vaslui' },
            { '@type': 'Place', name: 'Vrancea' },
            { '@type': 'Place', name: 'Buzau' },
            { '@type': 'Place', name: 'Bacau' },
            { '@type': 'Place', name: 'Iasi' },
            { '@type': 'Place', name: 'Bucuresti' },
            { '@type': 'Place', name: 'Brasov' },
        ],
        services: [
            {
                '@type': 'Service',
                name: 'Transport Persoane pentru Studenti',
                description: 'Calatorie sigura si confortabila pentru studenti si parinti',
            },
            {
                '@type': 'Service',
                name: 'Coletarie pentru Studenti',
                description: 'Livrare rapida pachete, mancare de acasa, medicamente',
            },
        ],
        priceRange: '15-400 RON',
        hasOfferCatalog: {
            '@type': 'OfferCatalog',
            name: 'Servicii Transport si Coletarie',
            itemListElement: [
                {
                    '@type': 'Offer',
                    itemOffered: { '@type': 'Service', name: 'Transport Persoane Dus' },
                    price: '45',
                    priceCurrency: 'RON',
                },
                {
                    '@type': 'Offer',
                    itemOffered: { '@type': 'Service', name: 'Transport Persoane Dus-Intors' },
                    price: '80',
                    priceCurrency: 'RON',
                },
                {
                    '@type': 'Offer',
                    itemOffered: { '@type': 'Service', name: 'Coletarie Standard' },
                    price: '15',
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