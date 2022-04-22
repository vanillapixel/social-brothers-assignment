import Text from "../elements/Text";

const PostHeader = ({ title, content }) => {
	return (
		<div
			style={{
				display: "flex",
				flexDirection: "column",
				gap: "1.6rem",
				padding: "2rem 1.6rem",
				lineHeight: "19px",
			}}
		>
			<Text style={{ overflowWrap: "anywhere" }} type="title">
				{title}
			</Text>
			<Text
				className="postBody"
				color="light"
				style={{ overflowWrap: "anywhere" }}
			>
				{content} lorem ipsum dolor sit amet consectetur, adipisicing elit.
				Ratione odit reprehenderit at sapiente possimus magni aliquam maxime ex
				quod.
			</Text>
		</div>
	);
};

export default PostHeader;
