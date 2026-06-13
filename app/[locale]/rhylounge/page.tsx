'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Link } from '@/i18n/routing';
import Image from 'next/image';
import { Users, Bath, Armchair, Sun, Shield, Award, Coffee, Check } from 'lucide-react';
import { useTranslations } from 'next-intl';

export default function RhyLoungePage() {
    const t = useTranslations('RhyloungePage');

    const specs = [
        { icon: Users, label: t('i1L'), value: t('i1V') },
        { icon: Bath, label: t('i2L'), value: t('i2V') },
        { icon: Armchair, label: t('i3L'), value: t('i3V') },
        { icon: Sun, label: t('i4L'), value: t('i4V') },
    ];

    const features = [
        t('f0'),
        t('f1'),
        t('f2'),
        t('f3'),
        t('f4'),
        t('f5'),
    ];
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

    return (
        <div ref={sectionRef} className="pt-32 pb-20">
            {/* Hero Section */}
            <section className="container-custom mb-16">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="max-w-3xl"
                >
                    <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary-light text-sm font-bold mb-4 border border-primary/20 backdrop-blur-sm">
                        {t('badge')}
                    </span>
                    <h1 className="text-hero text-white mb-6 drop-shadow-lg">
                        {t('t1')}
                        <span className="block text-primary-light mt-2">{t('t2')}</span>
                    </h1>
                    <p className="text-xl text-slate-200 leading-relaxed max-w-2xl">
                        {t('sub')}
                    </p>
                </motion.div>
            </section>

            {/* Main Image */}
            <section className="container-custom mb-16">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="relative aspect-[21/9] rounded-3xl overflow-hidden"
                >
                    <Image
                        src="/images/hero/rhylounge_boat_mittlere_bruecke_high_quality.jpg"
                        alt="Die beleuchtete RhyLounge an der Mittleren Brücke in Basel"
                        fill
                        className="object-cover"
                        sizes="100vw"
                        quality={90}
                    />
                </motion.div>
            </section>

            {/* Specs Grid */}
            <section className="container-custom mb-20">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="grid grid-cols-2 md:grid-cols-4 gap-4"
                >
                    {specs.map((spec, index) => (
                        <div
                            key={spec.label}
                            className="relative overflow-hidden bg-gradient-to-br from-blue-900 to-blue-600 rounded-xl shadow-[0_0_15px_rgba(59,130,246,0.4)] p-4 sm:p-6 text-center hover:shadow-[0_0_25px_rgba(59,130,246,0.6)] transition-all duration-300 transform hover:-translate-y-1 border border-blue-400/30 backdrop-blur-md group"
                        >
                            <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-white/10 flex items-center justify-center mx-auto mb-4 border border-blue-400/30 shadow-[0_0_10px_rgba(0,255,255,0.2)]">
                                <spec.icon className="w-7 h-7 text-cyan-400 drop-shadow-[0_0_5px_rgba(34,211,238,0.8)]" />
                            </div>
                            <p className="text-blue-200 text-sm mb-1 font-medium tracking-wide">{spec.label}</p>
                            <p className="text-base sm:text-lg font-bold text-white drop-shadow-md">{spec.value}</p>
                        </div>
                    ))}
                </motion.div>
            </section>

            {/* Features & Captain */}
            <section className="container-custom">
                <div className="grid lg:grid-cols-2 gap-12">
                    {/* Features */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        <h2 className="section-title mb-6 text-white">
                            {t('fT1')} <span className="text-primary-light">{t('fT2')}</span>
                        </h2>
                        <p className="text-slate-300 mb-8 text-lg leading-relaxed">
                            {t('fD')}
                        </p>

                        <div className="grid sm:grid-cols-2 gap-4">
                            {features.map((feature, index) => (
                                <div key={index} className="flex items-center gap-3 p-4 rounded-xl bg-gradient-to-br from-blue-900 to-blue-600 border border-blue-400/30 shadow-[0_0_15px_rgba(59,130,246,0.3)] hover:shadow-[0_0_20px_rgba(59,130,246,0.5)] transition-all duration-300 group">
                                    <div className="w-8 h-8 rounded-lg bg-blue-500/20 shadow-sm flex items-center justify-center shrink-0 border border-blue-400/30 group-hover:bg-blue-400/30 transition-colors">
                                        <Check className="w-5 h-5 text-cyan-400 drop-shadow-[0_0_5px_rgba(34,211,238,0.6)]" />
                                    </div>
                                    <span className="text-white font-medium">{feature}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Captain Card */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.5 }}
                    >
                        <div className="glass-panel p-6 sm:p-8 text-white h-full rounded-2xl border border-white/10 shadow-2xl relative overflow-hidden group">
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-navy-950/80 -z-10" />
                            <div className="grid grid-cols-2 gap-3 mb-6">
                                <div className="relative aspect-[4/3] overflow-hidden rounded-xl border border-white/10">
                                    <Image
                                        src="/images/erlebnis/remo_flussbus_portrait.webp"
                                        alt="Remo an Bord der RhyLounge"
                                        fill
                                        className="object-cover"
                                        sizes="(max-width: 1024px) 50vw, 25vw"
                                    />
                                </div>
                                <div className="relative aspect-[4/3] overflow-hidden rounded-xl border border-white/10">
                                    <Image
                                        src="/images/erlebnis/lena_flussbus_portrait.webp"
                                        alt="Lena an Bord der RhyLounge"
                                        fill
                                        className="object-cover object-center"
                                        sizes="(max-width: 1024px) 50vw, 25vw"
                                    />
                                </div>
                            </div>
                            <div className="mb-6">
                                <div>
                                    <h3 className="text-2xl font-bold mb-2">{t('cT')}</h3>
                                    <p className="text-slate-300">{t('cS')}</p>
                                </div>
                            </div>

                            <p className="text-slate-200 mb-8 leading-relaxed">
                                {t('cQ')}
                            </p>

                            <div className="space-y-4">
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center">
                                        <Award className="w-4 h-4 text-primary-light" />
                                    </div>
                                    <span className="text-slate-200">{t('c1')}</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center">
                                        <Shield className="w-4 h-4 text-primary-light" />
                                    </div>
                                    <span className="text-slate-200">{t('c2')}</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center">
                                        <Coffee className="w-4 h-4 text-primary-light" />
                                    </div>
                                    <span className="text-slate-200">{t('c3')}</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* CTA */}
            <section className="container-custom mt-20">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.7 }}
                    className="text-center bg-gradient-to-br from-primary to-primary-dark rounded-3xl p-8 sm:p-12 text-white"
                >
                    <h2 className="text-2xl md:text-3xl font-bold mb-4">
                        {t('bT')}
                    </h2>
                    <p className="text-white/80 mb-8 max-w-xl mx-auto">
                        {t('bD')}
                    </p>
                    <Link href="/kontakt" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-white text-navy-950 font-bold hover:bg-slate-100 transition-colors shadow-lg">
                        {t('bCta')}
                    </Link>
                </motion.div>
            </section>
        </div>
    );
}
