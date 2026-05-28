'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink, MessageCircle, Star } from 'lucide-react';
import { useTranslations } from 'next-intl';

export function SocialProof() {
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true, margin: '-100px' });
    const t = useTranslations('Social');
    const googleMapsUrl = 'https://maps.app.goo.gl/4CsEx8EEPrzyKueZ9';

    return (
        <section ref={sectionRef} className="section-padding bg-gradient-to-br from-primary via-primary-dark to-primary overflow-hidden">
            <div className="container-custom">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <span className="inline-block px-4 py-2 rounded-full bg-white/10 text-white text-sm font-semibold mb-4">
                        {t('badge')}
                    </span>
                    <h2 className="text-section text-white mb-4">
                        {t('t')}
                    </h2>
                    <p className="text-lg text-white/80 max-w-2xl mx-auto">
                        {t('sub')}
                    </p>
                </motion.div>

                {/* Google Reviews */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="max-w-4xl mx-auto glass-card p-8 md:p-12 text-center"
                >
                    <div className="w-16 h-16 rounded-2xl bg-white/10 border border-white/15 flex items-center justify-center mx-auto mb-6">
                        <MessageCircle className="w-8 h-8 text-cyan-300" />
                    </div>
                    <div className="flex justify-center gap-1 mb-6" aria-hidden="true">
                        {[...Array(5)].map((_, index) => (
                            <Star key={index} className="w-6 h-6 text-yellow-400 fill-yellow-400" />
                        ))}
                    </div>
                    <h3 className="text-2xl md:text-4xl font-bold text-white mb-4">
                        {t('googleTitle')}
                    </h3>
                    <p className="text-lg text-white/80 max-w-2xl mx-auto mb-8">
                        {t('googleText')}
                    </p>
                    <a
                        href={googleMapsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-blue-700 font-bold hover:bg-blue-50 transition-colors shadow-lg"
                    >
                        {t('googleCta')}
                        <ExternalLink className="w-5 h-5" />
                    </a>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="grid md:grid-cols-3 gap-6 mt-10 max-w-4xl mx-auto"
                >
                    {[
                        t('st1'),
                        t('st2'),
                        t('st3'),
                    ].map((label) => (
                        <div key={label} className="rounded-2xl bg-white/5 border border-white/10 p-5 text-center">
                            <p className="text-white font-bold">{label}</p>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
