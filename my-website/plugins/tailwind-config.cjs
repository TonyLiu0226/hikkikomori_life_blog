function tailwindPlugin(context, options) {
    return {
        name: 'tailwind-plugin',
        configurePostCss(postCssOptions) {
            postCssOptions.plugins = [
                require('postcss-import'),
                require('tailwindcss'),
                require('autoprefixer'),
            ];
            return postCssOptions;
        },
    };
}

module.exports = tailwindPlugin;