// components/CookieConsentBanner.tsx
'use client';

import CookieConsent from "react-cookie-consent";
import Link from "next/link";

export default function CookieConsentBanner() {
    return (
        <CookieConsent
            location="bottom"
            buttonText="Accept toate"
            declineButtonText="Refuz"
            enableDeclineButton
            cookieName="coletul-studentului-cookie-consent"
            style={{
                background: "#262626",
                padding: "20px",
                alignItems: "center"
            }}
            buttonStyle={{
                background: "#f97316",
                color: "#fff",
                fontSize: "14px",
                fontWeight: "600",
                padding: "10px 24px",
                borderRadius: "10px",
                border: "none",
                cursor: "pointer"
            }}
            declineButtonStyle={{
                background: "transparent",
                color: "#fff",
                fontSize: "14px",
                fontWeight: "600",
                padding: "10px 24px",
                borderRadius: "10px",
                border: "1px solid #fff",
                cursor: "pointer"
            }}
            expires={365}
            onAccept={() => {
                // Inițializează Google Analytics doar după accept
                if (typeof window !== 'undefined' && process.env.NEXT_PUBLIC_GA_ID) {
                    window.dataLayer = window.dataLayer || [];
                    window.gtag = function(...args: unknown[]) {
                        window.dataLayer.push(args);
                    };
                    window.gtag('js', new Date());
                    window.gtag('config', process.env.NEXT_PUBLIC_GA_ID, {
                        page_title: document.title,
                        page_location: window.location.href,
                    });
                }
            }}
            onDecline={() => {
                // Șterge cookies Google Analytics dacă refuză
                document.cookie.split(";").forEach((c) => {
                    if (c.trim().startsWith("_ga")) {
                        document.cookie = c.replace(/^ +/, "").replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/");
                    }
                });
            }}
        >
            <span style={{ fontSize: "14px" }}>
                Folosim cookies pentru a îmbunătăți experiența ta pe site.
                Citește{" "}
                <Link
                    href="/politica-cookies"
                    style={{
                        color: "#f97316",
                        textDecoration: "underline"
                    }}
                >
                    politica de cookies
                </Link>
                {" "}pentru mai multe detalii.
            </span>
        </CookieConsent>
    );
}