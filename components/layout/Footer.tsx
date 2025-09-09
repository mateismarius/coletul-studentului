import React from 'react';
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, MessageCircle } from 'lucide-react';
import FadeIn from '@/components/animations/FadeIn';
import HoverLift from '@/components/animations/HoverLift';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    const socialLinks = [
        {
            name: 'Facebook',
            icon: Facebook,
            href: 'https://facebook.com/studepack.coletarie',
            color: 'hover:text-blue-600 hover:bg-blue-100'
        },
        {
            name: 'Instagram',
            icon: Instagram,
            href: 'https://instagram.com/studepack.oficial',
            color: 'hover:text-pink-600 hover:bg-pink-100'
        },
        {
            name: 'TikTok',
            icon: () => (
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-.88-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z"/>
                </svg>
            ),
            href: 'https://tiktok.com/@studepack.coletarie',
            color: 'hover:text-neutral-900 hover:bg-neutral-100'
        }
    ];

    const coverage = [
        { region: 'Ridicare din:', areas: ['Vaslui', 'Vrancea', 'Buzau', 'Bacau'] },
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
                                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center shadow-lg">
                                    <span className="text-white font-bold text-xl">CS</span>
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold">Coletul Studentului</h3>
                                    <p className="text-neutral-400 text-sm">Coletarie pentru studenti</p>
                                </div>
                            </div>

                            <p className="text-neutral-300 mb-6 text-lg leading-relaxed">
                                Conectam parintii cu studentii prin servicii de coletarie sigure si rapide.
                                Transportam pachete, mancare de acasa si tot ce au nevoie copiii tai la facultate.
                            </p>

                            <div className="space-y-4">
                                <a
                                    href="tel:0742123456"
                                    className="flex items-center space-x-3 text-neutral-300 hover:text-orange-400 transition-colors group"
                                >
                                    <div className="w-10 h-10 bg-neutral-800 rounded-lg flex items-center justify-center group-hover:bg-orange-500 transition-colors">
                                        <Phone className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <div className="font-semibold">0742 123 456</div>
                                        <div className="text-sm text-neutral-400">Disponibili 24/7</div>
                                    </div>
                                </a>

                                <a
                                    href="https://wa.me/40742123456"
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
                            <div className="space-y-6">
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
                                            <social.icon className="w-6 h-6" />
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

                            <div className="text-neutral-400 text-sm">
                                © Made by - Marius Matei.
                            </div>

                            <div
                                className="flex flex-wrap justify-center md:justify-end space-x-6 text-sm text-neutral-400">
                                <a href="#" className="hover:text-orange-400 transition-colors">
                                    Termeni si conditii
                                </a>
                                <a href="#" className="hover:text-orange-400 transition-colors">
                                    Politica de confidentialitate
                                </a>
                                <a href="#" className="hover:text-orange-400 transition-colors">
                                    GDPR
                                </a>
                            </div>
                        </div>

                        <div className="mt-6 pt-6 border-t border-neutral-800 text-center">
                            <div className="text-neutral-500 text-sm">
                            Coletarie autorizata | Transport sigur pentru studenti din Romania
                            </div>
                            <div className="text-neutral-600 text-xs mt-2">
                                Servicii de transport: <span className="text-orange-400">Vaslui → Iasi</span> |
                                <span className="text-orange-400"> Buzau → Bucuresti</span> |
                                <span className="text-orange-400"> Bacau → Brasov</span> |
                                <span className="text-orange-400"> Vrancea → Toate orasele</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}