/** @type {import('next').NextConfig} */
const nextConfig = {
  redirects() {
    return [
      {
        source: "/docs/components",
        destination: "/docs/components/stagger-text",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
