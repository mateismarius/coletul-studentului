import React from 'react';
import { Metadata } from 'next';
import { ArrowLeft, Shield, CheckCircle, AlertTriangle } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'GDPR - Conformitate Protectia Datelor | StudePack',
    description: 'Informatii despre conformitatea StudePack cu Regulamentul General privind Protectia Datelor (GDPR). Drepturile tale si cum le poti exercita.',
    robots: 'index, follow',
};

export default function GDPRPage() {
    return (
        <div className="min-h-screen bg-white">
            {/* Header */}
            <div className="bg-gradient-to-br from-blue-900 to-blue-800 text-white py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto">
                    <Link
                        href="/"
                        className="inline-flex items-center space-x-2 text-blue-300 hover:text-blue-200 transition-colors mb-6"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        <span>Inapoi la pagina principala</span>
                    </Link>

                    <div className="flex items-center space-x-4 mb-6">
                        <div className="w-16 h-16 bg-blue-500 rounded-2xl flex items-center justify-center">
                            <Shield className="w-8 h-8 text-white" />
                        </div>
                        <div>
                            <h1 className="text-4xl md:text-5xl font-bold">GDPR - Protectia Datelor</h1>
                            <p className="text-blue-200 mt-2">Conformitate Regulamentul UE 2016/679</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Content */}
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

                {/* Quick Summary */}
                <div className="bg-blue-50 border-2 border-blue-200 rounded-2xl p-6 mb-12">
                    <h2 className="text-2xl font-bold text-neutral-900 mb-4">Ce este GDPR?</h2>
                    <p className="text-neutral-700 mb-4">
                        Regulamentul General privind Protectia Datelor (GDPR) este legislatia europeana care
                        iti protejeaza datele personale si iti ofera control complet asupra informatiilor tale.
                    </p>
                    <p className="text-neutral-700">
                        StudePack respecta integral prevederile GDPR si iti garanteaza ca datele tale sunt
                        procesate legal, transparent si securizat.
                    </p>
                </div>

                {/* Drepturile GDPR */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold text-neutral-900 mb-8">Drepturile Tale conform GDPR</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                        {/* Drept 1 */}
                        <div className="bg-white border-2 border-green-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                            <div className="flex items-start space-x-4">
                                <CheckCircle className="w-8 h-8 text-green-600 flex-shrink-0" />
                                <div>
                                    <h3 className="font-bold text-neutral-900 mb-2">Dreptul de Acces</h3>
                                    <p className="text-neutral-700 text-sm">
                                        Poti solicita o copie a datelor personale pe care le detinem despre tine,
                                        inclusiv scopul prelucrarii si cui le-am transmis.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Drept 2 */}
                        <div className="bg-white border-2 border-green-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                            <div className="flex items-start space-x-4">
                                <CheckCircle className="w-8 h-8 text-green-600 flex-shrink-0" />
                                <div>
                                    <h3 className="font-bold text-neutral-900 mb-2">Dreptul de Rectificare</h3>
                                    <p className="text-neutral-700 text-sm">
                                        Poti corecta datele inexacte sau incomplete fara intarziere.
                                        Ne poti contacta oricand pentru actualizari.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Drept 3 */}
                        <div className="bg-white border-2 border-green-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                            <div className="flex items-start space-x-4">
                                <CheckCircle className="w-8 h-8 text-green-600 flex-shrink-0" />
                                <div>
                                    <h3 className="font-bold text-neutral-900 mb-2">Dreptul la Stergere</h3>
                                    <p className="text-neutral-700 text-sm">
                                        &#34;Dreptul de a fi uitat&#34; - poti solicita stergerea datelor tale daca
                                        nu mai sunt necesare sau daca retractezi consimtamantul.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Drept 4 */}
                        <div className="bg-white border-2 border-green-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                            <div className="flex items-start space-x-4">
                                <CheckCircle className="w-8 h-8 text-green-600 flex-shrink-0" />
                                <div>
                                    <h3 className="font-bold text-neutral-900 mb-2">Dreptul la Portabilitate</h3>
                                    <p className="text-neutral-700 text-sm">
                                        Poti primi datele intr-un format structurat, utilizat frecvent si
                                        usor de transferat catre alt furnizor.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Drept 5 */}
                        <div className="bg-white border-2 border-green-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                            <div className="flex items-start space-x-4">
                                <CheckCircle className="w-8 h-8 text-green-600 flex-shrink-0" />
                                <div>
                                    <h3 className="font-bold text-neutral-900 mb-2">Dreptul la Opozitie</h3>
                                    <p className="text-neutral-700 text-sm">
                                        Poti refuza prelucrarea datelor pentru marketing direct sau profilare.
                                        Optiunea de dezabonare este mereu disponibila.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Drept 6 */}
                        <div className="bg-white border-2 border-green-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                            <div className="flex items-start space-x-4">
                                <CheckCircle className="w-8 h-8 text-green-600 flex-shrink-0" />
                                <div>
                                    <h3 className="font-bold text-neutral-900 mb-2">Dreptul la Restrictionare</h3>
                                    <p className="text-neutral-700 text-sm">
                                        Poti solicita limitarea prelucrarii datelor in anumite situatii,
                                        cum ar fi contestarea exactitatii datelor.
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>
                </section>

                {/* Cum exerciti drepturile */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold text-neutral-900 mb-6">Cum iti Exerciti Drepturile</h2>

                    <div className="bg-orange-50 border border-orange-200 rounded-2xl p-8">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                            <div className="text-center">
                                <div className="w-12 h-12 bg-orange-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                                    <span className="text-white font-bold text-xl">1</span>
                                </div>
                                <h4 className="font-semibold text-neutral-900 mb-2">Contacteaza-ne</h4>
                                <p className="text-neutral-700 text-sm">
                                    Suna la 0775 538 021
                                </p>
                            </div>

                            <div className="text-center">
                                <div className="w-12 h-12 bg-orange-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                                    <span className="text-white font-bold text-xl">2</span>
                                </div>
                                <h4 className="font-semibold text-neutral-900 mb-2">Identifica-te</h4>
                                <p className="text-neutral-700 text-sm">
                                    Confirma identitatea pentru siguranta datelor tale
                                </p>
                            </div>

                            <div className="text-center">
                                <div className="w-12 h-12 bg-orange-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                                    <span className="text-white font-bold text-xl">3</span>
                                </div>
                                <h4 className="font-semibold text-neutral-900 mb-2">Primesti raspuns</h4>
                                <p className="text-neutral-700 text-sm">
                                    Maxim 30 zile pentru procesarea cererii tale
                                </p>
                            </div>
                        </div>

                        {/*<div className="bg-white rounded-xl p-6">*/}
                        {/*    <h4 className="font-semibold text-neutral-900 mb-4">Formulare disponibile:</h4>*/}
                        {/*    <div className="space-y-3">*/}
                        {/*        <a*/}
                        {/*            href="#"*/}
                        {/*            className="flex items-center justify-between p-4 bg-neutral-50 hover:bg-neutral-100 rounded-lg transition-colors"*/}
                        {/*        >*/}
                        {/*            <div className="flex items-center space-x-3">*/}
                        {/*                <Download className="w-5 h-5 text-orange-500" />*/}
                        {/*                <span className="font-medium text-neutral-900">Cerere Acces Date Personale</span>*/}
                        {/*            </div>*/}
                        {/*            <span className="text-sm text-neutral-600">PDF</span>*/}
                        {/*        </a>*/}
                        {/*        <a*/}
                        {/*            href="#"*/}
                        {/*            className="flex items-center justify-between p-4 bg-neutral-50 hover:bg-neutral-100 rounded-lg transition-colors"*/}
                        {/*        >*/}
                        {/*            <div className="flex items-center space-x-3">*/}
                        {/*                <Download className="w-5 h-5 text-orange-500" />*/}
                        {/*                <span className="font-medium text-neutral-900">Cerere Stergere Date (Dreptul de a fi Uitat)</span>*/}
                        {/*            </div>*/}
                        {/*            <span className="text-sm text-neutral-600">PDF</span>*/}
                        {/*        </a>*/}
                        {/*        <a*/}
                        {/*            href="#"*/}
                        {/*            className="flex items-center justify-between p-4 bg-neutral-50 hover:bg-neutral-100 rounded-lg transition-colors"*/}
                        {/*        >*/}
                        {/*            <div className="flex items-center space-x-3">*/}
                        {/*                <Download className="w-5 h-5 text-orange-500" />*/}
                        {/*                <span className="font-medium text-neutral-900">Cerere Portabilitate Date</span>*/}
                        {/*            </div>*/}
                        {/*            <span className="text-sm text-neutral-600">PDF</span>*/}
                        {/*        </a>*/}
                        {/*    </div>*/}
                        {/*</div>*/}
                    </div>
                </section>

                {/* Temei legal */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold text-neutral-900 mb-6">Temei Legal de Prelucrare</h2>

                    <p className="text-neutral-700 mb-6">
                        Prelucram datele tale personale pe baza urmatoarelor temeiuri legale:
                    </p>

                    <div className="space-y-4">
                        <div className="bg-neutral-50 border border-neutral-200 rounded-xl p-6">
                            <h4 className="font-semibold text-neutral-900 mb-2">✓ Executarea Contractului</h4>
                            <p className="text-neutral-700 text-sm">
                                Pentru a-ti oferi serviciile de transport persoane si coletarie solicitate
                            </p>
                        </div>

                        <div className="bg-neutral-50 border border-neutral-200 rounded-xl p-6">
                            <h4 className="font-semibold text-neutral-900 mb-2">✓ Consimtamant</h4>
                            <p className="text-neutral-700 text-sm">
                                Pentru marketing, newslettere si comunicari promotionale (PE CARE LE POTI RETRAGE ORICAND)
                            </p>
                        </div>

                        <div className="bg-neutral-50 border border-neutral-200 rounded-xl p-6">
                            <h4 className="font-semibold text-neutral-900 mb-2">✓ Obligatii Legale</h4>
                            <p className="text-neutral-700 text-sm">
                                Pentru conformare fiscala, contabila si obligatii fata de autoritati
                            </p>
                        </div>

                        <div className="bg-neutral-50 border border-neutral-200 rounded-xl p-6">
                            <h4 className="font-semibold text-neutral-900 mb-2">✓ Interes Legitim</h4>
                            <p className="text-neutral-700 text-sm">
                                Pentru imbunatatirea serviciilor, prevenirea fraudei si siguranta operatiunilor
                            </p>
                        </div>
                    </div>
                </section>

                {/* Securitate */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold text-neutral-900 mb-6">Masuri de Securitate</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                            <h4 className="font-semibold text-neutral-900 mb-4">Protectie Tehnica</h4>
                            <ul className="space-y-2 text-neutral-700 text-sm">
                                <li>✓ Criptare SSL/TLS</li>
                                <li>✓ Firewall avansat</li>
                                <li>✓ Backup-uri zilnice</li>
                                <li>✓ Monitorizare 24/7</li>
                            </ul>
                        </div>

                        <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                            <h4 className="font-semibold text-neutral-900 mb-4">Protectie Organizatorica</h4>
                            <ul className="space-y-2 text-neutral-700 text-sm">
                                <li>✓ Training GDPR angajati</li>
                                <li>✓ Acces restricționat</li>
                                <li>✓ Politici interne stricte</li>
                                <li>✓ Audit periodic</li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Incalcari securitate */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold text-neutral-900 mb-6">Incalcari de Securitate</h2>

                    <div className="bg-red-50 border-2 border-red-200 rounded-xl p-6">
                        <div className="flex items-start space-x-4">
                            <AlertTriangle className="w-8 h-8 text-red-600 flex-shrink-0 mt-1" />
                            <div>
                                <h4 className="font-semibold text-neutral-900 mb-2">Angajamentul nostru</h4>
                                <p className="text-neutral-700 mb-4">
                                    In cazul unei incalcari de securitate care afecteaza datele tale personale:
                                </p>
                                <ul className="space-y-2 text-neutral-700 text-sm">
                                    <li>• Vom notifica ANSPDCP in maxim 72 ore</li>
                                    <li>• Te vom informa direct daca exista risc ridicat pentru drepturile tale</li>
                                    <li>• Vom implementa masuri imediate de limitare a daunelor</li>
                                    <li>• Vom documenta complet incidentul si masurile luate</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/*/!* Contact DPO *!/*/}
                {/*<section className="mb-12">*/}
                {/*    <h2 className="text-3xl font-bold text-neutral-900 mb-6">Responsabil Protectia Datelor</h2>*/}

                {/*    <div className="bg-gradient-to-br from-orange-50 to-orange-100 border border-orange-200 rounded-2xl p-8">*/}
                {/*        <div className="flex items-center space-x-4 mb-6">*/}
                {/*            <div className="w-16 h-16 bg-orange-500 rounded-2xl flex items-center justify-center">*/}
                {/*                <Shield className="w-8 h-8 text-white" />*/}
                {/*            </div>*/}
                {/*            <div>*/}
                {/*                <h3 className="text-2xl font-bold text-neutral-900">Data Protection Officer</h3>*/}
                {/*                <p className="text-neutral-700">Responsabil cu protectia datelor personale</p>*/}
                {/*            </div>*/}
                {/*        </div>*/}

                {/*        <div className="bg-white rounded-xl p-6 space-y-4">*/}
                {/*            <div>*/}
                {/*                <span className="font-semibold text-neutral-900">Email:</span>*/}
                {/*                <span className="text-neutral-700"> privacy@studepack.ro</span>*/}
                {/*            </div>*/}
                {/*            <div>*/}
                {/*                <span className="font-semibold text-neutral-900">Telefon:</span>*/}
                {/*                <span className="text-neutral-700"> 0742 123 456</span>*/}
                {/*            </div>*/}
                {/*            <div>*/}
                {/*                <span className="font-semibold text-neutral-900">Program:</span>*/}
                {/*                <span className="text-neutral-700"> Luni-Vineri, 09:00-18:00</span>*/}
                {/*            </div>*/}
                {/*            <div>*/}
                {/*                <span className="font-semibold text-neutral-900">Timp raspuns:</span>*/}
                {/*                <span className="text-neutral-700"> Maximum 30 zile</span>*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</section>*/}

                {/* Autoritate supraveghere */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold text-neutral-900 mb-6">Autoritatea de Supraveghere</h2>

                    <div className="bg-neutral-50 border border-neutral-200 rounded-xl p-6">
                        <p className="text-neutral-700 mb-4">
                            Daca consideri ca drepturile tale au fost incalcate, poti depune o plangere la:
                        </p>

                        <div className="bg-white rounded-xl p-6">
                            <h4 className="font-semibold text-neutral-900 mb-4">
                                Autoritatea Nationala de Supraveghere a Prelucrarii Datelor cu Caracter Personal (ANSPDCP)
                            </h4>
                            <ul className="space-y-2 text-neutral-700">
                                <li><strong>Adresa:</strong> B-dul G-ral. Gheorghe Magheru 28-30, Sector 1, Bucuresti</li>
                                <li><strong>Telefon:</strong> +40 318 059 211 sau +40 318 059 212</li>
                                <li><strong>Email:</strong> anspdcp@dataprotection.ro</li>
                                <li><strong>Website:</strong> <a href="https://www.dataprotection.ro" className="text-blue-600 hover:text-blue-700 underline" target="_blank" rel="noopener">www.dataprotection.ro</a></li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Bottom CTA */}
                <div className="bg-gradient-to-br from-neutral-900 to-neutral-800 rounded-2xl p-8 text-center text-white">
                    <h3 className="text-2xl font-bold mb-4">Ai intrebari despre GDPR?</h3>
                    <p className="text-neutral-300 mb-6">
                        Echipa noastra este pregatita sa iti raspunda la orice intrebare despre drepturile tale
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href="tel:0742123456"
                            className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-xl font-semibold transition-colors"
                        >
                            Contacteaza DPO
                        </a>
                        <Link
                            href="/politica-confidentialitate"
                            className="bg-white text-neutral-900 hover:bg-neutral-100 px-8 py-3 rounded-xl font-semibold transition-colors"
                        >
                            Politica Confidentialitate
                        </Link>
                    </div>
                </div>

            </div>
        </div>
    );
}