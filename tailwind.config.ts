import type { Config } from "tailwindcss";

const tailwindConfig = {
	content: ["./src/**/*.{ts,tsx,mdx}"],

	theme: {
		screens: {
			sm: "480px",
			md: "768px",
			lg: "1000px",
			xl: "1280px",
		},

		extend: {
			colors: {
				medinfo: {
					primary: "var(--color-primary)",
					"primary-darker": "var(--color-primary-darker)",
					"primary-lighter": "var(--color-primary-lighter)",
					"primary-subtle": "var(--color-primary-subtle)",
					secondary: "var(--color-secondary)",
					"secondary-darker": "var(--color-seconday-darker)",
					"secondary-lighter": "var(--color-secondary-lighter)",
					"secondary-subtle": "var(--color-secondary-subtle)",
				},
			},

			fontFamily: {
				roboto: ["var(--font-roboto)"],
				"work-sans": ["var(--font-work-sans)"],
			},
		},
	},

	plugins: [],
} satisfies Config;

export default tailwindConfig;
