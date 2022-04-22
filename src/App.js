import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Layout from "./components/Layout";
import Home from "./pages/Home";
import Blog from "./pages/Blog";

import { globalStyle } from "./styles/stitches.config";
import PostsState from "./context/posts/postsState";

function App() {
	globalStyle();
	return (
		<Router>
			<PostsState>
				<Layout>
					<Routes>
						<Route exact path="/" element={<Home />} />
						<Route exact path="/blog" element={<Blog />} />
					</Routes>
				</Layout>
			</PostsState>
		</Router>
	);
}

export default App;
