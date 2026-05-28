'use client';

import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';
import { Anchor, Ship, Wine, Heart, Sparkles } from 'lucide-react';
import { useTranslations } from 'next-intl';

export function ExperienceSection() {
    const t = useTranslations('Exp');

    const experienceSteps = [
        {
            number: '01',
            title: t('s1a'),
            description: t('s1b'),
            icon: Anchor,
            image: '/images/erlebnis/rhylounge_boarding_dock_neon_night_01.webp',
        },
        {
            number: '02',
            title: t('s2a'),
            description: t('s2b'),
            icon: Ship,
            image: '/images/erlebnis/rhylounge_rhein_promenade_boat_bluehour_03.webp',
        },
        {
            number: '03',
            title: t('s3a'),
            description: t('s3b'),
            icon: Wine,
            image: '/images/erlebnis/rhylounge_interior_raclette_table_night_01.webp',
        },
        {
            number: '04',
            title: t('s4a'),
            description: t('s4b'),
            icon: Heart,
            image: '/images/erlebnis/rhylounge_deck_wine_glasses_lamp_sunset_01.webp',
        },
    ];

    return (
        <section className="bg-navy-950 py-32 relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-dark/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />

            <div className="container-custom mb-24 text-center">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="section-title"
                >
                    {t('t1')} <span className="text-primary-light">{t('t2')}</span>
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="section-subtitle mx-auto"
                >
                    {t('sub')}
                </motion.p>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="mt-10 mx-auto max-w-4xl border-y border-blue-400/25 py-8"
                >
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-blue-500/15 text-cyan-300 mb-5 border border-blue-400/30">
                        <Sparkles className="w-6 h-6" />
                    </div>
                    <p className="text-2xl md:text-4xl font-bold text-white leading-tight mb-4">
                        {t('eye1')}
                    </p>
                    <p className="text-lg md:text-2xl text-slate-300">
                        {t('eye2')}
                    </p>
                </motion.div>
            </div>

            <div className="container-custom max-w-6xl">
                {experienceSteps.map((step, index) => (
                    <StepCard key={index} step={step} index={index} />
                ))}
            </div>
        </section>
    );
}

function StepCard({ step, index }: { step: any, index: number }) {
    const isEven = index % 2 === 0;

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12 lg:gap-24 mb-32 last:mb-0`}
        >
            {/* Visual */}
            <div className="flex-1 w-full relative group">
                <div className={`absolute inset-0 bg-primary-light/20 blur-2xl rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 ${isEven ? '-left-4' : '-right-4'}`} />
                <div className="relative aspect-[4/3] rounded-3xl overflow-hidden glass-panel">
                    <Image
                        src={step.image}
                        alt={step.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 to-transparent opacity-60" />
                </div>

                {/* Floating Number */}
                <div className={`absolute -top-6 ${isEven ? '-left-6' : '-right-6'} w-20 h-20 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl flex items-center justify-center shadow-xl`}>
                    <span className="text-3xl font-bold text-white font-heading">{step.number}</span>
                </div>
            </div>

            {/* Text */}
            <div className="flex-1 text-center lg:text-left">
                <div className={`inline-flex items-center justify-center p-3 rounded-xl bg-primary-light/10 text-primary-light mb-6`}>
                    <step.icon className="w-6 h-6" />
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">{step.title}</h3>
                <p className="text-lg text-slate-300 leading-relaxed mb-8">
                    {step.description}
                </p>
            </div>
        </motion.div>
    );
}
