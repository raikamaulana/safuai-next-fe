/** @type {import('next').NextConfig} */
const path = require('path')
const { withSentryConfig } = require("@sentry/nextjs")
const removeImports = require("next-remove-imports")();

const SentryWebpackPluginOptions = {
  // Additional config options for the Sentry Webpack plugin. Keep in mind that
  // the following options are set automatically, and overriding them is not
  // recommended:
  //   release, url, org, project, authToken, configFile, stripPrefix,
  //   urlPrefix, include, ignore
  silent: true, // Suppresses all logs
  // For all available options, see:
  // https://github.com/getsentry/sentry-webpack-plugin#options.
}

const nextConfig = {
  reactStrictMode: true,
  webpack(config) {
    config.resolve.modules.push(path.resolve('./src'))
    return config
  },
  env: {
    API_URL: process.env.API_URL,
    APP_URL: process.env.APP_URL,
  },
  optimization: {
    minimize: true,
    usedExports: true,
    sideEffects: true,
    concatenateModules: true,
  },
  api: {
    externalResolver: true,
  },
  compression: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'dynamic-audit.blocksafu.com',
        port: '',
        pathname: '/images/**',
      },
    ],
  },
}

module.exports = removeImports({
  experimental: { esmExternals: true },
  ...withSentryConfig(nextConfig, SentryWebpackPluginOptions)
});
