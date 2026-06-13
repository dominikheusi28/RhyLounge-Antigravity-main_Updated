'use client';

import { Link } from '@/i18n/routing';
import { Send } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import { usePathname } from '@/i18n/routing';
import { useTranslations } from 'next-intl';

export function MobileStickyCTA() {
    const [isVisible, setIsVisible] = useState(false);
    const [isBlockingSectionVisible, setIsBlockingSectionVisible] = useState(false);
    const pathname = usePathname();
    const t = useTranslations('Nav');

    useEffect(() => {
        const handleScroll = () => {
            const distanceFromBottom =
                document.documentElement.scrollHeight - (window.scrollY + window.innerHeight);
            setIsVisible(
                window.scrollY > window.innerHeight * 0.8 &&
                distanceFromBottom > window.innerHeight
            );
        };

        handleScroll();
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        const blockingSections = [
            document.getElementById('contact'),
            document.querySelector<HTMLElement>('footer'),
        ].filter((section): section is HTMLElement => Boolean(section));

        if (blockingSections.length === 0) return;

        const visibleSections = new Set<Element>();

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        visibleSections.add(entry.target);
                    } else {
                        visibleSections.delete(entry.target);
                    }
                });
                setIsBlockingSectionVisible(visibleSections.size > 0);
            },
            { rootMargin: '0px 0px 15% 0px', threshold: 0.05 }
        );

        blockingSections.forEach((section) => observer.observe(section));
        return () => observer.disconnect();
    }, [pathname]);

    const shouldShow = isVisible && !isBlockingSectionVisible && !pathname.endsWith('/kontakt');

    return (
        <AnimatePresence>
            {shouldShow && (
                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 100, opacity: 0 }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    className="fixed bottom-0 left-0 right-0 z-30 px-4 pb-[max(1rem,env(safe-area-inset-bottom))] md:hidden pointer-events-none"
                >
                    <div className="pointer-events-auto flex justify-end">
                        <Link
                            href="/kontakt"
                            className="inline-flex items-center justify-center px-5 py-3 rounded-xl bg-primary text-white font-bold shadow-lg shadow-black/35 hover:bg-primary-dark transition-colors"
                        >
                            <span className="mr-2">{t('cta')}</span>
                            <Send className="w-5 h-5" />
                        </Link>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
