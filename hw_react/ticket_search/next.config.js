/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['i.postimg.cc']
    },

    webpack(config) {
        // Grab the existing rule that handles SVG imports
        // const fileLoaderRule = config.module.rules.find((rule) =>
        //     rule.test?.test?.('.svg'),
        // );

        config.module.rules.push(
            {
                test: /\.svg$/,
                use: ['@svgr/webpack'],
            }
        );

        // Modify the file loader rule to ignore *.svg, since we have it handled now.
        // fileLoaderRule.exclude = /\.svg$/i;

        return config;

    },
};

module.exports = nextConfig;
