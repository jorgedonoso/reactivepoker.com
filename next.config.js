const withSass = require('@zeit/next-sass');
const withCSS = require("@zeit/next-css");

module.exports = withCSS(withSass({
    webpack(config, options) {

        config.module.rules.push({
            test: /\.(png)$/,
            use: {
                loader: 'url-loader'
            }
        });

        return config;
    }
}));