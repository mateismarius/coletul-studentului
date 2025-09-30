// app/politica-cookies/page.tsx
import React from 'react';
import { Metadata } from 'next';
import { ArrowLeft, Cookie, Shield, Settings, Eye } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Politica de Cookies - Coletul Studentului',
    description: 'Politica de utilizare cookies pentru Coletul Studentului. Informatii despre ce cookies folosim, de ce si cum le poti gestiona.',
    robots: 'index, follow',
};

export default function CookiePolicyPage() {
    const lastUpdated = '30 septembrie 2025';

    return (
        <div className="min-h-screen bg-white">
            {/* Header */}
            <div className="bg-gradient-to-br from-orange-500 to-orange-600 text-white py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto">
                    <Link
                        href="/"
                        className="inline-flex items-center space-x-2 text-orange-100 hover:text-white transition-colors mb-6"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        <span>Inapoi la pagina principala</span>
                    </Link>

                    <div className="flex items-center space-x-4 mb-6">
                        <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center">
                            <Cookie className="w-8 h-8 text-white" />
                        </div>
                        <div>
                            <h1 className="text-4xl md:text-5xl font-bold">Politica de Cookies</h1>
                            <p className="text-orange-100 mt-2">Actualizat: {lastUpdated}</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Content */}
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

                {/* Intro */}
                <div className="bg-orange-50 border border-orange-200 rounded-2xl p-6 mb-12">
                    <h3 className="font-semibold text-neutral-900 mb-2">Ce sunt cookies?</h3>
                    <p className="text-neutral-700 text-sm">
                        Cookies sunt fisiere text mici stocate pe dispozitivul tau (computer, telefon, tableta)
                        cand vizitezi un site web. Ele ajuta site-ul sa isi aminteasca informatii despre
                        vizita ta, cum ar fi preferintele tale si setarile.
                    </p>
                </div>

                <div className="prose prose-neutral max-w-none">

                    {/* 1. Ce cookies folosim */}
                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-neutral-900 mb-6 flex items-center space-x-3">
                            <Cookie className="w-6 h-6 text-orange-500" />
                            <span>1. Ce Cookies Folosim</span>
                        </h2>

                        <h3 className="text-xl font-semibold text-neutral-900 mb-4">1.1 Cookies Strict Necesare</h3>
                        <p className="text-neutral-700 mb-4">
                            Aceste cookies sunt esentiale pentru functionarea corecta a site-ului si nu pot fi dezactivate.
                        </p>
                        <div className="bg-neutral-50 border border-neutral-200 rounded-xl p-6 mb-6">
                            <ul className="space-y-3 text-neutral-700">
                                <li className="flex items-start">
                                    <span className="font-semibold min-w-[180px]">Cookie consimtamant:</span>
                                    <span>Retine preferintele tale despre cookies</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="font-semibold min-w-[180px]">Nume:</span>
                                    <span>coletul-studentului-cookie-consent</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="font-semibold min-w-[180px]">Durata:</span>
                                    <span>365 zile</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="font-semibold min-w-[180px]">Scop:</span>
                                    <span>Retine daca ai acceptat sau refuzat cookies</span>
                                </li>
                            </ul>
                        </div>

                        <h3 className="text-xl font-semibold text-neutral-900 mb-4">1.2 Cookies de Analiza (Google Analytics)</h3>
                        <p className="text-neutral-700 mb-4">
                            Ne ajuta sa intelegem cum folosesti site-ul pentru a-l imbunatati. <strong>Necesita consimtamantul tau.</strong>
                        </p>
                        <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-6">
                            <ul className="space-y-3 text-neutral-700">
                                <li className="flex items-start">
                                    <span className="font-semibold min-w-[180px]">_ga:</span>
                                    <span>Identifica utilizatori unici - 2 ani</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="font-semibold min-w-[180px]">_ga_*:</span>
                                    <span>Stocheaza starea sesiunii - 2 ani</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="font-semibold min-w-[180px]">_gid:</span>
                                    <span>Identifica utilizatori unici - 24 ore</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="font-semibold min-w-[180px]">_gat:</span>
                                    <span>Limiteaza rata de cereri - 1 minut</span>
                                </li>
                            </ul>
                            <div className="mt-4 pt-4 border-t border-blue-200">
                                <p className="text-sm text-neutral-700">
                                    <strong>Date colectate:</strong> Pagini vizitate, timp petrecut, sursa traficului,
                                    dispozitiv, browser, locatie aproximativa (oras/regiune).
                                </p>
                                <p className="text-sm text-neutral-700 mt-2">
                                    <strong>Nu colectam:</strong> Date personale identificabile, adrese IP complete,
                                    informatii financiare.
                                </p>
                            </div>
                        </div>

                        <h3 className="text-xl font-semibold text-neutral-900 mb-4">1.3 Cookies de Marketing</h3>
                        <p className="text-neutral-700 mb-4">
                            <strong>Momentan NU folosim cookies de marketing sau publicitare.</strong>
                        </p>
                        <p className="text-neutral-700">
                            Daca vom introduce astfel de cookies in viitor, vei fi notificat si vei putea
                            sa iti dai consimtamantul separat.
                        </p>
                    </section>

                    {/* 2. De ce folosim cookies */}
                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-neutral-900 mb-6 flex items-center space-x-3">
                            <Eye className="w-6 h-6 text-orange-500" />
                            <span>2. De Ce Folosim Cookies</span>
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="bg-orange-50 border border-orange-200 rounded-xl p-6">
                                <h4 className="font-semibold text-neutral-900 mb-3">Pentru tine</h4>
                                <ul className="space-y-2 text-neutral-700 text-sm">
                                    <li>✓ Retinere preferinte limba si setari</li>
                                    <li>✓ Experienta personalizata</li>
                                    <li>✓ Functionare corecta a site-ului</li>
                                    <li>✓ Salvare sesiune intre vizite</li>
                                </ul>
                            </div>

                            <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                                <h4 className="font-semibold text-neutral-900 mb-3">Pentru noi</h4>
                                <ul className="space-y-2 text-neutral-700 text-sm">
                                    <li>✓ Intelegere comportament utilizatori</li>
                                    <li>✓ Imbunatatire continut si navigare</li>
                                    <li>✓ Identificare probleme tehnice</li>
                                    <li>✓ Optimizare viteza si performanta</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    {/* 3. Gestionare cookies */}
                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-neutral-900 mb-6 flex items-center space-x-3">
                            <Settings className="w-6 h-6 text-orange-500" />
                            <span>3. Cum Gestionezi Cookies</span>
                        </h2>

                        <h3 className="text-xl font-semibold text-neutral-900 mb-4">3.1 Banner de Consimtamant</h3>
                        <p className="text-neutral-700 mb-6">
                            La prima vizita, vei vedea un banner in partea de jos a site-ului unde poti:
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-neutral-700 mb-6">
                            <li><strong>Accept toate</strong> - permiti toate cookies, inclusiv analiza</li>
                            <li><strong>Refuz</strong> - doar cookies strict necesare (functionarea site-ului)</li>
                        </ul>

                        <h3 className="text-xl font-semibold text-neutral-900 mb-4">3.2 Setari Browser</h3>
                        <p className="text-neutral-700 mb-4">
                            Poti gestiona sau sterge cookies direct din browser:
                        </p>
                        <div className="bg-neutral-50 border border-neutral-200 rounded-xl p-6 space-y-3">
                            <div>
                                <span className="font-semibold text-neutral-900">Chrome:</span>
                                <span className="text-neutral-700"> Setari → Confidentialitate si securitate → Cookies si alte date ale site-urilor</span>
                            </div>
                            <div>
                                <span className="font-semibold text-neutral-900">Firefox:</span>
                                <span className="text-neutral-700"> Optiuni → Confidentialitate si securitate → Cookies si date de site</span>
                            </div>
                            <div>
                                <span className="font-semibold text-neutral-900">Safari:</span>
                                <span className="text-neutral-700"> Preferinte → Confidentialitate → Gestionare date site-uri web</span>
                            </div>
                            <div>
                                <span className="font-semibold text-neutral-900">Edge:</span>
                                <span className="text-neutral-700"> Setari → Cookies si permisiuni site</span>
                            </div>
                        </div>

                        <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6 mt-6">
                            <p className="text-yellow-900 font-semibold mb-2">Atentie!</p>
                            <p className="text-neutral-700 text-sm">
                                Blocarea sau stergerea tuturor cookies poate afecta functionarea corecta
                                a site-ului si pierderea unor functionalitati.
                            </p>
                        </div>

                        <h3 className="text-xl font-semibold text-neutral-900 mb-4 mt-6">3.3 Opt-Out Google Analytics</h3>
                        <p className="text-neutral-700 mb-4">
                            Poti dezactiva Google Analytics pe toate site-urile instaland extensia browser:
                        </p>

                      <a  href="https://tools.google.com/dlpage/gaoptout"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold transition-colors" >
                        Google Analytics Opt-out Browser Add-on
                    </a>
                </section>

                {/* 4. Cookies terti */}
                <section className="mb-12">
                    <h2 className="text-2xl font-bold text-neutral-900 mb-6">4. Cookies de la Terti</h2>

                    <p className="text-neutral-700 mb-4">
                        <strong>Google Analytics</strong> este singurul serviciu terț care plaseaza cookies pe site-ul nostru.
                    </p>
                    <div className="bg-neutral-50 border border-neutral-200 rounded-xl p-6">
                        <p className="text-neutral-700 mb-4">
                            Google poate folosi datele pentru:
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-neutral-700">
                            <li>Imbunatatirea serviciilor proprii</li>
                            <li>Analiza trenduri generale pe web</li>
                            <li>Contextual advertising (daca ai activat personalizarea in contul Google)</li>
                        </ul>
                        <p className="text-neutral-700 mt-4">
                            Citeste mai multe:
                          <a  href="https://policies.google.com/privacy"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-orange-600 hover:text-orange-700 underline" >
                            Politica de confidentialitate Google </a>
                    </p>
            </div>
        </section>

{/* 5. Durata pastrare */}
    <section className="mb-12">
        <h2 className="text-2xl font-bold text-neutral-900 mb-6">5. Cat Timp Pastram Cookies</h2>

        <div className="space-y-4">
            <div className="bg-neutral-50 border-l-4 border-orange-500 p-6 rounded-r-xl">
                <h4 className="font-semibold text-neutral-900 mb-2">Cookies de sesiune</h4>
                <p className="text-neutral-700 text-sm">
                    Se sterg automat cand inchizi browser-ul
                </p>
            </div>

            <div className="bg-neutral-50 border-l-4 border-blue-500 p-6 rounded-r-xl">
                <h4 className="font-semibold text-neutral-900 mb-2">Cookies persistente</h4>
                <p className="text-neutral-700 text-sm">
                    Raman pe dispozitiv intre 24 ore si 2 ani, in functie de tip
                </p>
            </div>
        </div>

        <div className="mt-6 bg-blue-50 border border-blue-200 rounded-xl p-6">
            <h4 className="font-semibold text-neutral-900 mb-3">Tabel durata cookies:</h4>
            <table className="w-full text-sm">
                <thead className="border-b-2 border-blue-200">
                <tr className="text-left">
                    <th className="py-2 font-semibold text-neutral-900">Cookie</th>
                    <th className="py-2 font-semibold text-neutral-900">Durata</th>
                    <th className="py-2 font-semibold text-neutral-900">Tip</th>
                </tr>
                </thead>
                <tbody className="text-neutral-700">
                <tr className="border-b border-blue-100">
                    <td className="py-2">consimtamant</td>
                    <td className="py-2">365 zile</td>
                    <td className="py-2">Necesar</td>
                </tr>
                <tr className="border-b border-blue-100">
                    <td className="py-2">_ga</td>
                    <td className="py-2">2 ani</td>
                    <td className="py-2">Analiza</td>
                </tr>
                <tr className="border-b border-blue-100">
                    <td className="py-2">_gid</td>
                    <td className="py-2">24 ore</td>
                    <td className="py-2">Analiza</td>
                </tr>
                <tr>
                    <td className="py-2">_gat</td>
                    <td className="py-2">1 minut</td>
                    <td className="py-2">Analiza</td>
                </tr>
                </tbody>
            </table>
        </div>
    </section>

{/* 6. Drepturile tale */}
    <section className="mb-12">
        <h2 className="text-2xl font-bold text-neutral-900 mb-6 flex items-center space-x-3">
            <Shield className="w-6 h-6 text-orange-500" />
            <span>6. Drepturile Tale</span>
        </h2>

        <div className="bg-orange-50 border border-orange-200 rounded-xl p-6">
            <ul className="space-y-3 text-neutral-700">
                <li>✓ <strong>Dreptul de a refuza</strong> - poti refuza cookies non-esentiale</li>
                <li>✓ <strong>Dreptul de a retrage</strong> - poti retrage consimtamantul oricand</li>
                <li>✓ <strong>Dreptul de acces</strong> - poti vedea ce cookies sunt stocate</li>
                <li>✓ <strong>Dreptul de stergere</strong> - poti sterge cookies din browser</li>
            </ul>
        </div>
    </section>

{/* 7. Modificari */}
    <section className="mb-12">
        <h2 className="text-2xl font-bold text-neutral-900 mb-6">7. Modificari ale Politicii</h2>
        <p className="text-neutral-700 mb-4">
            Putem actualiza aceasta politica de cookies periodic. Modificarile vor fi publicate
            pe aceasta pagina cu data actualizarii.
        </p>
        <p className="text-neutral-700">
            Pentru modificari importante, vei fi notificat prin banner-ul de cookies
            la urmatoarea vizita.
        </p>
    </section>

{/* Contact */}
    <section className="mb-12">
        <h2 className="text-2xl font-bold text-neutral-900 mb-6">8. Contact</h2>
        <div className="bg-orange-50 border border-orange-200 rounded-xl p-6">
            <p className="text-neutral-700 mb-4">
                Pentru intrebari despre cookies sau aceasta politica:
            </p>
            <ul className="space-y-2 text-neutral-700">
                <li><strong>Telefon:</strong> 0775 538 021</li>
                <li><strong>Email:</strong> contact@coletul-studentului.ro (daca ai)</li>
            </ul>
            <p className="text-neutral-700 mt-4 text-sm">
                Vezi si:{" "}
                <Link href="/politica-confidentialitate" className="text-orange-600 hover:text-orange-700 underline">
                    Politica de Confidentialitate
                </Link>
                {" "}si{" "}
                <Link href="/gdpr" className="text-orange-600 hover:text-orange-700 underline">
                    Informatii GDPR
                </Link>
            </p>
        </div>
    </section>

</div>

    {/* Bottom CTA */}
    <div className="mt-12 bg-gradient-to-br from-neutral-900 to-neutral-800 rounded-2xl p-8 text-center text-white">
        <h3 className="text-2xl font-bold mb-4">Transparenta si control complet</h3>
        <p className="text-neutral-300 mb-6">
            Iti respectam alegerile si iti oferim control total asupra cookies
        </p>
        <Link
            href="/"
            className="inline-block bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-xl font-semibold transition-colors"
        >
            Inapoi la pagina principala
        </Link>
    </div>

</div>
</div>
);
}