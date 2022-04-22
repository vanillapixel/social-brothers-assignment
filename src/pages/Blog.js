import { useEffect, useState, useContext } from "react";

import postsContext from "../context/posts/postsContext";

import Posts from "../components/Posts";
import Card from "../components/elements/Card";

import Pagination from "../components/pagination/Pagination";

const POSTS_TO_SHOW = 8;

const Blog = () => {
	const { posts, getPosts, totalPosts, loading } = useContext(postsContext);
	const [currentPage, setCurrentPage] = useState(1);

	useEffect(() => {
		getPosts(currentPage, POSTS_TO_SHOW);
	}, [currentPage]);

	return (
		<>
			<Card alignItems="center" justifyContent={"center"}>
				<Posts isLoadingPosts={loading} columns={4} posts={posts} />

				<Pagination
					totalPages={Math.ceil(totalPosts / POSTS_TO_SHOW)}
					setCurrentPage={setCurrentPage}
					currentPage={currentPage}
				/>
			</Card>
		</>
	);
};

export default Blog;
