/**
 * This is a minimal config.
 *
 * If you need the full config, get it from here:
 * https://unpkg.com/browse/tailwindcss@latest/stubs/defaultConfig.stub.js
 */
 const defaultTheme = require('tailwindcss/defaultTheme')
 
 module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        screens: {
            'sm': '640px',
            'md': '768px',
            'lg': '960px',
            'xl': '1200px',
            '2xl': '1440px',
        },
        fontFamily: {
            sans: ['Source Sans Pro', ...defaultTheme.fontFamily.sans],
            serif: ['Source Serif Pro', ...defaultTheme.fontFamily.serif],
        },
        extend: {
            typography: (theme) => ({
                DEFAULT: {
                    css: {
                        fontSize: theme('fontSize.xl')[0],
                        h1: {
                            fontFamily: theme('fontFamily.serif'),
                            fontWeight: theme('fontWeight.semibold'),
                            fontSize: theme('fontSize.5xl')[0],
                            lineHeight: '1.2',
                            margin: '0 0 0.5em 0',
                        },
                        'h1 + h2': {
                            margin: '-0.25em 0 0.5em 0',
                        },
                        h2: {
                            fontFamily: theme('fontFamily.serif'),
                            fontWeight: theme('fontWeight.semibold'),
                            fontSize: theme('fontSize.4xl')[0],
                            margin: '1em 0 0.333em 0',
                            lineHeight: '1.333',
                        },
                        h3: {
                            fontFamily: theme('fontFamily.serif'),
                            fontWeight: theme('fontWeight.semibold'),
                            fontSize: theme('fontSize.3xl')[0],
                            margin: '1em 0 0.333em 0',
                            lineHeight: '1.333',
                        },
                        h4: {
                            fontFamily: theme('fontFamily.serif'),
                            fontWeight: theme('fontWeight.semibold'),
                            fontSize: theme('fontSize.2xl')[0],
                            margin: '1em 0 0.333em 0',
                            lineHeight: '1.333',
                        },
                        h5: {
                            fontFamily: theme('fontFamily.serif'),
                            fontWeight: theme('fontWeight.semibold'),
                            fontSize: theme('fontSize.xl')[0],
                            margin: '1em 0 0.333em 0',
                            lineHeight: '1.333',
                        },
                        h6: {
                            fontFamily: theme('fontFamily.serif'),
                            fontWeight: theme('fontWeight.semibold'),
                            fontSize: theme('fontSize.lg')[0],
                            margin: '1em 0 0.333em 0',
                            lineHeight: '1.333',
                        },
                        a: {
                            textDecoration: 'none',
                            '&:hover': {
                                textDecoration: 'underline',
                            },
                        },
                        p: {
                            lineHeight: '1.6',
                            margin: '0 0 1em 0',
                        }
                    }
                },
                'base': {
                    css: {
                        fontSize: theme('fontSize.lg')[0],
                    }
                },
                'xl': {
                    css: {
                        fontSize: theme('fontSize.xl')[0],
                        h1: {
                            fontSize: theme('fontSize.6xl')[0],
                            margin: '1em 0 0.5em 0',
                            lineHeight: '1.333',
                        },
                        'h1 + h2': {
                            margin: '-0.25em 0 0.5em 0',
                        },
                        h2: {
                            fontSize: theme('fontSize.5xl')[0],
                            margin: '1em 0 0.5em 0',
                            lineHeight: '1.333',
                        },
                        h3: {
                            fontSize: theme('fontSize.4xl')[0],
                            margin: '1em 0 0.5em 0',
                            lineHeight: '1.333',
                        },
                        h4: {
                            fontSize: theme('fontSize.3xl')[0],
                            margin: '1em 0 0.5em 0',
                            lineHeight: '1.55',
                        },
                        h5: {
                            fontSize: theme('fontSize.2xl')[0],
                            margin: '1em 0 0.333em 0',
                            lineHeight: '1.66',
                        },
                        h6: {
                            fontSize: theme('fontSize.xl')[0],
                            margin: '1em 0 0.333em 0',
                            lineHeight: '1.66',
                        },
                        p: {
                            margin: '0 0 1em 0',
                            lineHeight: '1.6',
                        }
                    }
                }
            })
        },
    },
    plugins: [
        require('@tailwindcss/typography')
    ],
}
