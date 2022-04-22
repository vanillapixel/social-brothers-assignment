import axios from "axios";

export const setAuthToken = () => {
	axios.defaults.headers["token"] = process.env.REACT_APP_API_TOKEN;
};
