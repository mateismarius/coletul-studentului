import React from 'react';
import { Phone } from 'lucide-react';
import MobileMenuToggle from '@/components/interactive/MobileMenuToggle';

export default function Header() {
    return (
        <header className="fixed top-0 w-full bg-white/95 backdrop-blur-lg border-b border-neutral-200 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <div className="flex items-center space-x-2">
                        <div
                            className="w-10 h-10 bg-gradient-to-br from-neutral-700 to-neutral-800 rounded-xl flex items-center justify-center">
                            <span className="text-white font-bold text-lg">CS</span>
                        </div>
                        <div>
                            <span className="text-xl font-bold text-neutral-900">Coletul Studentului</span>
                            <p className="text-xs text-neutral-600 -mt-1">Coletarie pentru studenti</p>
                        </div>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center space-x-8">
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
                            href="tel:0742123456"
                            className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2.5 rounded-xl font-medium transition-all flex items-center space-x-2 transform hover:scale-105 shadow-lg hover:shadow-xl"
                        >
                            <Phone className="w-4 h-4"/>
                            <span>0762 685 597</span>
                        </a>
                    </nav>

                    {/* Mobile Menu Toggle - Client Component */}
                    <MobileMenuToggle/>
                </div>
            </div>
        </header>
    );
}