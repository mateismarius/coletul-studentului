import React from 'react';
import { Check, Star, Phone, Package, Clock, MapPin } from 'lucide-react';
import ScrollReveal from '@/components/animations/ScrollReveal';
import StaggerContainer from '@/components/animations/StaggerContainer';
import StaggerItem from '@/components/animations/StaggerItem';
import HoverLift from '@/components/animations/HoverLift';

export default function Prices() {
    const packages = [
        {
            name: "Standard",
            price: "15",
            subtitle: "Pentru pachete mici",
            description: "Perfect pentru documente, medicamente si pachete usoare",
            features: [
                "Pachete pana la 2kg",
                "Livrare in 2-3 zile",
                "Asigurare inclusa",
                "SMS cu status",
                "Suport telefonic"
            ],
            popular: false,
            maxWeight: "2kg",
            deliveryTime: "2-3 zile"
        },
        {
            name: "Premium",
            price: "25",
            subtitle: "Cel mai popular",
            description: "Ideal pentru mancare de acasa si pachete medii",
            features: [
                "Pachete pana la 5kg",
                "Livrare in 24-48h",
                "Asigurare extinsa",
                "Urmarire GPS",
                "Suport prioritar",
                "Ambalare gratuita"
            ],
            popular: true,
            maxWeight: "5kg",
            deliveryTime: "24-48h"
        },
        {
            name: "Express",
            price: "35",
            subtitle: "Pentru urgente",
            description: "Transport rapid pentru orice situatie urgenta",
            features: [
                "Pachete pana la 10kg",
                "Livrare in 24h",
                "Asigurare completa",
                "Prioritate maxima",
                "Confirmare telefonica",
                "Livrare weekend"
            ],
            popular: false,
            maxWeight: "10kg",
            deliveryTime: "24h"
        }
    ];

    const routes = [
        { from: "Vaslui", to: "Iasi", price: "15", time: "2-3h" },
        { from: "Buzau", to: "Bucuresti", price: "20", time: "2h" },
        { from: "Bacau", to: "Brasov", price: "25", time: "3-4h" },
        { from: "Vrancea", to: "Bucuresti", price: "18", time: "2h" }
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
                            Tarife fixe, fara costuri ascunse. Plata la livrare sau transfer bancar.
                        </p>
                        <div className="inline-flex items-center space-x-2 bg-orange-100 border border-orange-200 text-orange-700 px-4 py-2 rounded-full text-sm font-medium shadow-sm">
                            <Check className="w-4 h-4" />
                            <span>Primul transport gratuit pentru studenti noi</span>
                        </div>
                    </div>
                </ScrollReveal>

                {/* Pricing Cards */}
                <StaggerContainer className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
                    {packages.map((pkg, index) => (
                        <StaggerItem key={index}>
                            <HoverLift className="h-full">
                                <div className={`relative bg-white rounded-3xl p-8 h-full border-2 transition-all duration-300 ${
                                    pkg.popular
                                        ? 'border-orange-500 shadow-xl shadow-orange-500/10 scale-105'
                                        : 'border-neutral-200 hover:border-orange-300 shadow-lg hover:shadow-xl hover:shadow-orange-500/5'
                                }`}>
                                    {pkg.popular && (
                                        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                                            <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-4 py-2 rounded-full text-sm font-medium flex items-center space-x-1 shadow-lg">
                                                <Star className="w-4 h-4 fill-current" />
                                                <span>Recomandat</span>
                                            </div>
                                        </div>
                                    )}

                                    <div className="text-center mb-8">
                                        <h3 className="text-2xl font-bold text-neutral-900 mb-2">
                                            {pkg.name}
                                        </h3>
                                        <p className="text-neutral-600 mb-4">{pkg.subtitle}</p>

                                        <div className="flex items-baseline justify-center mb-4">
                                            <span className={`text-4xl font-bold ${pkg.popular ? 'text-orange-600' : 'text-neutral-900'}`}>
                                                {pkg.price}
                                            </span>
                                            <span className="text-xl text-neutral-600 ml-1">
                                                lei
                                            </span>
                                        </div>

                                        <div className="flex justify-center space-x-4 mb-4">
                                            <div className="flex items-center space-x-1 text-sm text-neutral-600">
                                                <Package className="w-4 h-4 text-orange-500" />
                                                <span>{pkg.maxWeight}</span>
                                            </div>
                                            <div className="flex items-center space-x-1 text-sm text-neutral-600">
                                                <Clock className="w-4 h-4 text-orange-500" />
                                                <span>{pkg.deliveryTime}</span>
                                            </div>
                                        </div>

                                        <p className="text-neutral-600 text-sm">
                                            {pkg.description}
                                        </p>
                                    </div>

                                    <ul className="space-y-4 mb-8">
                                        {pkg.features.map((feature, idx) => (
                                            <li key={idx} className="flex items-center space-x-3">
                                                <Check className="w-5 h-5 text-green-600 flex-shrink-0" />
                                                <span className="text-neutral-700">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    <a
                                        href={`tel:0742123456`}
                                        className={`w-full py-4 rounded-2xl font-semibold transition-all flex items-center justify-center space-x-2 ${
                                            pkg.popular
                                                ? 'bg-orange-500 hover:bg-orange-600 text-white shadow-lg hover:shadow-xl'
                                                : 'bg-neutral-100 hover:bg-orange-50 text-neutral-900 border border-neutral-200 hover:border-orange-300'
                                        }`}
                                    >
                                        <Phone className="w-4 h-4" />
                                        <span>Comanda acum</span>
                                    </a>
                                </div>
                            </HoverLift>
                        </StaggerItem>
                    ))}
                </StaggerContainer>

                {/* Routes Pricing */}
                <ScrollReveal>
                    <div className="bg-white rounded-3xl p-8 md:p-12 border border-neutral-200 shadow-lg">
                        <h3 className="text-3xl font-bold text-neutral-900 text-center mb-12">
                            Preturi pe rute principale
                        </h3>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {routes.map((route, index) => (
                                <HoverLift key={index}>
                                    <div className="bg-gradient-to-br from-orange-50 to-orange-100 border border-orange-200 rounded-2xl p-6 text-center hover:shadow-lg transition-all">
                                        <div className="flex items-center justify-center space-x-2 mb-4">
                                            <span className="font-semibold text-neutral-900">{route.from}</span>
                                            <MapPin className="w-4 h-4 text-orange-500" />
                                            <span className="font-semibold text-neutral-900">{route.to}</span>
                                        </div>

                                        <div className="text-2xl font-bold text-orange-600 mb-2">
                                            de la {route.price} lei
                                        </div>

                                        <div className="flex items-center justify-center space-x-1 text-sm text-neutral-600">
                                            <Clock className="w-4 h-4" />
                                            <span>~{route.time} transport</span>
                                        </div>
                                    </div>
                                </HoverLift>
                            ))}
                        </div>

                        <div className="mt-12 text-center">
                            <div className="bg-gradient-to-br from-orange-50 to-neutral-50 border border-orange-100 rounded-2xl p-6 inline-block">
                                <h4 className="font-semibold text-neutral-900 mb-4">Informatii importante:</h4>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-neutral-600">
                                    <div className="flex items-center space-x-2">
                                        <Check className="w-4 h-4 text-green-600" />
                                        <span>Asigurare inclusa in pret</span>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <Check className="w-4 h-4 text-green-600" />
                                        <span>Plata la livrare acceptata</span>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <Check className="w-4 h-4 text-green-600" />
                                        <span>Reduceri pentru clienti fideli</span>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <Check className="w-4 h-4 text-green-600" />
                                        <span>Transport gratuit pentru comenzi recurente</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </ScrollReveal>
            </div>
        </section>
    );
}