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
				primary: "var(--color-primary)",
				"primary-darker": "var(--color-primary-darker)",
				"primary-lighter": "var(--color-primary-lighter)",
				"primary-subtle": "var(--color-primary-subtle)",
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
