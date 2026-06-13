'use client';

import {useLocale} from 'next-intl';

const content = {
    de: {
        title: 'AGB',
        intro: 'Allgemeine Hinweise zu Buchungen. Bitte vor der Live-Schaltung mit den finalen Geschäftsbedingungen ersetzen oder rechtlich prüfen lassen.',
        sections: [
            ['Anfragen und Buchungen', 'Anfragen sind unverbindlich, bis eine Buchung schriftlich bestaetigt wurde.'],
            ['Leistungen', 'Der genaue Leistungsumfang richtet sich nach der bestaetigten Offerte.'],
            ['Änderungen', 'Wetter, Sicherheit oder behördliche Vorgaben können Anpassungen erforderlich machen.'],
            ['Kontakt', 'Fragen zu Buchungen beantworten wir unter info@flussbus.ch.'],
        ],
    },
    en: {
        title: 'Terms and Conditions',
        intro: 'General booking notes. Please replace or legally review these terms before launch.',
        sections: [
            ['Enquiries and bookings', 'Enquiries are non-binding until a booking has been confirmed in writing.'],
            ['Services', 'The confirmed offer defines the exact scope of services.'],
            ['Changes', 'Weather, safety or official requirements may make adjustments necessary.'],
            ['Contact', 'For booking questions, contact info@flussbus.ch.'],
        ],
    },
    fr: {
        title: 'CGV',
        intro: 'Informations generales sur les reservations. Veuillez les remplacer ou les faire verifier juridiquement avant publication.',
        sections: [
            ['Demandes et reservations', 'Les demandes ne sont pas contraignantes tant qu une reservation n a pas ete confirmee par ecrit.'],
            ['Prestations', 'L offre confirmee definit l etendue exacte des prestations.'],
            ['Modifications', 'La meteo, la securite ou des exigences officielles peuvent rendre des adaptations necessaires.'],
            ['Contact', 'Pour toute question de reservation, contactez info@flussbus.ch.'],
        ],
    },
};

export default function AgbPage() {
    const locale = useLocale() as 'de' | 'en' | 'fr';
    const page = content[locale] ?? content.de;

    return (
        <section className="container-custom pt-36 pb-24">
            <div className="max-w-3xl">
                <h1 className="section-title">{page.title}</h1>
                <p className="section-subtitle mb-10">{page.intro}</p>
                <div className="space-y-6">
                    {page.sections.map(([heading, text]) => (
                        <div key={heading} className="glass-panel rounded-2xl p-6">
                            <h2 className="text-xl font-bold mb-2">{heading}</h2>
                            <p className="text-slate-300">{text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
