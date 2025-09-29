import React from 'react';
import { Phone, MapPin, Clock, MessageCircle } from 'lucide-react';
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    const socialLinks = [
        {
            name: 'Facebook',
            icon: () => (
                <svg role="img" className="w-6 h-6" fill="white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <title>Facebook</title>
                    <path d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036 26.805 26.805 0 0 0-.733-.009c-.707 0-1.259.096-1.675.309a1.686 1.686 0 0 0-.679.622c-.258.42-.374.995-.374 1.752v1.297h3.919l-.386 2.103-.287 1.564h-3.246v8.245C19.396 23.238 24 18.179 24 12.044c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.628 3.874 10.35 9.101 11.647Z"/>
                </svg>
            ),
            href: 'https://www.facebook.com/people/Coletul-Studentului/61578952572352/',
            color: 'hover:text-blue-600 hover:bg-blue-100'
        },
        {
            name: 'TikTok',
            icon: () => (
                <svg className="w-6 h-6" fill="white" viewBox="0 0 24 24">
                    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-.88-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z"/>
                </svg>
            ),
            href: 'https://www.tiktok.com/@coletulstudentului',
            color: 'hover:text-neutral-900 hover:bg-neutral-100'
        }
    ];

    const coverage = [
        { region: 'Ridicare din:', areas: ['Focsani', 'Adjud', 'Tecuci', 'Barlad', 'Vaslui', 'Ramnicu Sarat', 'Buzau', 'Onesti'] },
        { region: 'Livrare in:', areas: ['Iasi', 'Bucuresti', 'Brasov'] }
    ];

    return (
        <footer className="bg-neutral-900 text-white">
            {/* Main Footer */}
            <div className="py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 lg:gap-8">
                        {/* Company Info */}
                        <div className="lg:col-span-2">
                            <div className="flex items-center space-x-3 mb-6">
                                {/* Logo */}
                                <Link href="/" className="flex-shrink-0 mt-5">
                                    <Image
                                        src="/logo-icon.svg"
                                        alt="Coletul Studentului"
                                        width={80}
                                        height={80}
                                        priority
                                        className="h-16 w-auto md:h-20 lg:h-20"
                                    />
                                </Link>
                                <a href="#">
                                    <div>
                                        <h3 className="text-2xl font-bold">Coletul Studentului</h3>
                                        <p className="text-neutral-400 text-sm">Coletarie pentru studenti</p>
                                    </div>
                                </a>
                            </div>

                            <p className="text-neutral-300 mb-6 text-lg leading-relaxed">
                                Conectam parintii cu studentii prin servicii de coletarie sigure si rapide.
                                Transportam pachete, mancare de acasa si tot ce au nevoie copiii tai la facultate.
                            </p>

                            <div className="space-y-4">
                                <a
                                    href="tel:0775538021"
                                    className="flex items-center space-x-3 text-neutral-300 hover:text-orange-400 transition-colors group"
                                >
                                    <div className="w-10 h-10 bg-neutral-800 rounded-lg flex items-center justify-center group-hover:bg-orange-500 transition-colors">
                                        <Phone className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <div className="font-semibold">0775 538 021</div>
                                        <div className="text-sm text-neutral-400">Disponibili 24/7</div>
                                    </div>
                                </a>

                                <a
                                    href="https://wa.me/40775538021"
                                    className="flex items-center space-x-3 text-neutral-300 hover:text-green-400 transition-colors group"
                                >
                                    <div className="w-10 h-10 bg-neutral-800 rounded-lg flex items-center justify-center group-hover:bg-green-600 transition-colors">
                                        <MessageCircle className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <div className="font-semibold">WhatsApp</div>
                                        <div className="text-sm text-neutral-400">Raspuns rapid</div>
                                    </div>
                                </a>
                            </div>
                        </div>

                        {/* Coverage Areas */}
                        <div>
                            <h4 className="text-xl font-bold mb-6 text-orange-400">Acoperire geografica</h4>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {coverage.map((item, index) => (
                                    <div key={index}>
                                        <h5 className="font-semibold text-neutral-300 mb-3">{item.region}</h5>
                                        <ul className="space-y-2">
                                            {item.areas.map((area, areaIndex) => (
                                                <li key={areaIndex} className="text-neutral-400 flex items-center space-x-2 hover:text-orange-300 transition-colors">
                                                    <MapPin className="w-4 h-4 text-orange-500" />
                                                    <span>{area}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Program & Social */}
                        <div>
                            <h4 className="text-xl font-bold mb-6 text-orange-400">Program si contact</h4>

                            <div className="mb-8">
                                <div className="flex items-center space-x-3 mb-4">
                                    <Clock className="w-5 h-5 text-orange-500" />
                                    <span className="font-semibold text-neutral-300">Program comenzi:</span>
                                </div>
                                <div className="space-y-2 text-neutral-400 ml-8">
                                    <div className="hover:text-orange-300 transition-colors">Luni - Vineri: 08:00 - 22:00</div>
                                    <div className="hover:text-orange-300 transition-colors">Sambata - Duminica: 09:00 - 20:00</div>
                                    <div className="text-sm text-neutral-500 mt-2">*Urgente acceptate 24/7</div>
                                </div>
                            </div>

                            <div>
                                <h5 className="font-semibold text-neutral-300 mb-4">Urmareste-ne:</h5>
                                <div className="flex space-x-4">
                                    {socialLinks.map((social, index) => (
                                        <a
                                            key={index}
                                            href={social.href}
                                            className={`w-12 h-12 bg-neutral-800 rounded-xl flex items-center justify-center text-neutral-400 transition-all duration-300 ${social.color} hover:scale-110 shadow-lg hover:shadow-xl`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            aria-label={social.name}
                                        >
                                            <social.icon />
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-neutral-800">
                <div className="py-8 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-7xl mx-auto">
                        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                            <div className="text-neutral-400 text-sm">
                                © {currentYear} Coletul Studentului. Toate drepturile rezervate.
                            </div>

                            {/*<div className="text-neutral-400 text-sm">*/}
                            {/*    © Made by - Marius Matei.*/}
                            {/*</div>*/}

                            <div
                                className="flex flex-wrap justify-center md:justify-end space-x-6 text-sm text-neutral-400">
                                <a href="/termeni-conditii" className="hover:text-orange-400 transition-colors">
                                    Termeni si conditii
                                </a>
                                <a href="/politica-confidentialitate" className="hover:text-orange-400 transition-colors">
                                    Politica de confidentialitate
                                </a>
                                <a href="/gdpr" className="hover:text-orange-400 transition-colors">
                                    GDPR
                                </a>
                            </div>
                        </div>

                        <div className="mt-6 pt-6 border-t border-neutral-800 text-center">
                            <div className="text-neutral-500 text-sm">
                            Coletarie autorizata | Transport sigur pentru studenti din Romania
                            </div>
                            <div className="text-neutral-500 text-xs mt-2">
                                Servicii de transport: <span className="text-orange-400">Focsani ↔ Adjud ↔ Onesti ↔ Brasov</span> <span className="text-primary-orange">|</span>
                                <span className="text-orange-400"> Focsani ↔ Tecuci ↔ Barlad ↔ Vaslui ↔ Iasi</span> <span className="text-primary-orange">|</span>
                                <span className="text-orange-400"> Focsani ↔ Ramnicu Sarat ↔ Buzau ↔ Bucuresti</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}