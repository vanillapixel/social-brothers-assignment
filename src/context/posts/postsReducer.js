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

const initialState = {
	posts: [],
	totalPosts: null,
	loading: true,
	error: {},
};

const PostsReducer = (state = initialState, action) => {
	const { type, payload } = action;
	state.loading = true;
	switch (type) {
		case GET_POSTS:
			return {
				...state,
				posts: payload.data,
				totalPosts: payload.total,
				loading: false,
				error: null,
			};
		case POSTS_ERROR:
			return {
				...state,
				error: payload,
				loading: false,
			};
		case GET_MORE_POSTS:
			return {
				...state,
				posts: [...state.posts, ...payload.data],
				loading: false,
				error: null,
			};
		case MORE_POSTS_ERROR:
			return {
				...state,
				error: payload,
				loading: false,
			};
		case CREATE_POST:
			return {
				...state,
				posts: [payload, ...state.posts],
				totalPosts: payload.total + 1,
				loading: false,
				success: true,
				error: null,
			};
		case CREATE_POST_ERROR:
			return {
				...state,
				error: payload,
				loading: false,
			};
		case GET_CATEGORIES:
			return {
				...state,
				categories: payload,
			};
		case CATEGORIES_ERROR:
			return {
				...state,
				error: payload,
			};
		default:
			return state;
	}
};

export default PostsReducer;
