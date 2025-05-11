import type { NextConfig } from "next";

import createNextIntlPlugin from 'next-intl/plugin';
const withNextIntl = createNextIntlPlugin();

const nextConfig: NextConfig = {
  output: 'export',
  typescript: {
    // ⚠️ Isso ignora erros de tipo durante o build - use apenas temporariamente
    ignoreBuildErrors: true,
  },
};

export default withNextIntl(nextConfig);
