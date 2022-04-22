import { styled } from "../../styles/stitches.config";

const Grid = styled("div", {
	display: "grid",
	gap: "$l",
	gridTemplateColumns: "repeat(2, 1fr)",
	"@mobile": {
		gridTemplateColumns: "repeat(1, 1fr)",
	},
	"@tablet": {
		gridTemplateColumns: "repeat(1, 1fr)",
	},
	"@desktop": {
		gridTemplateColumns: "repeat(2, 1fr)",
	},
	variants: {
		homeContainer: {
			true: {
				"@mobile": {
					gridTemplateColumns: "repeat(1, 1fr)",
					gap: "$xl",
					padding: "$xl",
				},
				"@tablet": {
					gridTemplateColumns: "repeat(1, 1fr)",
				},
				"@desktop": {
					gridTemplateColumns: ".9fr 1fr",
				},
			},
		},
		columns: {
			1: { gridTemplateColumns: "repeat(1, 1fr)" },
			2: {
				"@mobile": {
					gridTemplateColumns: "repeat(1, 1fr)",
					gap: "$xl",
					padding: "$xl",
				},
				"@tablet": {
					gridTemplateColumns: "repeat(1, 1fr)",
				},
				"@desktop": {
					gridTemplateColumns: "repeat(2, 1fr)",
				},
			},

			4: {
				"@mobile": {
					gridTemplateColumns: "repeat(1, 1fr)",
					gap: "$xl",
					padding: "$xl",
				},
				"@tablet": {
					gridTemplateColumns: "repeat(2, 1fr)",
				},
				"@desktop": {
					gridTemplateColumns: "repeat(4, 1fr)",
				},
			},

			8: {
				"@mobile": {
					gridTemplateColumns: "repeat(2, 1fr)",
				},
				"@tablet": {
					gridTemplateColumns: "repeat(4, 1fr)",
				},
				"@desktop": {
					gridTemplateColumns: "repeat(8, 1fr)",
				},
			},
		},
	},
});

export default Grid;
