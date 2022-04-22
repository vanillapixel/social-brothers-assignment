import PostDetails from "./PostDetails";
import PostImage from "./PostImage";
import PostImageMask from "./PostImageMask";
import Text from "../elements/Text";

const PostHeader = ({ date, category, id, img }) => {
	return (
		<div
			style={{
				width: "100%",
				aspectRatio: 2.7,
			}}
		>
			<PostImageMask />
			<PostImage src={`/images/mask-${(id % 4) + 1}.png`} alt="" />
			<PostDetails style={{ zIndex: 3 }}>
				<Text type="detailText">{date}</Text>
				<Text type="detailText">{category.name}</Text>
			</PostDetails>
		</div>
	);
};

export default PostHeader;
