import { Link } from '@/i18n/routing';
import Image from 'next/image';
import { Phone, Mail, MapPin, Instagram, Music2 } from 'lucide-react';
import { useTranslations } from 'next-intl';

export function Footer() {
    const t = useTranslations('Footer');
    const n = useTranslations('Nav');
    const instagramUrl = process.env.NEXT_PUBLIC_INSTAGRAM_URL || 'https://www.instagram.com/rhylounge_eventschiff/';
    const tiktokUrl = process.env.NEXT_PUBLIC_TIKTOK_URL || 'https://www.tiktok.com/@flussbus?is_from_webapp=1&sender_device=pc';

    const footerLinks = {
        angebote: [
            { label: n('offers'), href: '/angebote' }, // Unified link routing
        ],
        info: [
            { label: n('ship'), href: '/rhylounge' },
            { label: n('events'), href: '/events' },
            { label: n('catering'), href: '/catering' },
            { label: n('pricing'), href: '/preise' },
        ],
        legal: [
            { label: t('impressum'), href: '/impressum' },
            { label: t('datenschutz'), href: '/datenschutz' },
            { label: t('agb'), href: '/agb' },
        ],
    };

    return (
        <footer className="bg-gray-900 text-white">
            {/* Main Footer */}
            <div className="container-custom py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {/* Brand Column */}
                    <div className="lg:col-span-1">
                        <Link href="/" className="inline-block relative h-24 w-64 mb-6">
                            <Image
                                src="/logo.svg"
                                alt="RhyLounge Logo"
                                fill
                                unoptimized
                                className="object-contain object-left"
                            />
                        </Link>
                        <p className="text-gray-400 mb-6">
                            {t('desc')}
                        </p>
                        {/* Social Links */}
                        <div className="flex gap-4">
                            <a
                                href={instagramUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-lg bg-white/10 hover:bg-primary transition-colors flex items-center justify-center"
                                aria-label="Instagram"
                            >
                                <Instagram className="w-5 h-5" />
                            </a>
                            <a
                                href={tiktokUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-lg bg-white/10 hover:bg-primary transition-colors flex items-center justify-center"
                                aria-label="TikTok"
                            >
                                <Music2 className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    {/* Angebote */}
                    <div>
                        <h4 className="text-lg font-semibold mb-6">{t('t1')}</h4>
                        <ul className="space-y-3">
                            {footerLinks.angebote.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="text-gray-400 hover:text-white transition-colors"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Info */}
                    <div>
                        <h4 className="text-lg font-semibold mb-6">{t('t2')}</h4>
                        <ul className="space-y-3">
                            {footerLinks.info.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="text-gray-400 hover:text-white transition-colors"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-lg font-semibold mb-6">{t('t3')}</h4>
                        <ul className="space-y-4">
                            <li>
                                <a
                                    href="tel:+41798397979"
                                    className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors"
                                >
                                    <Phone className="w-5 h-5 text-primary-light" />
                                    +41 79 839 79 79
                                </a>
                            </li>
                            <li>
                                <a
                                    href="mailto:info@flussbus.ch"
                                    className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors"
                                >
                                    <Mail className="w-5 h-5 text-primary-light" />
                                    info@flussbus.ch
                                </a>
                            </li>
                            <li className="flex items-start gap-3 text-gray-400">
                                <MapPin className="w-5 h-5 text-primary-light shrink-0 mt-0.5" />
                                <span>
                                    Flexible Anlegestelle<br />
                                    Basel Rhein, Schweiz
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-white/10">
                <div className="container-custom py-6 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-gray-500 text-sm">
                        © {new Date().getFullYear()} RhyLounge. {t('rights')}
                    </p>
                    <div className="flex gap-6">
                        {footerLinks.legal.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="text-gray-500 hover:text-white text-sm transition-colors"
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
}
