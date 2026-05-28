'use client';

import {useLocale} from 'next-intl';

const content = {
    de: {
        title: 'Datenschutz',
        intro: 'Diese Seite beschreibt die grundlegende Verarbeitung von Kontaktdaten. Bitte vor der Live-Schaltung rechtlich pr?fen lassen.',
        sections: [
            ['Kontaktformular', 'Wenn Sie uns eine Anfrage senden, verwenden wir Ihre Angaben zur Bearbeitung der Anfrage und zur Kontaktaufnahme.'],
            ['Serverdaten', 'Beim Besuch der Website k?nnen technische Zugriffsdaten wie IP-Adresse, Zeitpunkt und Browserinformationen verarbeitet werden.'],
            ['Ihre Rechte', 'Sie k?nnen Auskunft, Berichtigung oder L?schung Ihrer personenbezogenen Daten verlangen, soweit keine gesetzlichen Pflichten entgegenstehen.'],
            ['Kontakt', 'Bei Datenschutzfragen erreichen Sie uns unter info@flussbus.ch.'],
        ],
    },
    en: {
        title: 'Privacy Policy',
        intro: 'This page describes basic handling of contact data. Please have it legally reviewed before launch.',
        sections: [
            ['Contact form', 'When you send an enquiry, we use your details to process the enquiry and contact you.'],
            ['Server data', 'Technical access data such as IP address, time of access and browser information may be processed when visiting the website.'],
            ['Your rights', 'You may request access, correction or deletion of your personal data unless legal obligations prevent this.'],
            ['Contact', 'For privacy questions, contact us at info@flussbus.ch.'],
        ],
    },
    fr: {
        title: 'Politique de confidentialite',
        intro: 'Cette page decrit le traitement de base des donnees de contact. Veuillez la faire verifier juridiquement avant publication.',
        sections: [
            ['Formulaire de contact', 'Lorsque vous envoyez une demande, nous utilisons vos donnees pour traiter la demande et vous contacter.'],
            ['Donnees serveur', 'Des donnees techniques comme l adresse IP, l heure de consultation et les informations du navigateur peuvent etre traitees.'],
            ['Vos droits', 'Vous pouvez demander l acces, la correction ou la suppression de vos donnees personnelles, sauf obligations legales contraires.'],
            ['Contact', 'Pour toute question relative a la confidentialite, contactez info@flussbus.ch.'],
        ],
    },
};

export default function DatenschutzPage() {
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
