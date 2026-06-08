'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';

interface FormData {
    vorname: string;
    nachname: string;
    firma: string;
    email: string;
    telefon: string;
    anlass: string;
    datum: string;
    personenanzahl: string;
    nachricht: string;
    datenschutz: boolean;
}

type FormStatus = 'idle' | 'submitting' | 'success' | 'error';

export function ContactForm() {
    const t = useTranslations('ContactForm');
    
    const anlassOptions = [
        { value: '', label: t.raw('opts')[0] || "Bitte wählen..." },
        { value: 'geburtstag', label: t.raw('opts')[1] || "Geburtstag" },
        { value: 'firmenevent', label: t.raw('opts')[2] || "Firmenevent" },
        { value: 'apero', label: t.raw('opts')[3] || "Apéro-Fahrt" },
        { value: 'hochzeit', label: t.raw('opts')[4] || "Hochzeit / Feier" },
        { value: 'sonstiges', label: t.raw('opts')[5] || "Sonstiges" },
    ];

    const [formData, setFormData] = useState<FormData>({
        vorname: '',
        nachname: '',
        firma: '',
        email: '',
        telefon: '',
        anlass: '',
        datum: '',
        personenanzahl: '',
        nachricht: '',
        datenschutz: false,
    });

    const [status, setStatus] = useState<FormStatus>('idle');
    const [errorMessage, setErrorMessage] = useState('');

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
        const { name, value, type } = e.target;
        const checked = (e.target as HTMLInputElement).checked;

        setFormData((prev) => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value,
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('submitting');
        setErrorMessage('');

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                const result = await response.json().catch(() => null);
                throw new Error(result?.message || 'Contact request failed');
            }

            setStatus('success');
            setFormData({
                vorname: '',
                nachname: '',
                firma: '',
                email: '',
                telefon: '',
                anlass: '',
                datum: '',
                personenanzahl: '',
                nachricht: '',
                datenschutz: false,
            });
        } catch {
            setStatus('error');
            setErrorMessage(t('err'));
        }
    };

    const inputClasses = `
    w-full px-4 py-3 rounded-xl border border-gray-200 
    bg-white text-gray-900 caret-gray-900 focus:border-primary focus:ring-2 focus:ring-primary/20
    outline-none transition-all duration-200
    placeholder:text-gray-400 disabled:text-gray-500
  `;

    const labelClasses = 'block text-sm font-medium text-gray-700 mb-2';

    if (status === 'success') {
        return (
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="glass-card-solid p-8 md:p-12 text-center"
            >
                <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-10 h-10 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {t('sucT')}
                </h3>
                <p className="text-gray-600 mb-6">
                    {t('sucD')}
                </p>
                <button
                    onClick={() => setStatus('idle')}
                    className="btn-primary"
                >
                    {t('newReq')}
                </button>
            </motion.div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className="glass-card-solid p-6 md:p-8">
            <div className="grid md:grid-cols-2 gap-6">
                {/* Vorname */}
                <div>
                    <label htmlFor="vorname" className={labelClasses}>
                        {t('vor')} <span className="text-red-500">*</span>
                    </label>
                    <input
                        type="text"
                        id="vorname"
                        name="vorname"
                        value={formData.vorname}
                        onChange={handleChange}
                        required
                        className={inputClasses}
                        placeholder="Max"
                    />
                </div>

                {/* Nachname */}
                <div>
                    <label htmlFor="nachname" className={labelClasses}>
                        {t('nach')} <span className="text-red-500">*</span>
                    </label>
                    <input
                        type="text"
                        id="nachname"
                        name="nachname"
                        value={formData.nachname}
                        onChange={handleChange}
                        required
                        className={inputClasses}
                        placeholder="Mustermann"
                    />
                </div>

                {/* Firma */}
                <div>
                    <label htmlFor="firma" className={labelClasses}>
                        {t('firma')}
                    </label>
                    <input
                        type="text"
                        id="firma"
                        name="firma"
                        value={formData.firma}
                        onChange={handleChange}
                        className={inputClasses}
                        placeholder="Ihre Firma"
                    />
                </div>

                {/* E-Mail */}
                <div>
                    <label htmlFor="email" className={labelClasses}>
                        {t('email')} <span className="text-red-500">*</span>
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className={inputClasses}
                        placeholder="max@beispiel.ch"
                    />
                </div>

                {/* Telefon */}
                <div>
                    <label htmlFor="telefon" className={labelClasses}>
                        {t('tel')}
                    </label>
                    <input
                        type="tel"
                        id="telefon"
                        name="telefon"
                        value={formData.telefon}
                        onChange={handleChange}
                        className={inputClasses}
                        placeholder="+41 79 839 79 79"
                    />
                </div>

                {/* Anlass */}
                <div>
                    <label htmlFor="anlass" className={labelClasses}>
                        {t('anlass')}
                    </label>
                    <select
                        id="anlass"
                        name="anlass"
                        value={formData.anlass}
                        onChange={handleChange}
                        className={inputClasses}
                    >
                        {anlassOptions.map((option) => (
                            <option key={option.value} value={option.value}>
                                {option.label}
                            </option>
                        ))}
                    </select>
                </div>

                {/* Datum */}
                <div>
                    <label htmlFor="datum" className={labelClasses}>
                        {t('datum')}
                    </label>
                    <input
                        type="date"
                        id="datum"
                        name="datum"
                        value={formData.datum}
                        onChange={handleChange}
                        className={inputClasses}
                    />
                </div>

                {/* Personenanzahl */}
                <div>
                    <label htmlFor="personenanzahl" className={labelClasses}>
                        {t('pers')}
                    </label>
                    <input
                        type="number"
                        id="personenanzahl"
                        name="personenanzahl"
                        value={formData.personenanzahl}
                        onChange={handleChange}
                        min="1"
                        max="20"
                        className={inputClasses}
                        placeholder="z.B. 8"
                    />
                </div>

                {/* Nachricht */}
                <div className="md:col-span-2">
                    <label htmlFor="nachricht" className={labelClasses}>
                        {t('msg')}
                    </label>
                    <textarea
                        id="nachricht"
                        name="nachricht"
                        value={formData.nachricht}
                        onChange={handleChange}
                        rows={4}
                        className={inputClasses}
                        placeholder={t('pMsg')}
                    />
                </div>

                {/* Datenschutz */}
                <div className="md:col-span-2">
                    <label className="flex items-start gap-3 cursor-pointer">
                        <input
                            type="checkbox"
                            name="datenschutz"
                            checked={formData.datenschutz}
                            onChange={handleChange}
                            required
                            className="w-5 h-5 rounded border-gray-300 text-primary focus:ring-primary mt-0.5"
                        />
                        <span className="text-sm text-gray-600">
                            {t('d1')}{' '}
                            <Link href="/datenschutz" className="text-primary hover:underline">
                                {t('d2')}
                            </Link>{' '}
                            {t('d3')}{' '}
                            <span className="text-red-500">*</span>
                        </span>
                    </label>
                </div>

                {/* Error Message */}
                {status === 'error' && (
                    <div className="md:col-span-2">
                        <div className="flex items-center gap-2 p-4 rounded-xl bg-red-50 text-red-700">
                            <AlertCircle className="w-5 h-5 shrink-0" />
                            <p className="text-sm">{errorMessage}</p>
                        </div>
                    </div>
                )}

                {/* Submit Button */}
                <div className="md:col-span-2">
                    <button
                        type="submit"
                        disabled={status === 'submitting'}
                        className="btn-primary w-full md:w-auto min-w-[200px] disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                        {status === 'submitting' ? (
                            <>
                                <Loader2 className="w-5 h-5 animate-spin mr-2" />
                                {t('sub')}
                            </>
                        ) : (
                            <>
                                <Send className="w-5 h-5 mr-2" />
                                {t('s')}
                            </>
                        )}
                    </button>
                </div>
            </div>
        </form>
    );
}
