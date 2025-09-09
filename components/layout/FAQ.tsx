'use client'

import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Phone, MessageCircle, HelpCircle } from 'lucide-react';
import ScrollReveal from '@/components/animations/ScrollReveal';
import StaggerContainer from '@/components/animations/StaggerContainer';
import StaggerItem from '@/components/animations/StaggerItem';
import HoverLift from '@/components/animations/HoverLift';

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState(null);

    const faqs = [
        {
            question: "Din ce judete ridicati pachete?",
            answer: "Ridicam pachete din Vaslui, Vrancea (Focsani), Buzau si Bacau. Acoperim atat municipiile cat si localitatile din imprejurimi. Pentru adrese specifice, suna-ne sa confirmi daca ajungem in zona ta."
        },
        {
            question: "In ce orase faceti livrari pentru studenti?",
            answer: "Livram pachete in Iasi, Bucuresti si Brasov, direct la caminele universitare sau la adrese private. Cunoastem toate caminele din aceste orase si avem acces in campusuri."
        },
        {
            question: "Cat dureaza transportul pachetelor?",
            answer: "Transportul standard dureaza 2-3 zile, Premium 24-48 ore, iar Express garantam livrarea in 24 de ore. Timpul depinde de distanta si de ruta. Pentru urgente, avem curse speciale."
        },
        {
            question: "Ce tip de pachete acceptati?",
            answer: "Acceptam orice tip de colet legal: mancare de acasa, haine, carti, medicamente, electronice, cadouri. Nu transportam substante periculoase, lichide inflamabile sau produse interzise de lege."
        },
        {
            question: "Cum platesc transportul?",
            answer: "Poti plati cash la ridicare, cash la livrare, transfer bancar sau card bancar. Pentru clientii fideli oferim si plata in rate sau abonamente lunare cu preturi reduse."
        },
        {
            question: "Sunt pachete asigurate?",
            answer: "Da, toate pachetele sunt asigurate automat. Asigurarea de baza este inclusa in pret, iar pentru valori mari oferim si asigurare extinsa. In cazul unor daune, compensam full valoarea declarata."
        },
        {
            question: "Pot urmari pachetul meu?",
            answer: "Da, primesti SMS cu status-ul pachetului si poti suna oricand sa afli locatia exacta. Pachetele Premium si Express au si urmarire GPS in timp real prin aplicatia noastra."
        },
        {
            question: "Lucrati si in weekend?",
            answer: "Da, lucram si sambata si duminica pentru urgente. Cursele de weekend au un supliment de 5 lei, dar garantam ca pachetul ajunge la destinatie chiar si in zilele libere."
        },
        {
            question: "Ce se intampla daca studentul nu e acasa?",
            answer: "Suntem flexibili! Lasam pachetul la portarul caminului, la un coleg de camera sau programam o noua livrare. Pentru adrese private, incercam de 3 ori sa livram, apoi te contactam."
        },
        {
            question: "Oferiti reduceri pentru transport regulat?",
            answer: "Absolut! Pentru pachete recurente (saptamanal/lunar) oferim reduceri de pana la 30%. Familiile cu mai multi studenti beneficiaza de tarife speciale. Primul transport e gratuit pentru clientii noi."
        },
        {
            question: "Pot trimite mancare proaspata?",
            answer: "Da, avem experienta cu mancarea de acasa. Folosim ambalaje speciale cu gheata pentru produsele perisabile. Mancarurile gatite trebuie sa fie bine ambalate si etichetate cu continutul."
        },
        {
            question: "Ce dimensiuni maxime acceptati?",
            answer: "Acceptam pachete de toate dimensiunile, de la plicuri mici la cutii mari. Pentru obiecte voluminoase (mobila, electronice mari) avem vehicule speciale, iar pretul se calculeaza individual."
        }
    ];

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section id="intrebari" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
            <div className="max-w-4xl mx-auto">
                {/* Header */}
                <ScrollReveal>
                    <div className="text-center mb-16">
                        <div className="w-16 h-16 bg-gradient-to-br from-zinc-100 to-zinc-200 rounded-2xl flex items-center justify-center mx-auto mb-6">
                            <HelpCircle className="w-8 h-8 text-zinc-700" />
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold text-zinc-900 mb-6">
                            Intrebari frecvente
                        </h2>
                        <p className="text-xl text-zinc-600 mb-8">
                            Tot ce trebuie sa stii despre serviciile noastre de coletarie pentru studenti
                        </p>
                        <div className="bg-zinc-50 rounded-2xl p-6 inline-block">
                            <p className="text-zinc-700 mb-4 font-medium">Nu gasesti raspunsul cautat?</p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <a
                                    href="tel:0742123456"
                                    className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-xl font-medium flex items-center space-x-2 hover:bg-zinc-800 transition-colors"
                                >
                                    <Phone className="w-4 h-4" />
                                    <span>0742 123 456</span>
                                </a>
                                <a
                                    href="https://wa.me/40742123456"
                                    className="bg-green-600 text-white px-6 py-3 rounded-xl font-medium flex items-center space-x-2 hover:bg-green-500 transition-colors"
                                >
                                    <MessageCircle className="w-4 h-4" />
                                    <span>WhatsApp</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </ScrollReveal>

                {/* FAQ Items */}
                <StaggerContainer className="space-y-4">
                    {faqs.map((faq, index) => (
                        <StaggerItem key={index}>
                            <HoverLift className="bg-white border border-zinc-200 rounded-2xl overflow-hidden hover:shadow-lg transition-shadow">
                                <button
                                    className="w-full px-6 py-6 text-left focus:outline-none focus:ring-2 focus:ring-zinc-300 focus:ring-inset"
                                    onClick={() => toggleFAQ(index)}
                                >
                                    <div className="flex items-center justify-between">
                                        <h3 className="text-lg font-semibold text-zinc-900 pr-4">
                                            {faq.question}
                                        </h3>
                                        <div className="flex-shrink-0">
                                            {openIndex === index ? (
                                                <ChevronUp className="w-5 h-5 text-zinc-600" />
                                            ) : (
                                                <ChevronDown className="w-5 h-5 text-zinc-600" />
                                            )}
                                        </div>
                                    </div>
                                </button>

                                {openIndex === index && (
                                    <div className="px-6 pb-6">
                                        <div className="pt-4 border-t border-zinc-100">
                                            <p className="text-zinc-600 leading-relaxed">
                                                {faq.answer}
                                            </p>
                                        </div>
                                    </div>
                                )}
                            </HoverLift>
                        </StaggerItem>
                    ))}
                </StaggerContainer>

                {/* Bottom CTA */}
                <ScrollReveal>
                    <div className="mt-16 text-center">
                        <div className="bg-gradient-to-br from-zinc-50 to-zinc-100 rounded-3xl p-8">
                            <h3 className="text-2xl font-bold text-zinc-900 mb-4">
                                Inca ai intrebari?
                            </h3>
                            <p className="text-zinc-600 mb-6 max-w-2xl mx-auto">
                                Echipa noastra este disponibila 24/7 pentru a raspunde la toate intrebarile
                                tale despre transport si pentru a te ajuta sa trimiti pachetul perfect.
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-md mx-auto">
                                <HoverLift>
                                    <a
                                        href="tel:0742123456"
                                        className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-4 rounded-xl font-medium transition-colors flex items-center justify-center space-x-2"
                                    >
                                        <Phone className="w-5 h-5" />
                                        <span>Suna acum</span>
                                    </a>
                                </HoverLift>

                                <HoverLift>
                                    <a
                                        href="https://wa.me/40742123456?text=Buna%20ziua!%20Am%20o%20intrebare%20despre%20serviciile%20de%20coletarie."
                                        className="bg-green-600 text-white border-2 border-zinc-200 hover:border-zinc-300  px-6 py-4 rounded-xl font-medium transition-colors flex items-center justify-center space-x-2"
                                    >
                                        <MessageCircle className="w-5 h-5" />
                                        <span>WhatsApp</span>
                                    </a>
                                </HoverLift>
                            </div>
                        </div>
                    </div>
                </ScrollReveal>
            </div>
        </section>
    );
}