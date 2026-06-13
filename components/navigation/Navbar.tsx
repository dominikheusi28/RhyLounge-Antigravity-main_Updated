'use client';

import { useEffect, useState } from 'react';
import { Link, usePathname } from '@/i18n/routing';
import Image from 'next/image';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';
import { Menu, X, Phone, Mail } from 'lucide-react';
import { LanguageSwitcher } from '@/components/ui/LanguageSwitcher';
import { useTranslations } from 'next-intl';

export function Navbar() {
    const t = useTranslations('Nav');
    const navLinks = [
        { href: '/', label: t('home') },
        { href: '/angebote', label: t('offers') },
        { href: '/rhylounge', label: t('ship') },
        { href: '/events', label: t('events') },
        { href: '/catering', label: t('catering') },
        { href: '/preise', label: t('pricing') },
        { href: '/kontakt', label: t('contact') },
    ];
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const { scrollY } = useScroll();

    useMotionValueEvent(scrollY, "change", (latest) => {
        setIsScrolled(latest > 50);
    });

    useEffect(() => {
        document.body.style.overflow = isOpen ? 'hidden' : '';
        return () => {
            document.body.style.overflow = '';
        };
    }, [isOpen]);

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-[70] transition-all duration-300 ${isScrolled || isOpen ? 'bg-navy-950/95 backdrop-blur-md border-b border-white/10 shadow-lg' : 'bg-navy-950/35 backdrop-blur-sm'}`}
        >
            {/* Top Bar - Desktop Only */}
            <div
                className={`hidden md:block border-b border-white/10 transition-all duration-300 ${isScrolled ? 'bg-navy-950/50' : 'bg-primary/20 backdrop-blur-sm'
                    }`}
            >
                <div className="container-custom py-2 flex justify-end gap-6 text-sm">
                    <a
                        href="tel:+41798397979"
                        className="flex items-center gap-2 text-white/90 hover:text-white transition-colors"
                    >
                        <Phone className="w-4 h-4" />
                        +41 79 839 79 79
                    </a>
                    <a
                        href="mailto:info@flussbus.ch"
                        className="flex items-center gap-2 text-white/90 hover:text-white transition-colors"
                    >
                        <Mail className="w-4 h-4" />
                        info@flussbus.ch
                    </a>
                </div>
            </div>

            {/* Main Navigation */}
            <nav className="container-custom py-3 md:py-4 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="relative z-[75] shrink-0" onClick={() => setIsOpen(false)}>
                    <div className="relative h-11 w-32 sm:h-12 sm:w-36 md:h-16 md:w-48">
                        <Image
                            src="/logo.svg"
                            alt="RhyLounge by Remo und Lena"
                            fill
                            unoptimized
                            className="object-contain object-left"
                            priority
                        />
                    </div>
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden lg:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href as any}
                            className="text-sm font-medium text-white/90 hover:text-white transition-colors duration-300 hover:opacity-80"
                        >
                            {link.label}
                        </Link>
                    ))}
                </div>

                {/* Desktop CTA */}
                <div className="hidden lg:flex items-center gap-4">
                    <LanguageSwitcher />
                    <Link
                        href="/kontakt"
                        className="btn-primary text-sm"
                    >
                        {t('cta')}
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <div className="lg:hidden flex items-center gap-2 sm:gap-3 relative z-[75]">
                    <LanguageSwitcher className="[&_select]:py-1.5 [&_select]:pl-8 [&_select]:pr-7" />
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="w-10 h-10 inline-flex items-center justify-center text-white transition-colors"
                        aria-label={isOpen ? t('mClose') : t('mOpen')}
                    >
                        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="fixed left-0 top-0 h-[100svh] w-screen bg-navy-950 z-[60] lg:hidden overflow-y-auto overscroll-contain"
                    >
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 20 }}
                            transition={{ duration: 0.3, delay: 0.1 }}
                            className="flex min-h-full flex-col items-center justify-start gap-4 px-6 pb-[max(2rem,env(safe-area-inset-bottom))] pt-24 sm:pt-28"
                        >
                            {navLinks.map((link, index) => (
                                <motion.div
                                    key={link.href}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.3, delay: 0.1 + index * 0.05 }}
                                >
                                    <Link
                                        href={link.href as any}
                                        onClick={() => setIsOpen(false)}
                                        className="text-xl sm:text-2xl font-semibold text-white hover:text-primary-light transition-colors"
                                    >
                                        {link.label}
                                    </Link>
                                </motion.div>
                            ))}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.3, delay: 0.4 }}
                                className="mt-2"
                            >
                                <Link
                                    href="/kontakt"
                                    onClick={() => setIsOpen(false)}
                                    className="btn-primary py-3"
                                >
                                    {t('cta')}
                                </Link>
                            </motion.div>

                            {/* Contact Info in Mobile Menu */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.3, delay: 0.5 }}
                                className="flex flex-col items-center gap-3 mt-4 text-sm sm:text-base text-slate-300"
                            >
                                <a href="tel:+41798397979" className="flex items-center gap-2">
                                    <Phone className="w-4 h-4" />
                                    +41 79 839 79 79
                                </a>
                                <a href="mailto:info@flussbus.ch" className="flex items-center gap-2">
                                    <Mail className="w-4 h-4" />
                                    info@flussbus.ch
                                </a>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
