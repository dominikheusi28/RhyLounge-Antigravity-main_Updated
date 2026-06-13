'use client';

import {useLocale} from 'next-intl';

const content = {
    de: {
        title: 'Impressum',
        intro: 'Angaben gemäss Schweizer Recht. Bitte vor der Live-Schaltung mit den finalen Firmendaten prüfen.',
        sections: [
            ['Anbieter', 'RhyLounge, Schifflande, 4001 Basel, Schweiz'],
            ['Kontakt', 'Telefon: +41 79 839 79 79 | E-Mail: info@flussbus.ch'],
            ['Verantwortlich für den Inhalt', 'RhyLounge'],
        ],
    },
    en: {
        title: 'Imprint',
        intro: 'Information according to Swiss law. Please verify the final company details before launch.',
        sections: [
            ['Provider', 'RhyLounge, Schifflande, 4001 Basel, Switzerland'],
            ['Contact', 'Phone: +41 79 839 79 79 | Email: info@flussbus.ch'],
            ['Responsible for content', 'RhyLounge'],
        ],
    },
    fr: {
        title: 'Mentions legales',
        intro: 'Informations selon le droit suisse. Veuillez verifier les donnees finales avant la mise en ligne.',
        sections: [
            ['Prestataire', 'RhyLounge, Schifflande, 4001 Basel, Suisse'],
            ['Contact', 'Telephone: +41 79 839 79 79 | E-mail: info@flussbus.ch'],
            ['Responsable du contenu', 'RhyLounge'],
        ],
    },
};

export default function ImpressumPage() {
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
