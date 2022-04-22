import Grid from "./elements/Grid";
import Post from "./post/Post";
import Loader from "./elements/Loader";

const Posts = ({ posts = [], columns, isLoadingPosts }) => {
	return (
		<>
			{/* {error && <p>{error}</p>} */}
			{posts.length > 0 && !isLoadingPosts && (
				<Grid columns={columns}>
					{posts.map((post) => {
						return (
							<Post padding="none" gap="none" key={post.id} post={post}></Post>
						);
					})}
				</Grid>
			)}
			{isLoadingPosts && <Loader />}
		</>
	);
};

export default Posts;
