'use client';

import { motion } from 'framer-motion';
import { Link } from '@/i18n/routing';
import Image from 'next/image';
import { Ship, Wine, PartyPopper, ArrowRight, Utensils, Star, Calendar } from 'lucide-react';
import { useTranslations } from 'next-intl';

export function AngeboteGrid() {
    const t = useTranslations('AGrid');

    const offers = [
        {
            id: 'rundfahrt',
            title: t('o1a'),
            subtitle: t('o1b'),
            description: t('o1c'),
            image: '/images/hero/rhylounge_deck_symmetry_city_night_hero_02.webp',
            size: 'large',
            link: '/angebote#rundfahrt'
        },
        {
            id: 'events',
            title: t('o2a'),
            subtitle: t('o2b'),
            description: t('o2c'),
            image: '/images/erlebnis/rhylounge_bar_pouring_bubbles_neon_01.webp',
            size: 'large',
            link: '/events'
        },
        {
            id: 'specials',
            title: t('o3a'),
            subtitle: t('o3b'),
            icon: Star,
            size: 'small',
            link: '/angebote#specials'
        },
        {
            id: 'catering',
            title: t('o4a'),
            subtitle: t('o4b'),
            icon: Utensils,
            size: 'small',
            link: '/catering'
        },
        {
            id: 'individuell',
            title: t('o5a'),
            subtitle: t('o5b'),
            icon: Calendar,
            size: 'small',
            link: '/kontakt'
        }
    ];

    return (
        <section className="section-padding bg-navy-900 relative">
            <div className="container-custom">
                <div className="text-center mb-16">
                    <span className="inline-block px-4 py-2 rounded-full bg-white/5 border border-white/10 text-slate-300 text-sm font-medium mb-6">
                        {t('badge')}
                    </span>
                    <h2 className="section-title">
                        {t('t1')} <span className="text-primary-light">{t('t2')}</span>
                    </h2>
                    <p className="section-subtitle mx-auto">
                        {t('sub')}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-6 gap-6 auto-rows-[300px]">
                    {offers.map((offer, index) => (
                        <motion.div
                            key={offer.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className={`group relative rounded-3xl overflow-hidden glass-panel 
                                ${offer.size === 'large' ? 'md:col-span-3 lg:col-span-3' : 'md:col-span-2 lg:col-span-2'}`}
                        >
                            <Link href={offer.link} className="absolute inset-0 z-20">
                                <span className="sr-only">Zu {offer.title}</span>
                            </Link>

                            {offer.image ? (
                                <>
                                    <Image
                                        src={offer.image}
                                        alt={offer.title}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                                        sizes="(max-width: 768px) 100vw, 50vw"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/40 to-transparent" />
                                </>
                            ) : (
                                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-white/[0.02] group-hover:bg-white/10 transition-colors" />
                            )}

                            <div className="absolute inset-0 p-8 flex flex-col justify-end z-10">
                                {offer.icon && (
                                    <div className="mb-auto">
                                        <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center backdrop-blur-md">
                                            <offer.icon className="w-6 h-6 text-white" />
                                        </div>
                                    </div>
                                )}

                                <span className="text-primary-light font-medium text-sm mb-2 block">{offer.subtitle}</span>
                                <h3 className={`font-bold text-white mb-4 ${offer.size === 'large' ? 'text-3xl' : 'text-xl'}`}>
                                    {offer.title}
                                </h3>

                                <div className="flex items-center gap-2 text-white font-medium opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                                    {t('view')} <ArrowRight className="w-4 h-4" />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
