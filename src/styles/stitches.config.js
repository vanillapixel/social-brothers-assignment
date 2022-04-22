import { createStitches, globalCss } from "@stitches/react";

export const { styled, keyframes } = createStitches({
	theme: {
		colors: {
			orangeFlame600: "hsl(15 100% 68%)",
			orangeFlame700: "hsl(15 81% 64%)",
			orangeFlame800: "hsl(24 89% 54%)",
			orangeFlame900: "hsl(15 93% 56%)",

			gray77: "hsl(0 0% 77%)",
			gray53: "hsl(0 0% 53%)",
			gray49: "hsl(0 0% 49%)",
			gray25: "hsl(0 0% 25%)",
			gray17: "hsl(0 0% 17%)",
			gray15: "hsl(0 0% 15%)",

			white96: "hsl(0 0% 96%)",
			white98: "hsl(0 0% 98%)",
			white100: "hsl(0 0% 100%)",
		},
		fontSizes: {
			xs: "clamp(9px, 1rem, 12px)",
			s: "clamp(11px, 1.2rem, 14px)",
			m: "clamp(14px, 1.8rem, 20px)",
			l: "clamp(18px, 2.4rem, 28px)",
			xl: "clamp(25px, 4.8rem, 52px)",
		},
		space: {
			none: "0",
			xs: ".6rem",
			s: ".8rem",
			m: "1.2rem",
			l: "2.4rem",
			xl: "4.8rem",
		},
		sizes: {
			auto: "auto",
			"100%": "100%",
		},
	},
	media: {
		mobile: "(max-width: 767px)",
		tablet: "(min-width: 768px)",
		desktop: "(min-width: 1024px)",
	},
	utils: {
		columns: (value) => ({
			gridTemplateColumns: value,
		}),
		padding: (value) => ({
			padding: value,
		}),
	},
});

export const globalStyle = globalCss({
	"@font-face": [
		{
			fontFamily: "Proxima Nova Regular",
			src: "url(/fonts/ProximaNova-Regular.otf)",
		},
		{
			fontFamily: "Proxima Nova Bold",
			src: "url(/fonts/ProximaNova-Bold.otf)",
		},
		{
			fontFamily: "Proxima Nova Light",
			src: "url(/fonts/ProximaNova-Light.otf)",
		},
		{
			fontFamily: "Proxima Nova Thin",
			src: "url(/fonts/ProximaNova-Thin.otf)",
		},
	],
	"*": {
		margin: 0,
		padding: 0,
		boxSizing: "border-box",
		position: "relative",
		fontFamily: "Proxima Nova Regular",
	},
	html: {
		fontSize: "calc(4px + 0.31834vw)",
	},
	main: {
		backgroundColor: "$white96",
		padding: "5rem",
	},
	input: {
		width: "100%",
		backgroundColor: "inherit",
		borderColor: "transparent",
		outline: "none",
	},
	select: {
		width: "100%",
		backgroundColor: "inherit",
		borderColor: "transparent",
		outline: "none",
	},
	textarea: {
		width: "100%",
		backgroundColor: "inherit",
		borderColor: "transparent",
		outline: "none",
	},
	a: {
		textDecoration: "none",
		"&:hover": { textDecoration: "none" },
		"&:focus": { textDecoration: "none" },
		"&:active": { textDecoration: "none" },
	},
	ul: {
		listStyle: "none",
	},
});
