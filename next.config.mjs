/** @type {import('next').NextConfig} */
const nextConfig = {
    // Output configuration for static export
    // output: 'export',

    // Enable React Strict Mode
    reactStrictMode: true,

    // Enable SWC minification for faster builds
    swcMinify: true,

    // Specify custom page extensions if you use both .jsx and .tsx
    pageExtensions: ['js', 'jsx', 'ts', 'tsx'],

    // Add custom Webpack configurations (if needed)
    webpack: (config) => {
      // Example: Add specific loaders or aliases
      return config;
    },

    // For external images (only needed if you uncomment <Image /> in your code)
    images: {
      unoptimized: true, // Required for 'output: export' mode
      domains: ['files.stripe.com'], // Add domains for external images
    },
  };

  export default nextConfig;
