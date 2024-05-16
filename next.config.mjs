/** @type {import('next').NextConfig} */



const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'images.ctfassets.net',
          port: '',
          pathname: '/769v6chai5nq/**',
        },
      ],
    },
  };

export default nextConfig;


