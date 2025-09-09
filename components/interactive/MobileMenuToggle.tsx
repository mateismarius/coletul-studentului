'use client'

import React, { useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';

export default function MobileMenuToggle() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <>
            {/* Mobile menu button */}
            <button
                className="md:hidden p-2"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
                {isMenuOpen ? (
                    <X className="w-6 h-6 text-neutral-700" />
                ) : (
                    <Menu className="w-6 h-6 text-neutral-700" />
                )}
            </button>

            {/* Mobile Navigation */}
            {isMenuOpen && (
                <div className="md:hidden absolute top-16 left-0 right-0 bg-white border-b border-neutral-200 shadow-lg z-40">
                    <nav className="p-4 space-y-4">
                        <a
                            href="#servicii"
                            className="block text-neutral-600 hover:text-neutral-900 transition-colors font-medium py-2"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Servicii
                        </a>
                        <a
                            href="#preturi"
                            className="block text-neutral-600 hover:text-neutral-900 transition-colors font-medium py-2"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Preturi
                        </a>
                        <a
                            href="#intrebari"
                            className="block text-neutral-600 hover:text-neutral-900 transition-colors font-medium py-2"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Intrebari
                        </a>
                        <a
                            href="tel:0742123456"
                            className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-3 rounded-xl font-medium flex items-center justify-center space-x-2 shadow-lg"
                        >
                            <Phone className="w-4 h-4" />
                            <span>0762 685 597</span>
                        </a>
                    </nav>
                </div>
            )}
        </>
    );
}