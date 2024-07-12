/** @type {import('next').NextConfig} */


const nextConfig = {
    reactStrictMode:false,
    eslint: {
        ignoreDuringBuilds: true,
    },
    typescript: {
        ignoreBuildErrors: true,
    },
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: '',
                port: '',
                pathname: '',
            },
        ],
    },

};

export default nextConfig;
