import React from 'react';
import { Metadata } from 'next';
import { ArrowLeft, Shield, Lock, Eye, UserCheck } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Politica de Confidentialitate - StudePack | Protectia Datelor Personale',
    description: 'Politica de confidentialitate StudePack - Cum colectam, folosim si protejam datele personale ale clientilor nostri conform GDPR.',
    robots: 'index, follow',
};

export default function PrivacyPolicy() {
    const lastUpdated = '29 septembrie 2025';

    return (
        <div className="min-h-screen bg-white">
            {/* Header */}
            <div className="bg-gradient-to-br from-neutral-900 to-neutral-800 text-white py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto">
                    <Link
                        href="/"
                        className="inline-flex items-center space-x-2 text-orange-400 hover:text-orange-300 transition-colors mb-6"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        <span>Inapoi la pagina principala</span>
                    </Link>

                    <div className="flex items-center space-x-4 mb-6">
                        <div className="w-16 h-16 bg-orange-500 rounded-2xl flex items-center justify-center">
                            <Shield className="w-8 h-8 text-white" />
                        </div>
                        <div>
                            <h1 className="text-4xl md:text-5xl font-bold">Politica de Confidentialitate</h1>
                            <p className="text-neutral-300 mt-2">Actualizat: {lastUpdated}</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Content */}
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

                {/* Intro */}
                <div className="bg-orange-50 border border-orange-200 rounded-2xl p-6 mb-12">
                    <h3 className="font-semibold text-neutral-900 mb-2">Angajamentul nostru</h3>
                    <p className="text-neutral-700 text-sm">
                        Coletul Studentului respecta confidentialitatea si siguranta datelor personale ale clientilor.
                        Aceasta politica explica ce date colectam, cum le folosim si cum le protejam conform
                        Regulamentului General privind Protectia Datelor (GDPR) si legislatiei romane.
                    </p>
                </div>

                <div className="prose prose-neutral max-w-none">

                    {/* 1. Date colectate */}
                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-neutral-900 mb-6 flex items-center space-x-3">
                            <Eye className="w-6 h-6 text-orange-500" />
                            <span>1. Ce Date Personale Colectam</span>
                        </h2>

                        <h3 className="text-xl font-semibold text-neutral-900 mb-4">1.1 Date de Identificare</h3>
                        <ul className="list-disc list-inside space-y-2 text-neutral-700 mb-6">
                            <li>Nume si prenume</li>
                            <li>Numar de telefon</li>
                            <li>Adresa de email (optional)</li>
                            <li>Adresa de ridicare/livrare</li>
                        </ul>

                        <h3 className="text-xl font-semibold text-neutral-900 mb-4">1.2 Date pentru Transport Persoane</h3>
                        <ul className="list-disc list-inside space-y-2 text-neutral-700 mb-6">
                            <li>Nume complet</li>
                            <li>Numar de telefon</li>
                            <li>Punct de ridicare si destinatie</li>
                            <li>Data si ora calatoriei</li>
                            <li>Numar de persoane (daca aplicabil)</li>
                        </ul>

                        <h3 className="text-xl font-semibold text-neutral-900 mb-4">1.3 Date pentru Coletarie</h3>
                        <ul className="list-disc list-inside space-y-2 text-neutral-700 mb-6">
                            <li>Nume expeditor si destinatar</li>
                            <li>Numere de telefon</li>
                            <li>Adrese complete de ridicare si livrare</li>
                            <li>Descriere generala continut colet</li>
                            <li>Greutate si dimensiuni</li>
                            <li>Valoare declarata (pentru asigurare)</li>
                        </ul>

                        <h3 className="text-xl font-semibold text-neutral-900 mb-4">1.4 Date de Plata</h3>
                        <ul className="list-disc list-inside space-y-2 text-neutral-700 mb-6">
                            <li>Metoda de plata preferata</li>
                            <li>Istoric tranzactii (pentru evidenta contabila)</li>
                            <li>Date card NUMAI prin procesatori autorizati (nu stocam date carduri)</li>
                        </ul>

                        <h3 className="text-xl font-semibold text-neutral-900 mb-4">1.5 Date Tehnice</h3>
                        <ul className="list-disc list-inside space-y-2 text-neutral-700">
                            <li>Adresa IP</li>
                            <li>Tip browser si dispozitiv</li>
                            <li>Date GPS pentru urmarire transport (cu consimtamant)</li>
                            <li>Cookies pentru functionarea site-ului</li>
                        </ul>
                    </section>

                    {/* 2. Utilizarea datelor */}
                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-neutral-900 mb-6 flex items-center space-x-3">
                            <UserCheck className="w-6 h-6 text-orange-500" />
                            <span>2. Cum Utilizam Datele Personale</span>
                        </h2>

                        <h3 className="text-xl font-semibold text-neutral-900 mb-4">2.1 Prestarea Serviciilor</h3>
                        <ul className="list-disc list-inside space-y-2 text-neutral-700 mb-6">
                            <li>Procesarea rezervarilor si comenzilor</li>
                            <li>Organizarea transportului si livrarii</li>
                            <li>Comunicare despre statusul serviciului</li>
                            <li>Contactare in caz de probleme sau intarzieri</li>
                        </ul>

                        <h3 className="text-xl font-semibold text-neutral-900 mb-4">2.2 Comunicare si Marketing</h3>
                        <ul className="list-disc list-inside space-y-2 text-neutral-700 mb-6">
                            <li>Trimitere confirmari si notificari despre servicii</li>
                            <li>Informatii despre modificari de program</li>
                            <li>Oferte speciale si promotii (DOAR cu consimtamant explicit)</li>
                            <li>Sondaje de satisfactie (optional)</li>
                        </ul>

                        <h3 className="text-xl font-semibold text-neutral-900 mb-4">2.3 Imbunatatire Servicii</h3>
                        <ul className="list-disc list-inside space-y-2 text-neutral-700 mb-6">
                            <li>Analiza statistică pentru optimizare rute</li>
                            <li>Feedback si imbunatatirea experientei clientului</li>
                            <li>Dezvoltare produse si servicii noi</li>
                        </ul>

                        <h3 className="text-xl font-semibold text-neutral-900 mb-4">2.4 Conformare Legala</h3>
                        <ul className="list-disc list-inside space-y-2 text-neutral-700">
                            <li>Respectarea obligatiilor fiscale si contabile</li>
                            <li>Cooperare cu autoritatile (daca solicitat legal)</li>
                            <li>Gestionarea reclamatiilor si litigiilor</li>
                        </ul>
                    </section>

                    {/* 3. Partajarea datelor */}
                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-neutral-900 mb-6">3. Partajarea Datelor cu Terti</h2>

                        <div className="bg-green-50 border border-green-200 rounded-xl p-6 mb-6">
                            <p className="text-green-900 font-semibold">
                                NU vindem, inchiriem sau comercializam datele personale catre terti!
                            </p>
                        </div>

                        <p className="text-neutral-700 mb-4">
                            Partajam date DOAR in urmatoarele situatii strict necesare:
                        </p>

                        <h3 className="text-xl font-semibold text-neutral-900 mb-4">3.1 Furnizori de Servicii</h3>
                        <ul className="list-disc list-inside space-y-2 text-neutral-700 mb-6">
                            <li>Procesatori de plati (pentru tranzactii securizate)</li>
                            <li>Servicii de hosting si cloud (pentru stocarea sigura)</li>
                            <li>Servicii SMS si email (pentru notificari)</li>
                            <li>Companii de asigurari (pentru polite si daune)</li>
                        </ul>

                        <h3 className="text-xl font-semibold text-neutral-900 mb-4">3.2 Obligatii Legale</h3>
                        <ul className="list-disc list-inside space-y-2 text-neutral-700">
                            <li>Autoritati fiscale (ANAF) - pentru conformare fiscala</li>
                            <li>Politie sau justitie - daca solicitat prin ordin legal</li>
                            <li>Autoritatea de protectie a consumatorului - in caz de investigatii</li>
                        </ul>
                    </section>

                    {/* 4. Securitatea datelor */}
                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-neutral-900 mb-6 flex items-center space-x-3">
                            <Lock className="w-6 h-6 text-orange-500" />
                            <span>4. Securitatea Datelor</span>
                        </h2>

                        <p className="text-neutral-700 mb-4">
                            Implementam masuri tehnice si organizatorice pentru protectia datelor:
                        </p>

                        <h3 className="text-xl font-semibold text-neutral-900 mb-4">4.1 Masuri Tehnice</h3>
                        <ul className="list-disc list-inside space-y-2 text-neutral-700 mb-6">
                            <li>Criptare SSL/TLS pentru transmiterea datelor</li>
                            <li>Firewall si sisteme anti-malware</li>
                            <li>Backup-uri regulate si securizate</li>
                            <li>Servere protejate in centre de date certificate</li>
                            <li>Acces restricționat la date (doar personal autorizat)</li>
                        </ul>

                        <h3 className="text-xl font-semibold text-neutral-900 mb-4">4.2 Masuri Organizatorice</h3>
                        <ul className="list-disc list-inside space-y-2 text-neutral-700">
                            <li>Training GDPR pentru toti angajatii</li>
                            <li>Politici interne stricte de confidentialitate</li>
                            <li>Contracte de confidentialitate cu furnizori</li>
                            <li>Audit periodic al securitatii</li>
                            <li>Proceduri de raportare incidente de securitate</li>
                        </ul>
                    </section>

                    {/* 5. Drepturile utilizatorilor */}
                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-neutral-900 mb-6">5. Drepturile Tale conform GDPR</h2>

                        <div className="bg-orange-50 border border-orange-200 rounded-xl p-6 mb-6">
                            <p className="text-neutral-900 font-semibold mb-4">
                                Ai urmatoarele drepturi privind datele tale personale:
                            </p>

                            <div className="space-y-4">
                                <div>
                                    <h4 className="font-semibold text-neutral-900 mb-2">✓ Dreptul de acces</h4>
                                    <p className="text-neutral-700 text-sm">
                                        Poti solicita o copie a datelor pe care le detinem despre tine
                                    </p>
                                </div>

                                <div>
                                    <h4 className="font-semibold text-neutral-900 mb-2">✓ Dreptul de rectificare</h4>
                                    <p className="text-neutral-700 text-sm">
                                        Poti corecta datele inexacte sau incomplete
                                    </p>
                                </div>

                                <div>
                                    <h4 className="font-semibold text-neutral-900 mb-2">✓ Dreptul la stergere (&#34;dreptul de a fi uitat&#34;)</h4>
                                    <p className="text-neutral-700 text-sm">
                                        Poti solicita stergerea datelor in anumite conditii
                                    </p>
                                </div>

                                <div>
                                    <h4 className="font-semibold text-neutral-900 mb-2">✓ Dreptul la restrictionare</h4>
                                    <p className="text-neutral-700 text-sm">
                                        Poti limita procesarea datelor tale
                                    </p>
                                </div>

                                <div>
                                    <h4 className="font-semibold text-neutral-900 mb-2">✓ Dreptul la portabilitate</h4>
                                    <p className="text-neutral-700 text-sm">
                                        Poti primi datele intr-un format structurat si usor de transferat
                                    </p>
                                </div>

                                <div>
                                    <h4 className="font-semibold text-neutral-900 mb-2">✓ Dreptul la opozitie</h4>
                                    <p className="text-neutral-700 text-sm">
                                        Poti refuza marketing direct si procesare automata
                                    </p>
                                </div>

                                <div>
                                    <h4 className="font-semibold text-neutral-900 mb-2">✓ Dreptul de a depune plangere</h4>
                                    <p className="text-neutral-700 text-sm">
                                        Poti contacta Autoritatea Nationala de Supraveghere (ANSPDCP)
                                    </p>
                                </div>
                            </div>
                        </div>

                        <p className="text-neutral-700 mb-4">
                            Pentru a-ti exercita drepturile, contacteaza-ne la:
                        </p>
                        <ul className="space-y-2 text-neutral-700">
                            <li><strong>Telefon:</strong> 0775 538 021</li>
                            <li><strong>Termen raspuns:</strong> maxim 30 zile</li>
                        </ul>
                    </section>

                    {/* 6. Cookies */}
                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-neutral-900 mb-6">6. Cookies si Tehnologii Similare</h2>

                        <h3 className="text-xl font-semibold text-neutral-900 mb-4">6.1 Ce sunt Cookies</h3>
                        <p className="text-neutral-700 mb-4">
                            Cookies sunt fisiere text mici stocate pe dispozitivul tau pentru a imbunatati experienta pe site.
                        </p>

                        <h3 className="text-xl font-semibold text-neutral-900 mb-4">6.2 Tipuri de Cookies</h3>
                        <ul className="list-disc list-inside space-y-2 text-neutral-700 mb-6">
                            <li><strong>Esențiale:</strong> necesare pentru functionarea site-ului (nu pot fi dezactivate)</li>
                            <li><strong>Functionale:</strong> isi amintesc preferintele tale (limba, tema)</li>
                            <li><strong>Analitice:</strong> ne ajuta sa intelegem cum folosesti site-ul (Google Analytics)</li>
                            <li><strong>Marketing:</strong> pentru afisarea de reclame relevante (DOAR cu acordul tau)</li>
                        </ul>

                        <h3 className="text-xl font-semibold text-neutral-900 mb-4">6.3 Gestionare Cookies</h3>
                        <p className="text-neutral-700 mb-4">
                            Poti gestiona cookies din setarile browser-ului tau sau prin banner-ul de consimtamant.
                        </p>
                    </section>

                    {/* 7. Retentia datelor */}
                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-neutral-900 mb-6">7. Cat Timp Pastram Datele</h2>

                        <ul className="list-disc list-inside space-y-2 text-neutral-700">
                            <li><strong>Date comenzi/rezervari active:</strong> pe durata contractului + 1 an</li>
                            <li><strong>Istoric tranzactii:</strong> 10 ani (obligatie legala fiscala)</li>
                            <li><strong>Date marketing:</strong> pana la retragerea consimtamantului</li>
                            <li><strong>Date reclamatii:</strong> pana la solutionare + 3 ani</li>
                            <li><strong>Loguri securitate:</strong> maxim 12 luni</li>
                        </ul>
                    </section>

                    {/* 8. Minori */}
                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-neutral-900 mb-6">8. Protectia Minorilor</h2>
                        <p className="text-neutral-700 mb-4">
                            Serviciile noastre sunt destinate persoanelor de peste 16 ani.
                            Pentru minori, este necesara acordul parintilor/tutorelui legal.
                        </p>
                        <p className="text-neutral-700">
                            Daca descoprim ca am colectat date de la minori fara consimtamant parental,
                            vom sterge aceste date imediat.
                        </p>
                    </section>

                    {/* 9. Modificari */}
                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-neutral-900 mb-6">9. Modificari ale Politicii</h2>
                        <p className="text-neutral-700 mb-4">
                            Putem actualiza periodic aceasta politica. Modificarile vor fi publicate pe site cu data actualizarii.
                        </p>
                        <p className="text-neutral-700">
                            Pentru modificari majore, vei primi notificare prin email sau SMS.
                        </p>
                    </section>

                    {/* Contact */}
                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-neutral-900 mb-6">10. Contact si Intrebari</h2>
                        <div className="bg-orange-50 border border-orange-200 rounded-xl p-6">
                            <p className="text-neutral-700 mb-4 font-semibold">
                                Pentru intrebari despre aceasta politica sau exercitarea drepturilor tale:
                            </p>
                            <ul className="space-y-2 text-neutral-700">
                                <li><strong>Responsabil Protectie Date:</strong> Data Protection Officer</li>
                                <li><strong>Telefon:</strong> 0775 538 021</li>
                            </ul>
                            <p className="text-neutral-700 mt-4 text-sm">
                                De asemenea, poti contacta Autoritatea Nationala de Supraveghere a Prelucrarii
                                Datelor cu Caracter Personal (ANSPDCP) la <a href="https://www.dataprotection.ro" className="text-orange-600 hover:text-orange-700 underline" target="_blank" rel="noopener">www.dataprotection.ro</a>
                            </p>
                        </div>
                    </section>

                </div>

                {/* Bottom CTA */}
                <div className="mt-12 bg-gradient-to-br from-neutral-900 to-neutral-800 rounded-2xl p-8 text-center text-white">
                    <h3 className="text-2xl font-bold mb-4">Datele tale sunt in siguranta</h3>
                    <p className="text-neutral-300 mb-6">
                        Respectam confidentialitatea si protejam datele tale conform celor mai inalte standarde
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/gdpr"
                            className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-xl font-semibold transition-colors"
                        >
                            Citeste despre GDPR
                        </Link>
                        <Link
                            href="/"
                            className="bg-white text-neutral-900 hover:bg-neutral-100 px-8 py-3 rounded-xl font-semibold transition-colors"
                        >
                            Inapoi la pagina principala
                        </Link>
                    </div>
                </div>

            </div>
        </div>
    );
}