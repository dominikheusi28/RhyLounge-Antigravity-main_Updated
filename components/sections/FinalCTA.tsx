'use client';

import { motion } from 'framer-motion';
import { ContactForm } from '@/components/forms/ContactForm';
import { Phone, CheckCircle2, MessageSquare, ShieldCheck } from 'lucide-react';
import { useTranslations } from 'next-intl';

export function FinalCTA() {
    const t = useTranslations('CTA');

    const benefits = [
        { icon: MessageSquare, text: t('b1') },
        { icon: ShieldCheck, text: t('b2') },
        { icon: CheckCircle2, text: t('b3') },
    ];

    return (
        <section id="contact" className="py-16 md:py-24 bg-navy-950 overflow-hidden relative">
            {/* Background Elements */}
            <div className="absolute top-1/2 left-0 w-full h-full bg-gradient-to-b from-transparent to-black pointer-events-none" />
            <div className="absolute right-0 bottom-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[100px] pointer-events-none" />

            <div className="container-custom relative z-10">
                <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">

                    {/* Left Column: Percuasion & Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary-light text-sm font-semibold mb-6">
                            {t('badge')}
                        </span>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl md:leading-tight font-bold text-white mb-6">
                            {t('t1')} <br />
                            <span className="text-primary-light">{t('t2')}</span>
                        </h2>
                        <p className="text-lg text-slate-300 mb-10 max-w-md leading-relaxed">
                            {t('sub')}
                        </p>

                        <div className="space-y-6 mb-12">
                            {benefits.map((item, idx) => (
                                <div key={idx} className="flex items-center gap-4">
                                    <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center">
                                        <item.icon className="w-5 h-5 text-primary-light" />
                                    </div>
                                    <span className="text-white font-medium">{item.text}</span>
                                </div>
                            ))}
                        </div>

                        <div className="glass-panel p-5 sm:p-6 rounded-2xl inline-flex max-w-full items-center gap-4 sm:gap-6">
                            <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center shadow-lg shadow-primary/25">
                                <Phone className="w-6 h-6 text-white" />
                            </div>
                            <div>
                                <p className="text-slate-400 text-sm mb-1">{t('phone')}</p>
                                <a href="tel:+41798397979" className="text-lg sm:text-xl font-bold text-white hover:text-primary-light transition-colors">
                                    +41 79 839 79 79
                                </a>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Column: High Conversion Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-navy-900 border border-white/10 rounded-3xl p-4 sm:p-6 md:p-10 shadow-2xl"
                    >
                        <h3 className="text-2xl font-bold text-white mb-6">{t('form')}</h3>
                        <ContactForm />
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
