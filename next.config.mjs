/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        port: '',
        hostname: 'images.unsplash.com',
        pathname: '/*'
      }
    ]
  },
  compiler: {
    styledComponents: true,
  },
  sassOptions: {
    additionalData: `@import "src/styles/utils/variables.scss";`,
  },
}

export default nextConfig;
