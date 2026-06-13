import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
    compress: true,
    poweredByHeader: false,
    images: {
        formats: ['image/avif', 'image/webp'],
        qualities: [75, 82, 90],
        minimumCacheTTL: 31536000,
    },
    experimental: {
        optimizeCss: false, // Disabled to fix 'critters' error
    },
};

export default withNextIntl(nextConfig);
