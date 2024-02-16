/** @type {import('next').NextConfig} */
const nextConfig = {
  redirects() {
    return [
      {
        source: "/docs/components",
        destination: "/docs/components/accordion",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
