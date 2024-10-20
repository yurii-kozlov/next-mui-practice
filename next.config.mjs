/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  sassOptions: {
    additionalData: `@import "src/styles/utils/variables.scss";`,
  },
}

export default nextConfig;
