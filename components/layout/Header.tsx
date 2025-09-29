import React from 'react';
import { Phone } from 'lucide-react';
import MobileMenuToggle from '@/components/interactive/MobileMenuToggle';
import Link from "next/link";
import Image from 'next/image';

export default function Header() {
    return (
        <header className="fixed top-0 w-full bg-white/95 backdrop-blur-lg border-b border-neutral-200 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16 relative">
                    {/* Logo - stânga */}
                    <Link href="/" className="flex-shrink-0 mt-5">
                        <Image
                            src="/logo-icon.svg"
                            alt="Coletul Studentului"
                            width={100}
                            height={100}
                            priority
                            className="h-12 w-auto md:h-16"
                        />
                    </Link>

                    {/* Text - centrat pe mobil, lângă logo pe desktop */}
                    <Link
                        href="/"
                        className="absolute left-1/2 -translate-x-1/2 md:static md:translate-x-0 md:ml-3"
                    >
        <span className="text-base md:text-xl font-bold text-neutral-900 whitespace-nowrap">
            Coletul Studentului
        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center space-x-8 ml-auto">
                        <a href="#servicii"
                           className="text-neutral-600 hover:text-neutral-900 transition-colors font-medium">
                            Servicii
                        </a>
                        <a href="#preturi"
                           className="text-neutral-600 hover:text-neutral-900 transition-colors font-medium">
                            Preturi
                        </a>
                        <a href="#intrebari"
                           className="text-neutral-600 hover:text-neutral-900 transition-colors font-medium">
                            Intrebari
                        </a>
                        <a
                        href="tel:0775538021"
                        className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2.5 rounded-xl font-medium transition-all flex items-center space-x-2 transform hover:scale-105 shadow-lg hover:shadow-xl"
                        >
                        <Phone className="w-4 h-4"/>
                        <span>0775 538 021</span>
                        </a>
                </nav>

                {/* Mobile Menu Toggle - dreapta */}
                <MobileMenuToggle/>
            </div>
            </div>
        </header>
    );
}