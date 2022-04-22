import { useState, useEffect, useContext } from "react";

import { Button, Card, Grid, Text } from "../components/elements";
import BlogForm from "../components/BlogForm";
import Posts from "../components/Posts";

import postsContext from "../context/posts/postsContext";

const POSTS_TO_SHOW = 4;

export default function Home() {
	const [currentPage, setCurrentPage] = useState(1);

	const { posts, getPosts, getMorePosts, loading } = useContext(postsContext);

	useEffect(() => {
		if (currentPage === 1) {
			getPosts(currentPage, POSTS_TO_SHOW);
			return;
		}
		getMorePosts(currentPage);
	}, [currentPage]);

	return (
		<>
			<Grid homeContainer>
				<div>
					<Card style={{ position: "sticky", top: "5rem" }}>
						<Text type="title">plaats een blog bericht</Text>
						<BlogForm />
					</Card>
				</div>
				<Card>
					<Posts isLoadingPosts={loading} columns={2} posts={posts} />
					<Button cta primary onClick={() => setCurrentPage(currentPage + 1)}>
						Meer laden
					</Button>
				</Card>
			</Grid>
		</>
	);
}
