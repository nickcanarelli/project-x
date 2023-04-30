/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        neutral: {
          0: "rgb(var(--color-global-neutral-0) / <alpha-value>)",
          50: "rgb(var(--color-global-neutral-50) / <alpha-value>)",
          100: "rgb(var(--color-global-neutral-100) / <alpha-value>)",
          200: "rgb(var(--color-global-neutral-200) / <alpha-value>)",
          300: "rgb(var(--color-global-neutral-300) / <alpha-value>)",
          400: "rgb(var(--color-global-neutral-400) / <alpha-value>)",
          500: "rgb(var(--color-global-neutral-500) / <alpha-value>)",
          600: "rgb(var(--color-global-neutral-600) / <alpha-value>)",
          700: "rgb(var(--color-global-neutral-700) / <alpha-value>)",
          800: "rgb(var(--color-global-neutral-800) / <alpha-value>)",
          900: "rgb(var(--color-global-neutral-900) / <alpha-value>)",
          1000: "rgb(var(--color-global-neutral-1000) / <alpha-value>)",
          alpha: {
            50: "var(--color-global-neutral-50-alpha)",
            100: "var(--color-global-neutral-100-alpha)",
            200: "var(--color-global-neutral-200-alpha)",
            300: "var(--color-global-neutral-300-alpha)",
            400: "var(--color-global-neutral-400-alpha)",
            500: "var(--color-global-neutral-500-alpha)",
            600: "var(--color-global-neutral-600-alpha)",
            700: "var(--color-global-neutral-700-alpha)",
            800: "var(--color-global-neutral-800-alpha)",
            900: "var(--color-global-neutral-900-alpha)",
          },
        },
        blue: {
          50: "rgb(var(--color-global-blue-50) / <alpha-value>)",
          100: "rgb(var(--color-global-blue-100) / <alpha-value>)",
          200: "rgb(var(--color-global-blue-200) / <alpha-value>)",
          300: "rgb(var(--color-global-blue-300) / <alpha-value>)",
          400: "rgb(var(--color-global-blue-400) / <alpha-value>)",
          500: "rgb(var(--color-global-blue-500) / <alpha-value>)",
          600: "rgb(var(--color-global-blue-600) / <alpha-value>)",
          700: "rgb(var(--color-global-blue-700) / <alpha-value>)",
          800: "rgb(var(--color-global-blue-800) / <alpha-value>)",
          900: "rgb(var(--color-global-blue-900) / <alpha-value>)",
          alpha: {
            50: "var(--color-global-blue-50-alpha)",
            100: "var(--color-global-blue-100-alpha)",
            200: "var(--color-global-blue-200-alpha)",
            300: "var(--color-global-blue-300-alpha)",
            400: "var(--color-global-blue-400-alpha)",
            500: "var(--color-global-blue-500-alpha)",
            600: "var(--color-global-blue-600-alpha)",
          },
        },
        green: {
          50: "rgb(var(--color-global-green-50) / <alpha-value>)",
          100: "rgb(var(--color-global-green-100) / <alpha-value>)",
          200: "rgb(var(--color-global-green-200) / <alpha-value>)",
          300: "rgb(var(--color-global-green-300) / <alpha-value>)",
          400: "rgb(var(--color-global-green-400) / <alpha-value>)",
          500: "rgb(var(--color-global-green-500) / <alpha-value>)",
          600: "rgb(var(--color-global-green-600) / <alpha-value>)",
          700: "rgb(var(--color-global-green-700) / <alpha-value>)",
          800: "rgb(var(--color-global-green-800) / <alpha-value>)",
          900: "rgb(var(--color-global-green-900) / <alpha-value>)",
          alpha: {
            50: "var(--color-global-green-50-alpha)",
            100: "var(--color-global-green-100-alpha)",
            200: "var(--color-global-green-200-alpha)",
            300: "var(--color-global-green-300-alpha)",
            400: "var(--color-global-green-400-alpha)",
            500: "var(--color-global-green-500-alpha)",
            600: "var(--color-global-green-600-alpha)",
          },
        },
        red: {
          50: "rgb(var(--color-global-red-50) / <alpha-value>)",
          100: "rgb(var(--color-global-red-100) / <alpha-value>)",
          200: "rgb(var(--color-global-red-200) / <alpha-value>)",
          300: "rgb(var(--color-global-red-300) / <alpha-value>)",
          400: "rgb(var(--color-global-red-400) / <alpha-value>)",
          500: "rgb(var(--color-global-red-500) / <alpha-value>)",
          600: "rgb(var(--color-global-red-600) / <alpha-value>)",
          700: "rgb(var(--color-global-red-700) / <alpha-value>)",
          800: "rgb(var(--color-global-red-800) / <alpha-value>)",
          900: "rgb(var(--color-global-red-900) / <alpha-value>)",
          alpha: {
            50: "var(--color-global-red-50-alpha)",
            100: "var(--color-global-red-100-alpha)",
            200: "var(--color-global-red-200-alpha)",
            300: "var(--color-global-red-300-alpha)",
            400: "var(--color-global-red-400-alpha)",
            500: "var(--color-global-red-500-alpha)",
            600: "var(--color-global-red-600-alpha)",
          },
        },
        yellow: {
          50: "rgb(var(--color-global-yellow-50) / <alpha-value>)",
          100: "rgb(var(--color-global-yellow-100) / <alpha-value>)",
          200: "rgb(var(--color-global-yellow-200) / <alpha-value>)",
          300: "rgb(var(--color-global-yellow-300) / <alpha-value>)",
          400: "rgb(var(--color-global-yellow-400) / <alpha-value>)",
          500: "rgb(var(--color-global-yellow-500) / <alpha-value>)",
          600: "rgb(var(--color-global-yellow-600) / <alpha-value>)",
          700: "rgb(var(--color-global-yellow-700) / <alpha-value>)",
          800: "rgb(var(--color-global-yellow-800) / <alpha-value>)",
          900: "rgb(var(--color-global-yellow-900) / <alpha-value>)",
          alpha: {
            50: "var(--color-global-yellow-50-alpha)",
            100: "var(--color-global-yellow-100-alpha)",
            200: "var(--color-global-yellow-200-alpha)",
            300: "var(--color-global-yellow-300-alpha)",
            400: "var(--color-global-yellow-400-alpha)",
            500: "var(--color-global-yellow-500-alpha)",
            600: "var(--color-global-yellow-600-alpha)",
          },
        },
        grey: {
          0: "rgb(var(--color-global-grey-0) / <alpha-value>)",
          50: "rgb(var(--color-global-grey-50) / <alpha-value>)",
          100: "rgb(var(--color-global-grey-100) / <alpha-value>)",
          200: "rgb(var(--color-global-grey-200) / <alpha-value>)",
          300: "rgb(var(--color-global-grey-300) / <alpha-value>)",
          400: "rgb(var(--color-global-grey-400) / <alpha-value>)",
          500: "rgb(var(--color-global-grey-500) / <alpha-value>)",
          600: "rgb(var(--color-global-grey-600) / <alpha-value>)",
          700: "rgb(var(--color-global-grey-700) / <alpha-value>)",
          800: "rgb(var(--color-global-grey-800) / <alpha-value>)",
          900: "rgb(var(--color-global-grey-900) / <alpha-value>)",
          1000: "rgb(var(--color-global-grey-1000) / <alpha-value>)",
          alpha: {
            50: "var(--color-global-grey-50-alpha)",
            100: "var(--color-global-grey-100-alpha)",
            200: "var(--color-global-grey-200-alpha)",
            300: "var(--color-global-grey-300-alpha)",
            400: "var(--color-global-grey-400-alpha)",
            500: "var(--color-global-grey-500-alpha)",
            600: "var(--color-global-grey-600-alpha)",
            700: "var(--color-global-grey-700-alpha)",
            800: "var(--color-global-grey-800-alpha)",
            900: "var(--color-global-grey-900-alpha)",
          },
        },
        accent: {
          contrast: "rgb(var(--color-accent-contrast) / <alpha-value>)",
          background: "var(--color-accent-background)",
          primary: "rgb(var(--color-accent-primary) / <alpha-value>)",
          light: "rgb(var(--color-accent-light) / <alpha-value>)",
          medium: "rgb(var(--color-accent-medium) / <alpha-value>)",
        },
        success: {
          primary: "rgb(var(--color-success-primary) / <alpha-value>)",
          light: "var(--color-success-light)",
          medium: "rgb(var(--color-success-medium) / <alpha-value>)",
          contrast: "rgb(var(--color-success-contrast) / <alpha-value>)",
        },
        warning: {
          primary: "rgb(var(--color-warning-primary) / <alpha-value>)",
          light: "var(--color-warning-light)",
          medium: "rgb(var(--color-warning-medium) / <alpha-value>)",
          contrast: "rgb(var(--color-warning-contrast) / <alpha-value>)",
        },
        error: {
          primary: "rgb(var(--color-error-primary) / <alpha-value>)",
          light: "var(--color-error-light)",
          medium: "rgb(var(--color-error-medium) / <alpha-value>)",
          contrast: "rgb(var(--color-error-contrast) / <alpha-value>)",
        },
        info: {
          primary: "rgb(var(--color-info-primary) / <alpha-value>)",
          light: "var(--color-info-light)",
          medium: "rgb(var(--color-info-medium) / <alpha-value>)",
          contrast: "rgb(var(--color-info-contrast) / <alpha-value>)",
        },
        border: {
          light: "rgb(var(--color-border-light) / <alpha-value>)",
          dark: "rgb(var(--color-border-dark) / <alpha-value>)",
          disabled: "rgb(var(--color-border-disabled) / <alpha-value>)",
        },
        divider: "rgb(var(--color-divider) / <alpha-value>)",
        backdrop: "rgb(var(--color-backdrop) / <alpha-value>)",
        twitch: {
          primary: "rgb(var(--color-twitch-primary) / <alpha-value>)",
          medium: "rgb(var(--color-twitch-medium) / <alpha-value>)",
          "primary-alpha": "var(--color-twitch-primary-alpha)",
        },
      },
      textColor: {
        contrast: "rgb(var(--color-text-contrast) / <alpha-value>)",
        primary: "rgb(var(--color-text-primary) / <alpha-value>)",
        secondary: "rgb(var(--color-text-secondary) / <alpha-value>)",
        hint: "rgb(var(--color-text-hint) / <alpha-value>)",
        disabled: "rgb(var(--color-text-disabled) / <alpha-value>)",
      },
      borderColor: {
        light: "rgb(var(--color-border-light) / <alpha-value>)",
        dark: "rgb(var(--color-border-dark) / <alpha-value>)",
        disabled: "rgb(var(--color-border-disabled) / <alpha-value>)",
        divider: "var(--color-divider)",
      },
      backgroundColor: {
        neutral: {
          0: "rgb(var(--color-global-neutral-0) / <alpha-value>)",
          50: "rgb(var(--color-global-neutral-50) / <alpha-value>)",
          100: "rgb(var(--color-global-neutral-100) / <alpha-value>)",
          200: "rgb(var(--color-global-neutral-200) / <alpha-value>)",
          300: "rgb(var(--color-global-neutral-300) / <alpha-value>)",
          400: "rgb(var(--color-global-neutral-400) / <alpha-value>)",
          500: "rgb(var(--color-global-neutral-500) / <alpha-value>)",
          600: "rgb(var(--color-global-neutral-600) / <alpha-value>)",
          700: "rgb(var(--color-global-neutral-700) / <alpha-value>)",
          800: "rgb(var(--color-global-neutral-800) / <alpha-value>)",
          900: "rgb(var(--color-global-neutral-900) / <alpha-value>)",
          1000: "rgb(var(--color-global-neutral-1000) / <alpha-value>)",
          alpha: {
            50: "var(--color-global-neutral-50-alpha)",
            100: "var(--color-global-neutral-100-alpha)",
            200: "var(--color-global-neutral-200-alpha)",
            300: "var(--color-global-neutral-300-alpha)",
            400: "var(--color-global-neutral-400-alpha)",
            500: "var(--color-global-neutral-500-alpha)",
            600: "var(--color-global-neutral-600-alpha)",
            700: "var(--color-global-neutral-700-alpha)",
            800: "var(--color-global-neutral-800-alpha)",
            900: "var(--color-global-neutral-900-alpha)",
          },
        },
        blue: {
          50: "rgb(var(--color-global-blue-50) / <alpha-value>)",
          100: "rgb(var(--color-global-blue-100) / <alpha-value>)",
          200: "rgb(var(--color-global-blue-200) / <alpha-value>)",
          300: "rgb(var(--color-global-blue-300) / <alpha-value>)",
          400: "rgb(var(--color-global-blue-400) / <alpha-value>)",
          500: "rgb(var(--color-global-blue-500) / <alpha-value>)",
          600: "rgb(var(--color-global-blue-600) / <alpha-value>)",
          700: "rgb(var(--color-global-blue-700) / <alpha-value>)",
          800: "rgb(var(--color-global-blue-800) / <alpha-value>)",
          900: "rgb(var(--color-global-blue-900) / <alpha-value>)",
          alpha: {
            50: "var(--color-global-blue-50-alpha)",
            100: "var(--color-global-blue-100-alpha)",
            200: "var(--color-global-blue-200-alpha)",
            300: "var(--color-global-blue-300-alpha)",
            400: "var(--color-global-blue-400-alpha)",
            500: "var(--color-global-blue-500-alpha)",
            600: "var(--color-global-blue-600-alpha)",
          },
        },
        green: {
          50: "rgb(var(--color-global-green-50) / <alpha-value>)",
          100: "rgb(var(--color-global-green-100) / <alpha-value>)",
          200: "rgb(var(--color-global-green-200) / <alpha-value>)",
          300: "rgb(var(--color-global-green-300) / <alpha-value>)",
          400: "rgb(var(--color-global-green-400) / <alpha-value>)",
          500: "rgb(var(--color-global-green-500) / <alpha-value>)",
          600: "rgb(var(--color-global-green-600) / <alpha-value>)",
          700: "rgb(var(--color-global-green-700) / <alpha-value>)",
          800: "rgb(var(--color-global-green-800) / <alpha-value>)",
          900: "rgb(var(--color-global-green-900) / <alpha-value>)",
          alpha: {
            50: "var(--color-global-green-50-alpha)",
            100: "var(--color-global-green-100-alpha)",
            200: "var(--color-global-green-200-alpha)",
            300: "var(--color-global-green-300-alpha)",
            400: "var(--color-global-green-400-alpha)",
            500: "var(--color-global-green-500-alpha)",
            600: "var(--color-global-green-600-alpha)",
          },
        },
        red: {
          50: "rgb(var(--color-global-red-50) / <alpha-value>)",
          100: "rgb(var(--color-global-red-100) / <alpha-value>)",
          200: "rgb(var(--color-global-red-200) / <alpha-value>)",
          300: "rgb(var(--color-global-red-300) / <alpha-value>)",
          400: "rgb(var(--color-global-red-400) / <alpha-value>)",
          500: "rgb(var(--color-global-red-500) / <alpha-value>)",
          600: "rgb(var(--color-global-red-600) / <alpha-value>)",
          700: "rgb(var(--color-global-red-700) / <alpha-value>)",
          800: "rgb(var(--color-global-red-800) / <alpha-value>)",
          900: "rgb(var(--color-global-red-900) / <alpha-value>)",
          alpha: {
            50: "var(--color-global-red-50-alpha)",
            100: "var(--color-global-red-100-alpha)",
            200: "var(--color-global-red-200-alpha)",
            300: "var(--color-global-red-300-alpha)",
            400: "var(--color-global-red-400-alpha)",
            500: "var(--color-global-red-500-alpha)",
            600: "var(--color-global-red-600-alpha)",
          },
        },
        yellow: {
          50: "rgb(var(--color-global-yellow-50) / <alpha-value>)",
          100: "rgb(var(--color-global-yellow-100) / <alpha-value>)",
          200: "rgb(var(--color-global-yellow-200) / <alpha-value>)",
          300: "rgb(var(--color-global-yellow-300) / <alpha-value>)",
          400: "rgb(var(--color-global-yellow-400) / <alpha-value>)",
          500: "rgb(var(--color-global-yellow-500) / <alpha-value>)",
          600: "rgb(var(--color-global-yellow-600) / <alpha-value>)",
          700: "rgb(var(--color-global-yellow-700) / <alpha-value>)",
          800: "rgb(var(--color-global-yellow-800) / <alpha-value>)",
          900: "rgb(var(--color-global-yellow-900) / <alpha-value>)",
          alpha: {
            50: "var(--color-global-yellow-50-alpha)",
            100: "var(--color-global-yellow-100-alpha)",
            200: "var(--color-global-yellow-200-alpha)",
            300: "var(--color-global-yellow-300-alpha)",
            400: "var(--color-global-yellow-400-alpha)",
            500: "var(--color-global-yellow-500-alpha)",
            600: "var(--color-global-yellow-600-alpha)",
          },
        },
        grey: {
          0: "rgb(var(--color-global-grey-0) / <alpha-value>)",
          50: "rgb(var(--color-global-grey-50) / <alpha-value>)",
          100: "rgb(var(--color-global-grey-100) / <alpha-value>)",
          200: "rgb(var(--color-global-grey-200) / <alpha-value>)",
          300: "rgb(var(--color-global-grey-300) / <alpha-value>)",
          400: "rgb(var(--color-global-grey-400) / <alpha-value>)",
          500: "rgb(var(--color-global-grey-500) / <alpha-value>)",
          600: "rgb(var(--color-global-grey-600) / <alpha-value>)",
          700: "rgb(var(--color-global-grey-700) / <alpha-value>)",
          800: "rgb(var(--color-global-grey-800) / <alpha-value>)",
          900: "rgb(var(--color-global-grey-900) / <alpha-value>)",
          1000: "rgb(var(--color-global-grey-1000) / <alpha-value>)",
          alpha: {
            50: "var(--color-global-grey-50-alpha)",
            100: "var(--color-global-grey-100-alpha)",
            200: "var(--color-global-grey-200-alpha)",
            300: "var(--color-global-grey-300-alpha)",
            400: "var(--color-global-grey-400-alpha)",
            500: "var(--color-global-grey-500-alpha)",
            600: "var(--color-global-grey-600-alpha)",
            700: "var(--color-global-grey-700-alpha)",
            800: "var(--color-global-grey-800-alpha)",
            900: "var(--color-global-grey-900-alpha)",
          },
        },
        accent: {
          contrast: "rgb(var(--color-accent-contrast) / <alpha-value>)",
          background: "var(--color-accent-background)",
          primary: "rgb(var(--color-accent-primary) / <alpha-value>)",
          light: "rgb(var(--color-accent-light) / <alpha-value>)",
          medium: "rgb(var(--color-accent-medium) / <alpha-value>)",
        },
        success: {
          primary: "rgb(var(--color-success-primary) / <alpha-value>)",
          light: "var(--color-success-light)",
          medium: "rgb(var(--color-success-medium) / <alpha-value>)",
          contrast: "rgb(var(--color-success-contrast) / <alpha-value>)",
        },
        warning: {
          primary: "rgb(var(--color-warning-primary) / <alpha-value>)",
          light: "var(--color-warning-light)",
          medium: "rgb(var(--color-warning-medium) / <alpha-value>)",
          contrast: "rgb(var(--color-warning-contrast) / <alpha-value>)",
        },
        error: {
          primary: "rgb(var(--color-error-primary) / <alpha-value>)",
          light: "var(--color-error-light)",
          medium: "rgb(var(--color-error-medium) / <alpha-value>)",
          contrast: "rgb(var(--color-error-contrast) / <alpha-value>)",
        },
        info: {
          primary: "rgb(var(--color-info-primary) / <alpha-value>)",
          light: "var(--color-info-light)",
          medium: "rgb(var(--color-info-medium) / <alpha-value>)",
          contrast: "rgb(var(--color-info-contrast) / <alpha-value>)",
        },
        divider: "var(--color-divider)",
        backdrop: "var(--color-backdrop)",
        surface: "rgb(var(--color-bg-surface) / <alpha-value>)",
        light: "rgb(var(--color-bg-light) / <alpha-value>)",
        medium: "rgb(var(--color-bg-medium) / <alpha-value>)",
        contrast: "rgb(var(--color-bg-contrast) / <alpha-value>)",
        canvas: "rgb(var(--color-bg-canvas) / <alpha-value>)",
        twitch: {
          primary: "rgb(var(--color-twitch-primary) / <alpha-value>)",
          medium: "rgb(var(--color-twitch-medium) / <alpha-value>)",
          "primary-alpha": "var(--color-twitch-primary-alpha)",
        },
        riot: {
          primary: "rgb(var(--color-riot-primary) / <alpha-value>)",
          medium: "rgb(var(--color-riot-medium) / <alpha-value>)",
          "primary-alpha": "var(--color-riot-primary-alpha)",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      boxShadow: {
        "input-focus": "0px 0px 10px rgb(var(--color-accent-primary) / 0.3)",
        "input-error": "0px 0px 10px rgb(var(--color-error-primary) / 0.3)",
      },
    },
  },
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/typography")],
};