'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Link } from '@/i18n/routing';
import { ChevronDown, Clock, Users, Calendar, Euro, Phone } from 'lucide-react';
import { useTranslations } from 'next-intl';

export default function PreisePage() {
    const tFaq = useTranslations('FAQ');
    const tP = useTranslations('PreisePage');

    const faqs = [
        { question: tFaq('q1.question'), answer: tFaq('q1.answer') },
        { question: tFaq('q2.question'), answer: tFaq('q2.answer') },
        { question: tFaq('q4.question'), answer: tFaq('q4.answer') },
        { question: tFaq('q5.question'), answer: tFaq('q5.answer') },
        { question: tFaq('q6.question'), answer: tFaq('q6.answer') },
    ];

    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true, margin: '-100px' });
    const [openFaq, setOpenFaq] = useState<number | null>(null);

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
                        {tP('badge')}
                    </span>
                    <h1 className="text-hero text-white mb-6 drop-shadow-md">
                        {tP('t1')} <span className="text-blue-500">{tP('t2')}</span>
                    </h1>
                    <p className="text-xl text-slate-200">
                        {tP('sub')}
                    </p>
                </motion.div>
            </section>

            {/* What's Included */}
            <section className="container-custom mb-20">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.3 }}
                >
                    <h2 className="section-title text-center mb-8 text-white">{tP('pT')}</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {[
                            { icon: Users, label: tP('inc.0.l') },
                            { icon: Clock, label: tP('inc.1.l') },
                            { icon: Calendar, label: tP('inc.2.l') },
                            { icon: Euro, label: tP('inc.3.l') },
                        ].map((item, index) => (
                            <div key={item.label} className="p-5 rounded-2xl bg-gradient-to-br from-blue-900 to-blue-600 border border-blue-400/30 text-center shadow-[0_0_15px_rgba(59,130,246,0.3)] hover:shadow-[0_0_20px_rgba(59,130,246,0.5)] transition-all group">
                                <item.icon className="w-8 h-8 text-cyan-400 mx-auto mb-3 drop-shadow-[0_0_5px_rgba(34,211,238,0.6)]" />
                                <p className="font-bold text-white text-sm">{item.label}</p>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </section>

            {/* FAQ Section */}
            <section className="container-custom mb-20">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.4 }}
                >
                    <h2 className="section-title text-center mb-4 text-white">{tP('fT')}</h2>
                    <p className="text-slate-300 text-center mb-10 max-w-2xl mx-auto">
                        {tP('fSub')}
                    </p>

                    <div className="max-w-3xl mx-auto space-y-4">
                        {faqs.map((faq, index) => (
                            <div
                                key={index}
                                className="rounded-2xl bg-gradient-to-br from-blue-900/50 to-blue-800/30 border border-blue-400/20 overflow-hidden shadow-sm backdrop-blur-sm"
                            >
                                <button
                                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                                    className="w-full flex items-center justify-between p-5 text-left hover:bg-white/5 transition-colors"
                                    aria-expanded={openFaq === index}
                                >
                                    <span className="font-bold text-white pr-4">{faq.question}</span>
                                    <ChevronDown
                                        className={`w-5 h-5 text-cyan-400 shrink-0 transition-transform ${openFaq === index ? 'rotate-180' : ''
                                            }`}
                                    />
                                </button>
                                <motion.div
                                    initial={false}
                                    animate={{
                                        height: openFaq === index ? 'auto' : 0,
                                        opacity: openFaq === index ? 1 : 0,
                                    }}
                                    transition={{ duration: 0.3 }}
                                    className="overflow-hidden"
                                >
                                    <div className="px-5 pb-5 text-slate-200 border-t border-blue-400/20 pt-4 leading-relaxed">
                                        {faq.answer}
                                    </div>
                                </motion.div>
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
                    className="text-center bg-blue-600 rounded-3xl p-8 sm:p-12 text-white shadow-2xl relative overflow-hidden"
                >
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-blue-700" />
                    <div className="relative z-10">
                        <Phone className="w-16 h-16 mx-auto mb-6 opacity-90" />
                        <h2 className="text-2xl md:text-3xl font-bold mb-4">
                            {tP('bT')}
                        </h2>
                        <p className="text-blue-50 mb-8 max-w-xl mx-auto">
                            {tP('bSub')}
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/kontakt" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-white text-blue-600 font-bold hover:bg-blue-50 transition-colors shadow-lg">
                                {tP('bCta')}
                            </Link>
                            <a href="tel:+41798397979" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-blue-700 text-white font-semibold hover:bg-blue-800 transition-colors border border-blue-500 shadow-lg">
                                {tP('call')}
                            </a>
                        </div>
                    </div>
                </motion.div>
            </section>
        </div>
    );
}
