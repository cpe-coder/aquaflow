/** @type {import('tailwindcss').Config} */
module.exports = {
	// NOTE: Update this to include the paths to all of your component files.
	content: [
		"./app/**/*.{js,jsx,ts,tsx}",
		"./components/**/*.{js,jsx,ts,tsx}",
		"./global.css",
	],
	presets: [require("nativewind/preset")],
	theme: {
		extend: {
			colors: {
				background: "#0a0f1c",
				primary: "#00ffb2",
				secondary: "#ff3c38",
				text: "#ffffff",
				secondText: "#a0a0a0",
				customBlack: "#020e1a",
			},
		},
	},
	plugins: [],
};
