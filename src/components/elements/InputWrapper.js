import { styled } from "../../styles/stitches.config";

const InputWrapper = styled("div", {
	display: "flex",
	backgroundColor: "$white98",
	width: "100%",
	padding: "0 $m ",
	"& input": {
		fontSize: "$s",
		padding: "$m 0",
	},
	"& input::placeholder": {
		fontStyle: "italic",
		color: "$gray77",
	},
	"& textarea": {
		fontSize: "$s",
		padding: "$m 0",
		minHeight: "20rem",
		maxWidth: "400px",
	},
	"& textarea::placeholder": {
		fontStyle: "italic",
		color: "$gray77",
	},
	"& select": {
		padding: "$m 0",
		fontSize: "$s",
		cursor: "pointer",
		border: "1px solid $white98",
		"&:focus-within option": {
			color: "$gray15 !important",
		},
		"& option:disabled": {
			color: "$gray77 !important",
		},
	},
	"& .fileUploadWrapper": {
		display: "flex",
		justifyContent: "space-between",
		alignItems: "center",
		cursor: "pointer",
		padding: "$m 0",
		gap: "1.6rem",
	},
});

export default InputWrapper;
