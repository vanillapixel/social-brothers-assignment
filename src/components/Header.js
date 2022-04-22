import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import HeaderWrapper from "./elements/HeaderWrapper";
import Text from "./elements/Text";

const Header = () => {
	const location = useLocation();
	const pageTitle = location.pathname.split("/")[1];
	return (
		<HeaderWrapper style={{ aspectRatio: 4.1, maxHeight: "250px" }}>
			<div className="headerImage">
				<img
					style={{ width: "100%" }}
					layout="fill"
					src="/images/header-background.jpg"
					alt="social brothers header background"
				/>
			</div>
			<Text type="pageTitle">{pageTitle}</Text>
			<nav>
				<div className="logoContainer">
					<img src="/sb-logo.svg" alt="Social Brothers logo" />
				</div>
				<ul>
					<li>
						<NavLink to={"/"}>Home</NavLink>
					</li>
					<li>
						<NavLink to={"/blog"}>Blog</NavLink>
					</li>
				</ul>
			</nav>
		</HeaderWrapper>
	);
};

export default Header;
