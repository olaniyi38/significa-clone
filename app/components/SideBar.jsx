import React from "react";
import Footer from "./Footer";

const SideBar = ({ isActive }) => {
	return (
		<div className={`sidebar ${isActive ? "active" : ""}`}>
			<Footer />
		</div>
	);
};

export default SideBar;
