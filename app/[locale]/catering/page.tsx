'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Link } from '@/i18n/routing';
import Image from 'next/image';
import { ArrowRight, Check, ChefHat } from 'lucide-react';
import { useTranslations } from 'next-intl';

const galleryImages = [
    '/images/erlebnis/rhylounge_interior_bar_shelves_glow_day_01.webp',
    '/images/erlebnis/rhylounge_bar_bottles_glasses_night_01.webp',
    '/images/erlebnis/rhylounge_captain_at_helm_day_01.webp',
    '/images/erlebnis/rhylounge_interior_dining_cityview_day_01.webp',
    '/images/erlebnis/rhylounge_crew_bar_day_01.webp',
    '/images/erlebnis/rhylounge_fondue_pot_stirring_night_01.webp',
    '/images/erlebnis/rhylounge_raclette_grill_table_setup_night_01.webp',
    '/images/erlebnis/rhylounge_bar_pouring_bubbles_neon_01.webp',
];

export default function CateringPage() {
    const t = useTranslations('CateringPage');
    const points = t.raw('points') as string[];
    const examples = t.raw('examples') as string[];

    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

    return (
        <div ref={sectionRef} className="pt-32 pb-20">
            {/* Hero */}
            <section className="container-custom mb-16">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="max-w-3xl"
                >
                    <span className="inline-block px-4 py-2 rounded-full bg-blue-500/10 text-blue-400 text-sm font-bold mb-4 border border-blue-500/20 backdrop-blur-sm">
                        {t('badge')}
                    </span>
                    <h1 className="text-hero text-white mb-6 drop-shadow-md">
                        {t('t1')} <span className="text-blue-500">{t('t2')}</span>
                    </h1>
                    <p className="text-xl text-slate-200">
                        {t('sub')}
                    </p>
                </motion.div>
            </section>

            {/* Catering Info */}
            <section className="container-custom mb-20">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="relative overflow-hidden bg-gradient-to-br from-blue-900 to-blue-600 rounded-3xl shadow-[0_0_18px_rgba(59,130,246,0.35)] border border-blue-400/30"
                >
                    <div className="absolute inset-0 bg-white/5 pointer-events-none" />
                    <div className="relative z-10 grid lg:grid-cols-[1fr_0.9fr] gap-10 p-8 md:p-12">
                        <div>
                            <div className="w-16 h-16 rounded-2xl bg-cyan-500 flex items-center justify-center mb-6 border border-white/20 shadow-[0_0_15px_rgba(34,211,238,0.55)]">
                                <ChefHat className="w-8 h-8 text-white" />
                            </div>
                            <p className="text-sm font-bold mb-2 text-blue-200 uppercase tracking-wider">
                                {t('mainKicker')}
                            </p>
                            <h2 className="text-3xl md:text-5xl font-bold mb-5 text-white drop-shadow-md">
                                {t('mainTitle')}
                            </h2>
                            <p className="text-lg md:text-xl text-slate-200 leading-relaxed mb-8">
                                {t('mainText')}
                            </p>
                            <Link
                                href="/kontakt"
                                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold transition-all duration-300 shadow-lg bg-white text-blue-600 hover:bg-blue-50 border border-blue-100 hover:shadow-md"
                            >
                                {t('cta')}
                                <ArrowRight className="w-5 h-5" />
                            </Link>
                        </div>

                        <div className="rounded-2xl p-6 md:p-8 bg-black/20 border border-white/10 shadow-inner">
                            <h3 className="text-lg font-bold mb-5 text-white">
                                {t('pointsTitle')}
                            </h3>
                            <ul className="space-y-4 mb-8">
                                {points.map((point) => (
                                    <li key={point} className="flex items-start gap-3">
                                        <div className="w-6 h-6 rounded-full flex items-center justify-center shrink-0 bg-cyan-500/20 mt-0.5">
                                            <Check className="w-4 h-4 text-cyan-400" />
                                        </div>
                                        <span className="text-slate-200 font-medium">
                                            {point}
                                        </span>
                                    </li>
                                ))}
                            </ul>

                            <h3 className="text-lg font-bold mb-4 text-white">
                                {t('examplesTitle')}
                            </h3>
                            <div className="flex flex-wrap gap-3">
                                {examples.map((example) => (
                                    <span
                                        key={example}
                                        className="px-4 py-2 rounded-full bg-white/10 border border-white/15 text-slate-100 text-sm font-semibold"
                                    >
                                        {example}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </motion.div>
            </section>

            {/* Gallery */}
            <section className="container-custom mb-20">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.3 }}
                >
                    <h2 className="section-title text-center mb-8 text-white">
                        <span className="text-primary-light">{t('gT')}</span>
                    </h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {galleryImages.map((src, i) => (
                            <div
                                key={src}
                                className="relative aspect-square rounded-2xl overflow-hidden hover:shadow-lg transition-shadow cursor-pointer group"
                            >
                                <Image
                                    src={src}
                                    alt={`RhyLounge Catering Galerie Bild ${i + 1}`}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                                    sizes="(max-width: 768px) 50vw, 25vw"
                                />
                            </div>
                        ))}
                    </div>
                </motion.div>
            </section>

            {/* CTA */}
            <section className="container-custom">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="text-center bg-blue-600 rounded-3xl p-12 text-white shadow-2xl relative overflow-hidden"
                >
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-blue-700" />
                    <div className="relative z-10">
                        <h2 className="section-title mb-4 text-white">
                            {t('bT')}
                        </h2>
                        <p className="text-blue-50 mb-8 max-w-xl mx-auto">
                            {t('bD')}
                        </p>
                        <Link href="/kontakt" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-white text-blue-600 font-bold hover:bg-blue-50 transition-colors shadow-lg">
                            {t('bCta')}
                        </Link>
                    </div>
                </motion.div>
            </section>
        </div>
    );
}
