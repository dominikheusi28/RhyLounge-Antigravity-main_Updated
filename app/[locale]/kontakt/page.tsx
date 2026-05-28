'use client';

import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';
import { ContactForm } from '@/components/forms/ContactForm';
import { useTranslations } from 'next-intl';

export default function KontaktPage() {
    const t = useTranslations('KontaktPage');

    const contactInfo = [
        {
            icon: Phone,
            title: t('i1T'),
            value: '+41 79 839 79 79',
            href: 'tel:+41798397979',
            description: t('i1D'),
        },
        {
            icon: Mail,
            title: t('i2T'),
            value: 'info@flussbus.ch',
            href: 'mailto:info@flussbus.ch',
            description: t('i2D'),
        },
        {
            icon: MapPin,
            title: t('i3T'),
            value: t('i3V'),
            href: 'https://maps.google.com/?q=Basel+Rhein',
            description: t('i3D'),
        },
        {
            icon: Clock,
            title: t('i4T'),
            value: t('i4V'),
            description: t('i4D'),
        },
    ];

    return (
        <div className="pt-32 pb-20">
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

            <div className="container-custom">
                <div className="grid lg:grid-cols-3 gap-12">
                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="lg:col-span-2"
                    >
                        <div className="mb-6">
                            <h2 className="text-2xl font-bold text-white mb-2">{t('fT')}</h2>
                            <p className="text-slate-300">{t('fS')}</p>
                        </div>
                        <ContactForm />
                    </motion.div>

                    {/* Contact Info Sidebar */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="space-y-6"
                    >
                        <div className="glass-panel p-6 text-white bg-blue-600/20 border border-blue-500/30 rounded-xl shadow-lg">
                            <Send className="w-10 h-10 mb-4 text-blue-400" />
                            <h3 className="text-xl font-bold mb-2">{t('fastT')}</h3>
                            <p className="text-slate-200 text-sm">
                                {t('fastD')}
                            </p>
                        </div>

                        {contactInfo.map((item, index) => (
                            <motion.div
                                key={item.title}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                                className="bg-gradient-to-br from-blue-900 to-blue-600 border border-blue-400/30 rounded-xl shadow-[0_0_15px_rgba(59,130,246,0.3)] p-5 hover:shadow-[0_0_20px_rgba(59,130,246,0.5)] transition-all group"
                            >
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center shrink-0 border border-blue-400/30 shadow-[0_0_10px_rgba(0,255,255,0.2)]">
                                        <item.icon className="w-6 h-6 text-cyan-400 drop-shadow-[0_0_5px_rgba(34,211,238,0.8)]" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-blue-200 font-medium mb-1">{item.title}</p>
                                        {item.href ? (
                                            <a
                                                href={item.href}
                                                target={item.href.startsWith('http') ? '_blank' : undefined}
                                                rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                                                className="font-bold text-white hover:text-cyan-300 transition-colors block text-lg"
                                            >
                                                {item.value}
                                            </a>
                                        ) : (
                                            <p className="font-bold text-white text-lg">{item.value}</p>
                                        )}
                                        {item.description && (
                                            <p className="text-sm text-slate-300 mt-1">{item.description}</p>
                                        )}
                                    </div>
                                </div>
                            </motion.div>
                        ))}

                        {/* Map Placeholder */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.6, delay: 0.7 }}
                            className="aspect-square rounded-2xl bg-gray-100 flex items-center justify-center overflow-hidden"
                        >
                            <div className="text-center p-6">
                                <MapPin className="w-12 h-12 text-gray-300 mx-auto mb-4" />
                                <p className="text-gray-500 text-sm">
                                    {t('mapA')}
                                </p>
                                <a
                                    href="https://maps.google.com/?q=Basel+Rhein"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-primary text-sm font-semibold hover:underline mt-2 inline-block"
                                >
                                    {t('mapO')}
                                </a>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
