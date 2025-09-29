import React from 'react';
import { Phone, MessageCircle, Clock, Shield, Heart, ArrowRight, WalletCards } from 'lucide-react';
import ScrollReveal from '@/components/animations/ScrollReveal';
import HoverLift from '@/components/animations/HoverLift';
import FloatingElements from '@/components/animations/FloatingElements';
import StaggerContainer from '@/components/animations/StaggerContainer';
import StaggerItem from '@/components/animations/StaggerItem';

export default function CTA() {
    const urgencyReasons = [
        {
            icon: Clock,
            title: "Transport saptamanal",
            description: "Plecam in fiecare weekend, nu pierde ocazia"
        },
        {
            icon: Shield,
            title: "Locuri limitate",
            description: "Rezerva-ti locul pentru urmatoarul colet"
        },
        {
            icon: Heart,
            title: "Studentii asteapta",
            description: "Copiii tai au nevoie de ce le trimiti"
        }
    ];

    return (
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-neutral-800 to-neutral-900 text-white relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <FloatingElements className="absolute top-10 left-10" intensity={8} duration={8}>
                    <div className="w-20 h-20 bg-orange-500/10 rounded-3xl backdrop-blur-sm" />
                </FloatingElements>
                <FloatingElements className="absolute top-20 right-20" intensity={12} duration={6}>
                    <div className="w-16 h-16 bg-orange-400/15 rounded-2xl backdrop-blur-sm" />
                </FloatingElements>
                <FloatingElements className="absolute bottom-20 left-1/3" intensity={10} duration={7}>
                    <div className="w-12 h-12 bg-white/5 rounded-full backdrop-blur-sm" />
                </FloatingElements>
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Main CTA */}
                <ScrollReveal>
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-6xl font-bold mb-6">
                            Rezerva transportul acum!
                        </h2>
                        <p className="text-xl md:text-2xl text-neutral-300 mb-4 max-w-4xl mx-auto">
                            Nu mai astepta! Suna acum si rezerva-ti locul
                            pentru pachetul tau catre Iasi, Bucuresti sau Brasov.
                        </p>
                        <p className="text-lg text-neutral-400 mb-12 max-w-3xl mx-auto">
                            Suntem disponibili 24/7 pentru rezervari si comenzi speciale.
                            Transport garantat si livrare in aceeasi zi.
                        </p>

                        {/* Action Buttons */}
                        <div className="flex flex-col sm:flex-row justify-center gap-6 mb-16">
                            <HoverLift>
                                <a
                                    href="tel:0775538021"
                                    className="bg-orange-500 hover:bg-orange-600 text-white px-10 py-5 rounded-2xl font-bold text-xl transition-all flex items-center justify-center space-x-3 min-w-[280px] group shadow-2xl hover:shadow-orange-500/25"
                                >
                                    <Phone className="w-6 h-6" />
                                    <span>Suna: 0775 538 021</span>
                                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </a>
                            </HoverLift>

                            <HoverLift>
                                <a
                                    href="https://wa.me/40775538021?text=Buna%20ziua!%20Vreau%20sa%20trimit%20un%20pachet%20pentru%20studentul%20meu."
                                    className="bg-green-600 hover:bg-green-500 text-white px-10 py-5 rounded-2xl font-bold text-xl transition-all flex items-center justify-center space-x-3 min-w-[280px] group shadow-2xl hover:shadow-green-500/25"
                                >
                                    <MessageCircle className="w-6 h-6" />
                                    <span>Scrie pe WhatsApp</span>
                                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </a>
                            </HoverLift>
                        </div>
                    </div>
                </ScrollReveal>

                {/* Urgency Section */}
                <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                    {urgencyReasons.map((reason, index) => (
                        <StaggerItem key={index}>
                            <HoverLift>
                                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center border border-orange-500/20 hover:border-orange-400/30 transition-colors">
                                    <div className="w-12 h-12 bg-orange-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                                        <reason.icon className="w-6 h-6 text-orange-400" />
                                    </div>
                                    <h3 className="text-lg font-bold mb-2">{reason.title}</h3>
                                    <p className="text-neutral-300 text-sm">{reason.description}</p>
                                </div>
                            </HoverLift>
                        </StaggerItem>
                    ))}
                </StaggerContainer>

                {/*/!* Trust Signals *!/*/}
                {/*<FadeIn delay={0.6}>*/}
                {/*    <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10">*/}
                {/*        <div className="text-center mb-8">*/}
                {/*            <h3 className="text-2xl font-bold mb-4">De ce sa ne alegi chiar acum?</h3>*/}
                {/*        </div>*/}

                {/*        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">*/}
                {/*            <div className="text-center">*/}
                {/*                <div className="text-3xl font-bold mb-2 text-orange-400">500+</div>*/}
                {/*                <div className="text-neutral-400 text-sm">Pachete livrate cu succes</div>*/}
                {/*            </div>*/}
                {/*            <div className="text-center">*/}
                {/*                <div className="text-3xl font-bold mb-2 text-orange-400">24h</div>*/}
                {/*                <div className="text-neutral-400 text-sm">Timp mediu de livrare</div>*/}
                {/*            </div>*/}
                {/*            <div className="text-center">*/}
                {/*                <div className="text-3xl font-bold mb-2 text-orange-400">99.8%</div>*/}
                {/*                <div className="text-neutral-400 text-sm">Rata de satisfactie</div>*/}
                {/*            </div>*/}
                {/*            <div className="text-center">*/}
                {/*                <div className="text-3xl font-bold mb-2 text-orange-400">0</div>*/}
                {/*                <div className="text-neutral-400 text-sm">Pachete pierdute</div>*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</FadeIn>*/}

                {/* Final Push */}
                <ScrollReveal>
                    <div className="text-center mt-16">
                        <div className="bg-gradient-to-r from-orange-400 to-orange-500 text-white rounded-2xl p-6 inline-block mb-8 shadow-lg">
                            <div className="flex items-center space-x-2 justify-center">
                                <WalletCards className="w-5 h-5" />
                                <span className="font-bold text-lg">Card de fidelitate: 5 + 1 gratis</span>
                            </div>
                            <p className="text-sm mt-2 opacity-90">La 5 colete trimise primesti o livrare gratis</p>
                        </div>

                        <p className="text-xl text-neutral-300 mb-8">
                            Suna acum si afla detaliile complete despre transport!
                        </p>

                        <div className="text-center">
                            <div className="inline-flex items-center space-x-4 bg-white/10 rounded-2xl px-6 py-4">
                                <Phone className="w-6 h-6 text-orange-400" />
                                <div>
                                    <div className="font-bold text-xl">0775 538 021</div>
                                    <div className="text-neutral-400 text-sm">Disponibili 24/7</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </ScrollReveal>
            </div>
        </section>
    );
}