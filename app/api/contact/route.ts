import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

type ContactPayload = {
    vorname?: string;
    nachname?: string;
    firma?: string;
    email?: string;
    telefon?: string;
    anlass?: string;
    datum?: string;
    personenanzahl?: string;
    nachricht?: string;
    datenschutz?: boolean;
};

const requiredEnv = [
    'SMTP_HOST',
    'SMTP_PORT',
    'SMTP_USER',
    'SMTP_PASS',
    'CONTACT_TO_EMAIL',
    'CONTACT_FROM_EMAIL',
] as const;

function escapeHtml(value: string) {
    return value
        .replaceAll('&', '&amp;')
        .replaceAll('<', '&lt;')
        .replaceAll('>', '&gt;')
        .replaceAll('"', '&quot;')
        .replaceAll("'", '&#039;');
}

function formatLine(label: string, value?: string) {
    const safeValue = value?.trim() ? escapeHtml(value.trim()) : '-';
    return `<p><strong>${label}:</strong> ${safeValue}</p>`;
}

export async function POST(request: Request) {
    try {
        const missingEnv = requiredEnv.filter((key) => !process.env[key]);

        if (missingEnv.length > 0) {
            console.error(`Missing email configuration: ${missingEnv.join(', ')}`);
            return NextResponse.json(
                { message: 'Email configuration is missing.' },
                { status: 500 }
            );
        }

        const payload = (await request.json()) as ContactPayload;

        if (!payload.vorname?.trim() || !payload.nachname?.trim() || !payload.email?.trim() || !payload.datenschutz) {
            return NextResponse.json(
                { message: 'Required fields are missing.' },
                { status: 400 }
            );
        }

        const smtpPort = Number(process.env.SMTP_PORT);
        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: smtpPort,
            secure: smtpPort === 465,
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS,
            },
        });

        const name = `${payload.vorname.trim()} ${payload.nachname.trim()}`;
        const subject = `Neue RhyLounge Anfrage von ${name}`;
        const replyTo = payload.email.trim();

        const html = `
            <div style="font-family: Arial, sans-serif; line-height: 1.5; color: #111827;">
                <h2>Neue Anfrage über das RhyLounge Kontaktformular</h2>
                ${formatLine('Name', name)}
                ${formatLine('Firma', payload.firma)}
                ${formatLine('E-Mail', payload.email)}
                ${formatLine('Telefon', payload.telefon)}
                ${formatLine('Anlass', payload.anlass)}
                ${formatLine('Gewünschtes Datum', payload.datum)}
                ${formatLine('Personenanzahl', payload.personenanzahl)}
                <p><strong>Nachricht:</strong></p>
                <p style="white-space: pre-line;">${escapeHtml(payload.nachricht?.trim() || '-')}</p>
            </div>
        `;

        const text = [
            'Neue Anfrage über das RhyLounge Kontaktformular',
            '',
            `Name: ${name}`,
            `Firma: ${payload.firma || '-'}`,
            `E-Mail: ${payload.email}`,
            `Telefon: ${payload.telefon || '-'}`,
            `Anlass: ${payload.anlass || '-'}`,
            `Gewünschtes Datum: ${payload.datum || '-'}`,
            `Personenanzahl: ${payload.personenanzahl || '-'}`,
            '',
            'Nachricht:',
            payload.nachricht || '-',
        ].join('\n');

        await transporter.sendMail({
            from: process.env.CONTACT_FROM_EMAIL,
            to: process.env.CONTACT_TO_EMAIL,
            replyTo,
            subject,
            text,
            html,
        });

        return NextResponse.json({ ok: true });
    } catch (error) {
        console.error('Contact form email failed:', error);
        return NextResponse.json(
            { message: 'Email could not be sent.' },
            { status: 500 }
        );
    }
}
