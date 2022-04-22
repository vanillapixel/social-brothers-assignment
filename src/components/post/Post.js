import PostCard from "./PostCard";

import PostHeader from "./PostHeader";
import PostBody from "./PostBody";

const Post = ({ post }) => {
	const { title, created_at, content, category, img_url, id } = post;
	let date = new Date(created_at)
		.toLocaleDateString("en-US")
		.replaceAll("/", "-");

	return (
		<PostCard gap="none" padding="none" key={id}>
			<PostHeader date={date} category={category} id={id} img={img_url} />
			<PostBody title={title} content={content} />
		</PostCard>
	);
};

export default Post;
