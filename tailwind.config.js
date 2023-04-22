module.exports = {
	darkMode: "class",
	content: [
		"./src/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		container: {
			center: true,
			padding: "1rem",
		},
		extend: {
			colors: {
				primary: "FF8B13",
				secondary: "FC2947",

				// dark mode Typography
				"text-primary-dark": "#fff",
				"text-secondary-dark": "rgba(255, 255, 255, 0.7)",
				"text-disabled-dark": "rgba(255, 255, 255, 0.5)",
				// dark mode Buttons
				"action-active-dark": "#fff",
				"action-hover-dark": "rgba(255, 255, 255, 0.08)",
				"action-selected-dark": "rgba(255, 255, 255, 0.16)",
				"action-disabled-dark": "rgba(255, 255, 255, 0.3)",
				"action-disabledBackground-dark": "rgba(255, 255, 255, 0.12)",
				// dark mode Background
				"background-default-dark": "#121212",
				// dark mode Divider
				"divider-dark": "rgba(255, 255, 255, 0.12)",


				// lighte mode Typography
				"text-primary": "rgba(0, 0, 0, 0.87)",
				"text-secondary": "rgba(0, 0, 0, 0.6)",
				"text-disabled": "rgba(0, 0, 0, 0.38)",
				// lighte mode Buttons
				"action-active": "rgba(0, 0, 0, 0.54)",
				"action-hover": "rrgba(0, 0, 0, 0.04)",
				"action-selected": "rgba(0, 0, 0, 0.08)",
				"action-disabled": "rgba(0, 0, 0, 0.26)",
				"action-disabledBackground": "rgba(0, 0, 0, 0.12)",
				// lighte mode Background
				"background-default": "#fff",
				// dark mode Divider
				"divider": "rgba(0, 0, 0, 0.12)",
			},
		},
	},
	plugins: [],
};
