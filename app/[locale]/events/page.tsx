'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Link } from '@/i18n/routing';
import { Building2, PartyPopper, Briefcase, Wine, Users, Clock, Check, ArrowRight } from 'lucide-react';
import { useTranslations } from 'next-intl';

export default function EventsPage() {
    const t = useTranslations('EventsPage');

    const eventTypes = [
        {
            id: 'firmenevent',
            title: t('items.0.t'),
            subtitle: t('items.0.s'),
            description: t('items.0.d'),
            icon: Building2,
            features: [t('items.0.h1'), t('items.0.h2'), t('items.0.h3'), t('items.0.h4')],
        },
        {
            id: 'private',
            title: t('items.1.t'),
            subtitle: t('items.1.s'),
            description: t('items.1.d'),
            icon: PartyPopper,
            features: [t('items.1.h1'), t('items.1.h2'), t('items.1.h3'), t('items.1.h4')],
        },
        {
            id: 'hochzeit',
            title: t('items.2.t'),
            subtitle: t('items.2.s'),
            description: t('items.2.d'),
            icon: Wine,
            features: [t('items.2.h1'), t('items.2.h2'), t('items.2.h3'), t('items.2.h4')],
        },
    ];

    const process = [
        { step: t('p.0.s'), title: t('p.0.t'), description: t('p.0.d') },
        { step: t('p.1.s'), title: t('p.1.t'), description: t('p.1.d') },
        { step: t('p.2.s'), title: t('p.2.t'), description: t('p.2.d') },
        { step: t('p.3.s'), title: t('p.3.t'), description: t('p.3.d') },
    ];

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
                        {t('t1')}{' '}
                        <span className="text-blue-500">{t('t2')}</span>
                    </h1>
                    <p className="text-xl text-slate-200">
                        {t('sub')}
                    </p>
                </motion.div>
            </section>

            {/* Event Types */}
            <section className="container-custom mb-20">
                <div className="space-y-8">
                    {eventTypes.map((event, index) => (
                        <motion.div
                            key={event.id}
                            initial={{ opacity: 0, y: 40 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="relative overflow-hidden bg-gradient-to-br from-blue-900 to-blue-600 rounded-xl shadow-[0_0_15px_rgba(59,130,246,0.4)] border border-blue-400/30 backdrop-blur-md group grid lg:grid-cols-2 gap-8 items-center p-8 hover:shadow-[0_0_25px_rgba(59,130,246,0.6)] transition-all"
                        >
                            <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                            <div className={`relative z-10 ${index % 2 !== 0 ? 'lg:order-2' : ''}`}>
                                <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center mb-6 border border-blue-400/30 shadow-[0_0_10px_rgba(0,255,255,0.2)]">
                                    <event.icon className="w-8 h-8 text-cyan-400 drop-shadow-[0_0_5px_rgba(34,211,238,0.8)]" />
                                </div>
                                <p className="text-sm font-bold text-blue-200 mb-2 uppercase tracking-wide">{event.subtitle}</p>
                                <h2 className="text-3xl font-bold text-white mb-4 drop-shadow-md">{event.title}</h2>
                                <p className="text-slate-200 mb-6 leading-relaxed">{event.description}</p>

                                <div className="grid grid-cols-2 gap-3 mb-6">
                                    {event.features.map((feature, i) => (
                                        <div key={i} className="flex items-center gap-2">
                                            <Check className="w-5 h-5 text-cyan-400 shrink-0" />
                                            <span className="text-slate-200 text-sm">{feature}</span>
                                        </div>
                                    ))}
                                </div>

                                <Link
                                    href="/kontakt"
                                    className="inline-flex items-center gap-2 text-white font-bold hover:text-cyan-300 hover:gap-3 transition-all"
                                >
                                    {t('req')}
                                    <ArrowRight className="w-5 h-5" />
                                </Link>
                            </div>

                            <div className={`relative z-10 aspect-video rounded-2xl bg-black/20 shadow-inner flex items-center justify-center border border-white/10 ${index % 2 !== 0 ? 'lg:order-1' : ''}`}>
                                <event.icon className="w-16 h-16 text-white/50" />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Process */}
            <section className="container-custom mb-20">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.3 }}
                >
                    <h2 className="section-title text-center mb-12 text-white">
                        {t('pT')}
                    </h2>

                    <div className="grid md:grid-cols-4 gap-6">
                        {process.map((item, index) => (
                            <div key={item.step} className="relative text-center">
                                {index < process.length - 1 && (
                                    <div className="hidden md:block absolute top-8 left-1/2 w-full h-px bg-white/20" />
                                )}
                                <div className="w-16 h-16 rounded-full bg-blue-600 text-white flex items-center justify-center mx-auto mb-4 font-bold text-lg relative z-10 shadow-lg border-4 border-navy-950">
                                    {item.step}
                                </div>
                                <h3 className="font-bold text-white mb-2">{item.title}</h3>
                                <p className="text-gray-600 text-sm">{item.description}</p>
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
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="text-center bg-blue-600 rounded-3xl p-12 text-white shadow-2xl relative overflow-hidden"
                >
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-blue-700" />
                    <div className="relative z-10">
                        <Briefcase className="w-16 h-16 mx-auto mb-6 opacity-90" />
                        <h2 className="text-2xl md:text-3xl font-bold mb-4">
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
