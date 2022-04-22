import React, { useReducer } from "react";
import axios from "axios";
import PostsReducer from "./postsReducer";
import PostsContext from "./postsContext";
import {
	GET_POSTS,
	POSTS_ERROR,
	GET_MORE_POSTS,
	MORE_POSTS_ERROR,
	CREATE_POST,
	CREATE_POST_ERROR,
	GET_CATEGORIES,
	CATEGORIES_ERROR,
} from "./actionTypes";

import { setAuthToken } from "../../services/axios.config";

const PostsState = (props) => {
	const initialState = {
		posts: [],
		loading: true,
		error: null,
	};

	const [state, dispatch] = useReducer(PostsReducer, initialState);

	setAuthToken();

	// Get Posts
	const getPosts = async (currentPage, resultsPerPage) => {
		const PAGE = currentPage || 1;
		const RESULTS_PER_PAGE = resultsPerPage || 4;

		let config = {
			method: "GET",
			url: `https://frontend-case-api.sbdev.nl/api/posts?perPage=${RESULTS_PER_PAGE}&page=${PAGE}`,
		};
		try {
			const res = await axios(config);
			dispatch({
				type: GET_POSTS,
				payload: res.data,
			});
		} catch (err) {
			dispatch({
				type: POSTS_ERROR,
				payload: err,
			});
		}
	};

	// Get more posts
	// it fetches and adds posts to the array of posts
	const getMorePosts = async (currentPage, resultsPerPage) => {
		const PAGE = currentPage || 1;
		const RESULTS_PER_PAGE = resultsPerPage || 4;

		let config = {
			method: "GET",
			url: `https://frontend-case-api.sbdev.nl/api/posts?perPage=${RESULTS_PER_PAGE}&page=${PAGE}`,
		};
		try {
			const res = await axios(config);
			dispatch({
				type: GET_MORE_POSTS,
				payload: res.data,
			});
		} catch (err) {
			dispatch({
				type: MORE_POSTS_ERROR,
				payload: err,
			});
		}
	};
	// Create post
	const createPost = async (formData) => {
		let config = {
			method: "POST",
			url: "https://frontend-case-api.sbdev.nl/api/posts",
			data: formData,
		};

		try {
			const res = await axios(config);
			dispatch({
				type: CREATE_POST,
				payload: res.data,
			});
		} catch (err) {
			dispatch({
				type: CREATE_POST_ERROR,
				payload: err,
			});
		}
	};

	// Get categories
	const getCategories = async () => {
		let config = {
			method: "GET",
			url: "https://frontend-case-api.sbdev.nl/api/categories",
		};
		try {
			const res = await axios(config);
			dispatch({
				type: GET_CATEGORIES,
				payload: res.data,
			});
		} catch (err) {
			dispatch({
				type: CATEGORIES_ERROR,
				payload: err,
			});
		}
	};

	return (
		<PostsContext.Provider
			value={{
				posts: state.posts,
				categories: state.categories,
				error: state.error,
				loading: state.loading,
				success: state.success,
				totalPosts: state.totalPosts,
				getPosts,
				getMorePosts,
				getCategories,
				createPost,
			}}
		>
			{props.children}
		</PostsContext.Provider>
	);
};

export default PostsState;
