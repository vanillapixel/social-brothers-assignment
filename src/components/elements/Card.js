import { styled } from "../../styles/stitches.config";

const Card = styled("div", {
	display: "flex",
	flexDirection: "column",
	background: "$white100",
	padding: "2.5rem",
	gap: "2rem",
	variants: {
		size: {
			none: {
				gap: "$none",
				margin: "$none",
				padding: "$none",
			},
			xs: {
				fontSize: "$xs",
				margin: "$xs",
				padding: "$xs",
				gap: "$xs",
			},
			s: {
				fontSize: "$s",
				margin: "$s",
				padding: "$s",
				gap: "$s",
			},
			m: {
				fontSize: "$m",
				margin: "$m",
				padding: "$m",
				gap: "$m",
			},
			l: {
				fontSize: "$l",
				margin: "$l",
				padding: "$l",
				gap: "$l",
			},
			xl: {
				fontSize: "$l",
				margin: "$l",
				padding: "$l",
				gap: "$l",
			},
		},
		gap: {
			none: { gap: "$none" },
			xs: { gap: "$xs" },
			s: { gap: "$s" },
			m: { gap: "$m" },
			l: { gap: "$l" },
			xl: { gap: "$xl" },
		},
		fontSize: {
			xs: { fontSize: "$xs" },
			s: { fontSize: "$s" },
			m: { fontSize: "$m" },
			l: { fontSize: "$l" },
			xl: { fontSize: "$xl" },
		},
		padding: {
			none: { padding: "$none" },
			xs: { padding: "$xs" },
			s: { padding: "$s" },
			m: { padding: "$m" },
			l: { padding: "$l" },
			xl: { padding: "$xl" },
		},
		margin: {
			none: { margin: "$none" },
			xs: { margin: "$xs" },
			s: { margin: "$s" },
			m: { margin: "$m" },
			l: { margin: "$l" },
			zl: { margin: "$zl" },
		},
		boxShadow: {
			none: {
				boxShadow: "$none",
			},
			light: {
				boxShadow: "",
			},
		},
		justifyContent: {
			center: {
				justifyContent: "center",
			},
			flexStart: {
				justifyContent: "flex-start",
			},
			flexEnd: {
				justifyContent: "flex-end",
			},
			spaceBetween: {
				justifyContent: "space-between",
			},
			spaceAround: {
				justifyContent: "space-around",
			},
		},
		alignItems: {
			center: {
				alignItems: "center",
			},
			start: {
				alignItems: "start",
			},
			end: {
				alignItems: "end",
			},
		},
		flexDirection: {
			row: { flexDirection: "row" },
		},
	},
});

export default Card;
