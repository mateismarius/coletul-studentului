import React from 'react';
import { MapPin, Clock, Shield, Phone, Building2 } from 'lucide-react';
import SlideUp from '@/components/animations/SlideUp';
import FadeIn from '@/components/animations/FadeIn';
import StaggerContainer from '@/components/animations/StaggerContainer';
import StaggerItem from '@/components/animations/StaggerItem';
import HoverLift from '@/components/animations/HoverLift';
import FloatingElements from '@/components/animations/FloatingElements';

export default function Hero() {
    return (
        <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-neutral-50 to-white overflow-hidden relative">
            {/* Background floating elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <FloatingElements className="absolute top-20 left-10" intensity={15} duration={6}>
                    <div className="w-16 h-16 bg-neutral-100/50 rounded-2xl backdrop-blur-sm" />
                </FloatingElements>
                <FloatingElements className="absolute top-40 right-20" intensity={12} duration={5}>
                    <div className="w-12 h-12 bg-orange-100/30 rounded-full backdrop-blur-sm" />
                </FloatingElements>
                <FloatingElements className="absolute bottom-20 left-1/4" intensity={10} duration={7}>
                    <div className="w-8 h-8 bg-orange-200/20 rounded-lg backdrop-blur-sm" />
                </FloatingElements>
            </div>

            <div className="max-w-7xl mx-auto relative">
                <div className="text-center mb-16">
                    <SlideUp delay={0.2}>
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-neutral-900 mb-6 leading-tight">
                            Transport persoane si
                            <span className="block bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
                                coletarie studenti
                            </span>
                        </h1>
                    </SlideUp>

                    <SlideUp delay={0.4}>
                        <p className="text-xl md:text-2xl text-neutral-600 mb-4 max-w-4xl mx-auto">
                            Livrari sigure si rapide din Vaslui, Vrancea, Buzau, Bacau catre Iasi, Bucuresti si Brasov
                        </p>
                    </SlideUp>

                    <SlideUp delay={0.6}>
                        <p className="text-lg text-neutral-500 mb-12 max-w-3xl mx-auto">
                            Livrare pachete, mancare de acasa,
                            medicamente si tot ce au nevoie copiii tai la facultate.
                        </p>
                    </SlideUp>

                    <FadeIn delay={0.8}>
                        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
                            <HoverLift>
                                <a
                                    href="tel:0775538021"
                                    className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-2xl font-semibold text-lg transition-all flex items-center justify-center space-x-3 min-w-[200px] shadow-lg hover:shadow-xl"
                                >
                                    <Phone className="w-5 h-5" />
                                    <span>Suna acum</span>
                                </a>
                            </HoverLift>
                            <HoverLift>
                                <a
                                    href="https://wa.me/40775538021"
                                    className="border-2 border-neutral-300 hover:border-orange-300 text-neutral-700 hover:text-orange-600 px-8 py-4 rounded-2xl font-semibold text-lg transition-all flex items-center justify-center space-x-3 min-w-[200px] bg-white hover:bg-orange-50"
                                >
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.786"/>
                                    </svg>
                                    <span>WhatsApp</span>
                                </a>
                            </HoverLift>
                        </div>
                    </FadeIn>
                </div>

                {/* Stats Section */}
                <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mb-16">
                    <StaggerItem>
                        <HoverLift className="bg-white/80 backdrop-blur-sm border border-neutral-200 rounded-2xl p-6 text-center">
                            <Building2 className="w-8 h-8 text-orange-500 mx-auto mb-3" />
                            <div className="text-2xl font-bold text-neutral-900 mb-1">10</div>
                            <div className="text-sm text-neutral-600">Localitati</div>
                        </HoverLift>
                    </StaggerItem>

                    <StaggerItem>
                        <HoverLift className="bg-white/80 backdrop-blur-sm border border-neutral-200 rounded-2xl p-6 text-center">
                            <MapPin className="w-8 h-8 text-orange-500 mx-auto mb-3" />
                            <div className="text-2xl font-bold text-neutral-900 mb-1">7</div>
                            <div className="text-sm text-neutral-600">Judete acoperite</div>
                        </HoverLift>
                    </StaggerItem>

                    <StaggerItem>
                        <HoverLift className="bg-white/80 backdrop-blur-sm border border-neutral-200 rounded-2xl p-6 text-center">
                            <Clock className="w-8 h-8 text-orange-500 mx-auto mb-3" />
                            <div className="text-2xl font-bold text-neutral-900 mb-1">24h</div>
                            <div className="text-sm text-neutral-600">Livrare rapida</div>
                        </HoverLift>
                    </StaggerItem>

                    <StaggerItem>
                        <HoverLift className="bg-white/80 backdrop-blur-sm border border-neutral-200 rounded-2xl p-6 text-center">
                            <Shield className="w-8 h-8 text-orange-500 mx-auto mb-3" />
                            <div className="text-2xl font-bold text-neutral-900 mb-1">100%</div>
                            <div className="text-sm text-neutral-600">Siguranta</div>
                        </HoverLift>
                    </StaggerItem>
                </StaggerContainer>

                {/* Route Highlights */}
                <FadeIn delay={1.2}>
                    <div className="bg-white/50 backdrop-blur-sm border border-neutral-200 rounded-3xl p-8 text-center">
                        <h3 className="text-2xl font-bold text-neutral-900 mb-4">Rute principale</h3>
                        <div className="flex flex-wrap justify-center items-center gap-4 text-neutral-600">
                            <span className="bg-orange-50 border border-orange-200 text-orange-700 px-4 py-2 rounded-xl font-medium">Focsani → Tecuci → Barlad → Vaslui → Iasi</span>
                            <span className="text-neutral-400">•</span>
                            <span className="bg-orange-50 border border-orange-200 text-orange-700 px-4 py-2 rounded-xl font-medium">Focsani → Ramnicu Sarat → Buzau → Bucuresti</span>
                            <span className="text-neutral-400">•</span>
                            <span className="bg-orange-50 border border-orange-200 text-orange-700 px-4 py-2 rounded-xl font-medium">Focsani → Adjud → Onesti → Brasov</span>

                        </div>
                    </div>
                </FadeIn>
            </div>
        </section>
    );
}