import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // Disabled: on case-insensitive filesystems this collides with and
  // overwrites the project's own claude.md instructions file.
  agentRules: false,
};

export default nextConfig;
