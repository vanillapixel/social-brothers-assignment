import { styled } from "../../styles/stitches.config";

const HeaderWrapper = styled("header", {
	aspectRatio: 4.1,
	maxHeight: "250px",
	"& .headerImage": {
		filter: "brightness(0.6)",
		zIndex: -1,
		position: "absolute",
		top: 0,
		left: 0,
		bottom: 0,
		right: 0,
	},
	"& img": {
		width: "100%",
	},
	"& nav": {
		display: "flex",
		alignItems: "center",
		padding: "2.4rem 4.3rem",
		justifyContent: "space-between",
		"& .logoContainer": {
			display: "flex",
			flex: "0 0 32%",
		},
		"& img": {
			width: "100%",
		},
		"& ul": {
			display: "flex",
			gap: "3rem",
			"& li": {
				"& a": {
					color: "$white100",
					transition: "color .3s",
					fontSize: "$m",
					"@mobile": {
						fontSize: "$s",
					},
				},
				"& .active": {
					borderBottom: "2px solid $orangeFlame800",
				},

				"&:hover": {
					color: "$orangeFlame800",
				},
			},
		},
	},
});

export default HeaderWrapper;
