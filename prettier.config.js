// prettier.config.js

/**
 * @see https://prettier.io/docs/configuration
 * @type {import("prettier").Config}
 */

export default {
    plugins: ['prettier-plugin-astro','prettier-plugin-tailwindcss'],
    overrides: [
        {
            files: '*.astro',
            options: {
                parser: 'astro',
                
            }
        },
    ],
    
    tabWidth: 2,
    bracketSameLine: true,

} 