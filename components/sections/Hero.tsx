'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from '@/i18n/routing';
import Image from 'next/image';
import { Clock, Users, MapPin, Wine } from 'lucide-react';
import { useRef } from 'react';
import { useTranslations } from 'next-intl';

export function Hero() {
    const t = useTranslations('Hero');
    const quickFacts = [
        { icon: Users, label: t('f1a'), text: t('f1b') },
        { icon: Clock, label: t('f2a'), text: t('f2b') },
        { icon: Wine, label: t('f3a'), text: t('f3b') },
        { icon: MapPin, label: t('f4a'), text: t('f4b') },
    ];

    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

    return (
        <section ref={ref} className="relative min-h-[100svh] flex items-center justify-center overflow-hidden">
            {/* Parallax Background */}
            <motion.div style={{ y, opacity }} className="absolute inset-0 z-0">
                <Image
                    src="/images/hero/rhylounge_boat_docked_city_bluehour_hero_01.webp"
                    alt="Die beleuchtete RhyLounge am Basler Rheinufer"
                    fill
                    priority
                    className="object-cover object-[58%_center] sm:object-center"
                    sizes="100vw"
                    quality={82}
                />

                {/* Night Premium Overlay System */}
                {/* 1. Base Darkener */}
                <div className="absolute inset-0 bg-navy-950/25 mix-blend-multiply" />

                {/* 2. Gradient Overlay (Navy to Transparent) */}
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-900/45 to-navy-950/15" />

                {/* 3. Ambient Grain (via global class) */}
                <div className="absolute inset-0 grain-overlay" />
            </motion.div>

            {/* Content */}
            <div className="container-custom relative z-20 text-center pt-28 pb-10 sm:pt-32 sm:pb-14 md:pt-40 md:pb-20">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: 'easeOut' }}
                    className="max-w-5xl mx-auto"
                >
                    <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.02] text-white mb-5 sm:mb-8 drop-shadow-2xl">
                        {t('t1')}<br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-light via-white to-primary-light">
                            {t('t2')}
                        </span>
                    </h1>

                    <p className="text-base sm:text-lg md:text-2xl text-slate-100 max-w-2xl mx-auto mb-7 sm:mb-10 md:mb-12 font-light leading-relaxed drop-shadow-lg">
                        {t('sub')}
                    </p>

                    <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-5 mb-8 sm:mb-12 md:mb-16 max-w-sm sm:max-w-none mx-auto">
                        <Link href="/kontakt" className="group relative px-7 py-3.5 sm:py-4 bg-white text-navy-950 rounded-full font-bold sm:text-lg hover:bg-slate-100 transition-all shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)] hover:shadow-[0_0_60px_-15px_rgba(255,255,255,0.5)]">
                            {t('cta1')}
                            <span className="absolute inset-0 rounded-full ring-2 ring-white/50 group-hover:scale-105 transition-transform" />
                        </Link>
                        <Link href="/angebote" className="px-7 py-3.5 sm:py-4 rounded-full text-white border border-white/25 bg-navy-950/25 hover:bg-white/10 backdrop-blur-sm transition-all sm:text-lg font-medium">
                            {t('cta2')}
                        </Link>
                    </div>

                    {/* Single Glass Card - Quick Facts */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="glass-panel max-w-4xl mx-auto p-1 rounded-2xl"
                    >
                        <div className="grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-white/10 bg-navy-950/40 rounded-xl backdrop-blur-xl">
                            {quickFacts.map((item, index) => (
                                <div key={index} className="px-3 sm:px-6 py-3 sm:py-4 flex min-h-24 flex-col items-center justify-center text-center">
                                    <item.icon className="w-5 h-5 text-primary-light mb-2" />
                                    <span className="text-white font-semibold text-sm">{item.label}</span>
                                    <span className="text-slate-400 text-xs mt-1">{item.text}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1.5 }}
                className="absolute bottom-5 md:bottom-10 left-1/2 -translate-x-1/2 z-20 hidden sm:block"
            >
                <div className="w-[1px] h-16 bg-gradient-to-b from-transparent via-white/50 to-transparent" />
            </motion.div>
        </section>
    );
}
