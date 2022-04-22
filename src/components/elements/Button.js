import { styled, keyframes } from "../../styles/stitches.config";

const rotate = keyframes({
	0: { transform: "rotate(0deg)" },
	"100%": { transform: "rotate(360deg)" },
});

const Button = styled("button", {
	display: "flex",
	borderRadius: "18px",
	whiteSpace: "nowrap",
	cursor: "pointer",
	border: 0,
	transition: "0.3s",
	justifyContent: "center",
	alignItems: "center",
	alignSelf: "center",
	fontSize: "$s",
	userSelect: "none",
	color: "$gray15",
	variants: {
		primary: {
			true: {
				backgroundColor: "$orangeFlame800",
				color: "$white100",
				"&:hover": {
					backgroundColor: "$orangeFlame900",
				},
			},
		},
		secondary: {
			true: {
				backgroundColor: "$gray49",
				color: "$white100",
				"&:hover": {
					backgroundColor: "$orangeFlame900",
				},
			},
		},
		cta: {
			true: {
				padding: "$s $xl",
			},
		},
		size: {
			compact: {
				fontSize: "$xs",
				fontFamily: "Proxima Nova Thin",
				padding: "$xs $m",
			},
		},

		icon: {
			true: {
				stroke: "$gray25",
				padding: "$s",
				backgroundColor: "transparent",
				borderRadius: "50%",
				aspectRatio: 1,
				"@mobile": {
					padding: "$s",
				},
				"&:hover": {
					backgroundColor: "transparent",
					stroke: "$orangeFlame800",
					color: "$orangeFlame800",
				},
			},
		},
		isActive: {
			true: {
				backgroundColor: "$white96",
				transform: "scale(1.2)",
				fontWeight: "bold",
				color: "$gray15",
				"&:hover": {
					color: "$gray15",
					backgroundColor: "$white96",
					transform: "scale(1.2)",
					fontWeight: "bold",
				},
			},
		},
		disabled: {
			true: {
				backgroundColor: "$white100",
				color: "$gray17",
				opacity: ".3",
				cursor: "default",
				"&:hover": {
					backgroundColor: "$white100",
					color: "$gray17",
					stroke: "$gray17",
				},
			},
		},
		success: {
			true: {
				backgroundColor: "green",
				color: "$white100",
				opacity: 0.7,
				"&:hover": {
					color: "$white100",
					backgroundColor: "green",
				},
				"&:disabled": {
					backgroundColor: "green",
					color: "$white100",
				},
			},
		},
		loader: {
			true: {
				gap: "1rem",
				fill: "transparent",
				color: "$gray25",
				padding: "$xs",
				margin: "$xs",
				backgroundColor: "transparent",
				stroke: "$transparent",
				"&:hover": {
					backgroundColor: "transparent",
					fill: "transparent",
					color: "$gray25",
				},
				svg: {
					animation: `${rotate} 1s infinite`,
				},
				path: {
					fill: "$orangeFlame800",
				},
			},
		},
	},
});

export default Button;
