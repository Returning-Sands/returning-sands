import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // The Stripe payment link was configured to return donors to the old
      // single-page URL. Send them to the Donate page, where the thank-you
      // banner now lives, until the Stripe return URL is updated.
      {
        source: "/",
        has: [{ type: "query", key: "thanks", value: "1" }],
        destination: "/donate?thanks=1",
        permanent: false,
      },
      {
        source: "/ar",
        has: [{ type: "query", key: "thanks", value: "1" }],
        destination: "/ar/donate?thanks=1",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
