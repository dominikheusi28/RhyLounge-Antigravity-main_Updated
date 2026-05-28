import type { Metadata } from 'next';
import '../globals.css';
import { Navbar } from '@/components/navigation/Navbar';
import { Footer } from '@/components/sections/Footer';
import { MobileStickyCTA } from '@/components/ui/MobileStickyCTA';

export const metadata: Metadata = {
    title: 'RhyLounge | Unvergessliche Bootsfahrten auf dem Basler Rhein',
    description: 'Private Bootsfahrten mit Apéro, Gelächter und unvergesslichen Momenten auf dem Basler Rhein. Für bis zu 12 Gäste – perfekt für Firmevents, Geburtstage und besondere Anlässe.',
    keywords: 'Bootsfahrt Basel, Rhein, private Bootstour, Apéro, Firmenevent, RhyLounge, Flussbus',
    openGraph: {
        title: 'RhyLounge | Unvergessliche Bootsfahrten auf dem Basler Rhein',
        description: 'Private Bootsfahrten mit Apéro, Gelächter und unvergesslichen Momenten.',
        type: 'website',
        locale: 'de_CH',
    },
    icons: {
        icon: '/icon.png',
    },
};

import {NextIntlClientProvider} from 'next-intl';
import {getMessages, setRequestLocale} from 'next-intl/server';
import {notFound} from 'next/navigation';
import {routing} from '@/i18n/routing';

export function generateStaticParams() {
    return routing.locales.map((locale) => ({locale}));
}

export default async function RootLayout({
    children,
    params
}: {
    children: React.ReactNode;
    params: Promise<{locale: string}>;
}) {
    const {locale} = await params;

    // Validate that the incoming `locale` parameter is valid
    if (!routing.locales.includes(locale as any)) {
        notFound();
    }

    setRequestLocale(locale);
 
    // Provide all messages to the client
    const messages = await getMessages();

    return (
        <html lang={locale} className="scroll-smooth">
            <body className="min-h-screen flex flex-col">
                <NextIntlClientProvider messages={messages}>
                    <Navbar />
                    <main className="flex-1">{children}</main>
                    <Footer />
                    <MobileStickyCTA />
                </NextIntlClientProvider>
            </body>
        </html>
    );
}
