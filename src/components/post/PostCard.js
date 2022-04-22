import { styled } from "../../styles/stitches.config";
import Card from "../elements/Card";

const PostCard = styled(Card, {
	padding: "2rem 1.6rem",
	boxShadow: " 0 0 10px 0 rgba(0,0,0,0.1)",
	"& .content": {
		"&:first-letter": {
			textTransform: "capitalize",
		},
		color: "$gray53",
		fontSize: "$s",
		lineHeight: "19px",
	},
});

export default PostCard;
