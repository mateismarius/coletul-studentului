import Image from "next/image";
import Header from "@/components/layout/Header";
import Hero from "@/components/layout/Hero";
import Services from "@/components/layout/Services";
import Prices from "@/components/layout/Prices";
import CTA from "@/components/layout/CTA";
import FAQ from "@/components/layout/FAQ";
import Footer from "@/components/layout/Footer";

// Import micro-componenta client pentru mobile menu
import MobileMenuToggle from '@/components/interactive/MobileMenuToggle';

export default function Home() {
  return (
      <div className="bg-white text-zinc-900 antialiased">
          {/* Header - Server Component (SEO perfect) */}
          <Header/>

          {/* Hero Section - Păstrat cu animații pentru impact vizual */}
          <Hero/>

          {/* Services Section - Server Component */}
          <Services/>

          {/* Prices Section - Server Component */}
          <Prices/>

          {/* CTA Section - Server Component */}
          <CTA/>

          {/* FAQ Section - Acum HTML nativ (SEO maxim) */}
          <FAQ/>

          {/* Footer - Server Component */}
          <Footer/>
      </div>
  );
}
