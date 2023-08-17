/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'a.storyblok.com',
                port: '',
                pathname: '/f/**',
            },
            {
                protocol: 'https',
                hostname: 'significa.co',
                port: '',
                pathname: '/_app/immutable/assets/**',
            },
        ],
    },
}

module.exports = nextConfig
