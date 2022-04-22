import { styled } from "../../styles/stitches.config";

const FormSegment = styled("div", {
	display: "flex",
	flexDirection: "column",
	gap: "clamp($s, 7px, 10px)",
	variant: {
		imageInput: {
			"& input": {
				display: "none",
			},
		},
	},
});

export default FormSegment;
