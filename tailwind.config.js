module.exports = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx}",
		"./src/components/**/*.{js,ts,jsx,tsx}",
		"./src/app/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		dark: "class",
		container: {
			center: true,
			padding: "1rem",
		},
		extend: {
			colors: {
				primary: "FF8B13",
				secondary: "FC2947",
			},
		},
	},
	plugins: [],
};
