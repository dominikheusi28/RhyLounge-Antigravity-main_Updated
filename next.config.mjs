import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
    compress: true,
    poweredByHeader: false,
    images: {
        formats: ['image/avif', 'image/webp'],
        minimumCacheTTL: 31536000,
    },
    experimental: {
        optimizeCss: false, // Disabled to fix 'critters' error
    },
};

export default withNextIntl(nextConfig);
