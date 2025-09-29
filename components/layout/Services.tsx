import React from 'react';
import { Package, Heart, Pill, BookOpen, Shirt, Coffee, Clock, Shield } from 'lucide-react';
import ScrollReveal from '@/components/animations/ScrollReveal';
import StaggerContainer from '@/components/animations/StaggerContainer';
import StaggerItem from '@/components/animations/StaggerItem';
import HoverLift from '@/components/animations/HoverLift';

export default function Services() {
    const services = [
        {
            icon: Heart,
            title: "Mancare de acasa",
            description: "Preparate traditionale, conserve, dulciuri si tot ce le face dor de casa",
            color: "from-red-100 to-pink-100",
            iconColor: "text-red-600"
        },
        {
            icon: Package,
            title: "Pachete generale",
            description: "Orice tip de colet, de la documente la echipamente si cadouri",
            color: "from-blue-100 to-cyan-100",
            iconColor: "text-blue-600"
        },
        {
            icon: Pill,
            title: "Medicamente",
            description: "Livrare sigura si rapida de medicamente cu conditii speciale de transport",
            color: "from-green-100 to-emerald-100",
            iconColor: "text-green-600"
        },
        {
            icon: BookOpen,
            title: "Carti si materiale",
            description: "Manual, carti de specialitate si materiale didactice",
            color: "from-purple-100 to-violet-100",
            iconColor: "text-purple-600"
        },
        {
            icon: Shirt,
            title: "Haine si incaltaminte",
            description: "Imbracaminte pentru toate sezoanele, ambalata cu grija",
            color: "from-orange-100 to-amber-100",
            iconColor: "text-orange-600"
        },
        {
            icon: Coffee,
            title: "Produse speciale",
            description: "Cafea, ceaiuri, produse locale si specialitati regionale",
            color: "from-yellow-100 to-orange-100",
            iconColor: "text-yellow-600"
        }
    ];

    const features = [
        {
            icon: Clock,
            title: "Livrare in 24-48h",
            description: "Transport rapid intre judete cu confirmare in timp real",
            color: "from-red-100 to-pink-100",
            iconColor: "text-red-600"
        },
        {
            icon: Shield,
            title: "100% Siguranta",
            description: "Toate pachetele sunt asigurate si manipulate cu grija maxima",
            color: "from-green-100 to-emerald-100",
            iconColor: "text-green-600"
        },
        {
            icon: Package,
            title: "Orice dimensiune",
            description: "De la plicuri mici la pachete mari, acceptam orice colet",
            color: "from-yellow-100 to-orange-100",
            iconColor: "text-yellow-600"
        }
    ];

    return (
        <section id="servicii" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <ScrollReveal>
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-zinc-900 mb-6">
                            Servicii de coletarie
                        </h2>
                        <p className="text-xl text-zinc-600 max-w-3xl mx-auto">
                            Transportam tot ce au nevoie studentii din Vaslui, Vrancea, Buzau si Bacau
                            catre caminele din Iasi, Bucuresti si Brasov
                        </p>
                    </div>
                </ScrollReveal>

                {/* Services Grid */}
                <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
                    {services.map((service, index) => (
                        <StaggerItem key={index}>
                            <HoverLift className="h-full">
                                <div className="bg-white border border-zinc-200 rounded-3xl p-8 h-full hover:shadow-xl transition-shadow duration-300">
                                    <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mb-6`}>
                                        <service.icon className={`w-8 h-8 ${service.iconColor}`} />
                                    </div>
                                    <h3 className="text-xl font-bold text-zinc-900 mb-4">
                                        {service.title}
                                    </h3>
                                    <p className="text-zinc-600 leading-relaxed">
                                        {service.description}
                                    </p>
                                </div>
                            </HoverLift>
                        </StaggerItem>
                    ))}
                </StaggerContainer>

                {/* Features Section */}
                <ScrollReveal>
                    <div className="bg-gradient-to-br from-zinc-50 to-zinc-100 rounded-3xl p-8 md:p-12">
                        <h3 className="text-3xl font-bold text-zinc-900 text-center mb-12">
                            De ce sa ne alegi?
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {features.map((feature, index) => (
                                <HoverLift key={index} className="text-center">
                                    <div className="bg-white rounded-2xl p-6 h-full shadow-sm">
                                        <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                                            <feature.icon className={`w - 6 h-6 ${feature.iconColor} `} />
                                        </div>
                                        <h4 className="text-lg font-bold text-zinc-900 mb-3">
                                            {feature.title}
                                        </h4>
                                        <p className="text-zinc-600 text-sm">
                                            {feature.description}
                                        </p>
                                    </div>
                                </HoverLift>
                            ))}
                        </div>
                    </div>
                </ScrollReveal>

                {/*/!* Coverage Map *!/*/}
                {/*<ScrollReveal>*/}
                {/*    <div className="mt-20 text-center">*/}
                {/*        <h3 className="text-3xl font-bold text-zinc-900 mb-8">*/}
                {/*            Acoperire geografica*/}
                {/*        </h3>*/}
                {/*        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">*/}
                {/*            <div>*/}
                {/*                <h4 className="text-xl font-semibold text-zinc-800 mb-4">Ridicare pachete din:</h4>*/}
                {/*                <div className="grid grid-cols-2 gap-4">*/}
                {/*                    <div className="bg-green-50 rounded-xl p-4">*/}
                {/*                        <div className="font-semibold text-zinc-900">Vaslui</div>*/}
                {/*                        <div className="text-sm text-zinc-600">Zona metropolitana</div>*/}
                {/*                    </div>*/}
                {/*                    <div className="bg-sky-50 rounded-xl p-4">*/}
                {/*                        <div className="font-semibold text-zinc-900">Vrancea</div>*/}
                {/*                        <div className="text-sm text-zinc-600">Focsani si imprejurimi</div>*/}
                {/*                    </div>*/}
                {/*                    <div className="bg-red-50 rounded-xl p-4">*/}
                {/*                        <div className="font-semibold text-zinc-900">Buzau</div>*/}
                {/*                        <div className="text-sm text-zinc-600">Zona metropolitana</div>*/}
                {/*                    </div>*/}
                {/*                    <div className="bg-amber-50 rounded-xl p-4">*/}
                {/*                        <div className="font-semibold text-zinc-900">Bacau</div>*/}
                {/*                        <div className="text-sm text-zinc-600">Municipiul si satele</div>*/}
                {/*                    </div>*/}
                {/*                </div>*/}
                {/*            </div>*/}
                {/*            <div>*/}
                {/*                <h4 className="text-xl font-semibold text-zinc-800 mb-4">Livrare pachete in:</h4>*/}
                {/*                <div className="space-y-4">*/}
                {/*                    <div className="bg-gradient-to-r from-purple-100 to-purple-50 rounded-xl p-4">*/}
                {/*                        <div className="font-semibold text-zinc-900">Iasi</div>*/}
                {/*                        <div className="text-sm text-zinc-600">Camine universitare si adrese private</div>*/}
                {/*                    </div>*/}
                {/*                    <div className="bg-gradient-to-r from-blue-100 to-blue-50 rounded-xl p-4">*/}
                {/*                        <div className="font-semibold text-zinc-900">Bucuresti</div>*/}
                {/*                        <div className="text-sm text-zinc-600">Toate sectoarele si caminele</div>*/}
                {/*                    </div>*/}
                {/*                    <div className="bg-gradient-to-r from-cyan-100 to-cyan-50 rounded-xl p-4">*/}
                {/*                        <div className="font-semibold text-zinc-900">Brasov</div>*/}
                {/*                        <div className="text-sm text-zinc-600">Campus universitar si adrese private</div>*/}
                {/*                    </div>*/}
                {/*                </div>*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</ScrollReveal>*/}
            </div>
        </section>
    );
}