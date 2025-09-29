import React from 'react';
import { Metadata } from 'next';
import { ArrowLeft, FileText, AlertCircle } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Termeni si Conditii - Coletul Studentului | Transport  Colete Studenti',
    description: 'Termeni si conditii de utilizare a serviciilor Coletul Studentului pentru transport persoane si coletarie studenti din Vaslui, Vrancea, Buzau, Bacau catre Iasi, Bucuresti, Brasov.',
    robots: 'index, follow',
};

export default function TermsAndConditions() {
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
                            <FileText className="w-8 h-8 text-white" />
                        </div>
                        <div>
                            <h1 className="text-4xl md:text-5xl font-bold">Termeni si Conditii</h1>
                            <p className="text-neutral-300 mt-2">Actualizat: {lastUpdated}</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Content */}
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

                {/* Notice */}
                <div className="bg-orange-50 border border-orange-200 rounded-2xl p-6 mb-12">
                    <div className="flex items-start space-x-4">
                        <AlertCircle className="w-6 h-6 text-orange-600 flex-shrink-0 mt-1" />
                        <div>
                            <h3 className="font-semibold text-neutral-900 mb-2">Informatie importanta</h3>
                            <p className="text-neutral-700 text-sm">
                                Prin utilizarea serviciilor Coletul Studentului (transport persoane si coletarie),
                                sunteti de acord cu termenii si conditiile prezentate mai jos.
                                Va rugam sa cititi cu atentie acest document inainte de a utiliza serviciile noastre.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Sections */}
                <div className="prose prose-neutral max-w-none">

                    {/* 1. Definitii */}
                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-neutral-900 mb-6">1. Definitii si Interpretare</h2>
                        <div className="bg-neutral-50 rounded-xl p-6 space-y-4">
                            <div>
                                <h3 className="font-semibold text-neutral-900 mb-2">1.1 Definitii</h3>
                                <ul className="space-y-2 text-neutral-700">
                                    <li><strong>Coletul Studentului / Companie / Noi:</strong> se refera la serviciul de transport persoane si coletarie pentru studenti</li>
                                    <li><strong>Client / Utilizator / Dumneavoastra:</strong> persoana fizica sau juridica care utilizeaza serviciile noastre</li>
                                    <li><strong>Servicii:</strong> servicii de coletarie oferite de Coletul Studentului</li>
                                    <li><strong>Coletarie:</strong> serviciu de transport pachete, mancare de acasa, medicamente si alte bunuri</li>
                                    <li><strong>Colet:</strong> pachet, obiect sau bunuri trimise prin serviciul de coletarie</li>
                                    <li><strong>Student:</strong> persoana inmatriculata la o institutie de invatamant superior</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    {/* 2. Servicii oferite */}
                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-neutral-900 mb-6">2. Servicii Oferite</h2>

                        <h3 className="text-xl font-semibold text-neutral-900 mb-4">2.1 Coletarie</h3>
                        <p className="text-neutral-700 mb-4">
                            Serviciul de coletarie include transportul urmatoarelor tipuri de bunuri:
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-neutral-700 mb-6">
                            <li>Pachete generale (documente, cadouri, echipamente)</li>
                            <li>Mancare de acasa (preparate traditionale, conserve, dulciuri)</li>
                            <li>Medicamente si produse farmaceutice</li>
                            <li>Carti, manuale si materiale didactice</li>
                            <li>Haine si incaltaminte</li>
                            <li>Produse alimentare ambalate</li>
                        </ul>

                        <h3 className="text-xl font-semibold text-neutral-900 mb-4">2.2 Limitari</h3>
                        <p className="text-neutral-700 mb-4">
                            NU transportam:
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-neutral-700">
                            <li>Substante periculoase, inflamabile sau explozive</li>
                            <li>Arme, munitie sau obiecte contondente</li>
                            <li>Substante ilegale sau interzise de lege</li>
                            <li>Animale vii (cu exceptia animalelor de companie, cu acordul prealabil)</li>
                            <li>Bunuri perisabile fara ambalaj corespunzator</li>
                            <li>Obiecte de valoare peste 5000 RON fara asigurare suplimentara</li>
                        </ul>
                    </section>

                    {/* 3. Rezervari si Comenzi */}
                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-neutral-900 mb-6">3. Rezervari si Comenzi</h2>

                        <h3 className="text-xl font-semibold text-neutral-900 mb-4">3.1 Comenzi Coletarie</h3>
                        <ul className="list-disc list-inside space-y-2 text-neutral-700 mb-6">
                            <li>Comenzile se fac telefonic sau WhatsApp</li>
                            <li>Specificati corect adresa de ridicare si livrare</li>
                            <li>Declarati corect continutul si greutatea coletului</li>
                            <li>Ambalati corespunzator pentru transport sigur</li>
                            <li>Pentru produse perisabile, folositi ambalaj termoizolant</li>
                        </ul>

                        <h3 className="text-xl font-semibold text-neutral-900 mb-4">3.2 Anulare si Modificare</h3>
                        <ul className="list-disc list-inside space-y-2 text-neutral-700">
                            <li>Anulare gratuita cu minim 12 ore inainte de plecare</li>
                            <li>Anulare sub 12 ore: taxa 50% din valoarea serviciului</li>
                            <li>Neprezentare fara anulare: taxa 100%</li>
                            <li>Modificari de program cu minim 24 ore inainte - gratuit</li>
                            <li>Abonamentele pot fi transferate catre alt student</li>
                        </ul>
                    </section>

                    {/* 4. Tarife si Plata */}
                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-neutral-900 mb-6">4. Tarife si Modalitati de Plata</h2>

                        <h3 className="text-xl font-semibold text-neutral-900 mb-4">4.1 Structura Tarifelor</h3>
                        <p className="text-neutral-700 mb-4">
                            Tarifele sunt afisate transparent pe site si includ:
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-neutral-700 mb-6">
                            <li>Costul transportului pe distanta specificata</li>
                            <li>Asigurare de baza (RCA pentru transport persoane, asigurare colete)</li>
                            <li>TVA conform legislatiei in vigoare</li>
                            <li>Servicii de baza (suport telefonic)</li>
                        </ul>

                        <h3 className="text-xl font-semibold text-neutral-900 mb-4">4.2 Modalitati de Plata</h3>
                        <ul className="list-disc list-inside space-y-2 text-neutral-700 mb-6">
                            <li>Cash la ridicare (coletarie) sau la plecare (transport persoane)</li>
                            <li>Cash la livrare / destinatie</li>
                            <li>Transfer bancar (cu confirmare inainte de transport)</li>
                            <li>Abonamente - plata in avans obligatorie</li>
                        </ul>

                        <h3 className="text-xl font-semibold text-neutral-900 mb-4">4.3 Taxe Suplimentare</h3>
                        <ul className="list-disc list-inside space-y-2 text-neutral-700">
                            <li>Ridicare/livrare in afara zonelor standard: tarif negociat</li>
                            <li>Asigurare extinsa pentru valori mari: 2% din valoarea declarata</li>
                        </ul>
                    </section>

                    {/* 5. Responsabilitati */}
                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-neutral-900 mb-6">5. Responsabilitati si Obligatii</h2>

                        <h3 className="text-xl font-semibold text-neutral-900 mb-4">5.1 Responsabilitatile Companiei</h3>
                        <ul className="list-disc list-inside space-y-2 text-neutral-700 mb-6">
                            <li>Transportul sigur al persoanelor si coletelor</li>
                            <li>Respectarea programului anuntat (cu o toleranta de +/- 30 minute)</li>
                            <li>Vehicule tehnic revizionate si curate</li>
                            <li>Soferi profesionisti cu permis valid</li>
                            <li>Asigurare RCA si Casco pentru vehicule</li>
                            <li>Manipulare corecta a coletelor</li>
                        </ul>

                        <h3 className="text-xl font-semibold text-neutral-900 mb-4">5.2 Responsabilitatile Clientului</h3>
                        <ul className="list-disc list-inside space-y-2 text-neutral-700 mb-6">
                            <li>Furnizarea de informatii corecte si complete</li>
                            <li>Prezentare la ora stabilita pentru transport persoane</li>
                            <li>Ambalarea corespunzatoare a coletelor</li>
                            <li>Declararea corecta a continutului coletelor</li>
                            <li>Respectarea regulilor de calatorie si comportament civilizat</li>
                            <li>Plata la timp a serviciilor</li>
                            <li>Notificare in caz de anulare sau modificare</li>
                        </ul>

                        <h3 className="text-xl font-semibold text-neutral-900 mb-4">5.3 Limitarea Raspunderii</h3>
                        <p className="text-neutral-700 mb-4">
                            Compania nu isi asuma raspunderea pentru:
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-neutral-700">
                            <li>Intarzieri cauzate de conditii meteo extreme, trafic sau cazuri de forta majora</li>
                            <li>Daune asupra coletelor ambalate necorespunzator</li>
                            <li>Continut nedeclarat sau ilegal din colete</li>
                            <li>Pierderea sau deteriorarea bunurilor de valoare nedeclarate</li>
                            <li>Daune indirecte, costuri de oportunitate sau profit pierdut</li>
                            <li>Bunuri perisabile deteriorate din cauza conditiilor naturale</li>
                        </ul>
                    </section>

                    {/* 6. Asigurari */}
                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-neutral-900 mb-6">6. Asigurari si Despagubiri</h2>

                        <h3 className="text-xl font-semibold text-neutral-900 mb-4">6.1 Asigurare Transport Persoane</h3>
                        <ul className="list-disc list-inside space-y-2 text-neutral-700 mb-6">
                            <li>Asigurare RCA pentru toti pasagerii</li>
                            <li>Asigurare de calatorie inclusa in tarif</li>
                            <li>Acoperire conform legislatiei rutiere in vigoare</li>
                        </ul>

                        <h3 className="text-xl font-semibold text-neutral-900 mb-4">6.2 Asigurare Coletarie</h3>
                        <ul className="list-disc list-inside space-y-2 text-neutral-700 mb-6">
                            <li>Asigurare de baza: pana la 500 RON (inclusa in tarif)</li>
                            <li>Asigurare extinsa: disponibila pentru valori peste 500 RON</li>
                            <li>Cost asigurare extinsa: 2% din valoarea declarata</li>
                            <li>Plata se face in baza valorii declarate si dovedite</li>
                        </ul>

                        <h3 className="text-xl font-semibold text-neutral-900 mb-4">6.3 Procedura de Reclamatie</h3>
                        <ul className="list-disc list-inside space-y-2 text-neutral-700">
                            <li>Reclamatii in termen de 48 ore de la livrare</li>
                            <li>Formulare de reclamatie disponibile la cerere</li>
                            <li>Dovada valorii (facturi, chitante) obligatorie</li>
                            <li>Fotografii ale daunelor necesare</li>
                            <li>Raspuns in maxim 5 zile lucratoare</li>
                            <li>Despagubire in maxim 15 zile de la aprobare</li>
                        </ul>
                    </section>

                    {/* 7. Confidentialitate */}
                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-neutral-900 mb-6">7. Confidentialitate si Protectia Datelor</h2>
                        <p className="text-neutral-700 mb-4">
                            Compania respecta confidentialitatea datelor personale conform GDPR si legislatiei romane.
                            Pentru detalii complete, consultati <Link href="/politica-confidentialitate" className="text-orange-600 hover:text-orange-700 underline">Politica de Confidentialitate</Link>.
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-neutral-700">
                            <li>Colectam doar datele necesare pentru prestarea serviciilor</li>
                            <li>Nu vindem sau inchiriam datele catre terti</li>
                            <li>Securitate maxima a datelor prin criptare</li>
                            <li>Drept de acces, rectificare si stergere a datelor</li>
                        </ul>
                    </section>

                    {/* 8. Forta Majora */}
                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-neutral-900 mb-6">8. Forta Majora</h2>
                        <p className="text-neutral-700 mb-4">
                            Nici una dintre parti nu va fi tinuta raspunzatoare pentru neindeplinirea obligatiilor
                            contractuale daca aceasta se datoreaza unui eveniment de forta majora, inclusiv dar
                            fara a se limita la:
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-neutral-700">
                            <li>Fenomene naturale extreme (inundatii, viscol, cutremure)</li>
                            <li>Razboaie, revolte, terorism</li>
                            <li>Greve generale, pandemii</li>
                            <li>Modificari legislative care impiedica executarea</li>
                            <li>Blocaje ale infrastructurii rutiere</li>
                        </ul>
                    </section>

                    {/* 9. Modificari */}
                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-neutral-900 mb-6">9. Modificari ale Termenilor</h2>
                        <p className="text-neutral-700 mb-4">
                            Coletul Studentului isi rezerva dreptul de a modifica acesti termeni si conditii.
                            Modificarile vor intra in vigoare de la data publicarii pe site.
                            Clientii vor fi notificati prin:
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-neutral-700">
                            <li>Publicare pe website cu data modificarii</li>
                            <li>Notificare prin email pentru clientii cu abonamente</li>
                            <li>Notificare SMS pentru clientii frecventi</li>
                        </ul>
                    </section>

                    {/* 10. Legislatie */}
                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-neutral-900 mb-6">10. Legislatie Aplicabila si Jurisdictie</h2>
                        <p className="text-neutral-700 mb-4">
                            Prezentii termeni si conditii sunt guvernati de legea romana.
                            Orice litigiu care decurge din sau in legatura cu acesti termeni va fi solutionat
                            de instantele competente din Romania.
                        </p>
                        <p className="text-neutral-700">
                            In cazul unor dispute, partile se angajeaza sa incerce rezolvarea amiabila
                            inainte de a apela la instantele de judecata.
                        </p>
                    </section>

                    {/* Contact */}
                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-neutral-900 mb-6">11. Date de Contact</h2>
                        <div className="bg-orange-50 border border-orange-200 rounded-xl p-6">
                            <p className="text-neutral-700 mb-4">
                                Pentru intrebari, clarificari sau reclamatii legate de acesti termeni si conditii,
                                va rugam sa ne contactati:
                            </p>
                            <ul className="space-y-2 text-neutral-700">
                                <li><strong>Telefon:</strong> 0775 538 021</li>
                                <li><strong>WhatsApp:</strong> +40 775 538 021</li>
                                <li><strong>Program:</strong> Luni-Vineri 08:00-22:00, Weekend 09:00-20:00</li>
                            </ul>
                        </div>
                    </section>

                </div>

                {/* Bottom CTA */}
                <div className="mt-12 bg-gradient-to-br from-neutral-900 to-neutral-800 rounded-2xl p-8 text-center text-white">
                    <h3 className="text-2xl font-bold mb-4">Aveti intrebari despre termenii nostri?</h3>
                    <p className="text-neutral-300 mb-6">
                        Echipa noastra este disponibila sa va raspunda la orice intrebare
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href="tel:075538021"
                            className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-xl font-semibold transition-colors inline-flex items-center justify-center space-x-2"
                        >
                            <span>Suna acum</span>
                        </a>
                        <Link
                            href="/"
                            className="bg-white text-neutral-900 hover:bg-neutral-100 px-8 py-3 rounded-xl font-semibold transition-colors inline-flex items-center justify-center space-x-2"
                        >
                            <span>Inapoi la pagina principala</span>
                        </Link>
                    </div>
                </div>

            </div>
        </div>
    );
}