import { styled } from "../../styles/stitches.config";

const FooterWrapper = styled("footer", {
	display: "flex",
	flexDirection: "row",
	justifyContent: "center",
	gap: "5px",
	padding: "8px 0",
	color: "$white100",
	backgroundColor: "$gray15",
	"& p": {
		fontSize: "$s",
		fontFamily: "Proxima Nova Thin",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		lineHeight: 1,
	},
});

export default FooterWrapper;
