import type { Config } from "tailwindcss";

const tailwindConfig = {
	content: ["./app/**/*.{js,ts,jsx,tsx,mdx}"],

	theme: {
		extend: {},
	},

	plugins: [],
} satisfies Config;

export default tailwindConfig;
