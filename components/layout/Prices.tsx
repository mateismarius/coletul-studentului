import React from 'react';
import {Check, Package} from 'lucide-react';
import ScrollReveal from '@/components/animations/ScrollReveal';
import HoverLift from '@/components/animations/HoverLift';

export default function Prices() {
    // const packagePrices = [
    //     {
    //         name: "Standard",
    //         price: "15",
    //         subtitle: "Pentru pachete mici",
    //         description: "Perfect pentru documente, medicamente si pachete usoare",
    //         features: [
    //             "Pachete pana la 2kg",
    //             "Livrare in 2-3 zile",
    //             "Asigurare inclusa",
    //             "SMS cu status",
    //             "Suport telefonic"
    //         ],
    //         popular: false,
    //         maxWeight: "2kg",
    //         deliveryTime: "2-3 zile"
    //     },
    //     {
    //         name: "Premium",
    //         price: "25",
    //         subtitle: "Cel mai popular",
    //         description: "Ideal pentru mancare de acasa si pachete medii",
    //         features: [
    //             "Pachete pana la 5kg",
    //             "Livrare in 24-48h",
    //             "Asigurare extinsa",
    //             "Urmarire GPS",
    //             "Suport prioritar",
    //             "Ambalare gratuita"
    //         ],
    //         popular: true,
    //         maxWeight: "5kg",
    //         deliveryTime: "24-48h"
    //     },
    //     {
    //         name: "Express",
    //         price: "35",
    //         subtitle: "Pentru urgente",
    //         description: "Transport rapid pentru orice situatie urgenta",
    //         features: [
    //             "Pachete pana la 10kg",
    //             "Livrare in 24h",
    //             "Asigurare completa",
    //             "Prioritate maxima",
    //             "Confirmare telefonica",
    //             "Livrare weekend"
    //         ],
    //         popular: false,
    //         maxWeight: "10kg",
    //         deliveryTime: "24h"
    //     }
    // ];
    //
    // const transportPrices = [
    //     {
    //         name: "Dus simplu",
    //         price: "45",
    //         subtitle: "O calatorie",
    //         description: "Transport sigur intr-o singura directie cu plecare programata",
    //         features: [
    //             "Transport confortabil",
    //             "Plecare la ora stabilita",
    //             "Ridicare de la adresa",
    //             "Bagaj inclus (20kg)",
    //             "Asigurare calatori",
    //             "Suport 24/7"
    //         ],
    //         popular: false,
    //         icon: ArrowRightLeft
    //     },
    //     {
    //         name: "Dus-intors",
    //         price: "80",
    //         subtitle: "Weekend/vacanta",
    //         description: "Calatorie completa cu intoarcere programata, perfecta pentru weekend-uri",
    //         features: [
    //             "Transport dus-intors",
    //             "Program flexibil",
    //             "Reducere 15% la intoarcere",
    //             "Bagaj inclus (20kg)",
    //             "Rezervare prioritara",
    //             "Modificari gratuite"
    //         ],
    //         popular: true,
    //         icon: ArrowRightLeft
    //     },
    //     {
    //         name: "Abonament lunar",
    //         price: "300",
    //         subtitle: "4 calatorii/luna",
    //         description: "Solutia economica pentru calatorii regulate intre casa si universitate",
    //         features: [
    //             "4 calatorii dus-intors",
    //             "Economie 30%",
    //             "Program prioritar",
    //             "Rezervare cu 24h inainte",
    //             "Bagaj extins (30kg)",
    //             "Transfer catre alt student"
    //         ],
    //         popular: false,
    //         icon: Users
    //     }
    // ];

    const routePrices = [
        {
            route: "Focsani ↔ Tecuci ↔ Barlad ↔ Vaslui ↔ Iasi",
            distance: "250km",
            durations: { dus: "50lei", dus_intors: "25lei", abonament: "60lei" },
            time: "4-4.5h",
            popular: true
        },
        {
            route: "Focsani ↔ Ramnicu Sarat ↔ Buzau ↔ Bucuresti",
            distance: "200km",
            durations: { dus: "40lei", dus_intors: "20lei", abonament: "50lei" },
            time: "2.5-3h",
            popular: false
        },
        {
            route: "Focsani ↔ Adjud ↔ Onesti ↔ Brasov",
            distance: "230km",
            durations: { dus: "50lei", dus_intors: "25lei", abonament: "60lei" },
            time: "3.5-4h",
            popular: false
        },
    ];

    return (
        <section id="preturi" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-neutral-50 to-orange-50/30">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <ScrollReveal>
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6">
                            Preturi transparente
                        </h2>
                        <p className="text-xl text-neutral-600 max-w-3xl mx-auto mb-8">
                            Tarife fixe pentru serviciile de coletarie, fara costuri ascunse.
                            Plata la livrare sau transfer bancar.
                        </p>
                    </div>
                </ScrollReveal>

                {/* Transport Persoane Prices */}
                <ScrollReveal>
                    <div className="mb-20">
                        {/*<div className="text-center mb-12">*/}
                        {/*    <h3 className="text-3xl font-bold text-neutral-900 mb-4 flex items-center justify-center space-x-2">*/}
                        {/*        <Users className="w-8 h-8 text-orange-500" />*/}
                        {/*        <span>Transport persoane</span>*/}
                        {/*    </h3>*/}
                        {/*    <p className="text-neutral-600">Calatorie confortabila si sigura pentru studenti si parinti</p>*/}
                        {/*</div>*/}

                        {/*<StaggerContainer className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">*/}
                        {/*    {transportPrices.map((pkg, index) => (*/}
                        {/*        <StaggerItem key={index}>*/}
                        {/*            <HoverLift className="h-full">*/}
                        {/*                <div className={`relative bg-white rounded-3xl p-8 h-full border-2 transition-all duration-300 ${*/}
                        {/*                    pkg.popular*/}
                        {/*                        ? 'border-orange-500 shadow-xl shadow-orange-500/10 scale-105'*/}
                        {/*                        : 'border-neutral-200 hover:border-orange-300 shadow-lg hover:shadow-xl hover:shadow-orange-500/5'*/}
                        {/*                }`}>*/}
                        {/*                    {pkg.popular && (*/}
                        {/*                        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">*/}
                        {/*                            <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-4 py-2 rounded-full text-sm font-medium flex items-center space-x-1 shadow-lg">*/}
                        {/*                                <Star className="w-4 h-4 fill-current" />*/}
                        {/*                                <span>Recomandat</span>*/}
                        {/*                            </div>*/}
                        {/*                        </div>*/}
                        {/*                    )}*/}

                        {/*                    <div className="text-center mb-8">*/}
                        {/*                        <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mx-auto mb-4">*/}
                        {/*                            <pkg.icon className="w-6 h-6 text-orange-600" />*/}
                        {/*                        </div>*/}
                        {/*                        <h3 className="text-2xl font-bold text-neutral-900 mb-2">*/}
                        {/*                            {pkg.name}*/}
                        {/*                        </h3>*/}
                        {/*                        <p className="text-neutral-600 mb-4">{pkg.subtitle}</p>*/}

                        {/*                        <div className="flex items-baseline justify-center mb-4">*/}
                        {/*                            <span className={`text-4xl font-bold ${pkg.popular ? 'text-orange-600' : 'text-neutral-900'}`}>*/}
                        {/*                                {pkg.price}*/}
                        {/*                            </span>*/}
                        {/*                            <span className="text-xl text-neutral-600 ml-1">*/}
                        {/*                                lei*/}
                        {/*                            </span>*/}
                        {/*                        </div>*/}

                        {/*                        <p className="text-neutral-600 text-sm">*/}
                        {/*                            {pkg.description}*/}
                        {/*                        </p>*/}
                        {/*                    </div>*/}

                        {/*                    <ul className="space-y-4 mb-8">*/}
                        {/*                        {pkg.features.map((feature, idx) => (*/}
                        {/*                            <li key={idx} className="flex items-center space-x-3">*/}
                        {/*                                <Check className="w-5 h-5 text-green-600 flex-shrink-0" />*/}
                        {/*                                <span className="text-neutral-700">{feature}</span>*/}
                        {/*                            </li>*/}
                        {/*                        ))}*/}
                        {/*                    </ul>*/}

                        {/*                    <a*/}
                        {/*                        href="tel:0742123456"*/}
                        {/*                        className={`w-full py-4 rounded-2xl font-semibold transition-all flex items-center justify-center space-x-2 ${*/}
                        {/*                            pkg.popular*/}
                        {/*                                ? 'bg-orange-500 hover:bg-orange-600 text-white shadow-lg hover:shadow-xl'*/}
                        {/*                                : 'bg-neutral-100 hover:bg-orange-50 text-neutral-900 border border-neutral-200 hover:border-orange-300'*/}
                        {/*                        }`}*/}
                        {/*                    >*/}
                        {/*                        <Phone className="w-4 h-4" />*/}
                        {/*                        <span>Rezerva acum</span>*/}
                        {/*                    </a>*/}
                        {/*                </div>*/}
                        {/*            </HoverLift>*/}
                        {/*        </StaggerItem>*/}
                        {/*    ))}*/}
                        {/*</StaggerContainer>*/}

                        {/* Route Specific Prices */}
                        <div className="bg-white rounded-3xl p-8 border border-neutral-200 shadow-lg">
                                <h5 className="text-3xl font-bold text-neutral-900 mb-4 flex items-center justify-center space-x-2">
                                    <Package className="w-8 h-8 text-orange-500" />
                                    <span>Transport pachete</span>
                                </h5>

                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                                {routePrices.map((route, index) => (
                                    <HoverLift key={index}>
                                        <div className={`rounded-2xl p-6 transition-all border-2 ${
                                            route.popular
                                                ? 'bg-gradient-to-br from-orange-50 to-orange-100 border-orange-200 shadow-md'
                                                : 'bg-gradient-to-br from-neutral-50 to-neutral-100 border-neutral-200'
                                        }`}>
                                            <div className="flex items-center justify-between mb-4">
                                                <div>
                                                    <h5 className="font-bold text-neutral-900">{route.route}</h5>
                                                    <p className="text-sm text-neutral-600">{route.distance} • ~{route.time}</p>
                                                </div>
                                                {route.popular && (
                                                    <span className="bg-orange-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                                                        Popular
                                                    </span>
                                                )}
                                            </div>
                                            <div className="grid grid-cols-3 gap-2 text-center text-sm">
                                                <div className="bg-white rounded-lg p-3 border border-orange-100">
                                                    <div className="font-semibold text-orange-600">{route.durations.dus}</div>
                                                    <div className="text-neutral-600">Tur</div>
                                                </div>
                                                <div className="bg-white rounded-lg p-3 border border-orange-100">
                                                    <div className="font-semibold text-orange-600">{route.durations.dus_intors}</div>
                                                    <div className="text-neutral-600">Retur</div>
                                                </div>
                                                <div className="bg-white rounded-lg p-3 border border-orange-100">
                                                    <div className="font-semibold text-orange-600">{route.durations.abonament}</div>
                                                    <div className="text-neutral-600">Tur-retur</div>
                                                </div>
                                            </div>
                                        </div>
                                    </HoverLift>
                                ))}
                            </div>
                        </div>
                    </div>
                </ScrollReveal>

                {/*/!* Package Prices *!/*/}
                {/*<ScrollReveal>*/}
                {/*    <div className="mb-20">*/}
                {/*        <div className="text-center mb-12">*/}
                {/*            <h3 className="text-3xl font-bold text-neutral-900 mb-4 flex items-center justify-center space-x-2">*/}
                {/*                <Package className="w-8 h-8 text-orange-500" />*/}
                {/*                <span>Transport pachete</span>*/}
                {/*            </h3>*/}
                {/*            <p className="text-neutral-600">Livrare rapida si sigura pentru orice tip de colet</p>*/}
                {/*        </div>*/}

                {/*        <StaggerContainer className="grid grid-cols-1 lg:grid-cols-3 gap-8">*/}
                {/*            {packagePrices.map((pkg, index) => (*/}
                {/*                <StaggerItem key={index}>*/}
                {/*                    <HoverLift className="h-full">*/}
                {/*                        <div className={`relative bg-white rounded-3xl p-8 h-full border-2 transition-all duration-300 ${*/}
                {/*                            pkg.popular*/}
                {/*                                ? 'border-orange-500 shadow-xl shadow-orange-500/10 scale-105'*/}
                {/*                                : 'border-neutral-200 hover:border-orange-300 shadow-lg hover:shadow-xl hover:shadow-orange-500/5'*/}
                {/*                        }`}>*/}
                {/*                            {pkg.popular && (*/}
                {/*                                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">*/}
                {/*                                    <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-4 py-2 rounded-full text-sm font-medium flex items-center space-x-1 shadow-lg">*/}
                {/*                                        <Star className="w-4 h-4 fill-current" />*/}
                {/*                                        <span>Recomandat</span>*/}
                {/*                                    </div>*/}
                {/*                                </div>*/}
                {/*                            )}*/}

                {/*                            <div className="text-center mb-8">*/}
                {/*                                <h3 className="text-2xl font-bold text-neutral-900 mb-2">*/}
                {/*                                    {pkg.name}*/}
                {/*                                </h3>*/}
                {/*                                <p className="text-neutral-600 mb-4">{pkg.subtitle}</p>*/}

                {/*                                <div className="flex items-baseline justify-center mb-4">*/}
                {/*                                    <span className={`text-4xl font-bold ${pkg.popular ? 'text-orange-600' : 'text-neutral-900'}`}>*/}
                {/*                                        {pkg.price}*/}
                {/*                                    </span>*/}
                {/*                                    <span className="text-xl text-neutral-600 ml-1">*/}
                {/*                                        lei*/}
                {/*                                    </span>*/}
                {/*                                </div>*/}

                {/*                                <div className="flex justify-center space-x-4 mb-4">*/}
                {/*                                    <div className="flex items-center space-x-1 text-sm text-neutral-600">*/}
                {/*                                        <Package className="w-4 h-4 text-orange-500" />*/}
                {/*                                        <span>{pkg.maxWeight}</span>*/}
                {/*                                    </div>*/}
                {/*                                    <div className="flex items-center space-x-1 text-sm text-neutral-600">*/}
                {/*                                        <Clock className="w-4 h-4 text-orange-500" />*/}
                {/*                                        <span>{pkg.deliveryTime}</span>*/}
                {/*                                    </div>*/}
                {/*                                </div>*/}

                {/*                                <p className="text-neutral-600 text-sm">*/}
                {/*                                    {pkg.description}*/}
                {/*                                </p>*/}
                {/*                            </div>*/}

                {/*                            <ul className="space-y-4 mb-8">*/}
                {/*                                {pkg.features.map((feature, idx) => (*/}
                {/*                                    <li key={idx} className="flex items-center space-x-3">*/}
                {/*                                        <Check className="w-5 h-5 text-green-600 flex-shrink-0" />*/}
                {/*                                        <span className="text-neutral-700">{feature}</span>*/}
                {/*                                    </li>*/}
                {/*                                ))}*/}
                {/*                            </ul>*/}

                {/*                            <a*/}
                {/*                                href="tel:0742123456"*/}
                {/*                                className={`w-full py-4 rounded-2xl font-semibold transition-all flex items-center justify-center space-x-2 ${*/}
                {/*                                    pkg.popular*/}
                {/*                                        ? 'bg-orange-500 hover:bg-orange-600 text-white shadow-lg hover:shadow-xl'*/}
                {/*                                        : 'bg-neutral-100 hover:bg-orange-50 text-neutral-900 border border-neutral-200 hover:border-orange-300'*/}
                {/*                                }`}*/}
                {/*                            >*/}
                {/*                                <Phone className="w-4 h-4" />*/}
                {/*                                <span>Comanda acum</span>*/}
                {/*                            </a>*/}
                {/*                        </div>*/}
                {/*                    </HoverLift>*/}
                {/*                </StaggerItem>*/}
                {/*            ))}*/}
                {/*        </StaggerContainer>*/}
                {/*    </div>*/}
                {/*</ScrollReveal>*/}

                {/* Final Info */}
                <ScrollReveal>
                    <div className="bg-gradient-to-br from-orange-50 to-neutral-50 border border-orange-100 rounded-3xl p-8 text-center">
                        <h4 className="font-bold text-neutral-900 mb-6 text-xl">Informatii importante</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-sm text-neutral-600">
                            <div className="flex items-center justify-center space-x-2">
                                <Check className="w-4 h-4 text-green-600" />
                                <span>Asigurare inclusa</span>
                            </div>
                            <div className="flex items-center justify-center space-x-2">
                                <Check className="w-4 h-4 text-green-600" />
                                <span>Plata numerar sau transfer bancar</span>
                            </div>
                            <div className="flex items-center justify-center space-x-2">
                                <Check className="w-4 h-4 text-green-600" />
                                <span>Program flexibil</span>
                            </div>
                            <div className="flex items-center justify-center space-x-2">
                                <Check className="w-4 h-4 text-green-600" />
                                <span>Rezervari 24/7</span>
                            </div>
                        </div>
                    </div>
                </ScrollReveal>
            </div>
        </section>
    );
}