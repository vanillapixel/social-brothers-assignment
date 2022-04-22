import { styled } from "../../styles/stitches.config";

const Text = styled("span", {
	fontSize: "$s",
	color: "$gray25",
	fontFamily: "Proxima Nova Light",
	"&:first-letter": { textTransform: "capitalize" },
	variants: {
		color: {
			light: {
				color: "$gray53",
			},
		},
		type: {
			detailText: {
				fontSize: "8px",
				color: "$white100",
				fontFamily: "Proxima Nova Thin",
				fontStyle: "italic",
			},
			pageTitle: {
				position: "absolute",
				margin: "auto",
				bottom: "20%",
				color: "$white100",
				left: "50%",
				transform: "translate(-50%, -50%)",
				textTransform: "capitalize",
				fontFamily: "Proxima Nova Bold",
				fontWeight: 800,
				fontSize: "$xl",
			},
			title: {
				fontSize: "$l",
				color: "$gray17",
				fontFamily: "Proxima Nova Bold",
			},
			error: {
				color: "red",
			},
		},
	},
});

export default Text;
