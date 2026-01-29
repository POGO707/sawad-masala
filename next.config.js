/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: '**.swaadvaad.com',
            },
            {
                protocol: 'https',
                hostname: '**.instagram.com',
            },
            {
                protocol: 'https',
                hostname: '**.fbcdn.net',
            },
        ],
        formats: ['image/avif', 'image/webp'],
    },
    env: {
        WHATSAPP_NUMBER: process.env.WHATSAPP_NUMBER || '919876543210',
        MONGODB_URI: process.env.MONGODB_URI || 'mongodb://localhost:27017/swaadvaad',
        SMTP_HOST: process.env.SMTP_HOST || 'smtp.gmail.com',
        SMTP_USER: process.env.SMTP_USER || '',
        SMTP_PASS: process.env.SMTP_PASS || '',
    },
}

module.exports = nextConfig